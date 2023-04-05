///<reference types="cypress"/>

class myAccountPage
{

validateMyAccountPage()
{
  cy.visit('https://opencart.abstracta.us/index.php?route=account/account', 
  { headers: { "Accept-Encoding": "gzip, deflate" } });
  cy.url().should('include','/account');

}
get searchField(){
  return cy.get('#search');
}
get SearchButton(){
   // return cy.get('input[type="button"]')
   return cy.get('.input-group-btn');
}
}

export default new myAccountPage();