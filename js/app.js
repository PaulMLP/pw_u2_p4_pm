console.log("Componente Vue")
console.log(Vue)

const app = Vue.createApp({
    //se configuran opciones (Options API)
    template: `
    <h1>HOLA MUNDO</h1>
    <p>Desde Vue.JS</p>
    `
})

app.mount('#app')