describe('Testes gerais', () => {
  it('Teste de login com sucesso', () => {
    let infos = CriarUser()
    cy.get('#login2').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').type(infos[0])
    cy.get('#loginpassword').click()
    cy.get('#loginpassword').type(infos[1])
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#nameofuser').should("have.text","Welcome "+infos[0])
  })

  it('Teste de adicao no carrinho com sucesso', () => {
    let infos = CriarUser()
    cy.get('#login2').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').type(infos[0])
    cy.get('#loginpassword').click()
    cy.get('#loginpassword').type(infos[1])
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#nameofuser').should("have.text","Welcome "+infos[0])
    cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#cartur').click()
    cy.get('.success > :nth-child(2)').should("have.text","Samsung galaxy s6")
  })

  it('Teste de login com falha', () => {
    let infos = CriarUser()
    cy.get('#login2').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').click()
    cy.get('#loginusername').type(infos[0]+"123456789")
    cy.get('#loginpassword').click()
    cy.get('#loginpassword').type(infos[1])
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
    cy.get('#login2').should("have.text","Log in")
  })

})

function CriarUser(){
  cy.visit('https://www.demoblaze.com/index.html')
  cy.get('#signin2').click()
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let segundo = new Date().getSeconds().toString()
  let USERNAME = hora+minuto+segundo+"ID"
  let SENHA = hora+minuto+segundo+"SENHA"
  let infos = [USERNAME,SENHA]
  cy.get('#sign-username').click()//Os click foram utilizados para gerar um delay, sem eles estava havendo inconsistencia na entrada dos dados
  cy.get('#sign-username').click()
  cy.get('#sign-username').click()
  cy.get('#sign-username').click()
  cy.get('#sign-username').click()
  cy.get('#sign-username').type(USERNAME)
  cy.get('#sign-password').click()
  cy.get('#sign-password').type(SENHA)
  cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  cy.on('window:alert',(txt)=>{
    expect(txt).to.contains('Sign up successful.');
    })
  return infos
}

