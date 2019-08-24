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


/*
function init() {
  let index = 0;
  function onKeyDownHandler(e) {
    const key = e.key;
    if (codes[index] === key) {
     for (let i = 0, l = codes.length; i < l; i++) {
            onKeyDownHandler(codes[i]);
          }

      if (index === codes.length) {
        for (let i = 0, l = codes.length; i < l; i++) {
                onKeyDownHandler(codes[i]);
              }

        alert("Victory!");

        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
*/
function init() {
  var index = 0;
  document.body.addEventListener('keydown', onKeyDownHandler);
  function onKeyDownHandler(e) {
    const key = e.key;
    console.log('key', key)
    if (key === codes[index]) {
      index++

      if (index === codes.length) {
        alert("Victory!");

        index = 0
      }
    } else {
      index = 0;
    }
  }
}
