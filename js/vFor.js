const arreglo = [
  { nombre: "Paul", apellido: "Merizalde" },
  { nombre: "Leonardo", apellido: "Proaño" },
  { nombre: "Erick", apellido: "Chavez" },
  { nombre: "Cristian", apellido: "Arboleda" },
  { nombre: "Kevin", apellido: "Toapanta" },
  { nombre: "Christian", apellido: "Moya" },
  { nombre: "Sebastian", apellido: "Benavides" },
  { nombre: "Frank", apellido: "Condor" },
  { nombre: "Lenin", apellido: "Coronel" },
  { nombre: "David", apellido: "Yanez" },
];

console.log(arreglo);

const app = Vue.createApp({
  data() {
    return {
      miarreglo: arreglo,
      nombre: "Paul",
    };
  },

  methods: {
    agregarEstudiante(event) {
      console.log("Vamos agregar");
      console.log(this.nombre);
      console.log(event);
      if (event.charCode == "13") {
        console.log("presionó enter");
        const nuevoEstudiante = {
          nombre: this.nombre,
          apellido: "Nuevo Apellido",
        };
        this.miarreglo.unshift(nuevoEstudiante);
      } else {
        console.log("no es enter");
      }
    },
    agregarEstudiante2() {
      console.log("Vamos agregar");
      const nuevoEstudiante = {
        nombre: this.nombre,
        apellido: "Nuevo Apellido",
      };
      this.miarreglo.unshift(nuevoEstudiante);
    },
  },
});

app.mount("#app2");
