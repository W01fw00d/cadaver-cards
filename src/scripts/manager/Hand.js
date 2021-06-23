import Cards from "../data/Cards.js";
import CardTemplate from "../template/Card.js";
import ArrayUtils from "../utils/Array.js";

export default () => {
  const arrayUtils = ArrayUtils();

  const render = () => {
    const dealCardsToPlayer = (handSelector) => {
      var parser = new DOMParser();

      const nCards = 4;
      arrayUtils
        .shuffle(Cards.secondary)
        .filter((_, index) => index < nCards) // Select only first N Cards
        .forEach((card, index) => {
          var doc = parser.parseFromString(
            CardTemplate(card, index),
            "text/html"
          );

          handSelector.appendChild(doc.firstChild);
        });
    };

    const playerHandSelector = document.querySelectorAll(".player.hand")[0];
    dealCardsToPlayer(playerHandSelector);

    const adversaryHandSelector =
      document.querySelectorAll(".adversary.hand")[0];
    dealCardsToPlayer(adversaryHandSelector);
  };

  return { render };
};
