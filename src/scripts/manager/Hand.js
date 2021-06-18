import Cards from "../data/Cards.js";
import CardTemplate from "../template/Card.js";

export default () => {
  const render = () => {
    const shuffle = (array) => {
      var currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    };

    const handSelector = document.querySelectorAll(".hand")[0];

    var parser = new DOMParser();

    const nCards = 4;
    shuffle(Cards.infantry)
      .filter((_, index) => index < nCards) // Select only first N Cards
      .forEach((card, index) => {
        var doc = parser.parseFromString(
          CardTemplate(card, index),
          "text/html"
        );

        handSelector.appendChild(doc.firstChild);
      });
  };

  return { render };
};
