class contaElement {
    inputNome(){
        return cy.get('#nome')
    }
    buttonSalver(){
        return cy.get('.btn')
    }

}

export default contaElement