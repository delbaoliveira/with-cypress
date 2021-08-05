describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("/")

    // Find the link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click()

    // The new url should include "/about"
    cy.url().should("include", "/about")

    // The new page should contain a h1 with "About page"
    cy.get("h1").contains("About page")
  })
})
