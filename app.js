function styleButtons() {
    let buttons = document.querySelectorAll('button'); 
    console.log(buttons); 
    for (let i = 0; i < buttons.length; i++) {
        console.log(buttons[i]); 
        buttons[i].classList.add('button')
        // buttons[i].setAttribute('class', 'button');  
    }
}; 

function sizeAndStyleDiv() {
//1. Get Div
    const mainDiv = document.querySelector('.main'); 
    // console.log(mainDiv);
//2. Style and position Div
    mainDiv.style.backgroundColor = 'white'; 
    mainDiv.parentElement.style.display = 'flex'; 
    mainDiv.parentElement.style.flexDirection = 'column'; 
    mainDiv.parentElement.style.alignItems = 'center'; 
    mainDiv.parentElement.parentElement.style.justifyContent = 'center'; 
//3. Size Div
    resizeDiv(); 
};

function resizeDiv() {
    let mainDiv = document.querySelector('.main');
    mainDiv.style.width = `${window.innerWidth * .65}px`; 
    mainDiv.style.height = `${window.innerHeight * .65}px`; 
}; 

function changeColor() {
    const mainDiv = document.querySelector('.main'); 
    mainDiv.style.backgroundColor = pickColor(); 
};

function pickColor() {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    let newColor = `rgb(${r}, ${g}, ${b})`; 
    console.log(newColor); 

    (function changeColorText() {
    const text = document.querySelector('.main p'); 
    // console.log(text.innerHTML); 
    text.innerHTML = newColor; 
    })(); 

    return newColor; 
    };

styleButtons(); 
sizeAndStyleDiv(); 
window.addEventListener('resize', resizeDiv); 
document.querySelector('button').addEventListener('click', changeColor); 
document.querySelector('html').addEventListener('keydown',function(event) {
    if (event.keyCode === 32) {
        changeColor(); 
    }; 
}); 