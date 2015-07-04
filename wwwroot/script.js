var paddleWidth = 75, paddleHeight = 5;
var paddleXCoord = 200, paddleYCoord = 600, paddleSpeed = 20;
var ballX = 199, ballY=15;
var brickH = 5, brickW = 30;

var c;
var ctx;

var dx = 1,dy = 1;


    function brick(x, y, width, height) {
        var color = "#000";
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

    function paddle(x, y, width, height) {
        var color = "#000";
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

//function ball(x, y, width, height, color){
    function ball() {
        ctx.beginPath();
        ctx.arc(ballX, ballY, 5, 0, 2 * Math.PI);
        ctx.stroke();
        if (ballX < 0 || ballX > 500 || ballX == brick) dx = -dx;
        if (ballY < 0 || ballY > 660 || ballY == paddleYCoord) dy = -dy;
        ballX += dx;
        ballY += dy;
    }

// Handle keyboard controls
    var keysDown = {};
    var up = 38, down = 40, left = 37, right = 39;
    // ^store keycode, label for easier reading

    addEventListener("keydown", function (e) {
        console.log(e.keyCode);
        keysDown[e.keyCode] = true;
        switch (e.keyCode) {
            case left:
                paddleXCoord -= (paddleSpeed);
                draw();
                break;
            case right:
                paddleXCoord += (paddleSpeed);
                draw();
                break;
            default:
                console.log("default keys case");

        }

    }, false);

    addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];
    }, false);

function run(){
    c = document.getElementById("canvas");
    ctx = c.getContext("2d");
    setInterval(function(){draw();}, 10);
}
function draw(){
    ctx.fillStyle = "#666";
    //ctx.fillRect(200,600,75,5);
    ctx.fillRect(0,0,500,660);
    paddle(paddleXCoord, paddleYCoord, paddleWidth, paddleHeight);
    ball();
    levelONE();
    console.log("draw!");
}
function levelONE() {
    for (var xx = 0; xx <= 500; xx += brickW + 5) {
        for (var yy = 0; yy <= 500; yy += brickH + 5) {
            brick(xx, yy, brickW, brickH);
        }
    }
}