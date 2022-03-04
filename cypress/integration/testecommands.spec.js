import cadastroElement from "../support/pageObjects/cadastroElements"
import loginElement from "../support/pageObjects/loginElements"
const cadastro = new cadastroElement()
const login = new loginElement()

const numberId = () => Cypress._.random(0, 1e6)
const id = numberId()

const  userValido = {
    nome: 'teste' + id,
    email: 'teste' + id + '@teste.com',
    senha: id
}

describe('teste dos comandos',()=>{
    describe('criar conta', ()=>{        
        it('preencher dados validos',()=>{
            cy.visit('/cadastro')
            cadastro.inputNome().type(userValido.nome)
            cadastro.inputEmail().type(userValido.email)
            cadastro.inputSenha().type(userValido.senha)
            cadastro.buttonCadastrar().click()
        })
    })
    describe('Logar',()=>{
        it('teste login', ()=>{
            cy.visit('/')
            login.inputEmail().type(userValido.email)
            login.inputSenha().type(userValido.senha)
            login.buttonEntrar().click()
        })
    })
})