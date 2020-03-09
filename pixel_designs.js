function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';


    for (let i = 0; i < height; i++) {
        grid +='<tr class="row-' + i + '">';

        for (let j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    table.innerHTML = grid;

    addClickToCell();
}


function createSubmit() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}


function addClickToCell(){

    const colorPicker = document.getElementById("colorPicker");
    const cell = document.getElementsByClassName('cell');
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener("click", function (event) {
            let cellClicked = event.target;
            cellClicked.style.backgroundColor = colorPicker.value;
        });
    }
}

document.getElementById('sizePicker').onsubmit = function () {
    createSubmit();
};

makeGrid(20, 20);
