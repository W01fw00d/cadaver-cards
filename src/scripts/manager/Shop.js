import Cards from "../data/Cards.js";
import CardTemplate from "../template/Card.js";
import ArrayUtils from "../utils/Array.js";

export default () => {
  const arrayUtils = ArrayUtils();

  const init = () => {
    const selector = "shop";
    const node = document.querySelectorAll(`.${selector}`)[0];
    let deck = [...arrayUtils.shuffle(Cards.secondary)];
    const hand = [];

    const dealCards = () => {
      var parser = new DOMParser();

      const nCards = 4;
      deck
        .splice(0, nCards) // Select only first N Cards
        .forEach((card, index) => {
          hand.push(card);

          var doc = parser.parseFromString(
            CardTemplate(card, index),
            "text/html"
          );

          node.appendChild(doc.firstChild);
        });
    };

    dealCards();

    return {
      selector,
      deck,
      hand,

      discards: [], //TODO: here goes the cards deleted from the match
    };
  };

  return { init };
};
