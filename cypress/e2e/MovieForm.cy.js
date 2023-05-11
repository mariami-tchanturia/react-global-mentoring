describe('MovieForm specs', () => {
	it('Empty form submitting should show errors', () => {
		cy.visit('http://localhost:3000/new');

		cy.get('[data-testid="form-submit"]').click();

		cy.get('[data-testid="error"]').should('be.visible');
	});

	it('Movie adding functionality check', () => {
		cy.visit('http://localhost:3000/new');

		cy.get('[data-testid="title"]').type('Test Title');
		cy.get('[data-testid="poster_path"]').type('https://testUrl.ge');
		cy.get('[data-testid="release_date"]').type('2020-02-02');
		cy.get('[data-testid="overview"]').type('Test Overview');
		cy.get('[data-testid="runtime"]').type(90);
		cy.get('[data-testid="vote_average"]').type(7);
		cy.get('#genres').type('Crime'+"{enter}")

		cy.get('[data-testid="form-submit"]').click();
		cy.get('[data-testid="movie-title"]').should('contain' , 'Test Title');
	});

	it('Movie edit functionality check', () => {
		cy.visit('http://localhost:3000/962/edit');

		cy.get('[data-testid="title"]').clear().type('New Title')

		cy.get('[data-testid="form-submit"]').click();

		cy.visit('http://localhost:3000/962');
		cy.get('[data-testid="movie-title"]').should('contain' , 'New Title');
	});


	it('Movie Form reset functionality check', () => {
		cy.visit('http://localhost:3000/962/edit');

		cy.get('[data-testid="form-reset"]').click();

		cy.visit('http://localhost:3000/new');

		cy.get('[data-testid="title"]').should('have.value', '');
		cy.get('[data-testid="poster_path"]').should('have.value', '');
		cy.get('[data-testid="release_date"]').should('have.value', '');
		cy.get('[data-testid="overview"]').should('have.value', '');
		cy.get('[data-testid="runtime"]').should('have.value', '');
		cy.get('[data-testid="vote_average"]').should('have.value', '');
		cy.get('#genres').should('have.value', '')
	});

});
