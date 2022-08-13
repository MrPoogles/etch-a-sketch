const container = document.querySelector(".container");
const colorWindow = document.querySelector(".colorWindow");
const rainbowButton = document.querySelector(".rainbowButton");
const eraseButton = document.querySelector(".eraseButton");
const gridButton = document.querySelector(".gridButton");
const etchButton = document.querySelector(".etchButton");
const clearButton = document.querySelector(".clearButton");


const inputGrid = function() {
  let size = prompt("Please input desired grid size, if you put '3' it will generate 3 x 3 grid.");
  if (size > 50) {
    alert("Maximum grid is 50 x 50!");
    gridBox(50);
  } else {
    gridBox(size);
  }
}

function removeAllChildNodes(parent){
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
}

const gridBox = function(size) {
  removeAllChildNodes(container);
  for (let i = 1; i <= size*size; i++) {
      const grid = document.createElement("div");
      grid.style.border = "1px solid";
      grid.style.borderColor = "black";
      container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
      grid.classList.add("grid");
      container.appendChild(grid);
  }
}

const ableEraser = function() {
  let grids = document.querySelectorAll(".grid");
  grids.forEach(grid => grid.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "white";
  }));
}

const rainbowColor = function() {
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);
  let hr = r.toString(16).padStart(2,'0');
  let hg = g.toString(16).padStart(2,'0');
  let hb = b.toString(16).padStart(2,'0');
  return "#" + hr + hg + hb;
}

const ableRainbow = function() {
  let grids = document.querySelectorAll(".grid");
  grids.forEach(grid => grid.addEventListener('mouseover', (e) => {
    //console.log(e.target.style.backgroundColor = `${colorWindow()}`)
    e.target.style.backgroundColor = `${rainbowColor()}`;
  }));
};

const ableColor = function() {
  let grids = document.querySelectorAll(".grid");
  grids.forEach(grid => grid.addEventListener('mouseover', (e) => {
    //console.log(e.target.style.backgroundColor = `${colorWindow.value}`)
    e.target.style.backgroundColor = `${colorWindow.value}`;
  }));
}

const clearAllColor = function() {
  let grids = document.querySelectorAll(".grid");
  grids.forEach(grid => grid.style.backgroundColor = "white");
}

etchButton.addEventListener("click", ableColor);
rainbowButton.addEventListener("click", ableRainbow);
eraseButton.addEventListener("click", ableEraser);
gridButton.addEventListener("click", inputGrid);
clearButton.addEventListener("click", clearAllColor);