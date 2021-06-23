import Players from "./manager/Players.js";
import Hand from "./manager/Hand.js";
import Shop from "./manager/Shop.js";

function init() {
  const players = Players().init();

  Hand().render();
  Shop().render();
}

document.addEventListener("DOMContentLoaded", init);
