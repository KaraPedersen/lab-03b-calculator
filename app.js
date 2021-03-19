// import functions and grab DOM elements
import {
    handleAddClick,
    handleSubtractClick,
    handleMultiplyClick,
    handleDivideClick,
} from './handlers.js';

const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtraction-button');
const multiplyButton = document.getElementById('multiply-button');  
const divideButton = document.getElementById('division-button');


// initialize state
addButton.addEventListener('click', handleAddClick);
subtractButton.addEventListener('click', handleSubtractClick);
multiplyButton.addEventListener('click', handleMultiplyClick);
divideButton.addEventListener('click', handleDivideClick);



// set event listeners to update state and DOM