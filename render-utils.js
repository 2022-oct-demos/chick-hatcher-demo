export function renderChick(chick) {
    const chickEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const eggEl = document.createElement('p');
    const hpEl = document.createElement('p');

    chickEl.classList.add('chick');

    nameEl.textContent = chick.name;
    // if chick's hp less than 0, set textcont to 0, else set the textcont to the hp
    hpEl.textContent = chick.hp < 0 ? 0 : chick.hp;
    hpEl.id = `chick-hp-${chick.id}`;

    eggEl.id = `chick-${chick.id}`;
    // if chick's hp greater than 0, set textcont to egg emoji, else set textcont to hatched chick emoji
    eggEl.textContent = chick.hp > 0 ? '🥚' : '🐣';

    if (chick.hp < 0) {
        chickEl.classList.add('hatched');
    }
    chickEl.append(nameEl, eggEl, hpEl);

    return chickEl;
}

// ternary
// compared statement
// ? _true___
// : _false "else"__
