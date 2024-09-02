it('drag & drop works correctly', () => {
    cy.get('.items', { timeout: 10000 }) // Increase timeout to wait for the element
        .should('exist') // Ensure the element exists
        .should('be.visible') // Ensure the element is visible
        .trigger('mousedown', { which: 1, pageX: 493, pageY: 391 })
        .trigger('mousemove', { pageX: 271, pageY: 391 })
        .trigger('mouseup', { force: true });

    cy.get('.items').should($items => {
        expect($items[0].scrollLeft).to.be.greaterThan(0);
    });
});
