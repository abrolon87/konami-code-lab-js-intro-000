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
     for (let i = 0, l = codes.length; i < l; i++) {
            onKeyDownHandler(codes[i]);
          }

      if (index === codes.length -1) {
        for (let i = 0, l = codes.length; i < l; i++) {
                triggerKeyDown(codes[i]);
              }

        alert("Victory!");

        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
