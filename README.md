"# seubarriga-cypress" 
Para rodar npx cypress open

Utilizado combinação de Custom Commands e Page objects como padrão de código.
Não foram aplicadas bibliotecas complementares (faker e etc), apenas recursos nativos do cypress.

Page objects das páginas foram todos criados
Custom commands para principais ações criados para facilitar testes
Automatizado principais testes: Cadastro, login, adição de conta, criação de movimentação

Cenários levantados por páginas da aplicação
Login Cenários levantados                                                           
Login com email e senha validos                                                            
Login com email valido e senha invalida                          
Login com email e senha em branco                               

Cadastro Cenários levantados                                      
Cadastro com nome, email e senha validos                                   
Cadastro com nome invalido, email e senha validos                
Cadastro com email invalido, nome e senha validos                
Cadastro com senha invalida, nome e email validos                
Cadastro com email em branco                                     
Cadastro com senha em branco                                     
Cadastro com email já existente                                  

Home Cenários levantados                                                            
Visualização de tabela vazia                                                              
Visualização de tabela com conta adicionada                      
Edição de conta                                                  
Exclusão de conta                                                

Conta Cenários levantados                                        
Adicionar conta                                                 
Listar contas                                                   
Editar conta adicionada                                          

Movimentação Cenários levantados                                 
Criar movimentação com dados validos                             
Criar movimentação com datas fora do formato DD/MM/AAAA          
Criar movimentação com valor fora do formato número              
Criar movimentação do tipo despesa                               
Criar movimentação do tipo receita                              

Resumo Cenários levantados                                                            
Excluir movimentação criada                                     
Validar movimentação do tipo receita                             
Validar movimentação do tipo despesa                             
Validar movimentação para mês atual                              