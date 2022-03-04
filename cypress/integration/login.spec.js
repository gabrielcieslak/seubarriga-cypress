
    import loginElement from "../support/pageObjects/loginElements"
    const login = new loginElement()
    const numberId = () => Cypress._.random(0, 1e6)
    const id = numberId()
    const  userValido = {
        nome: 'teste' + id,
        email: 'teste' + id + '@teste.com',
        senha: id
    }
    const loginSucesso = 'Bem vindo, ' + userValido.nome +'!'
    const loginErro = 'Problemas com o login do usuário'
    const emailError = 'Email é um campo obrigatório'
    const senhaError = 'Senha é um campo obrigatório'
describe('Teste login ',()=>{    
    before(()=>{                
        cy.cadastro(userValido)
    })
    describe('Login com usuário e senha em branco',()=>{
        it('Entrar sem preencher campos',()=>{
            login.buttonEntrar().click()
        })
        it('Validar erros',()=>{
            login.alertMensagem().should('be.visible')
            login.alertMensagem().contains(emailError)
            login.alertMensagem().contains(senhaError)
        })
    })
    describe('Login com usuário invalido',()=>{
        it('Inserir email correto',()=>{
            login.inputEmail().type(userValido.email)
        })
        it('Inserir senha invalida ',()=>{
            login.inputSenha().type('blabla')
        })
        it('Entrar',()=>{
            login.buttonEntrar().click()
        })
        it('Validar erro',()=>{
            login.alertMensagem().should('be.visible')
            login.alertMensagem().contains(loginErro)
        })
    })
    describe('Login com usuário valido',()=>{
        it('Inserir email válido',()=>{
            login.inputEmail().type(userValido.email)
        })
        it('Inserir senha válida',()=>{
            login.inputSenha().type(userValido.senha)
        })
        it('Entrar',()=>{
            login.buttonEntrar().click()
        })
        it('Validar sucesso',()=>{
            login.alertMensagem().should('be.visible')
            login.alertMensagem().contains(loginSucesso)
        })
    })

})