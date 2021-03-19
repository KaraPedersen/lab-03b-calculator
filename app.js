// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

const subtractionInput1 = document.getElementById('subtraction-input-1');
const subtractionInput2 = document.getElementById('subtraction-input-2');
const subtractionButton = document.getElementById('subtraction-button');
const subtractionAnswer = document.getElementById('subtraction-answer');

const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');

const divisionInput1 = document.getElementById('division-input-1');
const divisionInput2 = document.getElementById('division-input-2');
const divisionButton = document.getElementById('division-button');
const divisionAnswer = document.getElementById('division-answer')


// initialize state
addButton.addEventListener('click', () => {

    const value1 = addInput1.valueAsNumber;
    const value2 = addInput2.valueAsNumber;

    const sum = value1 + value2;

    addAnswer.textContent = sum;


});
subtractionButton.addEventListener('click', () => {

    const value1 = subtractionInput1.valueAsNumber;
    const value2 = subtractionInput2.valueAsNumber;

    const sum = value1 - value2;

    subtractionAnswer.textContent = sum;
});

multiplyButton.addEventListener('click', () => {

    const value1 = multiplyInput1.valueAsNumber;
    const value2 = multiplyInput2.valueAsNumber;

    const sum = value1 * value2;

    multiplyAnswer.textContent = sum;
});

divisionButton.addEventListener('click', () => {

    const value1 = divisionInput1.valueAsNumber;
    const value2 = divisionInput2.valueAsNumber;

    const sum = value1 / value2;

    divisionAnswer.textContent = sum;
});



// set event listeners to update state and DOM