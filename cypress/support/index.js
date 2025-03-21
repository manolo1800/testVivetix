// cypress/support/index.js

beforeEach(() => {
    // Usar cy.session() para almacenar y restaurar las cookies entre pruebas
    cy.session('cookieConsent', () => {
      cy.visit('https://vivetix.com/es'); // Cambia esto por la URL de tu sitio
      cy.get('#cookie_directive_container').then(($modal) => {
        if ($modal.is(':visible')) {
          cy.contains('button', 'Aceptar').click(); // Acepta cookies solo si el modal es visible
        }
      });
      cy.reload();
    });
  });
  