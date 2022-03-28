function meuEscopo(){
    const form = document.querySelector(".form")
    const pessoas = []

    function recebeEventoForm (evento) {
        evento.preventDefault()
        
        let nome = document.querySelector('#nome')
        let sobrenome = document.querySelector('#sobrenome')
        let peso = document.querySelector('#peso')
        let altura = document.querySelector('#altura')
        let resultado = document.querySelector('#resultado')

        function criarPessoa(){
            let pessoa = {
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value,
            }
            return pessoa
        }

        let pessoa = criarPessoa()
        pessoas.push(pessoa)
        resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}<p>`

        console.log(pessoas)
    }

    form.addEventListener('submit', recebeEventoForm)
}





meuEscopo()

