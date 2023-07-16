let cep = document.querySelector("#CEP")
let rua = document.querySelector("#Rua")
let bairro = document.querySelector("#Bairro")
let cidade = document.querySelector("#Cidade")
let estado = document.querySelector("#Estado")

//import { cepEscolhido } from './Endereco.js'
//cep.valor = cepEscolhido

cep.addEventListener("blur", (e => {
    let cep = e.target.value
    let script = document.createElement("script")
    script.src= `https://viacep.com.br/ws/${cep}/json/?callback=returnCEP`
    document.body.appendChild(script)
}))

function returnCEP(answer) {
    
    if("erro" in answer) {
        alert("CEP não encontrado")
    }

    rua.value = answer.logradouro
    bairro.value = answer.bairro
    cidade.value = answer.localidade
    estado.value = answer.uf
}
