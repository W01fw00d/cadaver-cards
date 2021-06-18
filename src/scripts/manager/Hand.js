import Cards from "../data/Cards.js";
import CardTemplate from "../template/Card.js";

export default () => {
  const render = () => {
    const handSelector = document.querySelectorAll(".hand")[0];

    var parser = new DOMParser();

    const nCards = 4;
    Cards.infantry
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
