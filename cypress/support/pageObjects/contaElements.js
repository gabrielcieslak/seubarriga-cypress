class contaElement {
    inputNome(){
        return cy.get('#nome')
    }
    buttonSalvar(){
        return cy.get('.btn')
    }

}

export default contaElement