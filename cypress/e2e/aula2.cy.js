
//cria o cenario de teste
describe('Testes de criação, registro e login', () => {
  it('Teste criação de usuário com sucesso', () => { //caso de teste
    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Gustavo')
    cy.get('#Text1').type('Gustavo')
    cy.get('#username').type('Gustavo')
    cy.get('#password').type('Gustavo')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  })

  it('Teste criação de usuário com falha', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Gustavo')
    cy.get('#Text1').type('Gustavo')
    cy.get('#username').type('Gustavo')
    cy.get('.btn-primary').should('be.disabled')
  })

  it('Teste de login com sucesso', () => {
    let infos = criarUser()
    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', infos[0])
    cy.get('.ng-binding > a').click()
    cy.get('.btn').click()
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Username or password is incorrect')
  })
})

function criarUser()
{
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let ID = hora + minuto + segundos + "ID"
  let senha = hora + minuto + segundos + "Senha"
  let infos = [ID, senha]

  cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(ID)
  cy.get('#Text1').type(ID)
  cy.get('#username').type(ID)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful')
  cy.get('.btn-link').click()
  return infos
}