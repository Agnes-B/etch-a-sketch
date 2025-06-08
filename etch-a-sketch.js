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
            div.setAttribute("style", `width: ${(visualViewport.height-80)/num}px; height: ${(visualViewport.height-80)/num}px`);
            row.appendChild(div);
        }
    container.appendChild(row);
    }
    console.log("viewport height: " + visualViewport.height);
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
    container.replaceChildren();
}


function userInput() {
    let input = Number(prompt("Enter a value here"));
    while (input > 100 || !Number.isInteger(input)) {
        console.log(input + typeof(input));
        input = Number(prompt("Enter a number up to 100."));
    } 
    deleteGrid();
    setUpGrid(input);
}

userBtn.addEventListener('click', userInput)


