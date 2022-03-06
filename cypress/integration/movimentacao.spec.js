import movimentacaoElement from '../support/pageObjects/movimentacaoElements'
const movimentacao = new movimentacaoElement()
const sucessoMensagem = 'Movimentação adicionada com sucesso!'
const date = new Date()
const dataAtual = date.getDate().toString().padStart(2,'0')+'/'+ date.getMonth().toString().padStart(2,'0') +'/' + date.getFullYear();

const dataMovimentacaoObrigatorio = 'Data da Movimentação é obrigatório'
const dataPagamentocaoObrigatorio = 'Data do pagamento é obrigatório'
const descricaoObrigatorio = 'Descrição é obrigatório'
const interessadoObrigatorio = 'Interessado é obrigatório'
const valorObrigatorio = 'Valor é obrigatório'
const dataMovimentacaoFormato = 'Data da Movimentação inválida (DD/MM/YYYY)'
const dataPagamentoFormato = 'Data do pagamento inválida (DD/MM/YYYY'
const valorFormato = 'Valor deve ser um número'

const movimetacaoValida = {        
    dataMovimetacao : dataAtual,
    dataPagamento : dataAtual,
    descricao : 'teste movimentacao',
    interessado: 'teste interessado',
    valor: 500,
    
}

describe('Teste página criar movimentação',()=>{
    beforeEach(()=>{        
        cy.novoUsuario()
        cy.adicionarConta()
        cy.visit('/movimentacao')
    })

    describe('Criar movimentação com dados errados',()=>{
        it('Data e valor em formato errado',()=>{
            movimentacao.inputDataMovimentacao().type('010122022')            
            movimentacao.inputDataPagamento().type('010122022')            
            movimentacao.inputValor().type('R$500')            
            movimentacao.buttonSalvar().click()
            movimentacao.alertMensagem().contains(dataMovimentacaoFormato)
            movimentacao.alertMensagem().contains(dataPagamentoFormato)
            movimentacao.alertMensagem().contains(valorFormato)
        })
        describe('Criar movimentação com dados em branco',()=>{
            it('Movimentação com dados em branco',()=>{
                movimentacao.buttonSalvar().click()                
                movimentacao.alertMensagem().contains(dataMovimentacaoObrigatorio)
                movimentacao.alertMensagem().contains(dataPagamentocaoObrigatorio)
                movimentacao.alertMensagem().contains(descricaoObrigatorio)
                movimentacao.alertMensagem().contains(interessadoObrigatorio)
                movimentacao.alertMensagem().contains(valorObrigatorio)
            }) 
        })
    })
    describe('Criar movimentação valida do tipo Receita e situação Paga', ()=>{
        it('Preencher campos validos',()=>{
            movimentacao.selectTipo().select('Receita').should('have.value','REC')   
            movimentacao.inputDataMovimentacao().type(movimetacaoValida.dataMovimetacao)
            movimentacao.inputDataPagamento().type(movimetacaoValida.dataPagamento)
            movimentacao.inputDescricao().type(movimetacaoValida.descricao)
            movimentacao.inputInteressado().type(movimetacaoValida.interessado)
            movimentacao.inputValor().type(movimetacaoValida.valor)
            movimentacao.radioPago().click()
            movimentacao.buttonSalvar().click()
            movimentacao.alertMensagem().contains(sucessoMensagem)
        })
    })
    

    
})