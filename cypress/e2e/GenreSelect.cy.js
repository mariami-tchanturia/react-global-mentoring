describe('GenreSelect spec', () => {
  it('Simulate genre changing. Make sure all displayed movies contain active genre in genres list.', () => {
    cy.visit('http://localhost:3000');

		cy.get('[data-testid="movie-active-genre"]').last()
		.invoke('text')
			.then((activeGenre) => {

				cy.get('[data-testid="movie-active-genre"]').last().click()

				cy.get('[data-testid="movies-listing"]').within(() => {
					cy.get('[data-testid="movie-genre"]').invoke('text')
					.should((genresListing) => {
						expect(genresListing).contains(activeGenre)
					})
				})
			})
  });
});
