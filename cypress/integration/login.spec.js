describe('Teste login ',()=>{    

    const emailError = 'ta errado mano'
    const senhaError = 'ta errado mano'
    
    const loginMensagemErro = ''
    const emailInvalido = ''
    const senhaInvalido = ''   
    before(()=>{
        cy.visit('/')
        cy.cadastro(userValido)
        cy.url().should('eq','/logar')
    })
    describe('Login invalido',()=>{
        describe('Login com email e senha invalida',()=>{
            it('Inserir email fora do formato',()=>{
                login.emailInput().type(emailInvalido)
                login.entrarBotao().click()
                login.tipEmailFormato().should('be.visible').to.contain(emailFormatoError)       
            })
        })
        describe('Login com email em formato correto e senha errada',()=>{
            it('Inserir email valido',()=>{
                login.emailInput().type(userValido.email)
            })
            it('Inserir senha errada',()=>{
                login.senhaIput().type(senhaInvalido)
                login.entrarBotao().click()
                login.mensagemLoginErro().should('be.visible').to.contain(loginMensagemErro) 
            })
        })            
        describe('Login com email e senha em branco',()=>{
            it('Inserir email em branco',()=>{
                login.emailInput().type('')
                login.entrarBotao().click()
                login.mensagemEmailErro().should('be.visible').to.contain(emailError)
            })
            it('Inserir senha em branco',()=>{
                login.senhaIput().type('')
                login.entrarBotao().click()
                login.mensagemSenhaErro().should('be.visible').to.contain(senhaError) 
            })
        })
    })
    describe('Login valido',()=>{
        describre('Login com usuário valido',()=>{
            it('Inserir email valido',()=>{
                login.emailInput().type(userValido.email)
            })
            it('Inserir senha válida',()=>{
                login.emailInput().type(userValido.senha)
            })
            it('Acessar e validar url',()=>{
                login.entrarBotao().click()
                cy.url().should('eq','/home')
            })            
        })
    })
    

})