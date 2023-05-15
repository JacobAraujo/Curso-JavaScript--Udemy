const express = require('express');
const app = express();

// app.get('/', (req, res) =>{  // app.get('caminho', (req, res)) - Padrão 
//                              // rota inicial = '/'
//     res.send('Hello world!');
// });

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
});

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome"></input>
            <button>Enviar</button> 
        </form>
        `)
})

app.get('/testes/:idUsuarios?', (req, res) => { // :idUsuarios -> isso faca com que o que venha na url depois de /testes/ 
                                                // seja reconhecido como um parametro idUsuarios
                                                // por exemplo /testes/123 -> { idUsuarios: '123' }  
                                                // ? -> parametro idUsuarios se torna opcional        
    console.log(req.params);
    res.send(req.params.idUsuarios);
})

app.post('/', (req, res) => {
    res.send('Recebi o formulário')
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
})
