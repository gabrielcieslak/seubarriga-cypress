class loginElement {
    inputEmail(){
        return cy.get('#email')
    }
    inputSenha(){
        return cy.get('#senha')
    }
    buttonEntrar(){
        return cy.get('.btn')
    }
    alertMensagem(){
        return cy.get('.alert')
    }
}

export default loginElement