import Shop from "./manager/Shop.js";
import Players from "./manager/Players.js";
import Dealer from "./manager/Dealer.js";

function init() {
  const shop = Shop().init();
  const players = Players(shop.deck).init();
  const dealer = Dealer(players);

  dealer.deal("a", 5);
}

document.addEventListener("DOMContentLoaded", init);
