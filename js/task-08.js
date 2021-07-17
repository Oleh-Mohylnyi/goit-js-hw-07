const divControlsEl = document.querySelector('#controls');
const divBoxesEl = document.querySelector('#boxes');
const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');

function createBoxes(amount) {
    let divList = '';
    for (let item of amount) {
        let size 
        let divCard = `
        <div bacgraund-color = "RGB123123" width = "30" higth = "30">
        </div>
        `;
        divList = divList + divCard;
    }
}