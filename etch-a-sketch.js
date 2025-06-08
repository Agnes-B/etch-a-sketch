const container = document.querySelector('#container');

const userBtn = document.createElement("button");


let num = 16;

function hoverEffect() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.addEventListener('mouseover', mouseenter));
    squares.forEach(square => square.addEventListener("mouseout", mouseexit));
}

function setUpGrid(num) {
    userBtn.textContent = "Choose number of squares";
    container.appendChild(userBtn);
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.setAttribute("class", "row");
        for (let j = 0; j < num; j++) {
            const div = document.createElement('div');
            div.setAttribute("class", "square");
            row.appendChild(div);
        }
    container.appendChild(row);
    }
    hoverEffect();
}

setUpGrid(num);

function mouseenter(e) {
    e.target.classList.add("highlighted");
}

function mouseexit(e) {
    e.target.classList.remove("highlighted");
}


const rows = document.querySelectorAll("row");

function deleteGrid() {
    console.log("deleteGrid called");
    container.replaceChildren();
}


function userInput() {
    let input = prompt("Enter a value here");
    deleteGrid();
    setUpGrid(input);
    console.log(squares);
}

userBtn.addEventListener('click', userInput)


