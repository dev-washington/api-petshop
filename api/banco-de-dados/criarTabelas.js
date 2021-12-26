const modeloTabela = require('../rotas/fornecedores/ModeloTabelaFornecedores')


modeloTabela 
    .sync()
    .then( () => console.log('Tabela criada com sucesso'))
    .catch(console.log())