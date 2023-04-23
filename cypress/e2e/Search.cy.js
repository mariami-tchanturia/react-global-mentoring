describe('Search spec', () => {
  it('Check if Search input and submit button are visible', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[type="text"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('Check if search functionality works on submit button click', () => {
    cy.visit('http://localhost:3000');

    const searchQuery = 'Star Wars';

    const searchInput = cy.get('input[type="text"]');
    const searchButton = cy.get('button[type="submit"]');
    searchInput.clear();
    searchInput.type(searchQuery);
    searchButton.click();

		cy.get('[data-testid="movies-listing"]').within(() => {
			cy.get('[data-testid="movie-title"]').should("contain", searchQuery)
		})
  });

  it('Check if search functionality works on Enter press', () => {
    cy.visit('http://localhost:3000');

    const searchQuery = 'Harry Potter';

    const searchInput = cy.get('input[type="text"]');
    searchInput.clear();
    searchInput.type(searchQuery);
    searchInput.type('{enter}');

		cy.get('[data-testid="movies-listing"]').within(() => {
			cy.get('[data-testid="movie-title"]').should("contain", searchQuery)
		})
  });

	it('Check if searchbar shows up, when clicking on search icon on movie detail page', () => {
    cy.visit('http://localhost:3000');

		//Simulate displaying movie detail page

		const movieTileTitle = cy.get('[data-testid="movie-title"]').last();
		movieTileTitle.click();

    const showSearchbarBtn = cy.get('[data-testid="show-searchbar"]');
		showSearchbarBtn.should('be.visible');
		showSearchbarBtn.click();

    cy.get('input[type="text"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');

  });

});
