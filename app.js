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

function newColorBackground() {
    const mainDiv = document.querySelector('.main'); 
    mainDiv.style.backgroundColor = `${determineNewColor().string}`; 
};

function determineNewColor() { // returns new color
    // set the 3 colors
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    //update and save the 3 color values to a color object
    let color = {
        string: `rgb(${r}, ${g}, ${b})`,
        red: r, 
        green: g,
        blue: b
    };
    // set the RGB text in the main paragraph
    changeRGBText(color); 

    // set the RGB sliders values
        setColorInputs(color)

    return color; // for other functions use
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

// function handleColorInputChange() {
//     // get color inputs

//     // attach event listeners to all color inputs

//     // set the value of the color on change of the sliders
//         // 
//     // call this function at the end of script
// }

function updateRGB() {
    // get the 3 colors
    let r = redInput.value; 
    let g = greenInput.value; 
    let b = blueInput.value; 
    let color = {
      string: `rgb(${r}, ${g}, ${b})`,
      red: r,
      green: g,
      blue: b,
    };
    // set the RGB text in main paragraph
     changeRGBText(color); 
     // set main background color
     document.querySelector('.main').style.backgroundColor = `${color.string}`; 
    // return color
    return color
}; 

function changeRGBText(color) {
    const text = document.querySelector('.main p'); 
    // console.log(text.innerHTML); 
    text.innerHTML = color.string; 
    }; 

// function randomColor() {
//     let r = Math.floor(Math.random() * 256); 
//     let g = Math.floor(Math.random() * 256); 
//     let b = Math.floor(Math.random() * 256); 
//     return `rgb(${r}, ${g}, ${b})`; 
// }; 

function determineInvertColor() {
    const text = document.querySelector('.main p');
    let currentRed, currentBlue, currentGreen, invertedColor;
    
    // determine current red, blue, and green from DOM paragraph; DOM paragraph comes from color object 
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

function initializeCopyColor() {
    let copyButton = document.querySelector('#copy'); 
    
    copyButton.addEventListener('click', (e) => {
        let copyText = document.querySelector('.main p').innerHTML; 
        navigator.clipboard.writeText(copyText).then(() => {
            alert(`${copyText} copied to clipboard`);  
          },() => {
            console.error('Failed to copy the color');
          });
    })
}

// styleButtons(); 
initializeCopyColor(); 
sizeAndStyleDiv(); // initial sizing of the div
window.addEventListener('resize', resizeDiv); 
    const redInput = document.querySelector("#adjust-red");
    const greenInput = document.querySelector("#adjust-green");
    const blueInput = document.querySelector("#adjust-blue");
    const allInputs = [redInput, greenInput, blueInput]; 
    for (let i = 0; i < allInputs.length; i ++) {
        allInputs[i].addEventListener('input', () => {
            // console.log(allInputs[i].id + ' - ' + allInputs[i].value); 
            updateRGB(); 
        })
    }
document.querySelector('#new-color').addEventListener('click', newColorBackground); 
// document.querySelector('html').addEventListener('keydown', function(event) {
//     if (event.keyCode === 32) {
//         newDOMColor(); 
//     }; 
// });    // ADDING KEYPRESS EVENTS LATER
document.querySelector('#invert').addEventListener('click', invertDOMColor); 
// handleColorInputChange(); 