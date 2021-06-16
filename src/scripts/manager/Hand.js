export default () => {
  const render = () => {
    const handSelector = document.querySelectorAll(".hand")[0];

    const cards = [
      { title: "Cyan", img: "cyan", ink: 1, hp: 1 },
      { title: "Cyan", img: "cyan", ink: 1, hp: 1 },
      { title: "Cyan", img: "cyan", ink: 1, hp: 1 },
      { title: "Cyan", img: "cyan", ink: 1, hp: 1 },
    ];

    var parser = new DOMParser();

    cards.forEach((card, index) => {
      var doc = parser.parseFromString(
        `<div id="card${index}" class="card playable" draggable="true">` +
          `<div class="img-wrapper flex-box">` +
          `<img src="src/images/cards/${card.img}.jpg" alt="${card.title} Card">` +
          `</div>` +
          `<div class="title">` +
          card.title +
          `</div>` +
          `</div>`,
        "text/html"
      );

      handSelector.appendChild(doc.firstChild);
    });
  };

  return { render };
};
