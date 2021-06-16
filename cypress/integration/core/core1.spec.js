/// <reference types="cypress" />

import { visit } from "../../utils/ui";

context("Core cases", () => {
  it("Case 1", () => {
    visit();
    cy.get("#note").contains("Hello World");
  });
});
