const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.setAttribute("class", "row");
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.setAttribute("class", "square");
        row.appendChild(div);
    }
    container.appendChild(row);
}

function mouseenter(e) {
    console.log(e);
}

const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener('mouseover', mouseenter));