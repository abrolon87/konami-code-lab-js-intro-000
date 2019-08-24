const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];



function init() {
  let index = 0;
  function onKeyDownHandler(e) {
    const key = e.key;

    if (codes[index] === key) {
      index++;

      if (index === codes.length) {
        alert("Victory!");

        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
