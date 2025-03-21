# 🧪 Cypress Test: Crear un evento en Vivetix

Este es un script de prueba automatizado con Cypress para verificar la funcionalidad de creación de eventos en la plataforma Vivetix.

---

## 📌 Requisitos Previos

Antes de ejecutar la prueba, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión recomendada: 16 o superior)
- [Cypress](https://www.cypress.io/) (si no lo tienes, instálalo con `npm install cypress --save-dev`)


```
testVivetix/
├── cypress/
│   ├── e2e/
│   │   ├── vivetix.cy.js
│   ├── fixtures/
│   │   ├── img/
│   │   │   ├── logo_mc.jpeg
│   ├── support/    
|   |   ├── commands.js
|   |   ├── e2ejs.js
│   │   ├── index.js
├── cypress.config.js
└── package.json
```

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el Repositorio
```bash
git clone https://github.com/manolo1800/testVivetix.git
cd testVivetix
```

### 2️⃣ Instalar Dependencias
```bash
npm install
```

### 3️⃣ Ejecutar las Pruebas con Cypress
```bash
npx cypress open
```

O si deseas ejecutarlo en modo headless:
```bash
npx cypress run
```

---

## 📋 Flujo de la Prueba

1. **Visita la web de Vivetix**: `https://vivetix.com/es`
2. **Selecciona Madrid como ciudad**
3. **Selecciona la categoría correspondiente**
4. **Accede al primer evento disponible**
5. **Inicia el proceso de creación de un nuevo evento**
6. **Completa el formulario con los siguientes datos:**
   - Título del evento
   - Organizador
   - Teléfono
   - Fecha y horario del evento
   - Moneda
   - Opciones de entrada
   - Imagen del evento
   - Aceptación de términos
7. **Valida que el formulario se haya llenado correctamente**

---

## 🛠️ Código de la Prueba

```javascript
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
    
    cy.get('form#event-form').should('be.visible');
    
    describe('Crear un evento en Vivetix', () => {
      it('Llena el formulario de creación de evento', () => {
        cy.get('input[name="title"]').type('Concierto de Rock', {delay: 120});
        cy.get('input[name="organizer"]').type('Rock manuel Producciones', {delay: 120});
        cy.get('select[name="telf_country"]').select('+506', {delay: 120});
        cy.get('input[name="telf"]').type('72543921', {delay: 120});

        cy.get('input[id="sd_sessions_0"').type('22/03/2025', {delay: 120});
        cy.get('input[name=sessions[0][start_time]]').type('13:00', {delay: 120});
        cy.get('input[id="sde_sessions_0"').type('22/03/2025', {delay: 120});
        cy.get('input[name=sessions[0][end_time]]').type('16:00', {delay: 120});
        cy.get('select[name="sessions[0][status]"]').select('a', {delay: 120});
        cy.get('select[name="currency_id"]').select('38', {delay: 120});

        cy.get('input[name="options[0][option]"]').type('entrada gratis', {delay: 120});
        cy.get('input[name="options[0][price]"]').type('0', {delay: 120});
        cy.get('input[name="options[0][quantity]"]').type('20', {delay: 120});
        cy.get('input[name="images[]"]').selectFile('cypress/fixtures/img/logo_mc.jpeg', { force: true });
        cy.get('input[name="accept"]').check({ force: true });
        // cy.get('button[type="submit"]').click();
      });
    });
  });
});
```

---

## 📜 Notas
- no se pudo completar el test del formulario ya que no permite pasar de cierto punto, se cree que el formulario esta protegido 
contra bots.



## 📩 Contacto
Para dudas o sugerencias, puedes contactarme en manuelcisneros@gmail.com o en [GitHub](https://github.com/manolo1800).

---

🛠️ **Hecho con ❤️ por Manuel Cisneros**

