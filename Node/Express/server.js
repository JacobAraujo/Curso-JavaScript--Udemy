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

app.post('/', (req, res) => {
    res.send('Recebi o formulário')
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
})
