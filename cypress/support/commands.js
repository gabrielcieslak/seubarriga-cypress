
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

const  userValido = {
    nome: '',
    email: '',
    senha: ''
}

const emailFormatoError = 'bla bla bla'

Cypress.Commands.add('login', (userValido) => { 
    
})

Cypress.Commands.add('cadastro', (userValido) => { 


})
Cypress.Commands.add('criarMovimentacao', (movimentacaoValida) => {


})

