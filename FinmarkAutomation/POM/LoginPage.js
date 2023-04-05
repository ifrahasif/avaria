///<reference types="cypress"/>

class LoginPage
{

validateLoginPage()
{
  cy.visit('https://opencart.abstracta.us/index.php?route=account/login', 
  { headers: { "Accept-Encoding": "gzip, deflate" } });
  cy.url().should('include','/login');

}
get emailField(){
  return cy.get('#input-email');
}

get passwordField(){
  return cy.get('#input-password');
}
get LoginButton(){
  return cy.get('input[value="Login"]');
}

}

export default new LoginPage();