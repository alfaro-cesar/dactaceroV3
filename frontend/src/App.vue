<template>
  <div id="app" class="font-sans antialiased text-gray-900 min-h-screen bg-gray-50">
    
    <div v-if="ventana === 'inicio'" class="min-h-screen bg-white">

      <nav id="inicio" class="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div class="flex items-center gap-2">
          <div class="bg-blue-600 text-white p-2 rounded-lg font-black">C</div>
          <span class="text-2xl font-black text-blue-900 tracking-tighter">PROYECTO C.E.R.O.</span>
        </div>
        <div class="flex gap-4">
          <button @click="ventana = 'login'" class="px-6 py-2 font-bold text-blue-600 hover:text-blue-800 transition">Entrar</button>
          <button @click="ventana = 'registroColegio'" class="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 shadow-md transition">Registrar Colegio</button>
        </div>
      </nav>

      <div class="relative w-full h-64 overflow-hidden rounded-xl shadow-lg mb-8">
            <transition-group name="fade" tag="div">
              <div v-for="(img, index) in imagenesCarrusel" 
                  :key="img" 
                  v-show="indiceCarrusel === index"
                  class="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
                  :style="{ backgroundImage: `url(${img})` }">
                <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h2 class="text-white text-3xl font-bold text-center px-4">{{ frasesCarrusel[index] }}</h2>
                </div>
              </div>
            </transition-group>
          </div>

      

      <header class="py-16 px-6 text-center max-w-4xl mx-auto animate-fade-in">
        <h1 class="text-5xl md:text-7xl font-black text-blue-900 mb-6 tracking-tighter uppercase leading-tight">Convivencia y Respeto Escolar</h1>
        <p class="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
          Una herramienta diseñada para la gestión moderna del clima institucional, alineada con los estándares de protección y bienestar estudiantil en Colombia.
        </p>
        <div class="flex justify-center gap-4">
          <a href="#ley1620" class="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-black hover:bg-gray-200 transition uppercase text-sm">
            Saber más
          </a>
        </div>
      </header>

     <section v-if="ventana === 'inicio'" class="py-20 bg-white px-6" **data-aos="fade-up"**>
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span class="text-blue-600 font-black uppercase tracking-widest text-sm">Marco Legal Colombiano</span>
              <section id="ley1620" class="py-20 bg-white">
                  <div class="max-w-7xl mx-auto px-6">
                    <h2 class="text-3xl font-black text-blue-900">Ley 1620 de Convivencia Escolar</h2>
                    </div>
                </section>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Esta ley crea el <b>Sistema Nacional de Convivencia Escolar</b>, cuyo objetivo es promover, orientar y fortalecer la convivencia, los derechos humanos y la mitigación de la violencia escolar.
              </p>
              <ul class="space-y-4 text-gray-700 font-bold">
                <li class="flex gap-3 items-start"><span class="text-green-500">✓</span> Prevención del acoso escolar (Bullying).</li>
                <li class="flex gap-3 items-start"><span class="text-green-500">✓</span> Ruta de Atención Integral.</li>
                <li class="flex gap-3 items-start"><span class="text-green-500">✓</span> Promoción de entornos seguros.</li>
              </ul>
            </div>
            <div class="grid grid-cols-1 gap-4">
              <div class="bg-white p-6 rounded-3xl shadow-sm border border-blue-100">
                <h4 class="font-black text-blue-900 mb-2 uppercase text-sm">¿Qué es el Bullying?</h4>
                <p class="text-sm text-gray-500 font-medium">Conducta agresiva, intencionada y repetida entre estudiantes que ocurre de forma sistemática.</p>
              </div>
              <div class="bg-white p-6 rounded-3xl shadow-sm border border-blue-100">
                <h4 class="font-black text-blue-900 mb-2 uppercase text-sm">¿Qué es el Ciberbullying?</h4>
                <p class="text-sm text-gray-500 font-medium">Acoso a través de medios digitales para atemorizar, enfadar o humillar a otros.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 px-6 max-w-6xl mx-auto">
        <h3 class="text-3xl font-black text-center text-blue-900 mb-12 uppercase">Clasificación de Situaciones</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100">
                    <div class="text-blue-600 font-black text-4xl mb-4">I</div>
                    <h4 class="font-black text-blue-900 mb-3 uppercase">Situación Tipo I</h4>
                    <p class="text-sm text-blue-800/70 font-bold italic">Conflictos esporádicos.</p>
                    <p class="text-gray-600 mt-4 text-sm">Malentendidos que no afectan la integridad física ni mental de forma sistemática.</p>
                  </div>
                  <div class="bg-orange-50 p-8 rounded-[2.5rem] border border-orange-100">
                    <div class="text-orange-600 font-black text-4xl mb-4">II</div>
                    <h4 class="font-black text-blue-900 mb-3 uppercase">Situación Tipo II</h4>
                    <p class="text-sm text-orange-800/70 font-bold italic">Acoso o Ciberacoso.</p>
                    <p class="text-gray-600 mt-4 text-sm">Agresiones repetitivas que no son delitos pero dañan gravemente el clima escolar.</p>
                  </div>
                  <div class="bg-red-50 p-8 rounded-[2.5rem] border border-red-100">
                    <div class="text-red-600 font-black text-4xl mb-4">III</div>
                    <h4 class="font-black text-blue-900 mb-3 uppercase">Situación Tipo III</h4>
                    <p class="text-sm text-red-800/70 font-bold italic">Presunto Delito.</p>
                    <p class="text-gray-600 mt-4 text-sm">Agresiones que por su gravedad constituyen delitos penales bajo la ley colombiana.</p>
                  </div>
                </div>
              </section>

              <section v-if="ventana === 'inicio'" class="py-20 bg-white px-6">
          <div class="max-w-4xl mx-auto">
            <div class="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-blue-100 shadow-inner">
              <div class="text-center mb-10">
                <span class="text-blue-600 font-black uppercase tracking-widest text-xs">Datos Reales</span>
                <h3 class="text-3xl font-black text-blue-900 mt-2 uppercase">Panorama Nacional en Colombia</h3>
                <p class="text-gray-500 font-medium mt-2">Porcentaje de estudiantes que manifiestan haber sido víctimas de agresiones (Cifras aproximadas Ley 1620)</p>
              </div>
              
              <div class="relative h-[400px] w-full">
                <canvas id="graficaBullying"></canvas>
              </div>

              <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="text-center">
                  <p class="text-2xl font-black text-blue-600">32%</p>
                  <p class="text-[10px] font-bold text-gray-400 uppercase">Verbal</p>
                </div>
                <div class="text-center">
                  <p class="text-2xl font-black text-indigo-600">26%</p>
                  <p class="text-[10px] font-bold text-gray-400 uppercase">Social</p>
                </div>
                <div class="text-center">
                  <p class="text-2xl font-black text-purple-600">18%</p>
                  <p class="text-[10px] font-bold text-gray-400 uppercase">Ciberacoso</p>
                </div>
                <div class="text-center">
                  <p class="text-2xl font-black text-blue-900">12%</p>
                  <p class="text-[10px] font-bold text-gray-400 uppercase">Físico</p>
                </div>
              </div>
            </div>
          </div>
        </section>


            <section class="py-20 bg-blue-900 text-white px-6 rounded-[3rem] mx-4 my-10 shadow-2xl">
              <div class="max-w-6xl mx-auto">
                <div class="text-center mb-16">
                  <h3 class="text-3xl font-black uppercase tracking-tighter">Ruta de Atención C.E.R.O.</h3>
                  <p class="text-blue-300 font-bold mt-2">Protocolo oficial según el Decreto 1965</p>
                </div>

                <div class="grid md:grid-cols-4 gap-8">
                  <div class="relative text-center">
                    <div class="w-16 h-16 bg-yellow-400 text-blue-900 rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-4 shadow-lg rotate-3">1</div>
                    <h4 class="font-black uppercase text-sm mb-2">Reporte</h4>
                    <p class="text-xs text-blue-100/70">Se activa la alerta a través de la plataforma de forma anónima o identificada.</p>
                  </div>
                  <div class="relative text-center">
                    <div class="w-16 h-16 bg-white text-blue-900 rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-4 shadow-lg -rotate-3">2</div>
                    <h4 class="font-black uppercase text-sm mb-2">Atención</h4>
                    <p class="text-xs text-blue-100/70">El comité recibe el caso y brinda protección inmediata a los involucrados.</p>
                  </div>
                  <div class="relative text-center">
                    <div class="w-16 h-16 bg-white text-blue-900 rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-4 shadow-lg rotate-3">3</div>
                    <h4 class="font-black uppercase text-sm mb-2">Mediación</h4>
                    <p class="text-xs text-blue-100/70">Se citan a las partes para buscar acuerdos y restaurar la convivencia.</p>
                  </div>
                  <div class="relative text-center">
                    <div class="w-16 h-16 bg-green-400 text-blue-900 rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-4 shadow-lg">4</div>
                    <h4 class="font-black uppercase text-sm mb-2">Seguimiento</h4>
                    <p class="text-xs text-blue-100/70">Se verifica el cumplimiento de compromisos y el bienestar emocional.</p>
                  </div>
                </div>
              </div>
            </section>

      
      <footer class="bg-[#0f172a] text-white pt-16 pb-8 mt-20 border-t-4 border-blue-600">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      
      <div class="space-y-6">
        <div class="flex items-center gap-2">
          <div class="bg-blue-600 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622l-.382-3.016z" />
            </svg>
          </div>
          <h2 class="text-2xl font-black tracking-tighter uppercase italic">
            Proyecto <span class="text-blue-400">C.E.R.O.</span>
          </h2>
        </div>
        <p class="text-gray-400 text-sm leading-relaxed">
          Plataforma líder en gestión del clima escolar y convivencia en Colombia. Alineada con la Ley 1620 para proteger el bienestar estudiantil.
        </p>
      </div>

      <div>
        <h3 class="text-sm font-black uppercase tracking-widest text-blue-400 mb-6">Navegación</h3>
        <ul class="space-y-4 text-sm font-bold text-gray-300">
          <li><a @click="ventana = 'inicio'" class="hover:text-white hover:translate-x-1 transition-all inline-block cursor-pointer">Inicio</a></li>
          <li><a href="#ley1620" class="hover:text-white hover:translate-x-1 transition-all inline-block">Ley 1620</a></li>
          <li><a href="#" class="hover:text-white hover:translate-x-1 transition-all inline-block">Ruta de Atención</a></li>
          <li><a href="#" class="hover:text-white hover:translate-x-1 transition-all inline-block">Manual de Convivencia</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-black uppercase tracking-widest text-blue-400 mb-6">Soporte</h3>
        <ul class="space-y-4 text-sm text-gray-300">
          <li class="flex items-center gap-3">
            <span class="bg-blue-900/50 p-2 rounded-lg text-blue-400">📧</span>
            <span class="font-medium">soporte@proyectocero.com</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="bg-blue-900/50 p-2 rounded-lg text-blue-400">📍</span>
            <span class="font-medium">Puerto Tejada, Cauca</span>
          </li>
          <li class="flex items-center gap-3 text-green-400 italic">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Sistema Operativo 24/7</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-black uppercase tracking-widest text-blue-400 mb-6">Institucional</h3>
        <p class="text-xs text-gray-400 mb-4">¿Necesitas implementar C.E.R.O en tu institución?</p>
        <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-3 rounded-xl transition-all shadow-lg shadow-blue-900/20 uppercase text-xs">
          Contactar Asesor
        </button>
      </div>

    </div>

    <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-500">
      <p>© 2026 PROYECTO C.E.R.O. - Todos los derechos reservados</p>
      <div class="flex gap-6">
        <a href="#" class="hover:text-blue-400 transition-colors">Términos</a>
        <a href="#" class="hover:text-blue-400 transition-colors">Privacidad</a>
        <a href="#" class="hover:text-blue-400 transition-colors">Cookies</a>
      </div>
    </div>
  </div>

<button 
  @click="volverArriba" 
  class="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-2xl shadow-2xl hover:bg-blue-700 transition-all z-50"
>
  ↑
</button>

</footer>
            
    </div>

    <div v-else-if="cargando" class="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-blue-900/90 backdrop-blur-sm">
      <div class="w-24 h-24 border-8 border-blue-200 border-t-yellow-400 rounded-full animate-spin"></div>
      <p class="mt-6 text-white font-black text-xl uppercase tracking-widest animate-pulse">Procesando...</p>
    </div>

    <div v-else-if="ventana === 'login'" class="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div class="bg-white p-12 rounded-[3rem] shadow-xl w-full max-w-md border border-gray-100 text-center animate-fade-in">
        <h2 class="text-3xl font-black text-blue-900 mb-8 uppercase">Acceso C.E.R.O.</h2>
        <form @submit.prevent="iniciarSesion" class="space-y-6">
          <input v-model="formAuth.correo" type="text" placeholder="Correo o NIT" class="w-full p-5 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600" required>
          <input v-model="formAuth.password" type="password" placeholder="Contraseña" class="w-full p-5 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600" required>
          <button type="submit" class="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all uppercase shadow-lg">Ingresar</button>
          <button @click="ventana = 'inicio'" type="button" class="w-full mt-4 text-gray-400 font-bold text-xs uppercase">← Volver</button>
        </form>
      </div>
    </div>

    <div v-else-if="ventana === 'registroColegio'" class="min-h-screen flex items-center justify-center p-4 bg-blue-50">
      <div class="bg-white p-10 rounded-[3rem] shadow-xl w-full max-w-md border border-blue-100 text-center animate-fade-in">
        <h2 class="text-3xl font-black text-blue-900 mb-2 uppercase">Registro Institucional</h2>
        <p class="text-gray-500 mb-8 font-medium italic text-sm">Configura la plataforma para tu institución</p>
        <form @submit.prevent="registrarColegio" class="space-y-4">
          <input v-model="formColegio.nombre" type="text" placeholder="Nombre de la Institución" class="w-full p-4 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600" required>
          <input v-model="formColegio.rector" type="text" placeholder="Nombre del Rector(a)" class="w-full p-4 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600" required>
          <input v-model="formColegio.nit" type="text" placeholder="NIT / Identificación" class="w-full p-4 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600" required>
          <input v-model="formColegio.ciudad" type="text" placeholder="Ciudad" class="w-full p-4 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600" required>
          <input v-model="formColegio.password" type="password" placeholder="Contraseña de Administrador" class="w-full p-4 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600" required>
          
          <div class="text-left space-y-2 mb-4">
            <label class="text-[10px] font-black text-blue-600 uppercase ml-2 tracking-widest">Código de Activación</label>
            <div class="relative">
              <input v-model="formColegio.codigoActivacion" type="password" placeholder="••••••••" class="w-full p-4 bg-blue-50 border-2 border-blue-100 rounded-2xl font-bold outline-none focus:border-blue-600 transition-all" required>
              <span class="absolute right-4 top-1/2 -translate-y-1/2 text-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </span>
            </div>
          </div>

          <button type="submit" class="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all uppercase shadow-lg">Crear Cuenta</button>
          <button @click="ventana = 'inicio'" type="button" class="w-full mt-2 text-gray-400 font-bold text-xs uppercase">← Cancelar</button>
        </form>
      </div>
    </div>


              <div v-else-if="ventana === 'cambioPassword'" class="min-h-screen flex items-center justify-center p-4 bg-yellow-50">
            <div class="bg-white p-12 rounded-[3rem] shadow-xl w-full max-w-md border border-yellow-100 text-center animate-fade-in">
              <div class="bg-yellow-100 text-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h2 class="text-2xl font-black text-blue-900 mb-2 uppercase">Seguridad Requerida</h2>
              <p class="text-sm text-gray-500 mb-8">Por ser tu primer ingreso, debes asignar una contraseña nueva y segura.</p>
              
              <form @submit.prevent="actualizarPasswordObligatoria" class="space-y-4">
                <input v-model="nuevaPass" type="password" placeholder="Nueva Contraseña" class="w-full p-5 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600" required>
                <input v-model="confirmarPass" type="password" placeholder="Confirmar Contraseña" class="w-full p-5 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600" required>
                <button type="submit" class="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all uppercase shadow-lg">Actualizar y Entrar</button>
              </form>
            </div>
          </div>


    <div v-else-if="ventana === 'sistema'" class="min-h-screen bg-gray-50 flex animate-fade-in">
      <aside class="w-64 bg-blue-900 text-white flex flex-col shadow-2xl shrink-0">
        <div class="p-8 text-center border-b border-blue-800">
          <h2 class="text-2xl font-black tracking-tighter uppercase">C.E.R.O.</h2>
          <p class="text-xs text-blue-300 font-bold mt-1 truncate">{{ usuarioActivo?.nombre_colegio }}</p>
        </div>
        <nav class="flex-1 p-4 space-y-2">
          <button @click="subTab = 'reportes'; obtenerReportes()" :class="subTab === 'reportes' ? 'bg-blue-700 shadow-inner' : 'hover:bg-blue-800'" class="w-full flex items-center gap-3 p-4 rounded-xl font-bold transition-all">📊 Mis Reportes</button>
          <button @click="subTab = 'nuevoReporte'" :class="subTab === 'nuevoReporte' ? 'bg-blue-700 shadow-inner' : 'hover:bg-blue-800'" class="w-full flex items-center gap-3 p-4 rounded-xl font-bold transition-all">📝 Nuevo Reporte</button>
          <button v-if="usuarioActivo?.rol === 'admin' || usuarioActivo?.rol === 'rector'" @click="subTab = 'usuarios'; cargarUsuarios()" :class="subTab === 'usuarios' ? 'bg-blue-700 shadow-inner' : 'hover:bg-blue-800'" class="w-full flex items-center gap-3 p-4 rounded-xl font-bold transition-all">👥 Usuarios</button>
        </nav>
        <div class="p-4 border-t border-blue-800">
          <button @click="cerrarSesion" class="w-full p-4 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">🚪 Salir</button>
        </div>
      </aside>

      <main class="flex-1 p-8 overflow-y-auto">
        <div class="mb-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2rem] shadow-lg animate-fade-in relative overflow-hidden">
          <div class="absolute right-[-20px] top-[-20px] opacity-10">
            <svg width="200" height="200" fill="white" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2z"/></svg>
          </div>
          <div class="relative z-10">
            <p class="text-blue-100 font-black uppercase text-[10px] tracking-[0.2em] mb-1">Sesión Iniciada</p>
            <h2 class="text-2xl md:text-3xl font-black text-white leading-tight">
              {{ obtenerSaludo }}, <span class="text-yellow-400">{{ usuarioActivo?.nombre }}</span>
            </h2>
            <p class="text-blue-50 text-xs font-medium mt-2 italic">
              Hoy es {{ nuevaFecha }} · Construyendo un entorno escolar seguro.
            </p>
          </div>
        </div>

        <header class="flex justify-between items-center mb-10">
          <h1 class="text-3xl font-black text-blue-900 uppercase">Panel de Gestión</h1>
          <div class="flex items-center gap-4">
            <span class="text-xs font-black bg-blue-100 text-blue-600 px-4 py-2 rounded-full uppercase tracking-widest">{{ usuarioActivo?.rol }}</span>
          </div>
        </header>

        <section v-if="subTab === 'reportes'" class="animate-fade-in space-y-8">
          <div class="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-left">
                <thead class="bg-gray-50 text-gray-400 text-xs uppercase font-black">
                  <tr>
                    <th class="p-6">ID</th>
                    <th class="p-6">Tipo</th>
                    <th v-if="usuarioActivo?.rol === 'admin' || usuarioActivo?.rol === 'rector'" class="p-6">Estudiante</th>
                    <th class="p-6">Descripción</th>
                    <th class="p-6">Estado</th>
                    <th v-if="usuarioActivo?.rol === 'admin' || usuarioActivo?.rol === 'rector'" class="p-6 text-center">Gestión</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-50">
                  <tr v-for="reporte in reportes" :key="reporte.id" class="hover:bg-blue-50/30 transition-all">
                    <td class="p-6 font-bold text-gray-400">#{{ reporte.id }}</td>
                       <td class="p-6">
                        <span :class="{
                          'text-red-600 bg-red-50 border-red-100': reporte.tipo === 'Tipo III',
                          'text-orange-600 bg-orange-50 border-orange-100': reporte.tipo === 'Tipo II',
                          'text-blue-600 bg-blue-50 border-blue-100': reporte.tipo === 'Tipo I',
                          'text-gray-500 bg-gray-100 border-gray-200 animate-pulse': reporte.tipo === 'Por Clasificar'
                        }" class="px-3 py-1 rounded-lg border font-black uppercase text-[10px] tracking-tighter">
                          {{ reporte.tipo }}
                        </span>
                      </td>
                    <td v-if="usuarioActivo?.rol === 'admin' || usuarioActivo?.rol === 'rector'" class="p-6">
                      <div class="flex flex-col">
                        <span class="font-black text-blue-900 text-sm uppercase">{{ reporte.nombre_usuario || 'Anónimo' }}</span>
                        <span class="text-[10px] text-gray-400 font-bold italic">Remitente</span>
                      </div>
                    </td>
                    <td class="p-6 text-gray-600 max-w-xs truncate font-medium">{{ reporte.descripcion }}</td>
                    <td class="p-6">
                      <span :class="{'bg-orange-100 text-orange-600': reporte.estado === 'nuevo', 'bg-blue-100 text-blue-600': reporte.estado === 'revision', 'bg-green-100 text-green-600': reporte.estado === 'resuelto'}" class="px-3 py-1 rounded-full text-[10px] font-black uppercase italic">{{ reporte.estado }}</span>
                    </td>
                    <td class="p-6 text-center">
                      <div class="flex justify-center gap-2">
                        <button v-if="reporte.estado === 'nuevo' && reporte.editado != 1" @click="reporteParaEditar = {...reporte}; mostrarModalEdicion = true" class="p-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-all shadow-sm" title="Corregir Reporte">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        </button>
                        <span v-else-if="reporte.editado == 1 && reporte.estado === 'nuevo'" class="text-[9px] font-bold text-gray-400 uppercase">Editado</span>
                        <button v-if="usuarioActivo?.rol === 'admin' || usuarioActivo?.rol === 'rector'" @click="abrirSeguimiento(reporte)" class="bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold text-xs hover:bg-indigo-700 transition-all uppercase">⚙️ Gestionar</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section v-if="subTab === 'usuarios'" class="animate-fade-in space-y-8">
          <div class="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h2 class="text-xl font-black text-blue-900 uppercase">Gestión de Usuarios</h2>
            <input v-model="filtroNombre" type="text" placeholder="Buscar usuario..." class="p-3 bg-gray-50 border-2 rounded-xl text-sm font-bold outline-none focus:border-blue-500">
          </div>

          <div class="bg-indigo-50 p-8 rounded-[2.5rem] border-2 border-dashed border-indigo-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-4">
              <div class="bg-indigo-600 text-white p-3 rounded-2xl shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <div>
                <h3 class="font-black text-indigo-900 uppercase text-sm">Carga Masiva de Estudiantes</h3>
                <p class="text-[10px] text-indigo-400 font-bold uppercase italic tracking-widest">Columnas: nombre, correo, grado, grupo</p>
              </div>
            </div>
            <div class="flex flex-col items-end gap-2">
              <input type="file" @change="procesarExcel" accept=".xlsx, .xls" class="text-xs text-gray-500 file:mr-4 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-xs file:font-black file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 cursor-pointer transition-all" />
              <button @click="descargarPlantilla" class="text-[10px] font-black text-indigo-500 underline uppercase tracking-widest hover:text-indigo-700">Descargar Plantilla .xlsx</button>
            </div>
          </div>

          <div class="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-left">
                <thead class="bg-gray-50 text-gray-400 text-xs uppercase font-black">
                  <tr>
                    <th class="p-6">ID</th>
                    <th class="p-6">Nombre</th>
                    <th class="p-6">Correo / ID</th>
                    <th class="p-6">Rol</th>
                    <th class="p-6">Grado</th>
                    <th class="p-6 text-center">Acción</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-50">
                  <tr v-for="usuario in usuariosFiltrados" :key="usuario.id" class="hover:bg-blue-50/30 transition-all">
                    <td class="p-6 font-bold text-gray-400">#{{ usuario.id }}</td>
                    <td class="p-6 font-black text-blue-900">{{ usuario.nombre }}</td>
                    <td class="p-6 font-medium text-gray-600">{{ usuario.correo }}</td>
                    <td class="p-6">
                      <span class="px-3 py-1 rounded-lg bg-blue-100 text-blue-600 font-black text-[10px] uppercase">{{ usuario.rol }}</span>
                    </td>
                    <td class="p-6 text-gray-500 font-bold">{{ usuario.grado || 'N/A' }}</td>
                    <td class="p-6 text-center">

                      <button 
                          v-if="usuario.rol === 'estudiante' && usuario.id !== usuarioActivo?.id"
                          @click="eliminarUsuario(usuario.id, usuario.nombre)" 
                          class="text-red-400 hover:text-red-600 p-2 transition-colors inline-flex items-center justify-center bg-red-50 rounded-lg hover:bg-red-100"
                          title="Eliminar Estudiante"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                    </button>
                        
                        <span v-else class="text-[9px] text-gray-300 font-bold uppercase italic tracking-tighter">
                          🔒 Protegido
                        </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section v-if="subTab === 'nuevoReporte'" class="max-w-2xl animate-slide-up">
          <div class="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
            <h2 class="text-2xl font-black text-blue-900 mb-6 uppercase">Nuevo Reporte</h2>
            <div class="space-y-4">
                <div v-if="usuarioActivo?.rol !== 'estudiante'" class="space-y-2">
                  <label class="text-[10px] font-black text-gray-400 uppercase ml-2">Clasificación de la Situación (Ley 1620)</label>
                  <select v-model="form.tipo" class="w-full p-4 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-500 appearance-none">
                    <option value="Tipo I">Situación Tipo I (Conflictos esporádicos)</option>
                    <option value="Tipo II">Situación Tipo II (Acoso / Bullying sistemático)</option>
                    <option value="Tipo III">Situación Tipo III (Presunto Delito / Agresión Grave)</option>
                  </select>
                </div>
                <div v-else class="p-4 bg-blue-50 rounded-2xl border border-blue-100 mb-4">
                  <p class="text-[11px] text-blue-700 font-bold uppercase tracking-tight italic">
                    ℹ️ El Comité de Convivencia clasificará este caso tras analizar tu reporte.
                  </p>
                </div>
              <input v-model="form.ubicacion" type="text" placeholder="¿Dónde ocurrió? (Ej: Salón, Patio, Baños)" class="w-full p-4 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-500">
              <textarea v-model="form.descripcion" rows="5" placeholder="Descripción detallada de los hechos..." class="w-full p-4 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-500"></textarea>
              <button @click="enviarReporte" class="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 shadow-lg transition-all">Enviar Reporte</button>
            </div>
          </div>
        </section>
      </main>
    </div>

    <div v-if="mostrarModalSeguimiento" class="fixed inset-0 z-[110] flex items-center justify-center bg-blue-900/80 backdrop-blur-sm p-4">
      <div class="bg-white w-full max-w-2xl rounded-[2.5rem] p-10 shadow-2xl animate-slide-up max-h-[90vh] overflow-y-auto">
        <h3 class="text-2xl font-black text-blue-900 mb-2 uppercase">Gestión de Intervención</h3>
        <div class="space-y-6 mt-4">
          <div>
            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest">Historial de Seguimiento</label>
            <div class="bg-gray-50 p-5 rounded-2xl mt-2 text-sm border whitespace-pre-wrap text-gray-600 italic">{{ reporteSeleccionado.seguimiento || 'Sin registros previos.' }}</div>
          </div>
          <div>
            <label class="text-[10px] font-black text-blue-600 uppercase tracking-widest">Nuevas Acciones y Compromisos</label>
            <textarea v-model="nuevaIntervencion" rows="5" class="w-full p-5 bg-blue-50/50 border-2 border-blue-100 rounded-2xl font-bold outline-none focus:border-blue-500 mt-2" placeholder="Describa los compromisos alcanzados..."></textarea>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label class="block text-[10px] font-black text-orange-600 uppercase tracking-widest">Definir Clasificación</label>
                  <select v-model="reporteSeleccionado.tipo" class="w-full p-4 bg-orange-50/50 border-2 border-orange-100 rounded-2xl text-sm font-bold text-blue-900 appearance-none focus:border-orange-500 outline-none transition-all">
                    <option value="Por Clasificar">⚠️ Pendiente de Clasificar</option>
                    <option value="Tipo I">🔵 Tipo I (Conflicto)</option>
                    <option value="Tipo II">🟠 Tipo II (Acoso/Bullying)</option>
                    <option value="Tipo III">🔴 Tipo III (Delito)</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label class="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Estado del Proceso</label>
                  <select v-model="reporteSeleccionado.estado" class="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl text-sm font-bold text-blue-900 appearance-none focus:border-blue-500 transition-all outline-none">
                    <option value="nuevo">🟠 Nuevo (Sin atender)</option>
                    <option value="revision">🔵 En Revisión (Abierto)</option>
                    <option value="resuelto">🟢 Solucionado (Cerrado)</option>
                  </select>
                </div>
              </div>
        </div>
        <div class="flex gap-4 mt-10">
          <button @click="mostrarModalSeguimiento = false" class="flex-1 py-4 font-black text-gray-400 uppercase text-xs">Cancelar</button>
          <button @click="guardarYGenerarActa" class="flex-[2] bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase shadow-lg hover:bg-blue-700 transition-all text-sm">Guardar y Descargar Acta</button>
        </div>
      </div>
    </div>

    <div v-if="mostrarModalEdicion" class="fixed inset-0 z-[200] flex items-center justify-center bg-blue-900/80 backdrop-blur-sm p-4">
      <div class="bg-white w-full max-w-xl rounded-[2.5rem] p-10 shadow-2xl">
        <h3 class="text-2xl font-black text-blue-900 mb-2 uppercase">Corregir Reporte #{{ reporteParaEditar.id }}</h3>
        <p class="text-sm text-gray-500 mb-6 font-medium italic">Solo puedes editar reportes en estado "nuevo".</p>
        <div class="space-y-4">
          <label class="text-[10px] font-black text-gray-400 uppercase ml-2">Descripción del suceso</label>
          <textarea v-model="reporteParaEditar.descripcion" rows="5" class="w-full p-5 bg-gray-50 border-2 rounded-2xl font-bold outline-none focus:border-blue-600"></textarea>
        </div>
        <div class="flex gap-4 mt-8">
          <button @click="mostrarModalEdicion = false" class="flex-1 py-4 font-black text-gray-400 uppercase text-xs">Cancelar</button>
          <button @click="guardarEdicionBackend" class="flex-[2] bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase shadow-lg hover:bg-blue-700 transition-all text-sm">Actualizar Reporte</button>
        </div>
      </div>
    </div>

    <div style="display: none;">
      <div id="molde-acta-pdf" class="p-10 bg-white text-black" style="width: 800px; font-family: sans-serif;">
        <div class="text-center border-b-2 border-blue-600 pb-4 mb-6">
          <h1 class="text-2xl font-bold uppercase">Acta de Seguimiento de Convivencia</h1>
          <p class="text-sm font-bold">{{ usuarioActivo?.nombre_colegio }}</p>
          <p class="text-xs italic">Proyecto C.E.R.O. - Puerto Tejada</p>
        </div>
        <div class="space-y-4" v-if="reporteSeleccionado">
          <p><strong>ID del Caso:</strong> #{{ reporteSeleccionado.id }}</p>
          <p><strong>Tipo de Situación:</strong> {{ reporteSeleccionado.tipo }}</p>
          <p><strong>Ubicación:</strong> {{ reporteSeleccionado.ubicacion }}</p>
          <hr>
          <p><strong>Descripción de los Hechos:</strong></p>
          <div class="p-4 bg-gray-50 border rounded italic">{{ reporteSeleccionado.descripcion }}</div>
          <p><strong>Acciones y Seguimiento Realizado:</strong></p>
          <div class="p-4 border rounded whitespace-pre-wrap">{{ reporteSeleccionado.seguimiento }}</div>
          <div class="mt-20 flex justify-between">
            <div class="border-t border-black w-48 text-center pt-2 text-xs">Firma Rector/Coordinador</div>
            <div class="border-t border-black w-48 text-center pt-2 text-xs">Firma Acudiente/Estudiante</div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <button 
  @click="mostrarChatbot = !mostrarChatbot" 
  type="button"
  class="fixed bottom-24 right-8 bg-blue-900 text-white p-4 rounded-full shadow-2xl z-[100] hover:scale-110 active:scale-95 transition-all cursor-pointer"
>
  <svg v-if="!mostrarChatbot" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
  <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>

<div v-show="mostrarChatbot" class="fixed bottom-40 right-8 w-80 bg-white shadow-2xl rounded-3xl overflow-hidden z-50 border border-gray-100 flex flex-col animate-fade-in">
  <div class="bg-blue-900 p-4 text-white">
    <h3 class="font-black text-sm uppercase tracking-tighter">Asistente C.E.R.O</h3>
    <p class="text-[10px] text-blue-300">En línea para ayudarte</p>
  </div>

  <div 
  ref="chatContainer" 
  class="h-64 overflow-y-auto p-4 space-y-3 bg-gray-50 text-xs"
  >
  <div v-for="(msg, idx) in historialChat" :key="idx" 
    :class="['p-3 rounded-2xl max-w-[80%] shadow-sm', msg.emisor === 'bot' ? 'bg-white text-gray-700 rounded-bl-none' : 'bg-blue-600 text-white ml-auto rounded-br-none']">
    {{ msg.texto }}
  </div>
</div>

  
  <div class="p-3 border-t bg-white flex gap-2">
  <input 
    v-model="mensajeChat" 
    @keyup.enter="enviarDuda"
    type="text" 
    placeholder="Escribe tu duda..." 
    class="flex-1 text-xs p-2 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-600"
  >
  <button 
    @click="enviarDuda" 
    type="button"
    class="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
    </svg>
  </button>
</div>

</div>

</template>


<script>
import api from './services/api';
import * as XLSX from 'xlsx';
import html2pdf from 'html2pdf.js';
import Chart from 'chart.js/auto';
import 'aos/dist/aos.css';

export default {
  data() {
    return {

    mostrarChatbot: false,
    mensajeChat: '',
    historialChat: [
      { emisor: 'bot', texto: '¡Hola! Soy el asistente de C.E.R.O. ¿En qué puedo ayudarte hoy?' }
    ],
    // Base de conocimiento para respuestas rápidas
    respuestasBot: {
      "ley 1620": "La Ley 1620 de 2013 crea el Sistema Nacional de Convivencia Escolar para prevenir el bullying y promover los derechos humanos.",
      "reportar": "Para reportar un caso, ve a la sección 'Reportar' en tu panel, describe lo sucedido y selecciona la ubicación.",
      "anonimo": "Sí, todos los reportes pueden ser anónimos para proteger tu identidad y seguridad.",
      "password": "Si olvidaste tu contraseña, debes contactar al administrador o rector de tu institución para un reinicio."
    },

      mostrarBotonArriba: false,
      // Datos del Carrusel
    indiceCarrusel: 0,
    imagenesCarrusel: [
          'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000',
          'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000',
          'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000'
        ],
    frasesCarrusel: [
      "Unidos por una convivencia en paz",
      "Tu voz es tu poder, ¡reporta!",
      "En este colegio, todos somos amigos"
    ],
      // Modales y Edición
      mostrarModalEdicion: false,
      reporteParaEditar: { id: null, descripcion: '' },
      mostrarModalSeguimiento: false,
      reporteSeleccionado: null,
      
      // Datos de usuario y navegación
      ventana: 'inicio', 
      subTab: 'reportes', 
      usuarioActivo: null,
      cargando: false,
      
      // Listas
      reportes: [],
      listaUsuarios: [],
      
      // Filtros y Formularios
      filtroNombre: '',
      nuevaClave: '',
      confirmarClave: '',
      nuevaIntervencion: '',
      formColegio: { nit: '', nombre: '', password: '', rector: '', ciudad: '', codigoActivacion: '' },
      formAuth: { correo: '', password: '' },
      form: { 
        tipo: 'Tipo I', 
        descripcion: '', 
        ubicacion: '', 
        anonimo: true 
      }
    }
  },

  computed: {
    sinAtender() { return this.reportes.filter(r => r.estado === 'nuevo').length; },
    enRevision() { return this.reportes.filter(r => r.estado === 'revision').length; },
    resueltos() { return this.reportes.filter(r => r.estado === 'resuelto').length; },

   
    usuariosFiltrados() {
      if (!this.filtroNombre) return this.listaUsuarios;
      const buscar = this.filtroNombre.toLowerCase();
      return this.listaUsuarios.filter(u => 
        u.nombre.toLowerCase().includes(buscar) || 
        u.correo.toLowerCase().includes(buscar)
      );
    },

    obtenerSaludo() {
      const hora = new Date().getHours();
      if (hora >= 5 && hora < 12) return "¡Buenos días!";
      if (hora >= 12 && hora < 18) return "¡Buenas tardes!";
      return "¡Buenas noches!";
    },

    nuevaFecha() {
      const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date().toLocaleDateString('es-ES', opciones);
    }
  },

  // Agrega esto justo después de 'computed' y antes de 'mounted'
          watch: {
            // Observamos 'ventana' para renderizar la gráfica cuando sea 'inicio'
            ventana(nuevaVentana) {
              if (nuevaVentana === 'inicio') {
                this.$nextTick(() => {
                  this.renderizarGrafica();
                });
              }
            },
            subTab(nuevoValor) {
              if (nuevoValor === 'usuarios') {
                this.cargarUsuarios();
              }
            }
          },

  mounted() {

   this.controlarScrollRef = this.controlarScroll.bind(this);
    window.addEventListener('scroll', this.controlarScrollRef);

    const guardado = localStorage.getItem('usuarioProyecto');
    if (guardado) {
      this.usuarioActivo = JSON.parse(guardado);
      this.ventana = 'sistema';
      this.obtenerReportes();
    } else {
      this.$nextTick(() => {
        this.renderizarGrafica();
      });
    }

    setInterval(() => {
      this.indiceCarrusel = (this.indiceCarrusel + 1) % this.imagenesCarrusel.length;
    }, 5000);
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.controlarScrollRef);
  },

  methods: {

    
            enviarDuda() {
  // 1. Validar que el mensaje no esté vacío
  if (!this.mensajeChat || !this.mensajeChat.trim()) return;

  // 2. Agregar mensaje del usuario al historial
  this.historialChat.push({ 
    emisor: 'usuario', 
    texto: this.mensajeChat 
  });
  
  const consulta = this.mensajeChat.toLowerCase();
  let respuesta = "Lo siento, no entiendo esa pregunta. Prueba con: 'Ley 1620', 'reportar' o 'anonimato'.";

  // 3. Lógica de respuestas (Asegúrate que respuestasBot esté en data)
  const baseConocimiento = {
    "ley 1620": "La Ley 1620 de 2013 fortalece la convivencia escolar y previene la violencia en las instituciones.",
    "reportar": "Haz clic en el botón 'Reportar' de tu panel, llena los datos y dale a enviar.",
    "anonimo": "¡Claro! Los reportes pueden ser anónimos para garantizar tu tranquilidad.",
    "hola": "¡Hola! Soy el asistente de C.E.R.O. ¿En qué puedo ayudarte?"
  };

  // Buscar coincidencia
  for (let clave in baseConocimiento) {
    if (consulta.includes(clave)) {
      respuesta = baseConocimiento[clave];
      break;
    }
  }

  // 4. Limpiar el input inmediatamente
  const mensajeGuardado = this.mensajeChat; // Opcional por si quieres usarlo luego
  this.mensajeChat = '';

  // 5. Respuesta del Bot con pequeño retraso (UX)
  setTimeout(() => {
    this.historialChat.push({ 
      emisor: 'bot', 
      texto: respuesta 
    });
    
    // Scroll al fondo automático
    this.$nextTick(() => {
      const container = this.$refs.chatContainer;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    });
  }, 500);
},
  toggleChat() {
    this.mostrarChatbot = !this.mostrarChatbot;
  },


            beforeUnmount() {
    window.removeEventListener('scroll', this.controlarScroll);
  },


    controlarScroll() {
    // Usamos window.pageYOffset como alternativa más compatible
    const posicion = window.scrollY || window.pageYOffset;
    
    if (posicion > 300) {
      this.mostrarBotonArriba = true;
    } else {
      this.mostrarBotonArriba = false;
    }
    
  },

volverArriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

    limpiarFormulario() {
  this.form = {
    ubicacion: '',
    descripcion: '',
    // agrega aquí cualquier otro campo que tenga tu objeto form
  };
},
    
    // --- GESTIÓN DE REPORTES (EDICIÓN Y SEGUIMIENTO) ---

    renderizarGrafica() {
    const canvas = document.getElementById('graficaBullying');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Destruir instancia previa si existe para evitar errores de renderizado
    if (window.miGrafica) {
      window.miGrafica.destroy();
    }

    window.miGrafica = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Acoso Verbal', 'Exclusión Social', 'Ciberacoso', 'Agresión Física'],
        datasets: [{
          label: '% de estudiantes que reportan casos (Colombia)',
          // Datos basados en informes de convivencia escolar en Colombia
          data: [32, 26, 18, 12], 
          backgroundColor: ['#4f46e5', '#818cf8', '#6366f1', '#4338ca'],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true, position: 'bottom' }
        },
        scales: {
          y: { 
            beginAtZero: true,
            max: 100,
            title: { display: true, text: 'Porcentaje (%)' }
          }
        }
      }
    });
  },


    prepararEdicion(reporte) {
      this.reporteParaEditar = { ...reporte }; 
      this.mostrarModalEdicion = true;
    },

    async guardarEdicionBackend() {
      if (!this.reporteParaEditar.descripcion.trim()) return;
      
      this.cargando = true;
      try {
        const response = await api.put(`/reportes/${this.reporteParaEditar.id}`, {
          descripcion: this.reporteParaEditar.descripcion
        });

        if (response.data.success) {
          const index = this.reportes.findIndex(r => r.id === this.reporteParaEditar.id);
          if (index !== -1) {
            this.reportes[index].descripcion = this.reporteParaEditar.descripcion;
            this.reportes[index].editado = 1; 
          }
          this.mostrarModalEdicion = false;
          alert("✅ Reporte corregido exitosamente.");
        }
      } catch (error) {
        alert("❌ Error al guardar: " + (error.response?.data?.message || "Servidor no responde"));
      } finally {
        this.cargando = false;
      }
    },

    abrirSeguimiento(reporte) {
      this.reporteSeleccionado = reporte;
      this.nuevaIntervencion = '';
      this.mostrarModalSeguimiento = true;
    },

  async guardarYGenerarActa() {
  if (!this.nuevaIntervencion.trim()) {
    alert("Por favor, describe las acciones o compromisos antes de guardar.");
    return;
  }

  try {
    this.cargando = true;

    // 1. Preparamos el nuevo historial
    const fechaActual = new Date().toLocaleDateString();
    const seguimientoActualizado = (this.reporteSeleccionado.seguimiento || '') + 
                                  `\n\n[${fechaActual}]: ${this.nuevaIntervencion}`;

    // 2. Guardamos en la base de datos
    await api.put(`/reportes/${this.reporteSeleccionado.id}`, {
      seguimiento: seguimientoActualizado,
      estado: this.reporteSeleccionado.estado,
      tipo: this.reporteSeleccionado.tipo
    });

    // 3. Actualizamos el objeto local inmediatamente para el PDF
    this.reporteSeleccionado.seguimiento = seguimientoActualizado;

    // 4. Refrescamos la tabla principal
    await this.obtenerReportes();

    // 5. Verificación de descarga corregida
    if (this.reporteSeleccionado.estado === 'resuelto') {
      this.$nextTick(() => {
        if (typeof this.descargarActa === 'function') {
          this.descargarActa(this.reporteSeleccionado); 
        } else {
          console.error("No se encontró la función descargarActa");
        }
      });
    } else {
      alert("Gestión guardada con éxito en el historial.");
    }

    // 6. Limpieza y cierre (Ahora sí se ejecutará correctamente)
    this.mostrarModalSeguimiento = false;
    this.nuevaIntervencion = '';

  } catch (error) {
    console.error("Error al procesar la gestión:", error);
    alert("Error de servidor. Verifica la consola para más detalles.");
  } finally {
    this.cargando = false;
  }
},

    // --- AUTENTICACIÓN Y SESIÓN ---
   async iniciarSesion() {
  try {
    this.cargando = true;
    const res = await api.post('/login', this.formAuth);

    if (res.data.success) {
      // --- CAMBIO AQUÍ: LIMPIEZA TOTAL ANTES DE ASIGNAR ---
      // Esto evita que veas reportes o usuarios del colegio anterior
      this.usuarios = []; 
      this.reportes = [];
      this.filtroNombre = '';
      this.form = { ubicacion: '', descripcion: '' }; // Limpia el formulario de reportes
      // ---------------------------------------------------

      const user = res.data.user;
      this.usuarioActivo = user;

      // 2. Verificamos si es su primer ingreso
      if (user.mustChangePassword) {
        this.ventana = 'cambioPassword'; 
        return;
      }

      // 3. Ingreso Normal
      localStorage.setItem('usuarioProyecto', JSON.stringify(user));
      
      this.ventana = 'sistema';
      
      // Cargamos solo lo que corresponde a este nuevo login
      this.obtenerReportes();
      
      // Si es admin, cargamos su lista de usuarios específica
      if (this.usuarioActivo.rol === 'admin' || this.usuarioActivo.rol === 'rector') {
        this.cargarUsuarios();
      }
    }
  } catch (error) {
    alert(error.response?.data?.message || "Error al ingresar");
  } finally {
    this.cargando = false;
  }
},

    cerrarSesion() {
      localStorage.removeItem('usuarioProyecto');
      this.usuarioActivo = null;
      this.formAuth.correo = '';
      this.formAuth.password = '';
      this.ventana = 'inicio';
    },

    async actualizarPasswordObligatoria() {
  if (this.nuevaPass !== this.confirmarPass) {
    alert("Las contraseñas no coinciden");
    return;
  }

  try {
    this.cargando = true;
    // IMPORTANTE: Verifica que la ruta sea '/usuarios/actualizar-password-inicial'
    // tal como la definimos en el backend hace un momento.
    const res = await api.post('/usuarios/actualizar-password-inicial', {
      usuarioId: this.usuarioActivo.id,
      nuevoPassword: this.nuevaPass
    });

    if (res.data.success) {
      alert("¡Contraseña actualizada con éxito!");
      
      // Actualizamos el objeto local para que mustChangePassword sea false
      this.usuarioActivo.mustChangePassword = false;
      localStorage.setItem('usuarioProyecto', JSON.stringify(this.usuarioActivo));
      this.nuevaPass = '';
      this.confirmarPass = '';
      this.ventana = 'sistema';
      this.obtenerReportes();
    }
  } catch (error) {
    console.error("Error capturado:", error.response?.data);
    alert(error.response?.data?.message || "Error al conectar con el servidor");
  } finally {
    this.cargando = false;
  }
},

    // --- GESTIÓN DE DATOS (REPORTES Y USUARIOS) ---

    async obtenerReportes() {
      if (!this.usuarioActivo?.colegio_id) return;
      try {
        const res = await api.get(`/estadisticas/${this.usuarioActivo.colegio_id}`, {
          params: {
            usuario_id: this.usuarioActivo.id,
            rol: this.usuarioActivo.rol
          }
        });
        this.reportes = res.data;
      } catch (e) { 
        console.error("Error al obtener reportes:", e); 
      }
    },

    async enviarReporte() {

      if (this.usuarioActivo.rol === 'estudiante') {
            this.form.tipo = 'Por Clasificar';
          }

      if (!this.form.descripcion) return alert("Escribe una descripción");
      try {
        const datosReporte = { 
          ...this.form, 
          usuario_id: this.usuarioActivo.id,
          colegio_id: this.usuarioActivo.colegio_id
        };
        await api.post('/reportes', datosReporte);
        alert("Reporte enviado con éxito ✅");
        this.form.descripcion = '';
        this.limpiarFormulario(); // <--- Esto limpia los campos inmediatamente
        this.subTab = 'reportes';
        this.obtenerReportes();
      } catch (e) { 
        alert("Error al enviar reporte"); 
      }
    },

    async cargarUsuarios() {
  if (!this.usuarioActivo?.colegio_id) {
    console.error("No hay colegio_id en el usuario activo");
    return;
  }
  
  this.cargando = true;
  try {
    const res = await api.get(`/usuarios/${this.usuarioActivo.colegio_id}`);
    console.log("Usuarios recibidos:", res.data); // Esto te dirá si el backend respondió
    this.listaUsuarios = res.data;
  } catch (e) {
    console.error("Error al cargar usuarios:", e);
    alert("No se pudieron cargar los usuarios");
  } finally {
    this.cargando = false;
  }
},

    async eliminarUsuario(id, nombre) {
      if (!confirm(`¿Seguro que deseas eliminar a ${nombre}?`)) return;
      try {
        this.cargando = true;
        const res = await api.delete(`/usuarios/${id}`);
        if (res.data.success) {
          alert("Usuario eliminado");
          await this.cargarUsuarios();
        }
      } catch (e) {
        alert("No se pudo eliminar");
      } finally {
        this.cargando = false;
      }
    },

    // --- REGISTRO INSTITUCIONAL ---

    async registrarColegio() {
      this.cargando = true;
      try {
        const LLAVE_DE_ACCESO = "CERO2026"; 
        if (this.formColegio.codigoActivacion !== LLAVE_DE_ACCESO) {
          alert("⚠️ Código de Activación no válido.");
          return;
        }
        const res = await api.post('/colegios/registro', this.formColegio);
        if (res.data.success) {
          alert("¡Institución registrada con éxito!");
          this.ventana = 'login'; 
          this.formColegio = { nit: '', nombre: '', password: '', rector: '', ciudad: '', codigoActivacion: '' };
        }
      } catch (e) {
        alert("Error en registro: " + (e.response?.data?.message || "Servidor no disponible"));
      } finally {
        this.cargando = false;
      }
    },

    // --- UTILIDADES (EXCEL Y PDF) ---

    async descargarActa(reporte) {
      try {
        this.cargando = true;
        this.reporteSeleccionado = reporte;
        await this.$nextTick();
        await new Promise(resolve => setTimeout(resolve, 800));
        const elemento = document.getElementById('molde-acta-pdf');
        if (!elemento) throw new Error("No se encontró el molde");

        const opciones = {
          margin: [0.5, 0.5],
          filename: `Acta_Caso_${reporte.id}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff', windowWidth: 800 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        await html2pdf().set(opciones).from(elemento).save();
      } catch (error) {
        alert("Error al generar PDF");
      } finally {
        this.cargando = false;
      }
    },

    async procesarExcel(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      this.cargando = true;

      reader.onload = async (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const listaEstudiantes = XLSX.utils.sheet_to_json(worksheet);

          const res = await api.post('/estudiantes/carga-masiva', {
            estudiantes: listaEstudiantes,
            colegio_id: this.usuarioActivo.colegio_id
          });

          alert(res.data.message);
          this.cargarUsuarios();
        } catch (error) {
          alert("Error al procesar archivo, los estudiantes ya existen en otra institucion");
        } finally {
          this.cargando = false;
          event.target.value = '';
        }
      };
      reader.readAsArrayBuffer(file);
    },

    descargarPlantilla() {
      const data = [{ nombre: "Ejemplo", correo: "ejemplo@colegio.edu.co", grado: "11", grupo: "A" }];
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Estudiantes");
      XLSX.writeFile(workbook, "Plantilla_CERO.xlsx");
    }
  }
}
</script>

<style scoped>
/* Contenedor del carrusel */
.relative {
  position: relative;
}

.overflow-hidden {
  overflow: hidden;
}

.w-full {
  width: 100%;
}

.h-64 {
  height: 16rem; /* Ajusta la altura a tu gusto */
}

/* Animación de desvanecimiento (Fade) */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Centrado de imágenes */
.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

.absolute {
  position: absolute;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>