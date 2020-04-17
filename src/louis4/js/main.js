var div = document.createElement("div");
div.style.display = "grid";
if (!(div.style.display === "grid")) {
    alert(
        "You are using a browser that does not support CSS grid! Please consider upgrading."
    );
}

function generateRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getClientWidth() {
    return document.querySelector('.container').clientWidth;
}
function fractionalLength() {
    return document.querySelector('.container') / numLi;
}
function getList(){
    return document.querySelectorAll('li');
}
function eachLength(){
    return getClientWidth() / getList().length; 
}

function createList() {
    let i = 0;
    while (i < numLi) {
        let node = document.createElement("LI");
        let li = container.appendChild(document.createElement("LI"));
        i++;
    }
}

const container = document.querySelector('.container');
const numLi = generateRandomNumber(30, 31);
container.setAttribute("style", `grid-template-columns: repeat(${numLi}, 1fr)`);

createList();

function initWidth(){}

function updateWidth() {
        let listz = getList();
        let limitWidth = eachLength();
        listz.forEach(function (li) {

        let randomNum = Math.random();

        if (randomNum < 0.2){randomNum= randomNum+0.1}
        let randomWidth = randomNum * limitWidth;

        let fractionOfTotal = randomWidth / (document.querySelector('.container').clientWidth / listz.length);
        li.setAttribute("style", `width: ${Math.round(fractionOfTotal * 100)}%`);
    })
}

updateWidth();

