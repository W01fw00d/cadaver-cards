import CardTemplate from "../template/Card.js";
// import ArrayUtils from "../utils/Array.js";

export default (players) => {
  // const arrayUtils = ArrayUtils();

  const deal = (playerId, nCards) => {
    const player = players[playerId];

    const dealCardsToPlayer = (handSelector) => {
      var parser = new DOMParser();

      player.deck
        .filter((_, index) => index < nCards) // Select only first N Cards
        .forEach((card, index) => {
          player.hand.push(card);
          player.deck.splice(index, 1);

          var doc = parser.parseFromString(
            CardTemplate(card, index),
            "text/html"
          );

          handSelector.appendChild(doc.firstChild);
        });
    };

    const playerHandSelector = document.querySelectorAll(
      `.${player.selector}.hand`
    )[0];
    dealCardsToPlayer(playerHandSelector);
  };

  return { deal };
};
