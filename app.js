"use strict";
let deg;
let element = document.getElementById("circle");
let step;
let winner = {
    index: 0,
    predefined: false
};
let colors = ["red", "blue", "yellow", "green", "black", "white", "pink", "purple", "orange", "grey", "brown", "aqua"];
let sectors = 12;
let wrapper = document.getElementById("circle");

for (let i = 0; i < sectors; i++) {
    let li = document.createElement("li");
    li.style.background = colors[i];
    li.style.transform = "rotate(" + i * 360 / sectors + "deg) skewY(-60deg)";
    wrapper.appendChild(li);
}

function spin() {
    if (step >= 10) {
        document.getElementById("main-container").style.pointerEvents = "auto";
        return;
    }
    deg += 10 - step;

    if (deg >= (2730 - winner.index * (360 / 12))) {
        step += 0.1;
    }
    element.style.transform = "rotate(" + deg + "deg)";
    window.requestAnimationFrame(spin);
}

function start() {
    deg = 0;
    step = 0;
    document.getElementById("main-container").style.pointerEvents = "none";
    winner.index = document.getElementById("winner").selectedIndex;
    winner.index = winner.predefined ? winner.index : Math.floor(Math.random() * 12);
    window.requestAnimationFrame(spin);
}

function chooseWinner() {
    winner.predefined = !winner.predefined;
    let w = document.getElementById("winner");
    w.style.visibility = winner.predefined ? "visible" : "hidden";
}

window.onload = function () {
    document.getElementById("winner").onchange = function () {
        document.getElementById("winner").style.background = this.value;
    };
};
