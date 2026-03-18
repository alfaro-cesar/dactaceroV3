<template>
  <div id="app" class="app-ultra font-sans antialiased min-h-screen">
    <div v-if="ventana === 'inicio'" class="min-h-screen bg-white">
      <nav
        class="nav-ultra flex justify-between items-center p-6 max-w-7xl mx-auto"
      >
        <!-- LOGO -->

        <div class="flex items-center gap-3">
          <div class="logo-box">C</div>

          <span class="logo-text"> PROYECTO C.E.R.O. </span>
        </div>

        <!-- BOTONES -->

        <div class="flex gap-4">
          <button @click="ventana = 'login'" class="btn-login">Entrar</button>

          <button @click="ventana = 'registroColegio'" class="btn-registro">
            Registrar Colegio
          </button>
        </div>
      </nav>

      <!-- CARRUSEL BULLYING -->
      <section class="carruselCero">
        <div class="carrusel-container">
          <div
            class="carrusel-slide"
            :style="{ transform: 'translateX(-' + indexCarrusel * 100 + '%)' }"
          >
            <div class="slide">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
              />
              <div class="texto">
                <h2>Detener el Bullying es tarea de todos</h2>
                <p>Proyecto C.E.R.O protege la convivencia escolar.</p>
              </div>
            </div>

            <div class="slide">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350"
              />
              <div class="texto">
                <h2>Reporta situaciones de acoso</h2>
                <p>Tu voz puede cambiar una vida y mas.</p>
              </div>
            </div>

            <div class="slide">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              />
              <div class="texto">
                <h2>Convivencia Escolar</h2>
                <p>Construyamos colegios seguros.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="dots">
          <span
            v-for="(item, i) in 3"
            :key="i"
            @click="indexCarrusel = i"
            :class="{ activo: indexCarrusel === i }"
          ></span>
        </div>
      </section>
      <br /><br />

      <header class="header-ultra py-28 px-6 text-center max-w-4xl mx-auto">
        <h1 class="titulo-ultra">Convivencia y Respeto Escolar</h1>

        <p class="texto-ultra">
          Una herramienta diseñada para la gestión moderna del clima
          institucional, alineada con los estándares de protección y bienestar
          estudiantil.
        </p>

        <div class="flex justify-center gap-4">
          <a href="#ley1620" class="btn-ultra"> Saber más </a>
        </div>
      </header>
      <br /><br />

      <section id="ley1620" class="ley-section py-28 px-6">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <!-- TEXTO -->

            <div>
              <span class="ley-tag"> Marco Legal Colombiano </span>

              <h2 class="ley-title">Ley 1620 de 2013</h2>

              <p class="ley-text">
                Esta ley crea el <b>Sistema Nacional de Convivencia Escolar</b>,
                cuyo objetivo es promover, orientar y fortalecer la convivencia,
                la educación para el ejercicio de los derechos humanos, sexuales
                y reproductivos, y la mitigación de la violencia escolar.
              </p>

              <ul class="space-y-4">
                <li class="ley-list">
                  <span class="check">✓</span>
                  Prevención del acoso escolar (Bullying).
                </li>

                <li class="ley-list">
                  <span class="check">✓</span>
                  Ruta de Atención Integral.
                </li>

                <li class="ley-list">
                  <span class="check">✓</span>
                  Promoción de entornos seguros.
                </li>
              </ul>
            </div>

            <!-- TARJETAS -->

            <div class="grid grid-cols-1 gap-6">
              <div class="card-ley">
                <h4>¿Qué es el Bullying?</h4>

                <p>
                  Es una forma de conducta agresiva, intencionada y repetida,
                  que ocurre sin motivación evidente, adoptada por uno o más
                  estudiantes contra otro u otros.
                </p>
              </div>

              <div class="card-ley">
                <h4>¿Qué es el Ciberbullying?</h4>

                <p>
                  Acoso que ocurre a través de medios digitales como redes
                  sociales, mensajes o plataformas de juegos, buscando
                  atemorizar o humillar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /><br />

      <section class="py-24 px-6 max-w-6xl mx-auto relative">
        <h3 class="titulo-saas">Clasificación de Situaciones</h3>

        <div class="grid md:grid-cols-3 gap-10">
          <!-- TIPO 1 -->

          <div class="card-saas tipo1">
            <div class="numero">I</div>

            <h4>Situación Tipo I</h4>

            <p class="sub">Conflictos esporádicos.</p>

            <p class="desc">
              Discusiones o malentendidos que no afectan la integridad física ni
              mental de forma sistemática.
            </p>
          </div>

          <!-- TIPO 2 -->

          <div class="card-saas tipo2">
            <div class="numero">II</div>

            <h4>Situación Tipo II</h4>

            <p class="sub">Acoso o Ciberacoso.</p>

            <p class="desc">
              Situaciones de agresión repetitivas que no revisten
              características de delito pero afectan el clima escolar.
            </p>
          </div>

          <!-- TIPO 3 -->

          <div class="card-saas tipo3">
            <div class="numero">III</div>

            <h4>Situación Tipo III</h4>

            <p class="sub">Presunto Delito.</p>

            <p class="desc">
              Agresiones que por su gravedad pueden ser constitutivas de delitos
              penales o infracciones a la ley.
            </p>
          </div>
        </div>
      </section>
      <br />

      <section
        class="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-black text-white"
      >
        <div class="max-w-7xl mx-auto px-6">
          <h2
            class="text-5xl font-black text-center mb-16 uppercase tracking-widest"
          >
            Ley 1620 de 2013
          </h2>

          <p class="text-center max-w-3xl mx-auto text-lg text-blue-200 mb-16">
            La Ley 1620 crea el Sistema Nacional de Convivencia Escolar en
            Colombia para prevenir el bullying, proteger a los estudiantes y
            promover ambientes educativos seguros.
          </p>

          <!-- TARJETAS CON IMAGEN -->

          <div class="grid md:grid-cols-3 gap-10 mb-20">
            <div class="card-ley">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350"
                class="img-card"
              />
              <h3>Prevención del Bullying</h3>
              <p>
                Promueve estrategias educativas para evitar el acoso escolar y
                fortalecer la convivencia entre estudiantes.
              </p>
            </div>

            <div class="card-ley">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                class="img-card"
              />
              <h3>Derechos de los estudiantes</h3>
              <p>
                Garantiza el respeto a los derechos humanos, sexuales y
                reproductivos de los estudiantes.
              </p>
            </div>

            <div class="card-ley">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
                class="img-card"
              />
              <h3>Ruta de atención</h3>
              <p>
                Establece procedimientos para atender situaciones de violencia
                escolar dentro de los colegios.
              </p>
            </div>
          </div>

          <!-- VIDEOS EDUCATIVOS -->

          <h3 class="text-3xl font-black text-center mb-12 uppercase">
            Comprende el Bullying
          </h3>
        </div>
      </section>
      <br />
      <section class="ley-container">
        <h2 class="titulo">Aspectos Clave de la Ley 1620 de 2013</h2>

        <p class="descripcion">
          La Ley 1620 establece el Sistema Nacional de Convivencia Escolar para
          prevenir la violencia escolar y promover ambientes seguros en las
          instituciones educativas.
        </p>

        <div class="grid">
          <div class="card">
            <h3>🏫 Sistema de Convivencia Escolar</h3>
            <p>
              La ley crea un sistema que involucra colegios, familias y el
              Estado para garantizar el respeto de los derechos humanos y
              prevenir el bullying dentro de las instituciones educativas.
            </p>
          </div>

          <div class="card">
            <h3>👩‍🏫 Comité de Convivencia</h3>
            <p>
              Cada colegio debe tener un comité encargado de analizar, prevenir
              y atender los casos de violencia escolar entre estudiantes.
            </p>
          </div>

          <div class="card">
            <h3>🚨 Ruta de Atención</h3>
            <p>
              Los colegios deben seguir una ruta de atención para identificar,
              reportar y solucionar los casos de bullying de forma rápida y
              efectiva.
            </p>
          </div>

          <div class="card">
            <h3>🧠 Prevención del Bullying</h3>
            <p>
              La ley busca promover la educación en valores, la resolución
              pacífica de conflictos y el respeto entre estudiantes.
            </p>
          </div>

          <div class="card">
            <h3>👨‍👩‍👧 Participación de la Familia</h3>
            <p>
              Los padres y acudientes deben participar activamente en los
              procesos de convivencia escolar y en la prevención del acoso
              escolar.
            </p>
          </div>

          <div class="card">
            <h3>⚖️ Protección de los Estudiantes</h3>
            <p>
              La ley protege a los estudiantes víctimas de violencia escolar y
              garantiza mecanismos para su atención y acompañamiento.
            </p>
          </div>
        </div>
      </section>

      <div v-if="mostrarFormulario" class="formulario-panico">

<h2>🚨 Reportar Bullying</h2>

<form @submit.prevent="enviarReporte">

<input v-model="form.nombre" placeholder="Tu nombre (opcional)" />

<input v-model="form.colegio" placeholder="Colegio" required />

<textarea
v-model="form.descripcion"
placeholder="Describe lo que está pasando"
required
></textarea>

<button type="submit">
Enviar Reporte
</button>

</form>

</div>
      <div class="panic-container">
        <button class="panic-btn" @click="activarPanico">
          🚨 BOTÓN DE PÁNICO
        </button>
      </div>

      <button class="btn-panico" @click="abrirFormulario">
🚨 BOTÓN DE PÁNICO
</button>

      <footer class="py-10 text-center border-t border-gray-100">
        <p class="text-gray-400 font-bold text-sm uppercase">
          © 2026 Proyecto C.E.R.O. - Puerto Tejada, Cauca
        </p>
      </footer>
    </div>

    <div
      v-else-if="cargando"
      class="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-blue-900/90 backdrop-blur-sm animate-fade-in"
    >
      <div
        class="w-24 h-24 border-8 border-blue-200 border-t-yellow-400 rounded-full animate-spin"
      ></div>
      <p
        class="mt-6 text-white font-black text-xl uppercase tracking-widest animate-pulse"
      >
        Procesando...
      </p>
    </div>

    <div
      v-else-if="ventana === 'login'"
      class="min-h-screen flex items-center justify-center p-4 bg-gray-100"
    >
      <div
        class="bg-white p-12 rounded-[3rem] shadow-xl w-full max-w-md border border-gray-100 text-center animate-fade-in"
      >
        <h2 class="text-3xl font-black text-blue-900 mb-8 uppercase">
          Acceso C.E.R.O.
        </h2>
        <form @submit.prevent="iniciarSesion" class="space-y-6">
          <input
            v-model="formAuth.correo"
            type="text"
            placeholder="Correo o NIT"
            class="w-full p-5 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600"
            required
          />
          <input
            v-model="formAuth.password"
            type="password"
            placeholder="Contraseña"
            class="w-full p-5 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600"
            required
          />
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all uppercase shadow-lg"
          >
            Ingresar
          </button>
          <button
            @click="ventana = 'inicio'"
            type="button"
            class="w-full mt-4 text-gray-400 font-bold text-xs uppercase"
          >
            ← Volver
          </button>
        </form>
      </div>
    </div>

    <div
      v-else-if="ventana === 'registroColegio'"
      class="min-h-screen flex items-center justify-center p-4 bg-blue-50"
    >
      <div
        class="bg-white p-10 rounded-[3rem] shadow-xl w-full max-w-md border border-blue-100 text-center animate-fade-in"
      >
        <h2 class="text-3xl font-black text-blue-900 mb-2 uppercase">
          Registro Institucional
        </h2>
        <p class="text-gray-500 mb-8 font-medium italic">
          Configura la plataforma para tu institución
        </p>
        <form @submit.prevent="registrarColegio" class="space-y-4">
          <input
            v-model="formColegio.nombre"
            type="text"
            placeholder="Nombre de la Institución"
            class="w-full p-5 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600"
            required
          />
          <input
            v-model="formColegio.rector"
            type="text"
            placeholder="Nombre del Rector(a)"
            class="w-full p-5 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600"
            required
          />
          <input
            v-model="formColegio.nit"
            type="text"
            placeholder="NIT / Identificación"
            class="w-full p-5 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600"
            required
          />
          <input
            v-model="formColegio.ciudad"
            type="text"
            placeholder="Ciudad"
            class="w-full p-5 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600"
            required
          />
          <input
            v-model="formColegio.password"
            type="password"
            placeholder="Contraseña de Administrador"
            class="w-full p-5 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600"
            required
          />
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all uppercase shadow-lg"
          >
            Crear Cuenta
          </button>
          <button
            @click="ventana = 'inicio'"
            type="button"
            class="w-full mt-4 text-gray-400 font-bold text-xs uppercase"
          >
            ← Cancelar
          </button>
        </form>
      </div>
    </div>

    <div
      v-else-if="ventana === 'cambiarPassword'"
      class="min-h-screen flex items-center justify-center p-4 bg-blue-50"
    >
      <div
        class="bg-white p-12 rounded-[3rem] shadow-xl w-full max-w-md border border-blue-100 text-center animate-fade-in"
      >
        <div
          class="bg-orange-100 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h2 class="text-2xl font-black text-blue-900 mb-2 uppercase">
          Seguridad Requerida
        </h2>
        <p class="text-gray-500 mb-8 font-medium">
          Por seguridad, debes cambiar la contraseña genérica antes de
          continuar.
        </p>
        <div class="space-y-4">
          <input
            v-model="nuevaClave"
            type="password"
            placeholder="Nueva Contraseña"
            class="w-full p-5 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600"
          />
          <input
            v-model="confirmarClave"
            type="password"
            placeholder="Confirmar Contraseña"
            class="w-full p-5 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600"
          />
          <button
            @click="actualizarPasswordObligatorio"
            class="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all uppercase shadow-lg"
          >
            Actualizar y Entrar
          </button>
        </div>
      </div>
    </div>

    <div
      v-else-if="ventana === 'sistema'"
      class="min-h-screen bg-gray-50 flex animate-fade-in"
    >
      <aside class="w-64 bg-blue-900 text-white flex flex-col shadow-2xl">
        <div class="p-8 text-center border-b border-blue-800">
          <h2 class="text-2xl font-black tracking-tighter uppercase">
            C.E.R.O.
          </h2>
          <p class="text-xs text-blue-300 font-bold mt-1 truncate">
            {{ usuarioActivo.nombre_colegio }}
          </p>
        </div>
        <nav class="flex-1 p-4 space-y-2">
          <button
            @click="
              subTab = 'reportes';
              obtenerReportes();
            "
            :class="subTab === 'reportes' ? 'bg-blue-700' : 'hover:bg-blue-800'"
            class="w-full flex items-center gap-3 p-4 rounded-xl font-bold transition-all"
          >
            📊 Mis Reportes
          </button>
          <button
            @click="subTab = 'nuevoReporte'"
            :class="
              subTab === 'nuevoReporte' ? 'bg-blue-700' : 'hover:bg-blue-800'
            "
            class="w-full flex items-center gap-3 p-4 rounded-xl font-bold transition-all"
          >
            📝 Nuevo Reporte
          </button>
          <button
            v-if="usuarioActivo.rol === 'admin'"
            @click="
              subTab = 'usuarios';
              cargarUsuarios();
            "
            :class="subTab === 'usuarios' ? 'bg-blue-700' : 'hover:bg-blue-800'"
            class="w-full flex items-center gap-3 p-4 rounded-xl font-bold transition-all"
          >
            👥 Usuarios
          </button>
        </nav>
        <div class="p-4 border-t border-blue-800">
          <button
            @click="cerrarSesion"
            class="w-full p-4 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
          >
            🚪 Salir
          </button>
        </div>
      </aside>

      <main class="flex-1 p-8 overflow-y-auto">
        <header class="flex justify-between items-center mb-10">
          <h1 class="text-3xl font-black text-blue-900 uppercase">
            Panel de Gestión
          </h1>
        </header>

        <section v-if="subTab === 'reportes'" class="animate-fade-in space-y-8">
          <div
            class="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden"
          >
            <div class="overflow-x-auto">
              <table class="w-full text-left">
                <thead
                  class="bg-gray-50 text-gray-400 text-xs uppercase font-black"
                >
                  <tr>
                    <th class="p-6">ID</th>
                    <th class="p-6">Tipo</th>
                    <th class="p-6">Descripción</th>
                    <th class="p-6">Estado</th>
                    <th
                      v-if="usuarioActivo.rol === 'admin'"
                      class="p-6 text-center"
                    >
                      Gestión
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-50">
                  <tr
                    v-for="reporte in reportes"
                    :key="reporte.id"
                    class="hover:bg-blue-50/30 transition-all"
                  >
                    <td class="p-6 font-bold">#{{ reporte.id }}</td>
                    <td class="p-6 font-black uppercase">
                      <span
                        :class="{
                          'text-red-600 bg-red-50 px-3 py-1 rounded-lg border border-red-100':
                            reporte.tipo === 'Tipo III',
                          'text-orange-600 bg-orange-50 px-3 py-1 rounded-lg border border-orange-100':
                            reporte.tipo === 'Tipo II',
                          'text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-100':
                            reporte.tipo === 'Tipo I',
                        }"
                      >
                        {{ reporte.tipo }}
                      </span>
                    </td>
                    <td class="p-6 text-gray-600 max-w-xs truncate">
                      {{ reporte.descripcion }}
                    </td>
                    <td class="p-6">
                      <span
                        :class="{
                          'bg-orange-100 text-orange-600':
                            reporte.estado === 'nuevo',
                          'bg-green-100 text-green-600':
                            reporte.estado === 'resuelto',
                        }"
                        class="px-3 py-1 rounded-full text-[10px] font-black uppercase italic"
                        >{{ reporte.estado }}</span
                      >
                    </td>
                    <td
                      v-if="usuarioActivo.rol === 'admin'"
                      class="p-6 text-center"
                    >
                      <button
                        @click="abrirSeguimiento(reporte)"
                        class="bg-indigo-600 text-white px-5 py-2 rounded-xl font-bold text-xs hover:bg-indigo-700 shadow-sm transition-all"
                      >
                        ⚙️ Gestionar Caso
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section v-if="subTab === 'usuarios'" class="animate-fade-in space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100"
            >
              <h3 class="font-black text-blue-900 uppercase mb-4">
                Carga Masiva (Excel)
              </h3>
              <input
                type="file"
                @change="procesarExcel"
                class="hidden"
                id="excelInput"
                accept=".xlsx, .xls"
              />
              <label
                for="excelInput"
                class="w-full bg-yellow-400 text-blue-900 py-4 rounded-2xl font-black text-center block cursor-pointer hover:bg-yellow-500 transition-all uppercase shadow-md"
                >📁 Seleccionar Archivo</label
              >
            </div>
            <div
              class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100"
            >
              <h3 class="font-black text-blue-900 uppercase mb-4">
                Estado de la Base
              </h3>
              <div class="flex items-center gap-4">
                <div class="bg-blue-100 p-4 rounded-2xl">
                  <span class="text-2xl font-black text-blue-600">{{
                    listaUsuarios.length
                  }}</span>
                </div>
                <p class="font-bold text-gray-600">Usuarios registrados</p>
              </div>
            </div>
          </div>

          <div
            class="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden"
          >
            <div
              class="p-8 border-b border-gray-50 flex justify-between items-center"
            >
              <h3 class="font-black text-blue-900 uppercase">
                Lista de Personal
              </h3>
              <input
                v-model="filtroNombre"
                type="text"
                placeholder="Buscar usuario..."
                class="px-4 py-2 bg-gray-50 border rounded-xl font-bold text-sm outline-none focus:border-blue-500"
              />
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left">
                <thead
                  class="bg-gray-50 text-gray-400 text-xs uppercase font-black"
                >
                  <tr>
                    <th class="p-6">Nombre</th>
                    <th class="p-6">Correo / ID</th>
                    <th class="p-6">Rol</th>
                    <th class="p-6 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-50">
                  <tr
                    v-for="user in usuariosFiltrados"
                    :key="user.id"
                    class="hover:bg-gray-50 transition-all"
                  >
                    <td class="p-6 font-bold text-gray-700">
                      {{ user.nombre }}
                    </td>
                    <td class="p-6 text-gray-500">{{ user.correo }}</td>
                    <td class="p-6">
                      <span
                        class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase"
                      >
                        {{ user.rol }}
                      </span>
                    </td>
                    <td class="p-6 text-center">
                      <div class="flex justify-center gap-2">
                        <button
                          v-if="user.rol !== 'admin'"
                          @click="eliminarUsuario(user.id, user.nombre)"
                          class="p-2 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all shadow-sm"
                          title="Eliminar Usuario"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section
          v-if="subTab === 'nuevoReporte'"
          class="max-w-2xl animate-slide-up"
        >
          <div
            class="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100"
          >
            <h2 class="text-2xl font-black text-blue-900 mb-6 uppercase">
              Nuevo Reporte
            </h2>
            <div class="space-y-4">
              <div class="space-y-2">
                <label
                  class="text-[10px] font-black text-gray-400 uppercase ml-2"
                  >Clasificación de la Situación (Ley 1620)</label
                >
                <select
                  v-model="form.tipo"
                  class="w-full p-4 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-500"
                >
                  <option value="Tipo I">
                    Situación Tipo I (Conflictos esporádicos)
                  </option>
                  <option value="Tipo II">
                    Situación Tipo II (Acoso / Bullying sistemático)
                  </option>
                  <option value="Tipo III">
                    Situación Tipo III (Presunto Delito / Agresión Grave)
                  </option>
                </select>
              </div>
              <input
                v-model="form.ubicacion"
                type="text"
                placeholder="¿Dónde ocurrió? (Ej: Salón, Patio, Baños)"
                class="w-full p-4 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-500"
              />
              <textarea
                v-model="form.descripcion"
                rows="5"
                placeholder="Descripción detallada de los hechos..."
                class="w-full p-4 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-500"
              ></textarea>
              <button
                @click="enviarReporte"
                class="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 shadow-lg transition-all"
              >
                Enviar Reporte
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>

    <div
      v-if="mostrarModalSeguimiento"
      class="fixed inset-0 z-[110] flex items-center justify-center bg-blue-900/80 backdrop-blur-sm p-4"
    >
      <div
        class="bg-white w-full max-w-2xl rounded-[2.5rem] p-10 shadow-2xl animate-slide-up max-h-[90vh] overflow-y-auto"
      >
        <h3 class="text-2xl font-black text-blue-900 mb-2 uppercase">
          Gestión de Intervención
        </h3>
        <div class="space-y-6 mt-4">
          <div>
            <label
              class="text-[10px] font-black text-gray-400 uppercase tracking-widest"
              >Historial de Seguimiento</label
            >
            <div
              class="bg-gray-50 p-5 rounded-2xl mt-2 text-sm border whitespace-pre-wrap text-gray-600"
            >
              {{ reporteSeleccionado.seguimiento || "Sin registros previos." }}
            </div>
          </div>
          <div>
            <label
              class="text-[10px] font-black text-blue-600 uppercase tracking-widest"
              >Nuevas Acciones y Compromisos</label
            >
            <textarea
              v-model="nuevaIntervencion"
              rows="5"
              class="w-full p-5 bg-blue-50/50 border-2 border-blue-100 rounded-2xl font-bold outline-none focus:border-blue-500 mt-2"
              placeholder="Describa los compromisos alcanzados con estudiantes y padres de familia..."
            ></textarea>
          </div>
        </div>
        <div class="flex gap-4 mt-10">
          <button
            @click="mostrarModalSeguimiento = false"
            class="flex-1 py-4 font-black text-gray-400 uppercase"
          >
            Cancelar
          </button>
          <button
            @click="guardarYGenerarActa"
            class="flex-[2] bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase shadow-lg hover:bg-blue-700 transition-all"
          >
            Guardar y Descargar Acta
          </button>
        </div>
      </div>
    </div>
  </div>

  <div style="display: none">
    <div
      id="molde-acta-pdf"
      class="p-10 bg-white text-black"
      style="width: 800px; font-family: sans-serif"
    >
      <div class="text-center border-b-2 border-blue-600 pb-4 mb-6">
        <h1 class="text-2xl font-bold uppercase">
          Acta de Seguimiento de Convivencia
        </h1>
        <p class="text-sm font-bold">{{ usuarioActivo?.nombre_colegio }}</p>
        <p class="text-xs italic">Proyecto C.E.R.O. - Puerto Tejada</p>
      </div>

      <div class="space-y-4" v-if="reporteSeleccionado">
        <p><strong>ID del Caso:</strong> #{{ reporteSeleccionado.id }}</p>
        <p>
          <strong>Tipo de Situación:</strong> {{ reporteSeleccionado.tipo }}
        </p>
        <p><strong>Ubicación:</strong> {{ reporteSeleccionado.ubicacion }}</p>
        <hr />
        <p><strong>Descripción de los Hechos:</strong></p>
        <div class="p-4 bg-gray-50 border rounded italic">
          {{ reporteSeleccionado.descripcion }}
        </div>

        <p><strong>Acciones y Seguimiento Realizado:</strong></p>
        <div class="p-4 border rounded whitespace-pre-wrap">
          {{ reporteSeleccionado.seguimiento }}
        </div>

        <div class="mt-20 flex justify-between">
          <div class="border-t border-black w-48 text-center pt-2 text-xs">
            Firma del Rector/Coordinador
          </div>
          <div class="border-t border-black w-48 text-center pt-2 text-xs">
            Firma Padre de Familia / Estudiante
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "./services/api";
import * as XLSX from "xlsx";
import html2pdf from "html2pdf.js";

export default {
  data() {
    return {
      
      
      indexCarrusel: 0,
      nuevaClave: "",
      confirmarClave: "",
      nuevaIntervencion: "",
      mostrarModalSeguimiento: false,
      reporteSeleccionado: null, // Para guardar el reporte que queremos imprimir
      filtroNombre: "",
      cargando: false,
      ventana: "inicio", // Controla la pantalla principal
      subTab: "reportes", // Controla la pestaña dentro del sistema
      usuarioActivo: null,
      reportes: [],
      listaUsuarios: [],
      formColegio: {
        nit: "",
        nombre: "",
        password: "",
        ubicacion: "",
        rector: "",
        sector: "Oficial",
      },
      formEstudiante: {
        nombre: "",
        correo: "",
        password: "",
        grado: "",
        grupo: "",
        colegio_id: null,
      },
      formAuth: { correo: "", password: "" },
      form: {
        tipo: "Tipo I", // Valor por defecto actualizado
        descripcion: "",
        ubicacion: "",
        anonimo: true,
      },
    };
  },

  computed: {
    sinAtender() {
      return this.reportes.filter((r) => r.estado === "nuevo").length;
    },
    enRevision() {
      return this.reportes.filter((r) => r.estado === "revision").length;
    },
    resueltos() {
      return this.reportes.filter((r) => r.estado === "resuelto").length;
    },
    usuariosFiltrados() {
      // Si no hay nada escrito, muestra la lista completa
      if (!this.filtroNombre) {
        return this.listaUsuarios;
      }
      // Si hay algo escrito, filtra por nombre o correo
      const buscar = this.filtroNombre.toLowerCase();
      return this.listaUsuarios.filter(
        (u) =>
          u.nombre.toLowerCase().includes(buscar) ||
          u.correo.toLowerCase().includes(buscar),
      );
    },
  },

  mounted() {
    // PERSISTENCIA: Revisar si ya había una sesión
    const guardado = localStorage.getItem("usuarioProyecto");
    if (guardado) {
      this.usuarioActivo = JSON.parse(guardado);
      this.ventana = "sistema";
      this.obtenerReportes();
    }
    setInterval(() => {
      this.indexCarrusel = (this.indexCarrusel + 1) % 3;
    }, 5000);
  },

  methods: {
    async activarPanico() {
      const datos = {
        tipo: "Emergencia",
        descripcion: "Alerta enviada desde botón de pánico",
      };

      alert("🚨 Alerta enviada al sistema");

      await api.post("/reportes", datos);
    },

    // 1. Abre el modal y prepara los datos
    abrirSeguimiento(reporte) {
      this.reporteSeleccionado = reporte;
      this.nuevaIntervencion = ""; // Limpiamos el campo de texto
      this.mostrarModalSeguimiento = true;
    },

    // 2. Guarda en la base de datos y luego dispara el PDF
    async guardarYGenerarActa() {
      if (!this.nuevaIntervencion)
        return alert("Por favor escribe la intervención o solución.");

      try {
        this.cargando = true;

        // Construimos el nuevo seguimiento (lo anterior + lo nuevo con fecha)
        const fechaCierre = new Date().toLocaleString();
        const seguimientoActualizado =
          (this.reporteSeleccionado.seguimiento || "") +
          `\n[${fechaCierre}]: ${this.nuevaIntervencion}\n`;

        // Enviamos al backend para actualizar el reporte
        await api.put(`/reportes/${this.reporteSeleccionado.id}`, {
          estado: "resuelto",
          seguimiento: seguimientoActualizado,
        });

        // Actualizamos localmente para que el PDF salga con la info nueva
        this.reporteSeleccionado.seguimiento = seguimientoActualizado;
        this.reporteSeleccionado.estado = "resuelto";

        this.mostrarModalSeguimiento = false;

        // Llamamos a tu función de descarga que ya funciona
        await this.descargarActa(this.reporteSeleccionado);

        // Refrescamos la lista general
        this.obtenerReportes();
      } catch (e) {
        alert("Error al guardar el seguimiento");
      } finally {
        this.cargando = false;
      }
    },

    // Tu función descargarActa se mantiene IGUAL a como la tienes ahora.

    async descargarActa(reporte) {
      try {
        this.cargando = true;
        this.reporteSeleccionado = reporte;

        // 1. Esperamos a que Vue procese los datos en el HTML oculto
        await this.$nextTick();

        // 2. Pausa de seguridad (800ms) para que el DOM se renderice completamente
        await new Promise((resolve) => setTimeout(resolve, 800));

        // 3. Buscamos el elemento con el ID que definiste en el template
        const elemento = document.getElementById("molde-acta-pdf");

        if (!elemento) {
          // Este mensaje saldrá si el ID en el HTML y el JS no coinciden
          throw new Error("No se encontró el elemento 'molde-acta-pdf'");
        }

        const opciones = {
          margin: [0.5, 0.5],
          filename: `Acta_Caso_${reporte.id}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: "#ffffff",
            windowWidth: 800,
          },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };

        // 4. Generar y guardar
        await html2pdf().set(opciones).from(elemento).save();
      } catch (error) {
        console.error("Error al generar PDF:", error);
        alert(
          "Hubo un detalle al encontrar el molde del acta. Intenta de nuevo.",
        );
      } finally {
        this.cargando = false;
      }
    },

    async procesarExcel(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      this.cargando = true; // Activamos el loader azul

      reader.onload = async (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];

          const listaEstudiantes = XLSX.utils.sheet_to_json(worksheet);

          if (listaEstudiantes.length === 0) {
            alert("El archivo está vacío");
            this.cargando = false;
            return;
          }

          // Enviamos al backend
          const res = await api.post("/estudiantes/carga-masiva", {
            estudiantes: listaEstudiantes,
            colegio_id: this.usuarioActivo.colegio_id,
          });

          // --- AQUÍ ESTÁ LA APLICACIÓN DEL PUNTO 2 ---
          if (res.data.success) {
            let mensajeExito = res.data.message;

            // Si el backend nos avisa que hubo correos que fallaron:
            if (res.data.errores && res.data.errores.length > 0) {
              mensajeExito += `\n\n⚠️ No se pudieron cargar ${res.data.errores.length} registros porque ya existen:\n`;
              mensajeExito += res.data.errores.join("\n");
            }

            alert(mensajeExito);

            // Refrescamos la lista de usuarios para ver los nuevos
            this.cargarUsuarios();
          }
          // -------------------------------------------
        } catch (error) {
          console.error(error);
          // Si el error es un 400 (todos fallaron), mostramos el detalle del error
          const mensajeError =
            error.response?.data?.message ||
            "Hubo un error al procesar el archivo";
          const detalles = error.response?.data?.detalles
            ? `\n${error.response.data.detalles.join("\n")}`
            : "";
          alert(mensajeError + detalles);
        } finally {
          this.cargando = false;
          event.target.value = ""; // Limpiamos el selector de archivos
        }
      };

      reader.readAsArrayBuffer(file);
    },

    descargarPlantilla() {
      const data = [
        {
          nombre: "Juan Perez",
          correo: "juan@colegio.edu.co",
          grado: "11",
          grupo: "A",
        },
        {
          nombre: "Ana Lopez",
          correo: "ana@colegio.edu.co",
          grado: "10",
          grupo: "B",
        },
      ];
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Estudiantes");
      XLSX.writeFile(workbook, "Plantilla_Carga_CERO.xlsx");
    },

    // --- LÓGICA DE REGISTRO ---

    async registrarColegio() {
      // Nombre unificado con el HTML
      this.cargando = true;
      try {
        // Verificamos que los campos no estén vacíos
        if (
          !this.formColegio.nombre ||
          !this.formColegio.rector ||
          !this.formColegio.nit
        ) {
          alert("Por favor completa los campos principales");
          return;
        }

        const res = await api.post("/colegios/registro", this.formColegio);

        if (res.data.success) {
          alert(
            "¡Institución registrada! El Rector ya puede ingresar con su NIT y contraseña.",
          );
          this.ventana = "login";
          // Limpiamos el formulario para futuros registros
          this.formColegio = {
            nit: "",
            nombre: "",
            password: "",
            ubicacion: "",
            rector: "",
            sector: "Oficial",
          };
        }
      } catch (e) {
        console.error("Error detallado:", e);
        alert(
          "Error al registrar el colegio: " +
            (e.response?.data?.message || "Servidor no disponible"),
        );
      } finally {
        this.cargando = false;
      }
    },

    async registrarEstudiante() {
      //  this.cargando = true;
      try {
        const res = await api.post(
          "/estudiantes/registro",
          this.formEstudiante,
        );
        if (res.data.success) {
          alert("Registro completo. Por favor inicia sesión.");
          this.ventana = "login";
        }
      } catch (e) {
        alert("Error: " + (e.response?.data?.message || "Revisa los campos"));
      }
    },

    // --- AUTENTICACIÓN ---
    async iniciarSesion() {
      try {
        this.cargando = true;
        const res = await api.post("/login", this.formAuth);

        if (res.data.success) {
          const user = res.data.user;

          // 1. Verificamos si es un estudiante con cambio de clave pendiente
          if (user.mustChangePassword) {
            this.usuarioActivo = user; // Guardamos temporalmente sus datos
            this.ventana = "cambiarPassword"; // <--- ESTO ES LO QUE TE FALTA
            return; // Detenemos aquí para que no entre al sistema todavía
          }

          // 2. Si no debe cambiar clave, entra normal
          this.usuarioActivo = user;
          localStorage.setItem("usuarioProyecto", JSON.stringify(user));
          this.ventana = "sistema";
          this.obtenerReportes();
        }
      } catch (error) {
        alert(error.response?.data?.message || "Error al ingresar");
      } finally {
        this.cargando = false;
      }
    },

    async actualizarPasswordObligatorio() {
      if (this.nuevaClave !== this.confirmarClave) {
        return alert("Las contraseñas no coinciden.");
      }

      try {
        this.cargando = true;
        const res = await api.put(
          `/usuarios/password/${this.usuarioActivo.id}`,
          {
            nuevaPassword: this.nuevaClave,
          },
        );

        if (res.data.success) {
          alert("Contraseña actualizada correctamente.");

          // --- LIMPIEZA DEL FORMULARIO DE CAMBIO (Punto 1) ---
          this.nuevaClave = "";
          this.confirmarClave = "";

          // --- LIMPIEZA DEL FORMULARIO DE LOGIN (Punto 2) ---
          // Esto limpia el "Correo o NIT" y la "Contraseña" de la pantalla inicial
          this.formAuth.correo = "";
          this.formAuth.password = "";

          // Guardar sesión y entrar
          this.usuarioActivo.mustChangePassword = false;
          localStorage.setItem(
            "usuarioProyecto",
            JSON.stringify(this.usuarioActivo),
          );
          this.ventana = "sistema";
          this.obtenerReportes();
        }
      } catch (error) {
        console.error(error);
        alert("Error al actualizar la contraseña.");
      } finally {
        this.cargando = false;
      }
    },

    cerrarSesion() {
      // 1. Limpiamos la persistencia
      localStorage.removeItem("usuarioProyecto");
      this.usuarioActivo = null;

      // 2. LIMPIEZA DE CAMPOS DE LOGIN (Lo que pediste)
      this.formAuth.correo = "";
      this.formAuth.password = "";

      // 3. LIMPIEZA DE CAMPOS DE CAMBIO DE CLAVE (Por seguridad)
      this.nuevaClave = "";
      this.confirmarClave = "";

      // 4. Regresamos a la pantalla de inicio
      this.ventana = "inicio";
    },

    // --- GESTIÓN DE REPORTES ---

    async obtenerReportes() {
      if (!this.usuarioActivo?.colegio_id) return;
      try {
        const res = await api.get(
          `/estadisticas/${this.usuarioActivo.colegio_id}`,
          {
            params: {
              usuario_id: this.usuarioActivo.id,
              rol: this.usuarioActivo.rol,
            },
          },
        );
        this.reportes = res.data;
      } catch (e) {
        console.error("Error al obtener reportes:", e);
      }
    },

    async enviarReporte() {
      if (!this.form.descripcion) return alert("Escribe una descripción");

      try {
        // Agregamos explícitamente los IDs necesarios
        const datosReporte = {
          ...this.form,
          usuario_id: this.usuarioActivo.id,
          colegio_id: this.usuarioActivo.colegio_id, // <--- IMPORTANTE
        };

        await api.post("/reportes", datosReporte);

        alert("Reporte enviado con éxito ✅");
        this.form.descripcion = "";
        this.subTab = "reportes";
        this.obtenerReportes(); // Refresca la lista
      } catch (e) {
        console.error("Error detallado:", e.response?.data);
        alert(
          "Error al enviar: " +
            (e.response?.data?.message || "Intenta de nuevo"),
        );
      }
    },

    async cambiarEstado(id, estadoActual) {
      let nuevo = estadoActual === "nuevo" ? "revision" : "resuelto";
      if (estadoActual === "resuelto") return;
      try {
        await api.put(`/reportes/${id}`, { estado: nuevo });
        this.obtenerReportes();
      } catch (e) {
        alert("No se pudo actualizar");
      }
    },

    // --- OTROS ---
    async cargarUsuarios() {
      if (!this.usuarioActivo?.colegio_id) return;
      try {
        const res = await api.get(`/usuarios/${this.usuarioActivo.colegio_id}`);
        this.listaUsuarios = res.data;
      } catch (e) {
        console.error("Error al cargar usuarios:", e);
        alert("No se pudieron cargar los usuarios");
      }
    },

    async hacerAdmin(id) {
      if (!confirm("¿Dar permisos de administrador?")) return;
      try {
        await api.put(`/usuarios/rol/${id}`, { nuevoRol: "admin" });
        this.cargarUsuarios();
      } catch (e) {
        alert("Error");
      }
    },

    async eliminarUsuario(id, nombre) {
      const confirmar = confirm(`¿Seguro que deseas eliminar a ${nombre}?`);
      if (confirmar) {
        try {
          this.cargando = true;
          const res = await api.delete(`/usuarios/${id}`);
          if (res.data.success) {
            alert("Usuario eliminado");
            await this.cargarUsuarios(); // Esto actualiza la tabla
          }
        } catch (e) {
          alert(
            "No se pudo eliminar: " + (e.response?.data?.message || e.message),
          );
        } finally {
          this.cargando = false;
        }
      }
    },

    descargarExcel() {
      const worksheet = XLSX.utils.json_to_sheet(this.reportes);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Reportes");
      XLSX.writeFile(workbook, "Reportes_CERO.xlsx");
    },

    async obtenerUsuarios() {
      try {
        // Usamos el colegio_id del usuario que inició sesión
        const idColegio = this.usuarioActivo.colegio_id;
        const response = await api.get(`/usuarios/${idColegio}`);
        this.usuarios = response.data;
      } catch (e) {
        console.error("No se pudieron cargar los usuarios", e);
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&display=swap");
#app {
  font-family: "Plus Jakarta Sans", sans-serif;
}

/* NAVBAR */

.nav-ultra {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  margin-top: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* LOGO */

.logo-box {
  background: linear-gradient(135deg, #2563eb, #6366f1);
  color: white;
  padding: 10px 14px;
  border-radius: 12px;
  font-weight: 900;
  font-size: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

/* TEXTO LOGO */

.logo-text {
  font-size: 26px;
  font-weight: 900;
  letter-spacing: -1px;
  background: linear-gradient(90deg, #38bdf8, #6366f1, #22c55e);
  -webkit-background-clip:text ;
  -webkit-text-fill-color: transparent;
}

/* BOTON LOGIN */

.btn-login {
  padding: 10px 20px;
  font-weight: 800;
  color: #38bdf8;
  border-radius: 12px;
  transition: 0.3s;
}

.btn-login:hover {
  color: #60a5fa;
  transform: scale(1.05);
}

/* BOTON REGISTRO */

.btn-registro {
  background: linear-gradient(90deg, #2563eb, #6366f1);
  color: white;
  padding: 10px 24px;
  border-radius: 16px;
  font-weight: 900;
  letter-spacing: 1px;
  transition: 0.4s;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

/* HOVER */

.btn-registro:hover {
  transform: translateY(-3px) scale(1.05);
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}
.animate-slide-up {
  animation: slideUp 0.5s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.card-ley {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  padding: 25px;
  border-radius: 25px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  transition: 0.4s;
  text-align: center;
}

.card-ley:hover {
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9);
}

.img-card {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 18px;
  margin-bottom: 15px;
}

.card-ley h3 {
  font-weight: 900;
  font-size: 20px;
  margin-bottom: 10px;
}

.card-ley p {
  color: #cbd5f5;
  font-size: 14px;
}

.video-card iframe {
  width: 100%;
  height: 220px;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
  transition: 0.4s;
}

.video-card iframe:hover {
  transform: scale(1.05);
}

/*segundo stylo*/

.ley-container {
  padding: 80px 40px;
  background: linear-gradient(135deg, #0f172a, #020617);
  color: white;
  text-align: center;
}

.titulo {
  font-size: 38px;
  font-weight: 900;
  margin-bottom: 20px;
}

.descripcion {
  max-width: 800px;
  margin: auto;
  margin-bottom: 50px;
  color: #cbd5f5;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
  max-width: 1100px;
  margin: auto;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  padding: 25px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: 0.4s;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6);
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9);
}

.card h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.card p {
  font-size: 14px;
  color: #cbd5f5;
}

/* TITULO 111 */

.titulo-saas {
  text-align: center;
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 70px;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #2563eb, #6366f1, #22c55e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* TARJETAS */

.card-saas {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(15px);
  border-radius: 40px;
  padding: 40px 30px;
  text-align: center;
  transition: 0.4s;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

/* EFECTO HOVER */

.card-saas:hover {
  transform: translateY(-15px) scale(1.05);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.25);
}

/* NUMERO GRANDE */

.numero {
  font-size: 70px;
  font-weight: 900;
  margin-bottom: 10px;
}

/* TITULO */

.card-saas h4 {
  font-size: 22px;
  font-weight: 900;
  margin-bottom: 10px;
  color: #0f172a;
}

/* SUBTITULO */

.sub {
  font-style: italic;
  font-weight: 700;
  margin-bottom: 10px;
}

/* DESCRIPCION */

.desc {
  font-size: 14px;
  color: #475569;
}

/* COLORES */

.tipo1 .numero {
  color: #2563eb;
}
.tipo2 .numero {
  color: #f59e0b;
}
.tipo3 .numero {
  color: #ef4444;
}

.tipo1:hover {
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
}
.tipo2:hover {
  background: linear-gradient(135deg, #fef3c7, #fde68a);
}
.tipo3:hover {
  background: linear-gradient(135deg, #fee2e2, #fecaca);
}

/* FONDO */

.ley-section {
  background: linear-gradient(135deg, #020617, #0f172a, #1e293b);
  color: white;
}

/* ETIQUETA */

.ley-tag {
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: linear-gradient(90deg, #38bdf8, #6366f1);
  padding: 6px 14px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 15px;
}

/* TITULO */

.ley-title {
  font-size: 42px;
  font-weight: 900;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #38bdf8, #6366f1, #22c55e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* TEXTO */

.ley-text {
  color: #cbd5f5;
  line-height: 1.7;
  margin-bottom: 20px;
}

/* LISTA */

.ley-list {
  display: flex;
  gap: 10px;
  font-weight: 700;
  color: #e2e8f0;
}

.check {
  color: #22c55e;
  font-size: 18px;
}

/* TARJETAS */

.card-ley {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.4s;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
}

/* HOVER */

.card-ley:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9);
  border: 1px solid #38bdf8;
}

/* TITULO TARJETAS */

.card-ley h4 {
  font-weight: 900;
  margin-bottom: 10px;
  font-size: 18px;
}

/* TEXTO TARJETAS */

.card-ley p {
  color: #cbd5f5;
  font-size: 14px;
}

/* HEADER */

.header-ultra {
  background: linear-gradient(135deg, #020617, #0f172a, #1e293b);
  border-radius: 40px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
}

/* TITULO */

.titulo-ultra {
  font-size: 70px;
  font-weight: 900;
  margin-bottom: 25px;
  letter-spacing: -2px;
  text-transform: uppercase;
  background: linear-gradient(90deg, #38bdf8, #6366f1, #22c55e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glow 3s infinite alternate;
}

/* TEXTO */

.texto-ultra {
  font-size: 20px;
  color: #cbd5f5;
  margin-bottom: 40px;
  line-height: 1.7;
}

/* BOTON */

.btn-ultra {
  background: linear-gradient(90deg, #2563eb, #6366f1);
  color: white;
  padding: 16px 35px;
  border-radius: 20px;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
  transition: 0.4s;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

/* HOVER */

.btn-ultra:hover {
  transform: translateY(-5px) scale(1.05);
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
}

/* GLOW TITULO */

@keyframes glow {
  from {
    filter: drop-shadow(0 0 10px #38bdf8);
  }
  to {
    filter: drop-shadow(0 0 25px #6366f1);
  }
}

/* CONTENEDOR PRINCIPAL */

.app-ultra {
  min-height: 100vh;

  font-family: "Poppins", sans-serif;

  background:
    radial-gradient(
      circle at 20% 30%,
      rgba(56, 189, 248, 0.2),
      transparent 40%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(99, 102, 241, 0.2),
      transparent 40%
    ),
    linear-gradient(135deg, #020617, #0f172a, #1e293b);

  color: #e2e8f0;

  overflow-x: hidden;
}

/* EFECTO DE BRILLO EN EL FONDO */

.app-ultra::before {
  content: "";

  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 0.05),
    transparent 60%
  );

  pointer-events: none;

  z-index: -1;
}

/* SCROLL MODERNO */

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #020617;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(#38bdf8, #6366f1);
  border-radius: 20px;
}

/* ANIMACION SUAVE */

.app-ultra {
  animation: fondoAnimado 10s ease infinite alternate;
}

@keyframes fondoAnimado {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

.carruselCero {
  margin-top: 40px;
  padding: 60px 20px;
  background: linear-gradient(135deg, #020617, #0f172a, #1e293b);
  border-radius: 20px;
  overflow: hidden;
}

.carrusel-container {
  overflow: hidden;
  max-width: 1100px;
  margin: auto;
}

.carrusel-slide {
  display: flex;
  transition: 0.8s;
}

.slide {
  min-width: 100%;
  position: relative;
}

.slide img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 20px;
}

.texto {
  position: absolute;
  bottom: 40px;
  left: 40px;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(8px);
}

.texto h2 {
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 10px;
}

.dots {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.dots span {
  width: 12px;
  height: 12px;
  background: #64748b;
  border-radius: 50%;
  cursor: pointer;
}

.dots .activo {
  background: #38bdf8;
}

.panic-container {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}

.panic-btn {
  background: linear-gradient(135deg, #ef4444, #b91c1c);

  color: white;

  font-size: 22px;

  font-weight: 900;

  padding: 20px 40px;

  border-radius: 20px;

  border: none;

  cursor: pointer;

  box-shadow: 0 20px 60px rgba(239, 68, 68, 0.6);

  transition: 0.4s;

  animation: pulse 2s infinite;
}

.panic-btn:hover {
  transform: scale(1.1);

  background: linear-gradient(135deg, #dc2626, #991b1b);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }

  70% {
    box-shadow: 0 0 0 25px rgba(239, 68, 68, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}
</style>
