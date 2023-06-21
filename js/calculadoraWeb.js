const app = Vue.createApp({
  data() {
    return {
      labelResultado: "",
      operacion: "",
      numText1: "",
      numText2: "",
      num1: 0,
      num2: 0,
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
      this.operacion === ""
        ? (this.numText1 += valor)
        : (this.numText2 += valor);
      this.labelResultado = this.operacion == "" ? this.numText1 : this.numText2

    },
    igual() {
      if (this.numText2 != "") {
        this.bol = true;
        this.num1 = parseFloat(this.numText1);
        this.num2 = parseFloat(this.numText2);
        this.labelResultado = this.resultado();
      }
    },
    resultado() {
      switch (this.operacion) {
        case "/":
          return this.dividir;
        case "x":
          return this.multiplicar;
        case "-":
          return this.restar;
        case "+":
          return this.sumar;
        default:
          return 0;
      }
    },
    guardarOperacion(op) {
      this.operacion = op;
    },
    reset() {
      this.operacion = "";
      this.numText1 = "";
      this.numText2 = "";
    },
  },
  computed: {
    dividir() {
      console.log("entro al computed dividir: ");
      return this.num1 / this.num2;
    },
    multiplicar() {
      console.log("entro al computed multiplicar: ");
      return this.num1 * this.num2;
    },
    restar() {
      console.log("entro al computed restar: ");
      return this.num1 - this.num2;
    },
    sumar() {
      console.log("entro al computed sumar: ");
      return this.num1 + this.num2;
    },
  },
});

app.mount("#app");
