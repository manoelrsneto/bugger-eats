Cypress.Commands.add("goToHomePage", () => {
    cy.visit("/")
})

Cypress.Commands.add("isOnHomePage", () => {
    cy.url().should("eq", "https://buger-eats.vercel.app/")
})

Cypress.Commands.add("validateHomeHeader", () => {
    cy.contains("Seja um parceiro entregador pela Buger Eats").should("be.visible")
})

Cypress.Commands.add("validateDeliveryButton", () => {
    cy.get("main > a").should("be.visible")
    cy.get("main > a").should("have.attr", "href").and("include", "deliver")
})

Cypress.Commands.add("clickDeliverButton", () => {
    cy.get("main > a").click()
})