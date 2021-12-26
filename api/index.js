const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')
const roteador = require('./rotas/fornecedores')
const NaoEncontrado = require('./erro/NaoEncontrado')

app.use(bodyParser.json())

app.use('/api/fornecedores', roteador)

app.use((erro, requisicao, resposta)=>{
    
    if(erro instanceof NaoEncontrado){
        resposta.status(404)
    } else{
        resposta.status(400)
    }
    resposta.send(
        JSON.stringify({
            mensagem: erro.message 
        })
    )
})

app.listen(config.get('api.porta'), () => console.log('A API está funcionando'))