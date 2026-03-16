const express = require('express');
const router = express.Router();
const db = require('../config/db');
const bcrypt = require('bcrypt');


// RUTA PARA ELIMINAR USUARIOS (Añadir al final de api.js)
router.delete('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Validamos primero que el usuario no sea admin
        const [usuario] = await db.query("SELECT rol FROM usuarios WHERE id = ?", [id]);
        
        if (usuario.length > 0 && usuario[0].rol === 'admin') {
            return res.status(403).json({ success: false, message: "Protección de seguridad: No se pueden eliminar administradores." });
        }

        await db.query("DELETE FROM usuarios WHERE id = ?", [id]);
        res.json({ success: true, message: "Usuario eliminado correctamente." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error al intentar eliminar." });
    }
});

// Ruta para carga masiva de estudiantes
router.post('/estudiantes/carga-masiva', async (req, res) => {
    const { estudiantes, colegio_id } = req.body;

    if (!estudiantes || !colegio_id || estudiantes.length === 0) {
        return res.status(400).json({ success: false, message: "Faltan datos." });
    }

    try {
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash('Cero2026*', saltRounds);
        
        const errores = [];
        const insertados = [];

        // Procesamos uno por uno para detectar errores específicos
        for (const est of estudiantes) {
            try {
                const query = `
                    INSERT INTO usuarios (nombre, correo, password, rol, grado, grupo, colegio_id, must_change_password) 
                    VALUES (?, ?, ?, 'estudiante', ?, ?, ?, ?)
                `;
                await db.query(query, [
                    est.nombre, 
                    est.correo.toLowerCase().trim(), 
                    passwordHash, 
                    est.grado || null, 
                    est.grupo || null, 
                    colegio_id,
                    1
                ]);
                insertados.push(est.correo);
            } catch (err) {
                // Si el error es por duplicado (ER_DUP_ENTRY en MySQL)
                if (err.code === 'ER_DUP_ENTRY') {
                    errores.push(`${est.correo} (Ya existe en el sistema)`);
                } else {
                    errores.push(`${est.correo} (Error técnico: ${err.message})`);
                }
            }
        }

        if (errores.length > 0 && insertados.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No se pudo registrar a nadie. Verifique los correos.",
                detalles: errores
            });
        }

        res.json({ 
            success: true, 
            message: `Proceso terminado. Registrados: ${insertados.length}.`,
            errores: errores // Le enviamos la lista de fallidos al Frontend
        });

    } catch (error) {
        console.error("Error general en carga masiva:", error);
        res.status(500).json({ success: false, message: "Error interno del servidor." });
    }
});



// ==========================================
// --- RUTAS DE COLEGIOS ---
// ==========================================

router.post('/colegios/registro', async (req, res) => {
    const { nit, nombre, password, ubicacion, rector, sector } = req.body;
    
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // 1. Insertar en la tabla 'colegios'
        const queryColegio = "INSERT INTO colegios (nit, nombre, password, ubicacion, rector, sector) VALUES (?, ?, ?, ?, ?, ?)";
        const [resultColegio] = await db.query(queryColegio, [nit, nombre, hashedPassword, ubicacion, rector, sector]);
        
        const nuevoColegioId = resultColegio.insertId;

        // 2. Insertar automáticamente al Rector como administrador en 'usuarios'
        // IMPORTANTE: Usamos el NIT como correo para que sea su usuario de login
        const queryRector = `
            INSERT INTO usuarios (nombre, correo, password, rol, colegio_id) 
            VALUES (?, ?, ?, 'admin', ?)
        `;
        
        await db.query(queryRector, [rector, nit, hashedPassword, nuevoColegioId]);
        
        res.json({ 
            success: true, 
            message: "Colegio y Rector registrados con éxito. Inicie sesión con su NIT." 
        });

    } catch (error) {
        console.error("Error detallado en registro:", error);
        res.status(500).json({ 
            success: false, 
            message: "Error al registrar: " + (error.sqlMessage || error.message) 
        });
    }
});

// Inicio de sesión (PUNTO 3: Con JOIN para traer nombre del colegio)
router.post('/login', async (req, res) => {
    try {
        const { correo, password } = req.body;
        
        // Usamos 'c.nombre' porque así se llama la columna en tu tabla colegios
        const query = `
            SELECT u.*, c.nombre AS nombre_colegio 
            FROM usuarios u 
            LEFT JOIN colegios c ON u.colegio_id = c.id 
            WHERE u.correo = ?
        `;
        const [users] = await db.query(query, [correo]);

        if (users.length > 0) {
            // Comparamos la clave ingresada con la encriptada de la DB
            const coincide = await bcrypt.compare(password, users[0].password);
            
            if (coincide) {
                return res.json({ 
                    success: true, 
                    user: { 
                        id: users[0].id, 
                        nombre: users[0].nombre, 
                        rol: users[0].rol,
                        colegio_id: users[0].colegio_id,
                        nombre_colegio: users[0].nombre_colegio,
                        mustChangePassword: users[0].must_change_password === 1
                    } 
                });
            }
        }
        res.status(401).json({ success: false, message: "Correo o contraseña incorrectos" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// ==========================================
// --- RUTAS DE REPORTES ---
// ==========================================


// Obtener reportes filtrados por el colegio del usuario logueado
router.get('/estadisticas/:colegio_id', async (req, res) => {
    try {
        const { colegio_id } = req.params;
        const { usuario_id, rol } = req.query; // Recibimos quién pregunta

        let query = "";
        let params = [];

        if (rol === 'admin') {
            // El admin ve TODO lo de su colegio
            query = `
                SELECT r.*, u.nombre as autor 
                FROM reportes r 
                INNER JOIN usuarios u ON r.usuario_id = u.id 
                WHERE u.colegio_id = ?
                ORDER BY r.fecha DESC
            `;
            params = [colegio_id];
        } else {
            // El estudiante SOLO ve sus propios reportes dentro de su colegio
            query = `
                SELECT r.*, u.nombre as autor 
                FROM reportes r 
                INNER JOIN usuarios u ON r.usuario_id = u.id 
                WHERE u.colegio_id = ? AND r.usuario_id = ?
                ORDER BY r.fecha DESC
            `;
            params = [colegio_id, usuario_id];
        }

        const [rows] = await db.query(query, params);
        res.json(rows);
    } catch (error) {
        console.error("Error al obtener reportes:", error);
        res.status(500).json({ error: error.message });
    }
});


router.post('/reportes', async (req, res) => {
    const { tipo, descripcion, ubicacion, usuario_id, colegio_id } = req.body;

    // Validación de seguridad
    if (!usuario_id || !colegio_id) {
        return res.status(400).json({ 
            success: false, 
            message: "Faltan datos de identificación del usuario o colegio." 
        });
    }

    try {
        const query = `
            INSERT INTO reportes (tipo, descripcion, ubicacion, usuario_id, colegio_id, estado, fecha) 
            VALUES (?, ?, ?, ?, ?, 'nuevo', NOW())
        `;
        
        await db.query(query, [tipo, descripcion, ubicacion, usuario_id, colegio_id]);
        
        res.json({ success: true, message: "Reporte guardado correctamente" });
    } catch (error) {
        console.error("Error al guardar reporte:", error);
        res.status(500).json({ success: false, message: "Error interno en el servidor" });
    }
});

router.put('/reportes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body; 
        await db.query("UPDATE reportes SET estado = ? WHERE id = ?", [estado, id]);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ==========================================
// --- GESTIÓN DE USUARIOS ---
// ==========================================



router.put('/usuarios/rol/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nuevoRol } = req.body;
        await db.query("UPDATE usuarios SET rol = ? WHERE id = ?", [nuevoRol, id]);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Ruta para obtener usuarios filtrados por colegio
router.get('/usuarios/:colegio_id', async (req, res) => {
    const { colegio_id } = req.params;
    try {
        // Filtramos para que solo traiga usuarios del colegio actual
        const [rows] = await db.query(
            'SELECT id, nombre, correo, rol, grado, grupo FROM usuarios WHERE colegio_id = ?', 
            [colegio_id]
        );
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener usuarios");
    }
});

// NUEVO: Ruta para que el estudiante actualice su clave obligatoria
router.put('/usuarios/password/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nuevaPassword } = req.body;
        const saltRounds = 10;

        // Encriptamos la nueva contraseña elegida por el estudiante
        const hashedPassword = await bcrypt.hash(nuevaPassword, saltRounds);

        // Actualizamos la clave y quitamos la marca de "must_change_password"
        const query = `
            UPDATE usuarios 
            SET password = ?, must_change_password = 0 
            WHERE id = ?
        `;
        
        await db.query(query, [hashedPassword, id]);

        res.json({ success: true, message: "Contraseña actualizada correctamente." });
    } catch (error) {
        console.error("Error al actualizar password:", error);
        res.status(500).json({ success: false, message: "Error interno del servidor." });
    }
});

module.exports = router;