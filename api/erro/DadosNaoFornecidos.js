class DadosNaoFornecidos extends Error{
    constructor(){
        super('Não foram fornecidos dados para finalizar')
        this.name = 'DadosNaoFornecidos'
        this.idErro = 2
    }

}