/// <reference types="cypress" />

import { visitMocked } from "../utils/ui";
import { havePrinted } from "../utils/console";

context("Not core cases", () => {
  it("Case 1", () => {
    visitMocked();
    havePrinted("Hello World");
  });
});
