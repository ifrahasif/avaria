///<reference types="cypress"/>

class SearchPage
{

validateSearchPage()
{
  cy.visit('https://opencart.abstracta.us/index.php?route=product/search&search=MAC', 
  { headers: { "Accept-Encoding": "gzip, deflate" } });

}
get contentSection(){
  return cy.get('#content');
}
get searchedProductTitle(){
   return cy.get('#content');
}
}

export default new SearchPage();