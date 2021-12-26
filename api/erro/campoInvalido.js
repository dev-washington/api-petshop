class campoInvalido extends Error{
    
    constructor(campo){
        const mensagem = `O Campo '${campo}' está invalido`
        super(mensagem)

        this.name = 'Campo Inválido'
        this.idErro = 1
    }
}
module.exports = campoInvalido