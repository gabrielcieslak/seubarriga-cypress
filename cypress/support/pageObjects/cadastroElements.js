class cadastroElement {
    inputNome(){
        return cy.get('#nome')
    }
    inputEmail(){
        return cy.get('#email')
    }
    inputSenha(){
        return cy.get('#senha')
    }
    buttonCadastrar(){
        return cy.get('.btn')
    }
    alertMensagem(){
        return cy.get('.alert')
    }
}

export default cadastroElement