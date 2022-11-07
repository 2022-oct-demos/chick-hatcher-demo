/* Imports */
import { renderChick } from './render-utils.js';

/* Get DOM Elements */
const chickListEl = document.querySelector('.chicks');
const formEl = document.querySelector('form');
const farmerHPEl = document.querySelector('#farmer-hp');
const hatchedNumberEl = document.querySelector('#hatched-number');

/* State */
const chicks = [
    { id: 1, name: 'Peep', hp: 1 },
    { id: 2, name: 'Shellie', hp: 3 },
    { id: 3, name: 'Tabitha', hp: 2 },
];
let currentId = 4;

/* Events */
formEl.addEventListener('submit', (e) => {
    // prevent default behavior of a form submit
    e.preventDefault();

    const data = new FormData(formEl);

    //make a new chick object with the user input
    const newChick = {
        id: currentId,
        name: data.get('chick-name'),
        hp: Math.ceil(Math.random() * 5),
    };

    currentId++;

    //add newChick object to the array of chicks in state
    chicks.push(newChick);

    displayChicks();
});

/* Display Functions */
function displayChicks() {
    chickListEl.textContent = '';

    for (let chick of chicks) {
        const chickEl = renderChick(chick);
        chickListEl.append(chickEl);
    }
}

displayChicks();

// (don't forget to call any display functions you want to run on page load!)
