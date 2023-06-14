const app = Vue.createApp({
  data() {
    return {
      fillNom: false,
      fillApe: false,
      fillCed: false,
      fillCiu: false,
      nombre: "",
      apellido: "",
      cedula: "",
      ciudad: "",
      myArray: [],
    };
  },

  methods: {
    addPerson() {
      if (this.nombre && this.apellido && this.cedula && this.ciudad) {
        this.myArray.push({
          nombre: this.nombre,
          apellido: this.apellido,
          cedula: this.cedula,
          ciudad: this.ciudad,
        });
        this.nombre = "";
        this.apellido = "";
        this.cedula = "";
        this.ciudad = "";

        this.fillNom = false;
        this.fillCed = false;
        this.fillCiu = false;
        this.fillApe = false;
      } else {
        this.fillNom = !this.nombre ? true : false;
        this.fillApe = !this.apellido ? true : false;
        this.fillCed = !this.cedula ? true : false;
        this.fillCiu = !this.ciudad ? true : false;
      }
    },
  },
});

app.mount("#app");
