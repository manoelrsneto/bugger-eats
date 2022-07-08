//import SignupPage from '../pages/SignupPage'

describe("Suíte da página de Delivery", () => {
    beforeEach("Setup dos Testes", () => {
        cy.log("Visitando página de cadastro de pessoa entregadora..");
        cy.goTo("deliver");
    });
    it("Deve realizar cadastro com sucesso.", () => {
        cy.log("Preenchendo informações pessoais.. 👨🏽");
        cy.fillName("Zézinho");
        cy.fillCPF("73268586082");
        cy.fillEmail("zezinho@teste.com");
        cy.fillWhatsapp("71912345678");

        cy.log("Preenchendo informações de endereço.. 📝");
        cy.fillCEP("41720400");
        cy.clickSearchCEPButton();
        cy.fillAdressNumber("572");
        cy.fillAddressDetails("Cd. Prédio Azul Apt. 205");

        cy.log("Selecionando método de entrega.. 🏍 🚴🏾‍♀️ 🚐");
        cy.selectDeliveryMethod("moto");

        cy.log("Fazendo upload da CNH.. 🗃");
        cy.uploadCNH();

        cy.log("Submetendo form.. ⬆️");
        cy.clickSubmitButton();

        cy.log("Validando envio do form.. ✅");
        cy.validateSuccessMessage();

        cy.log("Validando redirecionamento para a página principal.. 🏠");
        cy.isOnHomePage();
    });

    it("Deve exibir um erro ao enviar CPF inválido.", () => {
        cy.log("Preenchendo informações pessoais.. 👨🏽");
        cy.fillName("Zézinho");
        cy.fillCPF("AAAAAAAAAAAAAA");
        cy.fillEmail("zezinho@teste.com");
        cy.fillWhatsapp("71912345678");

        cy.log("Preenchendo informações de endereço.. 📝");
        cy.fillCEP("41720400");
        cy.clickSearchCEPButton();
        cy.fillAdressNumber("572");
        cy.fillAddressDetails("Cd. Prédio Azul Apt. 205");

        cy.log("Selecionando método de entrega.. 🏍 🚴🏾‍♀️ 🚐");
        cy.selectDeliveryMethod("moto");

        cy.log("Fazendo upload da CNH.. 🗃");
        cy.uploadCNH();

        cy.log("Submetendo form.. ⬆️");
        cy.clickSubmitButton();

        cy.log("Validando mensagem de erro.. ❌");
        cy.validateCPF("Oops! CPF inválido");
    });
});
