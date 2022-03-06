
import cadastroElement from './pageObjects/cadastroElements'
import contaElement from './pageObjects/contaElements'
import movimentacaoElement from './pageObjects/movimentacaoElements'
import homeElement from './pageObjects/homeElements'
import loginElement from './pageObjects/loginElements'
import resumoElement from './pageObjects/resumoElements'


const cadastro = new cadastroElement()
const conta = new contaElement()
const movimentacao = new movimentacaoElement()
const home = new homeElement()
const login = new loginElement()
const resumo = new resumoElement()

const numberId = () => Cypress._.random(0, 1e6)
const id = numberId()
const  userValido = {
        nome: 'teste' + id,
        email: 'teste' + id + '@teste.com',
        senha: id
    }

const date = new Date()
const dataAtual = date.getDate().toString().padStart(2,'0')+'/'+ date.getMonth().toString().padStart(2,'0') +'/' + date.getFullYear();
const movimetacaoValida = {        
    dataMovimetacao : dataAtual,
    dataPagamento : dataAtual,
    descricao : 'teste movimentacao',
    interessado: 'teste interessado',
    valor: 500,
    
}

Cypress.Commands.add('login', () => { 
    cy.visit('/')
    login.inputEmail().type(userValido.email)
    login.inputSenha().type(userValido.senha)
    login.buttonEntrar().click()
    
})

Cypress.Commands.add('cadastro', (userValido) => { 
    cy.visit('/cadastro')
    cadastro.inputNome().type(userValido.nome)
    cadastro.inputEmail().type(userValido.email)
    cadastro.inputSenha().type(userValido.senha)
    cadastro.buttonCadastrar().click()

})
Cypress.Commands.add('adicionarConta', () => {
    cy.visit('/addConta')
    conta.inputNome().type('ContaTeste')
    conta.buttonSalvar().click()

})
Cypress.Commands.add('listarConta', () => {
    cy.visit('/contas') 
})

Cypress.Commands.add('criarMovimentacao', (movimentacaoValida) => {
    cy.visit('/movimentacao')
    movimentacao.inputDataMovimentacao().type(movimetacaoValida.dataMovimetacao)
    movimentacao.inputDataPagamento().type(movimetacaoValida.dataPagamento)
    movimentacao.inputDescricao().type(movimetacaoValida.descricao)
    movimentacao.inputInteressado().type(movimetacaoValida.interessado)
    movimentacao.inputValor().type(movimetacaoValida.valor)
    movimentacao.buttonSalvar().click()

})
Cypress.Commands.add('listarConta', () => {
    cy.visit('/contas') 
})
Cypress.Commands.add('buscarResumo', () => {
    let mesAtual = date.getMonth().toString().padStart(2,'0')    
    cy.visit('/extrato') 
    resumo.selectMes().select(mesAtual)    
    resumo.buttonBuscar().click()
})

Cypress.Commands.add('novoUsuario', () => {
    cy.cadastro(userValido)
    cy.login(userValido)
})

