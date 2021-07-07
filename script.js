let grid = document.querySelector("#container");

let numGrids = 16;
let stringNumGrids = numGrids.toString();
console.log(stringNumGrids);

for (let i = 0; i < numGrids * numGrids; i++) {
    div = document.createElement("div");
    div.addEventListener("click", colorChange);
    grid.appendChild(div);
}

grid.style["grid-template-rows"] = `repeat(${stringNumGrids}, 1fr)`;
grid.style["grid-template-columns"] = `repeat(${stringNumGrids}, 1fr)`;
// grid.setAttribute("grid-template-rows", `repeat(${stringNumGrids}, 1fr)`);
// grid.setAttribute("grid-template-columns", `repeat(${stringNumGrids}, 1fr)`);
// console.log(grid)





function colorChange() {
    // console.log(this);
    this.classList.add("blue");
}
