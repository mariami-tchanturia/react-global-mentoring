describe('GenreSelect spec', () => {
  it('Check sorting functionality by release date', () => {
    cy.visit('http://localhost:3000');

		const years = [];

		cy.get('[data-testid="sort-control"]').select('Release Date');


		cy.get('[data-testid="movies-listing"]').within(() => {
			cy.get('[data-testid="movie-release-date"]').each(($el) => {years.push($el.text()) })
			.then(() => {
				cy.wrap(years).should('satisfy', isAscending)
			})
		})

  });

});

function isAscending(data) {
  return data.every((element, index) => index === 0 || element >= data[index - 1]);
}
