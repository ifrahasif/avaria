///<reference types="cypress"/>
import userLogin from "../cypress/fixtures/userLogin.json";
import LoginPage from "./POM/LoginPage";
import SearchPage from "./POM/SearchPage";
import SearchProduct from'../cypress/fixtures/SearchProduct.json';
import myAccountPage from "./POM/myAccountPage";
import AddProduct from '../FinmarkAutomation/POM/AddProduct';

 
describe('Search the Product',() =>{
    beforeEach(() =>{
        LoginPage.validateLoginPage();
        LoginPage.emailField.type(userLogin.email).should('be.visible');
        LoginPage.passwordField.should('be.visible').type(userLogin.password).should('be.visible');
        LoginPage.LoginButton.should('be.visible').click();

        myAccountPage.validateMyAccountPage();
        myAccountPage.searchField.should('be.visible').type(SearchProduct.productName);
        myAccountPage.SearchButton.click();
    })
    it('Search the Product after login', () =>{

        SearchPage.validateSearchPage;
        SearchPage.contentSection.should('be.visible');
        SearchPage.searchedProductTitle.should('contain.text',SearchProduct.productName);

    })
    it('Add the Product after login', () =>{
    
        SearchPage.validateSearchPage;
        SearchPage.contentSection.should('be.visible');
        SearchPage.searchedProductTitle.should('contain.text',SearchProduct.productName);

        cy.get('button[onclick="cart.add(\'41\', \'1\');"]').click();
        cy.get('button[onclick="cart.add(\'43\', \'1\');"]').click();
        cy.get('button[onclick="cart.add(\'44\', \'1\');"]').click();
        cy.get('.alert-success').should('be.visible');

    })     

})
