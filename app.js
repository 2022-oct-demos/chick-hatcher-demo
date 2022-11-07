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

/* Events */

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
