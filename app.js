function styleButtons() {
    let buttons = document.querySelectorAll('button'); 
    // console.log(buttons); 
    for (let i = 0; i < buttons.length; i++) {
        // console.log(buttons[i]); 
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

function changeDOMColor() {
    const mainDiv = document.querySelector('.main'); 
    mainDiv.style.backgroundColor = `${pickColor().string}`; 
};

function pickColor() {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    let newColor = {
        string: `rgb(${r}, ${g}, ${b})`,
        red: r, 
        green: g,
        blue: b
    };
    
    function changeColorText() {
    const text = document.querySelector('.main p'); 
    // console.log(text.innerHTML); 
    text.innerHTML = newColor.string; 
    }; 
    changeColorText(); 
    
    return newColor; 
    };

function determineInvertColor() {
    const text = document.querySelector('.main p');
    let currentRed, currentBlue, currentGreen, invertedColor;

    // determine current red, blue, and green from DOM paragraph
        let newText = text.innerHTML.split(','); //separate the numbers into an array
        let firstNumber = newText[0].split('('); //removes paren on first element
           currentRed = parseInt(firstNumber[1]); 
        //    console.log(`Current red is ${currentRed}.`); 
        currentGreen = parseInt(newText[1].trim()); //remove whitespace from second number
        // console.log(`Current green is ${currentGreen}.`)
        let thirdNumber = newText[2].trim().split(')'); //removes comma and paren from 3rd item
    currentBlue = parseInt(thirdNumber[0]); 
    // console.log(`Current blue is ${currentBlue}.`)  
    

    let invertedRed, invertedGreen, invertedBlue;
    invertedRed = 255 - currentRed; 
    invertedGreen = 255 - currentGreen; 
    invertedBlue = 255 - currentBlue; 

        invertedColor = {
            string: `rgb(${invertedRed}, ${invertedGreen}, ${invertedBlue})`,
            invertedRed, 
            invertedGreen, 
            invertedBlue
        }; 

        function changeInvertColorText() {
            const text = document.querySelector('.main p'); 
            // console.log(text.innerHTML); 
            text.innerHTML = invertedColor.string; 
        }
        changeInvertColorText(); 
    
        // console.log('Inverted colors ran!'); 
        return invertedColor; 
}; 


function changeDOMColorInvert() {
        const mainDiv = document.querySelector('.main'); 
        mainDiv.style.backgroundColor = `${determineInvertColor().string}`; 
    }

styleButtons(); 
sizeAndStyleDiv(); 
window.addEventListener('resize', resizeDiv); 
document.querySelector('button').addEventListener('click', changeDOMColor); 
// document.querySelector('html').addEventListener('keydown', function(event) {
//     if (event.keyCode === 32) {
//         changeDOMColor(); 
//     }; 
// });    // ADDING KEYPRESS EVENTS LATER
document.querySelector('#invert').addEventListener('click', changeDOMColorInvert); 