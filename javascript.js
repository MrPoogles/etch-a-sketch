const container = document.querySelector(".container");
const colorWindow = document.querySelector(".colorWindow");
const rainbowButton = document.querySelector(".rainbowButton");
const shadeButton = document.querySelector(".shadeButton");
const eraseButton = document.querySelector(".eraseButton");
const etchButton = document.querySelector(".etchButton");
const clearButton = document.querySelector(".clearButton");
const gridInfoParent = document.querySelector(".gridInfoParent");
const gridSizeInput = document.querySelector(".gridSizeInput");

//Default parameter
const gridSizeInfo = document.createElement("div");
gridSizeInfo.textContent = "16 x 16";
gridInfoParent.appendChild(gridSizeInfo);
for (let i = 1; i <= 16*16; i++) {
  const grid = document.createElement("div");
  grid.style.border = "1px solid";
  grid.style.borderColor = "black";
  container.style.gridTemplateColumns = "repeat(16, 1fr)";
  container.style.gridTemplateRows = "repeat(16, 1fr)";
  grid.classList.add("grid");
  container.appendChild(grid);
}

function removeAllChildNodes(parent){
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
}

const drawGrid = function() {
  let size = `${gridSizeInput.value}`
  adjustGridBox(size)
};

const adjustGridBox = function(size) {
  removeAllChildNodes(container);
  removeAllChildNodes(gridInfoParent);
  const newGridSizeInfo = document.createElement("div");
  newGridSizeInfo.textContent = `${size} x ${size}`
  gridInfoParent.appendChild(newGridSizeInfo);
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

const ableShade = function() {
  let shadeColor = 250;
  return function(e) {
    shadeColor -= 25;
    e.target.style.backgroundColor = `rgb(${shadeColor},${shadeColor},${shadeColor})`;
  };
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


gridSizeInput.addEventListener("change", drawGrid);
etchButton.addEventListener("click", ableColor);
rainbowButton.addEventListener("click", ableRainbow);
shadeButton.addEventListener("click", () => {
  let grids = document.querySelectorAll(".grid");
  grids.forEach(grid => grid.addEventListener('mouseover', ableShade()));
});
eraseButton.addEventListener("click", ableEraser);
clearButton.addEventListener("click", clearAllColor);