//import SignupPage from '../pages/SignupPage'

describe("Suíte da página de Delivery", () => {
    beforeEach("Setup dos Testes", () => {
        cy.log("Visitando página de cadastro de pessoa entregadora..")
        cy.goTo("deliver")
    })
    it("Deve realizar cadastro com sucesso.", () => {
        cy.log("Preenchendo informações pessoais.. 👨🏽")
        cy.fillName("Zézinho")
        cy.fillCPF("73268586082")
        cy.fillEmail("zezinho@teste.com")
        cy.fillWhatsapp("71912345678")

        cy.log("Preenchendo informações de endereço.. 📝")
        cy.fillCEP("41720400")
        cy.clickSearchCEPButton()
        cy.fillAdressNumber("572")
        cy.fillAddressDetails("Cd. Greenville Apt. 204B")

        cy.log("Selecionando método de entrega.. 🏍 🚴🏾‍♀️ 🚐")
        cy.selectDeliveryMethod("moto")

        cy.log("Fazendo upload da CNH.. 🗃")
        cy.uploadCNH()

        cy.log("Submetendo form.. ⬆️")
        cy.clickSubmitButton()
        
        cy.log("Validando envio do form.. ✅")
        cy.validateSuccessMessage()

        cy.log("Validando redirecionamento para a página principal.. 🏠")
        cy.isOnHomePage()
    })

    it.skip("Solução Aula Papito", () => {
        var deliver = {
            name: `Priscilla morais`,
            cpf: `34321363071`,
            email: `priscilla@gemail.com`,
            whatsapp: `11999990000`,
            address:{
                postalcode: '02244040',
                street:'Rua Capitão Sérvio Rodrigues Caldas',
                number: '234',
                details: 'ap 1',
                district: 'Vila Dom Pedro II',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'

        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    })

    it("Deve verificar validade do CPF", () => {
        cy.validateCPF("Oops! CPF inválido")
    })
})