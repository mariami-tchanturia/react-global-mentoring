describe('Routes spec', () => {
  it('Header and MovieListing should be visible on Home page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('input[type="text"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');

		cy.get('[data-testid="movie-active-genre"]').should('be.visible');
		cy.get('[data-testid="sort-control"]').should('be.visible');
		cy.get('[data-testid="movies-listing"]').should('be.visible');
  });

	it('MovieDetail and MovieListing should be visible on MovieDetail page', () => {
    cy.visit('http://localhost:3000/19');

		cy.get('[data-testid="movie-detail"]').should('be.visible');

		cy.get('[data-testid="movie-active-genre"]').should('be.visible');
		cy.get('[data-testid="sort-control"]').should('be.visible');
		cy.get('[data-testid="movies-listing"]').should('be.visible');
  });

  it('Check that SearchForm is not visible on Movie Detail page', () => {
    cy.visit('http://localhost:3000/19');

		cy.get('input[type="text"]').should('not.exist');
    cy.get('button[type="submit"]').should('not.exist');
  });

  it('Check if query is changed when search input is updated', () => {
    cy.visit('http://localhost:3000/');

    const searchQuery = 'Harry';

    const searchInput = cy.get('input[type="text"]');
    searchInput.clear();
    searchInput.type(searchQuery);
    searchInput.type('{enter}');

		cy.location('search').should('include', `?query=${searchQuery}`);
  });

	it('Check if input contains text, that is passed in query', () => {
    const searchQuery = 'test';

    cy.visit(`http://localhost:3000/?query=${searchQuery}`);

    const searchInput = cy.get('input[type="text"]');
		searchInput.invoke('val').should('contain', searchQuery);
  });

	it('Check if query is changed when GenreSelect value is changed', () => {
    cy.visit('http://localhost:3000/');

		cy.get('[data-testid="movie-active-genre"]').last()
		.invoke('text')
			.then((activeGenre) => {
				cy.get('[data-testid="movie-active-genre"]').last().click()

				cy.location('search').should('include', `?genre=${activeGenre.toLowerCase()}`);
			})
  });

	it('Check if SortControl value is set according to query', () => {
    const sortValue = 'Title';

    cy.visit(`http://localhost:3000/?sortBy=${sortValue.toLowerCase()}`);

    const selectedCriterion = cy.get('[data-testid="sort-control"]');
		selectedCriterion.invoke('val').should('contain', sortValue);
  });

	it('Check if query is changed when SortControl value is changed', () => {
    cy.visit('http://localhost:3000/');

		cy.get('[data-testid="sort-control"]').select('Title');

		cy.location('search').should('include', `?sortBy=title`);
  });

	it('Check if query changes correctly on Movie Detail page', () => {
		const movieID = 962
		const sortCriterion = 'Title'

    cy.visit(`http://localhost:3000/${movieID}`);

		// Click first result to Desplay Movie Detail page
		cy.get('[data-testid="movies-listing"]').within(() => {
			cy.get('[data-testid="movie-title"]').first().click();
		})
    // Change Sort Criterion
		cy.get('[data-testid="sort-control"]').select(sortCriterion);

    // Choose Genre
		cy.get('[data-testid="movie-active-genre"]').last()
		.invoke('text')
			.then((activeGenre) => {
				cy.get('[data-testid="movie-active-genre"]').last().click()

				cy.location('search').should('include', `?sortBy=${sortCriterion.toLowerCase()}&genre=${activeGenre.toLowerCase()}`);
			})
  });
});
