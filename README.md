"# seubarriga-cypress" 
Para rodar npx cypress open

Utilizado combinação de Custom Commands e Page objects como padrão de código.
Não foram aplicadas bibliotecas complementares (faker e etc), apenas recursos nativos do cypress.

Cenários levantados por páginas da aplicação
Login Cenários levantados                                        |   Automatizado                        Page objects: Sim
Login com email e senha validos                                  |   Sim                                 Custom Commands: Sim
Login com email valido e senha invalida                          |   Sim
Login com email e senha em branco                                |   Sim

Cadastro Cenários levantados                                     |   Automatizado                        Page objects: Sim
Cadastro com nome, email e senha validos                         |   Sim                                 Custom Commands: Sim
Cadastro com nome invalido, email e senha validos                |   Sim
Cadastro com email invalido, nome e senha validos                |   Sim
Cadastro com senha invalida, nome e email validos                |   Sim 
Cadastro com nome em branco                                      |   Sim
Cadastro com email em branco                                     |   Sim 
Cadastro com senha em branco                                     |   Sim 
Cadastro com email já existente                                  |   Não

Home Cenários levantados                                         |   Automatizado                        Page objects: Incompleto
Visualização de tabela vazia                                     |   Sim                                 Custom Commands: Não
Visualização de tabela com conta adicionada                      |   Sim
Edição de conta                                                  |   Sim
Exclusão de conta                                                |   Não

Conta Cenários levantados                                        |   Automatizado                        Page objects: Incompleto
Adicionar conta                                                  |   Sim                                 Custom Commands: Incompleto
Listar contas                                                    |   Não
Editar conta adicionada                                          |   Não
Excluir conta adicionada                                         |   Não

Movimentação Cenários levantados                                 |  Automatizado                        Page objects: Não
Criar movimentação com dados validos                             |  Não                                 Custom Commands: Não
Criar movimentação com datas fora do formato DD/MM/AAAA          |  Não
Criar movimentação com valor fora do formato número              |  Não
Criar movimentação do tipo despesa                               |  Não
Criar movimentação do tipo receita                               |  Não

Resumo Cenários levantados                                       |  Automatizado                        Page objects: Não
Excluir movimentação criada                                      |  Não                                 Custom Commands: Não
Validar movimentação do tipo receita                             |  Não
Validar movimentação do tipo despesa                             |  Não
Validar movimentação para mês atual                              |  Não