const express = require('express');
const cors = require('cors'); // <--- 1. Importar cors
const apiRoutes = require('./routes/api');

const app = express();

app.use(cors()); // <--- 2. Activar cors antes de las rutas
app.use(express.json());

app.use('/api', apiRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor Proyecto C.E.R.O. corriendo en http://localhost:${PORT}`);
});