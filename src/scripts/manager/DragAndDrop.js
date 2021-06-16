export default () => {
  const bind = () => {
    const handleDragstart = (event) =>
      event.dataTransfer.setData("Text", event.currentTarget.id);

    Array.from(document.querySelectorAll(".card.playable")).forEach((node) => {
      node.addEventListener("dragstart", handleDragstart, false);
    });

    document.querySelectorAll(".card.slot").forEach((node) => {
      const handleDrop = (event) => {
        var originId = event.dataTransfer.getData("Text");
        const originElement = document.getElementById(originId);

        if (originElement) {
          event.preventDefault();
          event.target.appendChild(originElement);

          originElement.setAttribute("draggable", "false");
          originElement.removeEventListener("dragstart", handleDragstart);

          //TODO: drop game logic
        } else {
          console.warn("No ID found on dragged node");
        }
      };

      node.addEventListener("drop", handleDrop, false);

      node.addEventListener(
        "dragover",
        (event) => {
          event.preventDefault();
        },
        false
      );
    });
  };

  return { bind };
};
