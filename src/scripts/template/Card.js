export default (card, index) => {
  const img = card.img
    ? `<img class="image" src="src/images/cards/${card.img}" alt="${card.title} Card">`
    : card.emoji;

  return (
    `<div id="card${index}" class="card playable" draggable="true">` +
    `<div class="stats flex-box">` +
    `<span>${card.ink}</span>` +
    `<span class="power">${card.power}</span>` +
    `</div>` +
    `<div class="img-wrapper flex-box">` +
    img +
    `</div>` +
    `<div class="title">` +
    card.title +
    `</div>` +
    `</div>`
  );
};
