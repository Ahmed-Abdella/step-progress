const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circle = document.querySelectorAll(".circle");

let currentActive = 1;

circle.forEach((item, idx) => {
  item.addEventListener("click", () => {
    currentActive = idx + 1;
    // console.log(currentActive, circle.length);
    update();
  });
});

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circle.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
    next.disabled = false;
  } else if (currentActive === circle.length) {
    next.disabled = true;
    prev.disabled = false;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
// I got it :D
