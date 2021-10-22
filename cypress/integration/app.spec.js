describe("Rendering", () => {
  it("should view home page", () => {
    // Start from the index page
    cy.visit("/");

    // The page should contain an h2 with "Contato"
    cy.get("h2").contains("Contato");

    // The page should contain an a with "me@leandrodasilva.dev"
    cy.get("a").contains("me@leandrodasilva.dev");

    // The page should contain an a with "LeandroDaSilva"
    cy.get("a").contains("LeandroDaSilva");

    // The page should contain an a with "ldsilva"
    cy.get("a").contains("ldsilva");

    // The page should contain an label with "Tema"
    cy.get("label").contains("Tema");
  });
});
