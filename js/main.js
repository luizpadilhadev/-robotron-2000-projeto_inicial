const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const branco = document.querySelector("#braco")

const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
})

function manipulaDados(operacao){
    if(operacao === "-"){
        branco.value = parseInt(branco.value) - 1
    }
    else{
            braco.value = parseInt(braco.value) + 1
        }
}