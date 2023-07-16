let rua = document.querySelector("#Rua")
let cidade = document.querySelector("#Cidade")
let estado = document.querySelector("#Estado")
let encontrar = document.querySelector("#Encontrar")
let listaEndereco = document.querySelector("#ListaEndereco")

//rua.value = "Fernando Ferrari"
//cidade.value = "Ribeirao Preto"
//estado.value = "SP"

encontrar.setAttribute("onclick", "encontra()")

function encontra() {
    let script = document.createElement("script")
    script.src= `https://viacep.com.br/ws/${estado.value}/${cidade.value}/${rua.value}/json/?callback=listar`
    document.body.appendChild(script)
}

function listar(answer) {

    if(!Array.isArray(answer)){
        alert('O retorno não é uma lista de CEPs')
        return
    }

    answer.forEach(function(i){
        let lista = document.createElement("a")
        let endereco = `<br> ${i.cep} | ${i.logradouro} | ${i.bairro} | ${i.localidade} | ${i.uf} | ${i.complemento} <br>`
        lista.innerHTML = endereco
        lista.setAttribute('onclick', `exibirCep(${i.cep.replace('-','')})`)
        let cepEscolhido = i.cep.replace('-','')
        lista.setAttribute('href', './BuscaCEP')
        listaEndereco.appendChild(lista)
    })
}

function exibirCep(cep) {
    alert(`O seu CEP é ${cep}`)
}
