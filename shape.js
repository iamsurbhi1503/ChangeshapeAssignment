const inner = document.querySelector(".inner-box");
const outer = document.querySelector(".outer-box");

const bgColors = [
    "black",
    "violet",
    "green",
    "pink",
    "seagreen",
    "cyan",
    "yellow",
    "orange",
];

document.getElementById("change-shape").addEventListener("click", () => {
inner.classList.toggle("box");
});

document.getElementById("change-color").addEventListener("click", () => {
  let idx = Math.floor(Math.random() * 9);
outer.style.backgroundColor = bgColors[idx];
});