import Hand from "./manager/Hand.js";
import Shop from "./manager/Shop.js";

function init() {
  Hand().render();
  Shop().render();
}

document.addEventListener("DOMContentLoaded", init);
