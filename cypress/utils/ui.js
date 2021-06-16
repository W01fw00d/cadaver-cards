import { mockedConsole } from "./console";

export const click = (selector) => cy.get(selector).click();

export const visit = () => cy.visit("http://127.0.0.1:5500");

export const visitMocked = () =>
  cy.visit("http://127.0.0.1:5500", mockedConsole);
