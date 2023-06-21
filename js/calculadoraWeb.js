const app = Vue.createApp({
  data() {
    return {
      labelResultado: "",
      operacion: "",
      num1: "",
      num2: "",
      decimal: 0,
      bol: false,
    };
  },
  methods: {
    guardarValor(valor) {
      this.decimal = valor === "." ? this.decimal++ : this.decimal++;
      console.log(valor);
      if (this.bol) {
        this.reset();
        this.labelResultado = " ";
        this.bol = false;
      }
      if (this.decimal > 1 && valor === ".") valor = "";
      this.operacion === "" ? (this.num1 += valor) : (this.num2 += valor);
      this.labelResultado = parseFloat(this.operacion == "" ? this.num1 : this.num2);
    },
    igual() {
      if(this.num2 !=""){
        this.bol = true;
        this.num1 = parseFloat(this.num1);
        this.num2 = parseFloat(this.num2);
        console.log(this.resultado)
        this.labelResultado = this.resultado;
      }
    },
    guardarOperacion(op) {
      this.operacion = op;
    },
    reset() {
      this.operacion = "";
      this.num1 = "";
      this.num2 = "";
    },
  },
  computed: {
    resultado() {
      const num1 = parseFloat(this.num1);
      const num2 = parseFloat(this.num2);
      switch (this.operacion) {
        case "/":
          return num1 / num2;
        case "x":
          return num1 * num2;
        case "-":
          return num1 - num2;
        case "+":
          return num1 + num2;
        default:
          return 0;
      }
    },
  },
});

app.mount("#app");
