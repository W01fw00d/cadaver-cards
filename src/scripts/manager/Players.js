import Cards from "../data/Cards.js";
import ArrayUtils from "../utils/Array.js";

export default (shopDeck) => {
  const arrayUtils = ArrayUtils();

  const init = () => {
    const initPlayer = (selector, name) => {
      const initDeck = () => {
        const fillArray = (value, len) => {
          var arr = [];
          for (var i = 0; i < len; i++) {
            arr.push(value);
          }
          return arr;
        };

        const nCards = 2;
        const deckCardsDealt = shopDeck.splice(0, nCards); // Select only first N Cards

        return arrayUtils.shuffle([
          ...fillArray(Cards.ink.pencil, 8),
          ...deckCardsDealt,
        ]);
      };

      return {
        selector,
        name,
        hp: 10,
        ink: 0,
        atack: 0,
        deck: initDeck(),
        discard: [],
        hand: [],
        onBoard: [], //TODO: here goes the protagonists cards on play
      };
    };

    return {
      a: initPlayer("player", "Gabo"),
      b: initPlayer("adversary", "JJ"),
    };
  };

  return { init };
};
