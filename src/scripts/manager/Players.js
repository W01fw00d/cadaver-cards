import Cards from "../data/Cards.js";
import ArrayUtils from "../utils/Array.js";

export default () => {
  const arrayUtils = ArrayUtils();

  const init = () => {
    const initPlayer = (name) => {
      const initDeck = () => {
        function fillArray(value, len) {
          var arr = [];
          for (var i = 0; i < len; i++) {
            arr.push(value);
          }
          return arr;
        }

        const nCards = 2;
        return [
          ...fillArray(Cards.ink.pencil, 8),
          ...arrayUtils
            .shuffle(Cards.secondary)
            .filter((_, index) => index < nCards),
        ];
      };

      return {
        name,
        hp: 10,
        ink: 0,
        atack: 0,
        deck: initDeck(),
        discards: [],
        hand: [],
      };
    };

    return {
      a: initPlayer("Gabo"),
      b: initPlayer("JJ"),
    };
  };

  return { init };
};
