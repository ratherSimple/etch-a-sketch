let grid = document.querySelector("#container");

let reset = document.getElementById("reset");

let numGrids = prompt("Size of sketch pad? Enter one number N, size will be N x N. N must be in [16, 100]");

function reload() {
    location.reload();
}

reset.addEventListener("click", reload);

if (numGrids < 16)
    numGrids = 16;
if (numGrids > 100)
    numGrids = 100;

let stringNumGrids = numGrids.toString();

for (let i = 0; i < numGrids * numGrids; i++) {
    div = document.createElement("div");
    div.addEventListener("mouseover", colorChange);
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
