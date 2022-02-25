
describe('Teste de cadastro',()=>{
    const nomeMensagem = ''
    const emailMensagem = ''
    const senhaMensagem = ''
    const sucesso = ''

    before(()=>{
        cy.visit('/')
        cy.url().should('eq','/cadastro')
    })
    describe('Cadastro valido',()=>{
        it('Preencher dados',()=>{
            cadastro.nomeInput().type(userValido.nome)
            cadastro.emailInput().type(userValido.email)
            cadastro.senhaInput().type(userValido.senha)
            cadastro.mensagemSucesso().should('be.visible').to.contain(sucesso)
        })
    })
    describe('Cadastro invalido',()=>{
        describe('Cadastro com dados em branco',()=>{
            it('Inserir nome em branco',()=>{
                cadastro.nomeInput().type('')
                cadastro.cadastrarBotao().click()
                cadadastro.nomeMensagemObrigatorio().should('be.visible').to.contain(nomeMensagem)
            })
            it('Inserir email em branco',()=>{
                cadastro.emailInput().type('')
                cadastro.cadastrarBotao().click()
                cadadastro.emailMensagemObrigatorio().should('be.visible').to.contain(emailMensagem)
            })
            it('Inserir senha em branco',()=>{
                cadastro.senhaInput().type('')
                cadastro.cadastrarBotao().click()
                cadadastro.senhaMensagemObrigatorio().should('be.visible').to.contain(senhaMensagem)
            })
        })
        describe('Cadastro com email em formato errado',()=>{
            it('Inserir email fora do formato padrão',()=>{
                cadastro.emailInput().type(userValido.nome)
                cadastro.tipEmailFormato().should('be.visible').to.contain(emailFormatoError)
            })
        })
    })
})