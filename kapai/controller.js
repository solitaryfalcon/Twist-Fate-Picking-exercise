var card = document.getElementById("card"),
    color = ["#0000FF", "#FF0000 ", "#FFFF33"],
    transform = ["rotate(10deg)","rotate(-10deg)","rotate(0)"],
    num,
    isPicking = false,
    start;

function pick() {
    console.log(num);
    card.style.backgroundImage = "none";
    card.style.backgroundColor = color[num];
    card.style.transform = transform[num];
    if (num < 2) {
        num++;
    }
    else {
        num = 0;
    }
}

function startPick() {
    num = parseInt(Math.random() * (2 + 1), 10);
    if (isPicking == false) {
        card.style.backgroundImage = "url('cardInit.jpg')";
        card.style.backgroundSize = "90px 120px";
        start = setInterval(pick, 600);
        isPicking = true;
    } else {
        clearInterval(start);
        isPicking = false;
    }
}
document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 87) { // W
        startPick();
    }
};