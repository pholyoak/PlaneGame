window.onload = function pageStartup() {
    myMove();
}

var myInterval;
var ranNum1 = 0;
var ranNum2 = 0;
var ranOperator = "emptyString";
var answer = 0;
var plane1 = document.getElementById("plane1");
var plane2 = document.getElementById("plane2");
var plane3 = document.getElementById("plane3");
var plane4 = document.getElementById("plane4");
let num1;
let num2;
let num3;
let num4;
var scoreCounter = 0;
var incorrectCounter = 0;
var delay = 14000;
var leftid1 = null;
var leftid2 = null;
var leftid3 = null;
var leftid4 = null;
var lifeCounter = 5;

document.getElementById("incorrect").innerHTML = lifeCounter;
document.getElementById("correct").innerHTML = scoreCounter;

myInterval = setInterval(myMove, delay);

if (lifeCounter == 0) {
    gameover();
}

function myMove() {
    num1 = Math.floor(Math.random() * 40) + 1;
    num2 = Math.floor(Math.random() * 40) + 1;
    num3 = Math.floor(Math.random() * 40) + 1;
    num4 = Math.floor(Math.random() * 40) + 1;
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
    document.getElementById("num3").innerHTML = num3;
    document.getElementById("num4").innerHTML = num4;
    generateProblem();
    assignAnswer(answer);
    var left1 = 2550;
    var left2 = 2700;
    var left3 = 2850;
    var left4 = 3000;
    clearInterval(leftid1);
    clearInterval(leftid2);
    clearInterval(leftid3);
    clearInterval(leftid4);
    leftid1 = setInterval(rightframe, 1); //how fast box will move right. Small intervals make it look continous
    function rightframe() {
        if (left1 == -850) { //once position gets to 350 the box stops changing styles
            clearInterval(leftid1);
        } else {
            left1--;
            plane1.style.left = left1 + 'px';
        }
        if (left2 == -700) { //once position gets to 350 the box stops changing styles
            clearInterval(leftid2);
        } else {
            left2--;
            plane2.style.left = left2 + 'px';
        }
        if (left3 == -550) { //once position gets to 350 the box stops changing styles
            clearInterval(leftid3);
        } else {
            left3--;
            plane3.style.left = left3 + 'px';
        }
        if (left4 == -288) { //once position gets to 350 the box stops changing styles
            loseLife();
            clearInterval(leftid4);
        } else {
            left4--;
            plane4.style.left = left4 + 'px';
        }
    }

}

function generateProblem(e) {
    ranNum1 = Math.floor(Math.random() * 20) + 1;
    ranNum2 = Math.floor(Math.random() * 20) + 1;
    ranOperator = Math.floor(Math.random() * 2) + 1;

    if (ranOperator == 1) {
        ranOperator = "+";
        document.getElementById("mathNum1").innerHTML = ranNum1;
        document.getElementById("mathNum2").innerHTML = ranNum2;
        answer = ranNum1 + ranNum2;
    }
    else if (ranOperator == 2) {
        ranOperator = "-";
        if (ranNum1 > ranNum2) {
            document.getElementById("mathNum1").innerHTML = ranNum1;
            document.getElementById("mathNum2").innerHTML = ranNum2;
            answer = ranNum1 - ranNum2;
        }
        else {
            document.getElementById("mathNum2").innerHTML = ranNum1;
            document.getElementById("mathNum1").innerHTML = ranNum2;
            answer = ranNum2 - ranNum1;
        }
    }

    console.log(answer)

    document.getElementById("operator").innerHTML = ranOperator;

    return answer
}

function assignAnswer(answer) {
    planeNumber = Math.floor(Math.random() * 4) + 1;

    if (planeNumber == 1) {
        document.getElementById("num1").innerText = answer;
    }
    else if (planeNumber == 2) {
        document.getElementById("num2").innerText = answer;
    }
    else if (planeNumber == 3) {
        document.getElementById("num3").innerText = answer;
    }
    else if (planeNumber == 4) {
        document.getElementById("num4").innerText = answer;
    }
}

plane1.onclick = function checkPlane1() {
    num1 = document.getElementById("num1").innerHTML;
    if (num1 == answer) {
        correct();
    }
    else {
        loseLife();
    }
}

plane2.onclick = function checkPlane2() {
    num2 = document.getElementById("num2").innerHTML;
    if (num2 == answer) {
        correct();
    }
    else {
        loseLife();
    }
}
plane3.onclick = function checkPlane3() {
    num3 = document.getElementById("num3").innerHTML;
    if (num3 == answer) {
        correct();
    }
    else {
        loseLife();
    }
}
plane4.onclick = function checkPlane4() {
    num4 = document.getElementById("num4").innerHTML;
    if (num4 == answer) {
        correct();
    }
    else {
        loseLife();
    }
}

function reset() {
    clearInterval(myInterval);
    myInterval = setInterval(myMove, delay);
    myMove();
}

function loseLife() {
    alert("you lost a life");
    lifeCounter--;
    document.getElementById("incorrect").innerHTML = lifeCounter;
    if (lifeCounter == 0) {
        gameover();
    }
    else {
        reset();
    }
}

function correct() {
    alert("correct!");
    scoreCounter++;
    document.getElementById("correct").innerHTML = scoreCounter;
    reset();
}

function gameover() {
    alert("GAME OVER")
    window.location.href = "index.html"
}