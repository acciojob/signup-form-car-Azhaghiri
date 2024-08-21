//your code here
it('should find the select element and its label', () => {
    cy.visit(baseUrl + "/main.html"); // Ensure this path is correct
    cy.get("form").within(() => {
        cy.get("select#cars").should('exist'); // Match the id 'cars'
        cy.get("label[for='cars']").should('exist'); // Match the id 'cars'
    });
});
