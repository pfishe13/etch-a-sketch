
let startingDimension = 10;

function fillGrid(dimension){
    resetGrid();
    const container = document.getElementById('main-container');
    let numItems = dimension * dimension;
    for(let i = 1; i <= numItems; i++) {
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        const containerWidth = getComputedStyle(container).width;
        // console.log(containerWidth);

        newItem.style.width = (`${parseInt(containerWidth)/dimension}px`);
        newItem.setAttribute('id', `item-${i}`);
        container.appendChild(newItem);
    }
    setEventListener();
}

function setEventListener() {
    const allItems = document.querySelectorAll('.item');
    allItems.forEach(item => {
        item.addEventListener('mouseenter', fillItem)
    })
}

function fillItem(e) {
    if (e.target.classList.contains('shaded')) {
        let color = getComputedStyle(e.target).backgroundColor;
        let firstPartofColor = color.substring(0,color.length-3);
        let alpha = color.substring(color.length-3, color.length-1);
        if(alpha < '80') {
            let newAlpha = 20 + parseInt(alpha);
            e.target.style.backgroundColor = `${firstPartofColor+newAlpha}`;
        } else {
            e.target.style.backgroundColor = `${firstPartofColor+99}`
        }
    } else {
    e.target.classList.add('shaded');
    }

}

function resetColor() {
    const allItems = document.querySelectorAll('.shaded');
    allItems.forEach(item => {
        item.classList.toggle('shaded');
        item.style.backgroundColor = null;})
}

function resetGrid() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => item.remove());
}

fillGrid(startingDimension);
