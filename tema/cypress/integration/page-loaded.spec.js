describe("Page load test", () => {
    it("Components Loaded", () => {
        cy.visit("/")
        cy.contains("Hello");
    })
});
