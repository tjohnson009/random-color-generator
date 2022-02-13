// function styleButtons() {
//     let buttons = document.querySelectorAll('button'); 
//     // console.log(buttons); 
//     for (let i = 0; i < buttons.length; i++) {
//         // console.log(buttons[i]); 
//         // buttons[i].classList.add('button'); 
//         // buttons[i].setAttribute('class', 'button');  
//     }
// }; 

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

function newDOMColor() {
    const mainDiv = document.querySelector('.main'); 
    mainDiv.style.backgroundColor = `${pickColor().string}`; 
};

function pickColor() {
    // set the 3 colors
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    //update and save the 3 color values to a color object
    let newColor = {
        string: `rgb(${r}, ${g}, ${b})`,
        red: r, 
        green: g,
        blue: b
    };
    // set the RGB text in the main paragraph
    changeRGBText(newColor); 

    // set the RGB sliders values
        setColorInputs(newColor)
        // changeRGBText(newColor); 

    return newColor; // for other functions use
    };

function setColorInputs(color) {
    let redInput = document.querySelector('#adjust-red'); 
    let greenInput = document.querySelector('#adjust-green'); 
    let blueInput = document.querySelector('#adjust-blue'); 
    // console.log(redInput.value, greenInput.value, blueInput.value); 
    redInput.value = color.red; 
    greenInput.value = color.green; 
    blueInput.value = color.blue; 
}

function handleColorInputChange() {

}

function changeRGBText(newColor) {
    const text = document.querySelector('.main p'); 
    // console.log(text.innerHTML); 
    text.innerHTML = newColor.string; 
    }; 

// function randomColor() {
//     let r = Math.floor(Math.random() * 256); 
//     let g = Math.floor(Math.random() * 256); 
//     let b = Math.floor(Math.random() * 256); 
//     return `rgb(${r}, ${g}, ${b})`; 
// }; 

function determineInvertColor(newColor) {
    const text = document.querySelector('.main p');
    let currentRed, currentBlue, currentGreen, invertedColor;
    
    // determine current red, blue, and green from DOM paragraph // why not get the color from the color object?
        let newText = text.innerHTML.split(','); //separate the numbers into an array
        let firstNumber = newText[0].split('('); //removes paren on first element
           currentRed = parseInt(firstNumber[1]); 
        //    console.log(`Current red is ${currentRed}.`); 
        currentGreen = parseInt(newText[1].trim()); //remove whitespace from second number
        // console.log(`Current green is ${currentGreen}.`)
        let thirdNumber = newText[2].trim().split(')'); //removes comma and paren from 3rd item
    currentBlue = parseInt(thirdNumber[0]); 
    // console.log(`Current blue is ${currentBlue}.`)  
    

    let red, green, blue;
    red = 255 - currentRed; 
    green = 255 - currentGreen; 
    blue = 255 - currentBlue; 

        invertedColor = {
            string: `rgb(${red}, ${green}, ${blue})`,
            red, 
            green, 
            blue
        }; 

        function changeRGBTextInvert() {
            const text = document.querySelector('.main p'); 
            // console.log(text.innerHTML); 
            text.innerHTML = invertedColor.string; 
        }
        changeRGBTextInvert(); 
        // setColorInputs(invertedColor); 
    
        // console.log('Inverted colors ran!'); 
        return invertedColor; 
}; 


function invertDOMColor() {
    //get the main div
        let invertedColor = determineInvertColor(); 
        const mainDiv = document.querySelector('.main'); 
        // style the background of the div to the invert color
        mainDiv.style.backgroundColor = `${invertedColor.string}`; 
        setColorInputs(invertedColor); 
    }; 

// styleButtons(); 
sizeAndStyleDiv(); // initial sizing of the div
window.addEventListener('resize', resizeDiv); 
document.querySelector('#new-color').addEventListener('click', newDOMColor); 
// document.querySelector('html').addEventListener('keydown', function(event) {
//     if (event.keyCode === 32) {
//         newDOMColor(); 
//     }; 
// });    // ADDING KEYPRESS EVENTS LATER
document.querySelector('#invert').addEventListener('click', invertDOMColor); 