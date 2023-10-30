window.addEventListener("load", () => {
  const container = document.getElementById("container");
  const svg = document.querySelectorAll("svg")[0];
  let blur = 140;
  let diff = 1;
  setInterval(() => {if (blur >= 240) diff = -1; else if (blur <= 140) diff = 1; svg.style.filter = `blur(${blur+=diff}px)`}, 50);
});