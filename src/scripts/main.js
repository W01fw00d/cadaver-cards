import Shop from "./manager/Shop.js";
import Players from "./manager/Players.js";
import Dealer from "./manager/Dealer.js";

function init() {
  const shop = Shop().init();
  const players = Players(shop.deck).init();
  const dealer = Dealer(players);
  console.log("shop deck and hand", shop.deck, shop.hand);

  const preDeck = [...players.a.deck]; //
  console.log("deck", preDeck); //
  dealer.deal("a", 5);
  console.log("deck dealt", players.a.deck, players.a.hand); //
  //Shop().render();
}

document.addEventListener("DOMContentLoaded", init);
