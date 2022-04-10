function meuEscopo() {
    // Capturar o evento de submit do formulário
    const form = document.querySelector(".form")

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        const inputPeso = e.target.querySelector('#input-peso')
        const inputAltura = e.target.querySelector('#input-altura')

        const peso = Number(inputPeso.value)
        const altura = Number(inputAltura.value)

        if (!peso) {
            setResultado('Peso inválido.', false)
            return
        }

        if (!altura) {
            setResultado('Altura inválida', false)
            return
        }

        imc = getImc(peso, altura)

        setResultado(getImcLevel(imc), true)


    })

    function setText(msg, idLocal, className = 'generic') {
        const local = document.querySelector(idLocal)
        local.innerHTML = ''
        const p = document.createElement('p')
        p.innerHTML = msg
        p.classList = className
        local.appendChild(p)
    }

    function setResultado(msg, isValid) {
        if (isValid){
            setText(msg, '#resultado', 'paragrafo-resultado')
        } else {
            setText(msg, '#resultado', 'incorrect')
        }
    }

    function getImc(peso, altura) {
        const imc = peso / (altura * altura)
        return imc.toFixed(2)
    }

    function getImcLevel(imc) {
        const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
            'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

        if (imc < 18.5) {
            return level[0]
        }

        if (imc < 25) {
            return level[1]
        }

        if (imc < 30) {
            return level[2]
        }

        if (imc < 35) {
            return level[3]
        }

        if (imc < 40) {
            return level[4]
        }
        return level[5]
    }
}


meuEscopo()