import CardTemplate from "../template/Card.js";

export default (players) => {
  const deal = (playerId, nCards) => {
    const player = players[playerId];

    const dealCardsToPlayer = (handSelector) => {
      var parser = new DOMParser();

      player.deck
        .splice(0, nCards) // Select only first N Cards
        .forEach((card, index) => {
          player.hand.push(card);

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
