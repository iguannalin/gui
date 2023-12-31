window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  // TODO makae a grid of invisible words that will show up when mouseover words
  const ghosts = ["鬼","鬽","魂","鬿","魁","鬾","魀","魆","魃","魄","魅","魇","魈","魉","魏","魎","魍","魌","魊","魋","魐","魑","魓","魒","魔","魖","魕","魙","魗","魘"];
  const container = document.getElementById("container");
  for (let i = 0; i < 6; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 5; j++) {
      const td = document.createElement("td");
      td.innerText = ghosts[(5*i)+j];
      td.addEventListener("touchmove", (e) => {e.preventDefault(); e.target.classList.add("appear")});
      td.addEventListener("touchend", (e) => {e.preventDefault(); e.target.classList.remove("appear")});
      tr.appendChild(td);
    }
    container.appendChild(tr);
    document.body.style.fontSize = (window.innerWidth-200) / 5+"px";
  }
});