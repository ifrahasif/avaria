///<reference types="cypress"/>

class RegisterPage
{

validateRegisterPage()
{
    cy.visit('https://opencart.abstracta.us/index.php?route=account/register', 
    { headers: { "Accept-Encoding": "gzip, deflate" } });
     cy.url().should('include','/register');

}
get firstName(){
    return cy.get('#input-firstname')
}

get LastName(){
    return cy.get('#input-lastname')
}
get Email(){
    return cy.get('#input-email')
}
get TelePhone(){
    return cy.get('#input-telephone')
}
get Password(){
    return cy.get('#input-password')
}
get confirmPassword(){
    return cy.get('#input-confirm')
}
get newsletter(){
    return cy.get('input[name="newsletter"][value="1"]')
}
get SubmitButton(){
    return cy.get('input[type="submit"]')
  }

}

export default new RegisterPage();