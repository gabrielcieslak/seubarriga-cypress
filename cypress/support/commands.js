
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

Cypress.Commands.add('login', (userValido) => { 
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
    conta.buttonSalver().click()

})
Cypress.Commands.add('criarMovimentacao', (movimentacaoValida) => {


})

