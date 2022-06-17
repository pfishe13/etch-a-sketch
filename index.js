
let startingDimension = 25;

function fillGrid(dimension){
    resetGrid();
    const container = document.getElementById('main-container');
    let numItems = dimension * dimension;
    for(let i = 1; i <= numItems; i++) {
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.style.width = (`${600/dimension}px`);
        newItem.setAttribute('id', `item-${i}`);
        container.appendChild(newItem);

    }
}

function resetGrid() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => item.remove());
}

fillGrid(startingDimension);
