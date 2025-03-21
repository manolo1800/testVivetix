import '../support/index.js';

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://vivetix.com/es');


    cy.get('#cityDiv button.dropdown-toggle').click();
    cy.wait(3000);
    cy.get('#cityDiv .dropdown-menu button[value="Madrid"]').click();
    cy.wait(3000);
    cy.get('#categoryDiv button.dropdown-toggle').click();
    cy.wait(3000);
    cy.get('#categoryDiv .dropdown-menu button[value=5]').click();
    cy.wait(3000);

    cy.get('#products .box h5.card-title a')
      .first()
      .invoke('attr', 'href')
      .then((href) => {
        cy.visit(href);
      });
      cy.wait(3000);

    cy.contains('a', 'Crear un evento', { timeout: 10000 }).should('be.visible').click({ force: true });
    cy.wait(3000);

    // Esperar que el formulario se cargue
    cy.get('form#event-form').should('be.visible');
      
    describe('Crear un evento en Vivetix', () => {
      it('Llena el formulario de creación de evento', () => {
        
        cy.get('input[name="title"]').type('Concierto de Rock', {delay: 120});
    
        cy.get('input[name="organizer"]').type('Rock manuel Producciones', {delay: 120});

        cy.get('select[name="telf_country"]').select('+506', {delay: 120});
        cy.get('input[name="telf"]').type('72543921', {delay: 120});

        
        //sessions
        cy.get('input[id="sd_sessions_0"').type('22/03/2025', {delay: 120});
        cy.get('input[name=sessions[0][start_time]]').type('13:00', {delay: 120});
        
        cy.get('input[id="sde_sessions_0"').type('22/03/2025', {delay: 120});
        cy.get('input[name=sessions[0][end_time]]').type('16:00', {delay: 120});

        cy.get('select[name="sessions[0][status]"]').select('a', {delay: 120});
        cy.get('select[name="currency_id"]').select('38', {delay: 120});


        //options
        cy.get('input[name="options[0][option]"]').type('entrada gratis', {delay: 120});
        cy.get('input[name="options[0][price]"]').type('0', {delay: 120});
        cy.get('input[name="options[0][quantity]"]').type('20', {delay: 120});

        cy.get('input[name="images[]"]').selectFile('cypress/fixtures/img/logo_mc.jpeg', { force: true });

        cy.get('input[name="accept"]').check({ force: true });

        //cy.get('button[type="submit"]').click();

      });
    });
  })
})


