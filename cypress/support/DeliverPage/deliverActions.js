Cypress.Commands.add('isOnDeliverPage', (name) => {
    cy.url().should("include", "deliver")
})

Cypress.Commands.add('fillName', (name) => {
    cy.get("[name='name']").type(name)
    cy.get("[name='name']").should("have.value", name)
})

Cypress.Commands.add('fillCPF', (cpf) => {
    cy.get("[name='cpf']").type(cpf)
    cy.get("[name='cpf']").should("have.value", cpf)
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get("[name='email']").type(email)
    cy.get("[name='email']").should("have.value", email)
})

Cypress.Commands.add('fillWhatsapp', (whatsapp) => {
    cy.get("[name='whatsapp']").type(whatsapp)
    cy.get("[name='whatsapp']").should("have.value", whatsapp)
})

Cypress.Commands.add('fillCEP', (cep) => {
    cy.get("[name='postalcode']").type(cep)
    cy.get("[name='postalcode']").should("have.value", cep)
})

Cypress.Commands.add('fillAdressNumber', (adrNumber) => {
    cy.get("[name='address-number']").type(adrNumber)
    cy.get("[name='address-number']").should("have.value", adrNumber)
})

Cypress.Commands.add('fillAddressDetails', (address) => {
    cy.get("[name='address-details']").type(address)
    cy.get("[name='address-details']").should("have.value", address)
})

Cypress.Commands.add("clickSearchCEPButton", () => {
    cy.get("input[value='Buscar CEP']").click()
})

Cypress.Commands.add("selectDeliveryMethod", (method) => {
    switch(method) {
        case "moto":
            cy.get(".delivery-method > li").eq(0).click()
            break
        case "bicicleta":
            cy.get(".delivery-method > li").eq(1).click()
            break
        case "carro":
            cy.get(".delivery-method > li").eq(2).click()
            break
    }
})

Cypress.Commands.add("uploadCNH", () => {
    cy.get(".dropzone > input").selectFile("cypress/fixtures/zezinho-cnh.jpeg", {force: true})
})

Cypress.Commands.add("clickSubmitButton", () => {
    cy.get(".button-success").click()
})

Cypress.Commands.add("validateSuccessMessage", () => {
    cy.contains("Aí Sim...").should("be.visible")
    cy.contains("Fechar").click()
})

Cypress.Commands.add('validateCPF', (expectedMessage) => {
    cy.get('.alert-error').should('have.text', expectedMessage)
})