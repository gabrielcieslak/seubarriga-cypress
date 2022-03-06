class resumoElement {
    selectMes(){
        return cy.get('#mes')
    }
    selectAno(){
        return cy.get('#ano')
    }
    buttonBuscar(){
        return cy.get('.btn')
    }
    buttonExcluir(){
        return cy.get('.glyphicon')
    }
}

export default resumoElement