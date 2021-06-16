import Hand from "./manager/Hand.js";
import DragAndDrop from "./manager/DragAndDrop.js";

function init() {
  Hand().render();
  DragAndDrop().bind();
}

document.addEventListener("DOMContentLoaded", init);
