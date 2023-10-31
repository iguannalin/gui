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
      tr.appendChild(td);
    }
    container.appendChild(tr);
    container.style.fontSize = (window.innerWidth-200) / 5+"px";
  }
  
  // ghosts.forEach((gh) => {
  //   const elem = document.createElement("p");
  //   elem.innerText = gh;
  //   elem.style.fontSize = ((window.innerWidth-200) / 5)+"px";
  //   container.appendChild(elem);
  // });
  // function haunt() {
  //   elem.innerHTML = ghosts[getRandomInt(0,ghosts.length)];
  //   elem.style.left = getRandomInt(100,window.innerWidth-100)+"px";
  //   elem.style.top = getRandomInt(100,window.innerHeight-100)+"px";
  //   elem.style.fontSize = getRandomInt(25,40)+"px";
  //   elem.classList.add("appear");
  // }
  // setInterval(haunt, 2000);
  // setInterval(() => elem.classList.remove("appear"), 2750);
});

// window.addEventListener("load", () => {
//   function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
//   }
//   const ghosts = ["鬼","鬽","魂","鬿","魁","鬾","魀","魆","魃","魄","魅","魇","魈","魉","魏","魎","魍","魌","魊","魋","魐","魑","魓","魒","魔","魖","魕","魙","魗","魘"];
//   const container = document.getElementById("container");
//   const elem = document.createElement("p");
//   let timeout;
//   container.appendChild(elem);
//   function haunt(e) {
//     elem.classList.add("appear");
//     elem.innerHTML = ghosts[getRandomInt(0,ghosts.length)];
//     elem.style.left = e.pageX-50+"px";
//     elem.style.top = e.pageY-50+"px";
//     elem.style.fontSize = getRandomInt(25,50)+"px";
//   }
//   window.onmousemove = (e) => haunt(e);
//   window.onmouseout = () => elem.classList.remove("appear");
// });