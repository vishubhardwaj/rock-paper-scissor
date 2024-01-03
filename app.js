import engine from '../rock_paper_scissor/modules/engine.js'

// document elements
const playerSelection   =   document.querySelector('#choices');
const computerChoices   =   document.querySelector('#computer-choice > span');
const playerChoices     =   document.querySelector('#player-choice > span');

// choices
const choices   =   engine.choices
// show a cover over choices and ask user to press play 
// remove cover and list the choices
// let player just click the choice button to play a round
// after the game score is published with msg

for (let i=0 ; i < Object.keys(choices).length ; i++){
    const span = document.createElement('span');
    span.setAttribute('class','playerChoices');
    playerSelection.appendChild(span);
    span.innerHTML = Object.keys(choices)[i];
    console.log(Object.keys(choices)[i])
}
console.log(playerSelection)