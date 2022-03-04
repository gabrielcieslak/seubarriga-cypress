import cadastroElement from "../support/pageObjects/cadastroElements"

const cadastro = new cadastroElement()
const numberId = () => Cypress._.random(0, 1e6)
const id = numberId()

const  userValido = {
    nome: 'teste' + id,
    email: 'teste' + id + '@teste.com',
    senha: id
}

describe('Teste de cadastro',()=>{
    const nomeMensagem = 'Nome é um campo obrigatório'
    const emailMensagem = 'Email é um campo obrigatório'
    const senhaMensagem = 'Senha é um campo obrigatório'
    const sucessoMensagem = 'Usuário inserido com sucesso'

    before(()=>{
        cy.visit('/cadastro')        
    }) 
    describe('Cadastro invalido',()=>{
        describe('Cadastro com dados em branco',()=>{
            it('Manter nome em branco',()=>{                
                cadastro.buttonCadastrar().click()
                cadastro.alertMensagem().should('be.visible')
                cadastro.alertMensagem().contains(nomeMensagem)
            })
            it('Manter email em branco',()=>{                
                cadastro.buttonCadastrar().click()
                cadastro.alertMensagem().should('be.visible')
                cadastro.alertMensagem().contains(emailMensagem)
            })
            it('Manter senha em branco',()=>{                
                cadastro.buttonCadastrar().click()
                cadastro.alertMensagem().should('be.visible')
                cadastro.alertMensagem().contains(senhaMensagem)
            })
        })        
    })
    describe('Cadastro valido',()=>{
        it('Preencher Nome',()=>{
            cadastro.inputNome().type(userValido.nome)            
        })
        it('Preencher Email',()=>{            
            cadastro.inputEmail().type(userValido.email)
        })
        it('Preencher Senha',()=>{
            cadastro.inputSenha().type(userValido.senha)         
        })
        it('Confirmar',()=>{
            cadastro.buttonCadastrar().click()
            cadastro.alertMensagem().should('be.visible')
            cadastro.alertMensagem().contains(sucessoMensagem)           
        })
    })
})