describe('Search spec', () => {
  it('Check if Movie Detail shows up when clicking on movie title', () => {
    cy.visit('http://localhost:3000');

		cy.get('[data-testid="movie-title"]').first()
			.invoke('text')
			.then((movieTileTitle) => {

				cy.get('[data-testid="movie-title"]').first().click()

				cy.get('[data-testid="movie-detail"]').within(() => {
					cy.get('[data-testid="movie-title"]').invoke('text')
					.should((movieDetailTitle) => {
						expect(movieDetailTitle).contains(movieTileTitle)
					})
				})
			})
  });
});
