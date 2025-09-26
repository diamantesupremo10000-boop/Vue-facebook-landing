const { createApp } = Vue;

createApp({
  data() {
    return {
      titulo: "Haz crecer tu micro negocio con presencia digital",
      mensaje: "Este proyecto ayuda a micro negocios a atraer más clientes, mejorar su visibilidad y competir en el mundo digital.",
      mostrarBeneficios: false,
      beneficios: [
        "Atrae más clientes locales",
        "Crea confianza y credibilidad",
        "Promueve tus productos y servicios",
        "Compite en igualdad con negocios grandes",
        "Aumenta tus ventas en línea y en persona"
      ]
    };
  }
}).mount('#app');