console.log("Componente Vue");
console.log(Vue);

const app = Vue.createApp({
  //se configuran opciones (Options API)
  // template: `
  // <h1>HOLA MUNDO</h1>
  // <p>Desde Vue.JS</p>
  // <p>{{1+1}}</p>
  // `
  //opcion de Option API que me permite declarar propiedades reactivas
  //vincular informacion de la vista con mi programacion JavaScript
  data() {
    return {
      nombre: "Paul",
      apellido: "Merizalde",
      mensaje: "Hola mundo 2 desde Vue.JS",
    };
  },
  methods: {
    cambiarNombre() {
      console.log("cambiar nombre");
      this.nombre = "Leonardo";
    },
    cambiarApellido() {
      console.log("cambiar apellido");
      this.apellido = "Proaño";
    },
  },
});

app.mount("#app");
