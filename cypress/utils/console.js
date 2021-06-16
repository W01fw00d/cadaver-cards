const CONSOLE_LOG = "consoleLog";

export const havePrinted = (text) =>
  cy.get(`@${CONSOLE_LOG}`).should("be.calledWith", text);

export const mockedConsole = {
  onBeforeLoad(win) {
    cy.stub(win.console, "log").as(CONSOLE_LOG);
  },
};
