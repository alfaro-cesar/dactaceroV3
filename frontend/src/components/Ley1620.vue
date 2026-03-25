<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 font-inter antialiased text-gray-900"
  >
    <!-- Navbar -->
    <nav
      class="flex justify-between items-center p-6 max-w-7xl mx-auto shadow-soft bg-white/80 backdrop-blur-sm rounded-2xl m-4 nav-premium"
    >
      <div class="flex items-center gap-3">
        <div
          class="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-3 rounded-xl font-black shadow-lg"
        >
          C
        </div>
        <span class="text-2xl font-black text-blue-900 tracking-tighter"
          >PROYECTO C.E.R.O.</span
        >
      </div>
      <button
        @click="$emit('volver')"
        class="flex items-center gap-2 px-6 py-3 font-bold text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-xl transition-all duration-300"
      >
        ← Volver al Inicio
      </button>
    </nav>

    <!-- Hero -->
    <header
      class="py-16 px-6 text-center max-w-5xl mx-auto animate-fade-in"
    >
      <span
        class="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6"
      >
        Marco Legal Colombiano
      </span>
      <h1
        class="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 mb-6 tracking-tight uppercase leading-tight animate-slide-up"
      >
        Ley 1620 de 2013
      </h1>
      <p class="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed font-medium max-w-4xl mx-auto">
        Sistema Nacional de Convivencia Escolar y Formación para el Ejercicio
        de los Derechos Humanos, la Educación para la Sexualidad y la
        Prevención y Mitigación de la Violencia Escolar.
      </p>
      <div class="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
    </header>

    <!-- Definición -->
    <section class="py-12 px-6 max-w-5xl mx-auto">
      <div
        class="bg-white p-10 rounded-3xl border border-blue-100 shadow-xl"
      >
        <div class="flex items-center gap-4 mb-6">
          <div
            class="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg"
          >
            📜
          </div>
          <h2 class="text-3xl font-black text-blue-900 uppercase tracking-tight">
            ¿Qué es la Ley 1620?
          </h2>
        </div>
        <p class="text-gray-700 leading-relaxed text-lg mb-4">
          La <strong>Ley 1620 del 15 de marzo de 2013</strong> fue expedida por el Congreso de
          la República de Colombia con el objetivo de crear mecanismos de
          prevención, protección, detección temprana y denuncia ante las
          autoridades competentes de todas aquellas conductas que atenten
          contra la convivencia escolar.
        </p>
        <p class="text-gray-700 leading-relaxed text-lg">
          Esta ley crea el <strong>Sistema Nacional de Convivencia Escolar</strong> y establece
          la ruta de atención integral para la convivencia escolar, definiendo
          las responsabilidades de cada actor del sistema educativo colombiano.
        </p>
      </div>
    </section>

    <!-- Objetivos -->
    <section class="py-12 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-black text-gray-900 uppercase tracking-tight mb-4">
          Objetivos Principales
        </h2>
        <div class="w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="objetivo in objetivos"
          :key="objetivo.titulo"
          class="group bg-white p-8 rounded-3xl border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
        >
          <div
            class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300"
          >
            {{ objetivo.icono }}
          </div>
          <h3 class="font-black text-gray-900 text-lg uppercase mb-3">
            {{ objetivo.titulo }}
          </h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            {{ objetivo.descripcion }}
          </p>
        </div>
      </div>
    </section>

    <!-- Artículos Principales -->
    <section
      class="py-16 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white rounded-3xl mx-4 my-12 shadow-2xl relative overflow-hidden"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div class="relative z-10 max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Artículos Clave
          </h2>
          <div class="w-24 h-1 bg-white rounded-full mx-auto"></div>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="articulo in articulos"
            :key="articulo.numero"
            class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-12 h-12 bg-yellow-400 text-blue-900 rounded-xl flex items-center justify-center font-black text-sm shrink-0 shadow-lg"
              >
                Art.<br />{{ articulo.numero }}
              </div>
              <div>
                <h3 class="font-black text-white text-base uppercase mb-2">
                  {{ articulo.titulo }}
                </h3>
                <p class="text-blue-100 text-sm leading-relaxed">
                  {{ articulo.descripcion }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Clasificación de Situaciones -->
    <section class="py-16 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-black text-gray-900 uppercase tracking-tight mb-4">
          Clasificación de Situaciones
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          El Decreto 1965 de 2013, reglamentario de la Ley 1620, establece
          tres tipos de situaciones que afectan la convivencia escolar.
        </p>
        <div class="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-4"></div>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          class="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl border border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
        >
          <div class="text-center mb-6">
            <div
              class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300"
            >
              I
            </div>
            <h3 class="font-black text-gray-900 mb-3 uppercase text-xl">
              Situación Tipo I
            </h3>
            <div class="w-16 h-1 bg-blue-500 rounded-full mx-auto mb-4"></div>
          </div>
          <p class="text-blue-700 font-bold italic text-center mb-3">
            Conflictos esporádicos
          </p>
          <p class="text-gray-700 leading-relaxed text-center text-sm">
            Conflictos manejables que no generan daños al cuerpo o a la salud
            física o mental. Se resuelven mediante el diálogo y la mediación
            entre las partes.
          </p>
        </div>

        <div
          class="group bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl border border-orange-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
        >
          <div class="text-center mb-6">
            <div
              class="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300"
            >
              II
            </div>
            <h3 class="font-black text-gray-900 mb-3 uppercase text-xl">
              Situación Tipo II
            </h3>
            <div class="w-16 h-1 bg-orange-500 rounded-full mx-auto mb-4"></div>
          </div>
          <p class="text-orange-700 font-bold italic text-center mb-3">
            Acoso o Ciberacoso
          </p>
          <p class="text-gray-700 leading-relaxed text-center text-sm">
            Conductas que no constituyen delitos pero que causan daño al
            cuerpo o a la salud física o mental. Incluye el acoso escolar y
            el ciberacoso de manera reiterada.
          </p>
        </div>

        <div
          class="group bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-3xl border border-red-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
        >
          <div class="text-center mb-6">
            <div
              class="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300"
            >
              III
            </div>
            <h3 class="font-black text-gray-900 mb-3 uppercase text-xl">
              Situación Tipo III
            </h3>
            <div class="w-16 h-1 bg-red-500 rounded-full mx-auto mb-4"></div>
          </div>
          <p class="text-red-700 font-bold italic text-center mb-3">
            Presunto Delito
          </p>
          <p class="text-gray-700 leading-relaxed text-center text-sm">
            Conductas que presuntamente constituyen delitos contra la libertad,
            integridad y formación sexual, referidos en el Código Penal.
            Requieren intervención de las autoridades judiciales.
          </p>
        </div>
      </div>
    </section>

    <!-- Derechos y Deberes -->
    <section class="py-16 px-6 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-10">
        <!-- Derechos -->
        <div class="bg-white p-10 rounded-3xl border border-green-100 shadow-xl">
          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg"
            >
              ✅
            </div>
            <h2 class="text-2xl font-black text-gray-900 uppercase tracking-tight">
              Derechos de los Estudiantes
            </h2>
          </div>
          <ul class="space-y-4">
            <li
              v-for="derecho in derechos"
              :key="derecho"
              class="flex items-start gap-3"
            >
              <span
                class="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-black text-xs shrink-0 mt-0.5"
                >✓</span
              >
              <span class="text-gray-700 leading-relaxed text-sm">{{ derecho }}</span>
            </li>
          </ul>
        </div>

        <!-- Deberes -->
        <div class="bg-white p-10 rounded-3xl border border-blue-100 shadow-xl">
          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg"
            >
              📋
            </div>
            <h2 class="text-2xl font-black text-gray-900 uppercase tracking-tight">
              Deberes de los Estudiantes
            </h2>
          </div>
          <ul class="space-y-4">
            <li
              v-for="deber in deberes"
              :key="deber"
              class="flex items-start gap-3"
            >
              <span
                class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-black text-xs shrink-0 mt-0.5"
                >→</span
              >
              <span class="text-gray-700 leading-relaxed text-sm">{{ deber }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA Volver -->
    <section class="py-16 px-6 text-center">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-black text-gray-900 uppercase mb-4">
          ¿Listo para actuar?
        </h2>
        <p class="text-gray-600 mb-8 leading-relaxed">
          Accede al sistema C.E.R.O. y contribuye a construir un entorno
          escolar seguro, basado en los principios de la Ley 1620.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button
            @click="$emit('volver')"
            class="bg-white text-gray-800 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200"
          >
            ← Volver al Inicio
          </button>
          <button
            @click="$emit('acceder')"
            class="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-blue-900 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Acceder al Sistema
          </button>
        </div>
      </div>
    </section>

    <!-- Footer mínimo -->
    <footer class="bg-[#0f172a] text-white py-8 mt-8 border-t-4 border-blue-600">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <p class="text-xs font-black uppercase tracking-widest text-gray-500">
          © 2026 PROYECTO C.E.R.O. — Ley 1620 de 2013 — Todos los derechos reservados
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Ley1620",
  emits: ["volver", "acceder"],
  data() {
    return {
      objetivos: [
        {
          icono: "🛡️",
          titulo: "Proteger la Integridad",
          descripcion:
            "Garantizar el derecho a la educación en un ambiente sano y libre de violencia, protegiendo la integridad física, psicológica y sexual de los estudiantes.",
        },
        {
          icono: "🤝",
          titulo: "Fomentar la Convivencia",
          descripcion:
            "Promover y fortalecer la formación ciudadana y el ejercicio de los derechos humanos, sexuales y reproductivos de los estudiantes.",
        },
        {
          icono: "⚖️",
          titulo: "Prevenir la Violencia",
          descripcion:
            "Prevenir y mitigar la violencia escolar y el embarazo en la adolescencia, mediante la implementación de estrategias pedagógicas.",
        },
        {
          icono: "📢",
          titulo: "Atención Oportuna",
          descripcion:
            "Establecer mecanismos de detección temprana y denuncia de conductas que atenten contra la convivencia escolar.",
        },
        {
          icono: "🏫",
          titulo: "Responsabilidad Institucional",
          descripcion:
            "Definir las responsabilidades de los establecimientos educativos, las familias y la sociedad en la formación para la convivencia.",
        },
        {
          icono: "📊",
          titulo: "Sistema de Información",
          descripcion:
            "Crear el Sistema de Información Unificado de Convivencia Escolar para el seguimiento y evaluación de la convivencia en las instituciones.",
        },
      ],
      articulos: [
        {
          numero: "1",
          titulo: "Objeto de la Ley",
          descripcion:
            "Crea el Sistema Nacional de Convivencia Escolar y Formación para los Derechos Humanos, la Educación para la Sexualidad y la Prevención y Mitigación de la Violencia Escolar.",
        },
        {
          numero: "5",
          titulo: "Comité Nacional",
          descripcion:
            "Crea el Comité Nacional de Convivencia Escolar como instancia de coordinación, asesoría y seguimiento del Sistema Nacional de Convivencia Escolar.",
        },
        {
          numero: "12",
          titulo: "Comité Escolar",
          descripcion:
            "Establece el Comité de Convivencia Escolar en cada institución educativa, conformado por el rector, docentes, padres de familia y estudiantes.",
        },
        {
          numero: "21",
          titulo: "Ruta de Atención",
          descripcion:
            "Define la Ruta de Atención Integral para la Convivencia Escolar con cuatro componentes: promoción, prevención, atención y seguimiento.",
        },
        {
          numero: "36",
          titulo: "Clasificación de Situaciones",
          descripcion:
            "Clasifica las situaciones que afectan la convivencia escolar en tres tipos, estableciendo los protocolos de atención para cada uno.",
        },
        {
          numero: "39",
          titulo: "Protocolos de Atención",
          descripcion:
            "Establece los protocolos de atención para cada tipo de situación, incluyendo los tiempos de respuesta y las acciones a seguir por parte de la institución.",
        },
      ],
      derechos: [
        "Recibir una educación de calidad en un ambiente sano y libre de violencia.",
        "Ser protegido contra toda forma de agresión, acoso, discriminación o violencia escolar.",
        "Recibir atención integral cuando sea víctima de situaciones que afecten la convivencia.",
        "Participar activamente en la construcción del Manual de Convivencia.",
        "Acceder a mecanismos de denuncia confidenciales y seguros.",
        "Ser escuchado y tener representación ante el Comité de Convivencia Escolar.",
        "Recibir orientación psicológica y apoyo emocional cuando lo requiera.",
      ],
      deberes: [
        "Respetar a todos los miembros de la comunidad educativa sin distinción alguna.",
        "Contribuir activamente a la construcción de un ambiente escolar pacífico.",
        "Reportar situaciones de violencia o acoso de las que sea testigo.",
        "Cumplir con el Manual de Convivencia de la institución educativa.",
        "Participar en los programas de formación en convivencia y derechos humanos.",
        "Abstenerse de realizar cualquier conducta que atente contra la convivencia escolar.",
        "Colaborar con las autoridades escolares en la resolución pacífica de conflictos.",
      ],
    };
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in { animation: fadeIn 0.8s ease-out; }
.animate-slide-up { animation: slideUp 0.6s ease-out; }
.shadow-soft { box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); }
.nav-premium { backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); }
</style>
