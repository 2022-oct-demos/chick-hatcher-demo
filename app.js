/* Imports */
import { renderChick } from './render-utils.js';

/* Get DOM Elements */
const chickListEl = document.querySelector('.chicks');
const formEl = document.querySelector('form');
const farmerHPEl = document.querySelector('#farmer-hp');
const hatchedNumberEl = document.querySelector('#hatched-number');
const farmerImgEl = document.querySelector('#farmer-img');

/* State */
const chicks = [
    { id: 1, name: 'Peep', hp: 1 },
    { id: 2, name: 'Shellie', hp: 3 },
    { id: 3, name: 'Tabitha', hp: 2 },
];
let currentId = 4;
let farmerHP = 3;
let hatchedCount = 0;

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

function chickClickHandler(chick) {
    // if chick HP is 0, exit click handler function
    if (chick.hp <= 0) return;

    //give 1/3 chance farmer warms chick
    if (Math.random() < 0.33) {
        chick.hp--;
        alert('You warmed ' + chick.name);
    } else {
        alert('You tried to warm ' + chick.name + ' but the heat lamp broke');
    }

    // give 50% chance of the chick rolling away
    // possibly decrement the farmers HP
    if (Math.random() < 0.5) {
        farmerHP--;
        alert(chick.name + ' rolled away from you! You chase after it!');
    } else {
        alert(chick.name + ' tried to roll away but there was a pebble in the way');
    }

    // what happens when the chickHP is 0
    if (chick.hp === 0) {
        hatchedCount++;
    }

    // what happens when the farmerHP is 0
    if (farmerHP === 0) {
        farmerImgEl.classList.add('game-over');
        alert('GAME OVER');
    }

    //update the DOM with the new farmerHP and hatchedCount
    farmerHPEl.textContent = farmerHP;
    hatchedNumberEl.textContent = hatchedCount;

    const hpEl = document.getElementById(`chick-hp-${chick.id}`);
    // if chick's hp less than 0, set textcont to 0, else set the textcont to the hp
    hpEl.textContent = chick.hp < 0 ? 0 : chick.hp;

    const eggEl = document.getElementById(`chick-${chick.id}`);
    // if chick's hp greater than 0, set textcont to egg emoji, else set textcont to hatched chick emoji
    eggEl.textContent = chick.hp > 0 ? '🥚' : '🐣';
}

/* Display Functions */
function displayChicks() {
    chickListEl.textContent = '';

    for (let chick of chicks) {
        const chickEl = renderChick(chick);
        chickEl.addEventListener('click', () => {
            chickClickHandler(chick);
        });
        chickListEl.append(chickEl);
    }
}

displayChicks();

// (don't forget to call any display functions you want to run on page load!)
