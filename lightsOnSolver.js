const inputTwoByThree = [0, 0, 0, 0, 0, 0];

window.onload = function() {
    prepareListeners();
}

function prepareListeners() {
    document.getElementById("first-two-by-three-input").addEventListener("click", inputOne);
    document.getElementById("second-two-by-three-input").addEventListener("click", inputTwo);
    document.getElementById("third-two-by-three-input").addEventListener("click", inputThree);
    document.getElementById("fourth-two-by-three-input").addEventListener("click", inputFour);
    document.getElementById("fifth-two-by-three-input").addEventListener("click", inputFive);
    document.getElementById("sixth-two-by-three-input").addEventListener("click", inputSix);
}

function inputOne() {
    switch(inputTwoByThree[0]) {
        case 0:
            inputTwoByThree[0] = 1;
            break;
        case 1:
            inputTwoByThree[0] = 0;
            break;
    }
}

function inputTwo() {
    switch(inputTwoByThree[1]) {
        case 0:
            inputTwoByThree[1] = 1;
            break;
        case 1:
            inputTwoByThree[1] = 0;
            break;
    }
}

function inputThree() {
    switch(inputTwoByThree[2]) {
        case 0:
            inputTwoByThree[2] = 1;
            break;
        case 1:
            inputTwoByThree[2] = 0;
            break;
    }
}

function inputFour() {
    switch(inputTwoByThree[3]) {
        case 0:
            inputTwoByThree[3] = 1;
            break;
        case 1:
            inputTwoByThree[3] = 0;
            break;
    }
}

function inputFive() {
    switch(inputTwoByThree[4]) {
        case 0:
            inputTwoByThree[4] = 1;
            break;
        case 1:
            inputTwoByThree[4] = 0;
            break;
    }
}

function inputSix() {
    switch(inputTwoByThree[5]) {
        case 0:
            inputTwoByThree[5] = 1;
            break;
        case 1:
            inputTwoByThree[5] = 0;
            break;
    }
}

function solve() {
    var solutionTwoByThree = [0, 0, 0, 0, 0, 0];
}