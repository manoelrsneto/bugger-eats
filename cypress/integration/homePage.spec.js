describe("Suíte de testes da Home Page", () => {

    beforeEach("Setup dos testes", () => {
        cy.log("Visitando a página inicial..")
        cy.goToHomePage()
    })
    
    it("Exibindo home corretamente", () => {
        cy.isOnHomePage()
        cy.validateHomeHeader()
        cy.validateDeliveryButton()
    })

    it("Redirecionamento para página de delivery", () => {
        cy.clickDeliverButton()
        cy.isOnDeliverPage()
    })
})