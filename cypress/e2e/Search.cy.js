
describe('Search spec', () => {
  it('Check if Search input and submit button are visible', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[type="text"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('Check if search functionality works on submit button click', () => {
    cy.visit('http://localhost:3000');

		const testSearchQuery = 'Test Search Query';

    const searchInput = cy.get('input[type="text"]');
    const searchButton = cy.get('button[type="submit"]');
    searchInput.clear();
    searchInput.type(testSearchQuery);
    searchButton.click();
		expect(cy.get('[data-cy="search-result-container"]').contains(testSearchQuery))
  });

	it('Check if search functionality works on Enter click', () => {
    cy.visit('http://localhost:3000');

		const testSearchQuery = 'Test Search Query';

    const searchInput = cy.get('input[type="text"]');
    searchInput.clear();
    searchInput.type(testSearchQuery);
		searchInput.type('{enter}')
		expect(cy.get('[data-cy="search-result-container"]').contains(testSearchQuery))
  });
});
