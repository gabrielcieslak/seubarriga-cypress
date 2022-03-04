import homeElement from "../support/pageObjects/homeElements"
const home = new homeElement()
const numberId = () => Cypress._.random(0, 1e6)
const id = numberId()
const  userValido = {
    nome: 'teste' + id,
    email: 'teste' + id + '@teste.com',
    senha: id
}
describe('Teste home page',()=>{
    before(()=>{                
        cy.cadastro(userValido)        
    })
    beforeEach(()=>{
        cy.login(userValido)
    })

    describe('Validar itens da página',()=>{
        it('Tabela inicial vazia',()=>{
            cy.get('#tabelaSaldo > tbody').should(($table)=>{
                expect($table).to.have.length(1)
            })
        })
        it('Tabela inicial com uma conta cadastrada',()=>{            
            cy.adicionarConta()
            cy.get('tbody').should(($table)=>{
                expect($table).to.have.length(2)
            })
        })

    })


})