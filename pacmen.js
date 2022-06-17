var pos = 0;
const pacArray = [
  ["./images/PacMan1.png", "./images/PacMan2.png"],
  ["./images/PacMan3.png", "./images/PacMan4.png"],
];
var direction = 0;
var focus = 0;
var pageWidth = window.innerWidth;

function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth);
  img.src = pacArray[direction][focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + "px";
  } else {
    pos += 20;
    img.style.left = pos + "px";
  }

  setTimeout(Run, 200);
}

function checkPageBounds(direction, imgWidth) {
  if (!direction && imgWidth + pos > pageWidth) {
    direction = 1;
  }

  if (direction && pos < 0) {
    direction = 0;
  }

  return direction;
}
