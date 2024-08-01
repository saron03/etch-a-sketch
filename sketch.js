const btns = document.querySelector(".buttons");

const btn1 = document.createElement("button");
btn1.textContent = "Reset";
btn1.classList.add("btn0");
btn1.style.cssText="margin-top: 150px; margin-bottom:20px;";
btns.appendChild(btn1);

const topic = document.createElement("p");
topic.classList.add("topic");
topic.textContent = "Change color";
topic.style.cssText = "font-weight:bolder; text-align:center; color:purple; font-style:italic; font-size:25px; margin-left:20px;";
btns.appendChild(topic);


const btn2 = document.createElement("button");
btn2.classList.add("btn");
btn2.textContent = "Random color 1";
btns.appendChild(btn2);

const btn3 = document.createElement("button");
btn3.classList.add("btn");
btn3.textContent = "Random color 2";
btns.appendChild(btn3);

const btn4 = document.createElement("button");
btn4.classList.add("btn");
btn4.textContent = "Random color 3";
btns.appendChild(btn4);


const gridSize = document.createElement("button");
gridSize.classList.add("gSize");
gridSize.textContent = "Change size";
btns.appendChild(gridSize);


function createGrid(size) {
    const container = document.getElementById('container'); 
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '40%';
    container.style.boxSizing = 'border-box';
    const gap = 3;
    container.style.gap = `${gap}px`; 

    const itemWidthPercent = 100 / size;
    const itemWidth = `calc(${itemWidthPercent}% - ${gap}px)`;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    for (let i = 0; i < size * size; i++) {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        item.style.width = itemWidth;
        item.style.paddingBottom = itemWidth;
        item.style.boxSizing = 'border-box'; 
        container.appendChild(item);
    }
    document.querySelectorAll('.grid-item').forEach(grid => {
        grid.addEventListener('mouseover', function() {
            grid.style.backgroundColor = 'black';
        });
    });
}

createGrid(10);

btn1.addEventListener("click", function(){
    document.querySelectorAll('.grid-item').forEach(grid => {
        grid.style.backgroundColor = 'white';
        grid.addEventListener('mouseover', function() {
            grid.style.backgroundColor = 'black';
        });
    });
});

btn2.addEventListener("click", function(){
    document.querySelectorAll('.grid-item').forEach(grid => {
        grid.addEventListener('mouseover', function() {
            grid.style.backgroundColor = 'red';
        });
    })
});

btn3.addEventListener("click", function(){
    document.querySelectorAll('.grid-item').forEach(grid => {
        grid.addEventListener('mouseover', function() {
            grid.style.backgroundColor = 'lightpink';
        });
    })
});

btn4.addEventListener("click", function(){
    document.querySelectorAll('.grid-item').forEach(grid => {
        grid.addEventListener('mouseover', function() {
            grid.style.backgroundColor = 'darkgrey';
        });
    })
});

gridSize.addEventListener("click", function(){
    let sizee = prompt("Enter the size you want from 1 up to 100");
    if (sizee && !isNaN(sizee) && sizee > 0 && sizee <= 100) {
        createGrid(Number(sizee));
    } else {
        alert("Please enter a valid size between 1 and 100.");
    }
});









