///<reference types="cypress"/>
//import userLogin from "../cypress/fixtures/userLogin.json";
import userRegister from "../cypress/fixtures/userRegister.json";
import LoginPage from "./POM/LoginPage";
import RegisterPage from "./POM/RegisterPage";

describe('Register as a New User', () => {
  it('Register', () => {
    RegisterPage.validateRegisterPage();
    RegisterPage.firstName.type(userRegister.firstname).should('be.visible')
    .should('have.value', userRegister.firstname) //Firstname field is not empty
    .should('not.have.attr', 'minlength', '2')//Firstname field has a minimum length
    .should('not.have.attr', 'maxlength', '50')//Firstname field has a maximum length

    RegisterPage.LastName.type(userRegister.lastname).should('be.visible')
    .should('have.value', userRegister.lastname) //lastname field is not empty
    .should('not.have.attr', 'minlength', '2')//lastname field has a minimum length
    .should('not.have.attr', 'maxlength', '50')//lastname field has a maximum length;
// Valid Email Address 

    RegisterPage.Email.type(userRegister.email).should('be.visible')
    .should('have.value', userRegister.email) //Check that the email address field is not empty

    RegisterPage.TelePhone.type(userRegister.telephone).should('be.visible')
    .should('have.value', userRegister.telephone)
    .should('not.have.attr', 'maxlength', '10');
// Password Matched 
    RegisterPage.Password.type(userRegister.password).should('be.visible')
    .should('have.value', userRegister.password);
    RegisterPage.confirmPassword.type(userRegister.confirmPassword).should('have.value', userRegister.confirmPassword)

    RegisterPage.newsletter.check();

    cy.get('[name="agree"]').check();

    RegisterPage.SubmitButton.click();

    cy.get('.text-danger').should('not.exist');
  
    window.sessionStorage.setItem('userEmail', userRegister.email);
    window.sessionStorage.setItem('userPassword', userRegister.password);

  })

  it('Login with valid credentials', () => {

    const userEmail = window.sessionStorage.getItem('userEmail');
    const userPassword = window.sessionStorage.getItem('userPassword');  

    LoginPage.validateLoginPage();
    LoginPage.emailField.type(userEmail).should('be.visible');
    LoginPage.passwordField.should('be.visible').type(userPassword).should('be.visible');

    cy.get('.text-danger').should('not.exist');

    cy.intercept('POST', '**/index.php?route=account/login', (req) => {}).as('loginRequest');
    LoginPage.LoginButton.should('be.visible').click();
    cy.wait('@loginRequest');

    cy.url().should('include', '/account');

  })
  it.skip('Login with invalid credentials', () => {
    LoginPage.validateLoginPage;

    LoginPage.emailField.type('invalidemail@example.com').should('be.visible');
    LoginPage.passwordField.type('invalidpassword');

    cy.get('.text-danger').should('not.exist');
    LoginPage.LoginButton.should('be.visible').click();

    cy.get('.alert-danger').should('be.visible');

  })
})

