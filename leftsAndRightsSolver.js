const leftsAndRightsSequence = [0, 0, 0];

window.onload = function() {
    prepareListeners();
}

function prepareListeners() {
    // Add event listener to slots
    document.getElementById("first-slot-lefts-and-rights").addEventListener("click", emptyFirstSlotLeftsAndRights);
    document.getElementById("second-slot-lefts-and-rights").addEventListener("click", emptySecondSlotLeftsAndRights);
    document.getElementById("third-slot-lefts-and-rights").addEventListener("click", emptyThirdSlotLeftsAndRights);
    // Add listeners to arrow buttons
    document.getElementById("left-twice").addEventListener("click", addLeftTwice);
    document.getElementById("left-once").addEventListener("click", addLeftOnce);
    document.getElementById("right-once").addEventListener("click", addRightOnce);
    document.getElementById("right-twice").addEventListener("click", addRightTwice);
    // Add listener to clear button
    document.getElementById("clear-lefts-and-rights").addEventListener("click", clear);
}

function clear() {
    for (let index = 0; index < leftsAndRightsSequence.length; index++) {
        leftsAndRightsSequence[index] = 0;
    }
    document.getElementById("first-slot-lefts-and-rights").innerHTML = "";
    document.getElementById("second-slot-lefts-and-rights").innerHTML = "";
    document.getElementById("third-slot-lefts-and-rights").innerHTML = "";
    document.getElementById("solution-lefts-and-rights").innerHTML = "";
    document.getElementById("starting-number-lefts-and-rights").value = null;
}

function emptyFirstSlotLeftsAndRights() {
    leftsAndRightsSequence[0] = 0;
    document.getElementById("first-slot-lefts-and-rights").innerHTML = "";
    document.getElementById("solution-lefts-and-rights").innerHTML = "";
}

function emptySecondSlotLeftsAndRights() {
    leftsAndRightsSequence[1] = 0;
    document.getElementById("second-slot-lefts-and-rights").innerHTML = "";
    document.getElementById("solution-lefts-and-rights").innerHTML = "";
}

function emptyThirdSlotLeftsAndRights() {
    leftsAndRightsSequence[2] = 0;
    document.getElementById("third-slot-lefts-and-rights").innerHTML = "";
    document.getElementById("solution-lefts-and-rights").innerHTML = "";
}

function addLeftTwice() {
    for (let index = 0; index < leftsAndRightsSequence.length; index++) {
        if (leftsAndRightsSequence[index] == 0) {
            leftsAndRightsSequence[index] = -2;
            switch(index) {
                case 0:
                    document.getElementById("first-slot-lefts-and-rights").innerHTML = "<<";
                    break;
                case 1:
                    document.getElementById("second-slot-lefts-and-rights").innerHTML = "<<";
                    break;
                case 2: 
                    document.getElementById("third-slot-lefts-and-rights").innerHTML = "<<";
                    break;
            }
            solveLeftsAndRights();
            return;
        }
    }
}

function addLeftOnce() {
    for (let index = 0; index < leftsAndRightsSequence.length; index++) {
        if (leftsAndRightsSequence[index] == 0) {
            leftsAndRightsSequence[index] = -1;
            switch(index) {
                case 0:
                    document.getElementById("first-slot-lefts-and-rights").innerHTML = "<";
                    break;
                case 1:
                    document.getElementById("second-slot-lefts-and-rights").innerHTML = "<";
                    break;
                case 2: 
                    document.getElementById("third-slot-lefts-and-rights").innerHTML = "<";
                    break;
            }
            solveLeftsAndRights();
            return;
        }
    }
}

function addRightOnce() {
    for (let index = 0; index < leftsAndRightsSequence.length; index++) {
        if (leftsAndRightsSequence[index] == 0) {
            leftsAndRightsSequence[index] = 1;
            switch(index) {
                case 0:
                    document.getElementById("first-slot-lefts-and-rights").innerHTML = ">";
                    break;
                case 1:
                    document.getElementById("second-slot-lefts-and-rights").innerHTML = ">";
                    break;
                case 2: 
                    document.getElementById("third-slot-lefts-and-rights").innerHTML = ">";
                    break;
            }
            solveLeftsAndRights();
            return;
        }
    }
}

function addRightTwice() {
    for (let index = 0; index < leftsAndRightsSequence.length; index++) {
        if (leftsAndRightsSequence[index] == 0) {
            leftsAndRightsSequence[index] = 2;
            switch(index) {
                case 0:
                    document.getElementById("first-slot-lefts-and-rights").innerHTML = ">>";
                    break;
                case 1:
                    document.getElementById("second-slot-lefts-and-rights").innerHTML = ">>";
                    break;
                case 2: 
                    document.getElementById("third-slot-lefts-and-rights").innerHTML = ">>";
                    break;
            }
            solveLeftsAndRights();
            return;
        }
    }
}

function solveLeftsAndRights() {
    var solution = [];
    var startingNumber = document.getElementById("starting-number-lefts-and-rights").valueAsNumber;
    var solutionString = startingNumber.toString() + " ";
    solution.push(startingNumber);
    for (let index = 0; index < leftsAndRightsSequence.length; index++) {
        if (leftsAndRightsSequence[index] == 0) {
            return;
        }
    }

    for (let index = 0; index < 2; index++) {
        solution.push(solution[index] + leftsAndRightsSequence[index]);
        solutionString += (solution[index] + leftsAndRightsSequence[index]).toString() + " ";
    }
    
    solutionString += (solution[2] + leftsAndRightsSequence[2]).toString();
    document.getElementById("solution-lefts-and-rights").innerHTML = "SOLUTION: " + solutionString;
}