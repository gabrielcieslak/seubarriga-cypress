class movimentacaoElement {
    selectTipo(){
        return cy.get('#tipo')
    }
    inputDataMovimentacao(){
        return cy.get('#data_transacao')
    }
    inputDataPagamento(){
        return cy.get('#data_pagamento')
    }
    inputDescricao(){
        return cy.get('#descricao')
    }
    inputInteressado(){
        return cy.get('#interessado')
    }
    inputValor(){
        return cy.get('#valor')
    }
    selectConta(){
        return cy.get('#conta')
    }
    radioPago(){
        return cy.get('#status_pago')
    }
    radioPendente(){
        return cy.get('#status_pendente')
    }
    buttonSalvar(){
        return cy.get('.btn')
    }
    alertMensagem(){
        return cy.get('.alert')
    }

}

export default movimentacaoElement