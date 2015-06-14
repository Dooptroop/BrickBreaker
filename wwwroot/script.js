var paddleWidth = 75, paddleHeight = 5;
var paddleXCoord = 200, paddleSpeed = 1.1;


function run(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#666";
    //ctx.fillRect(200,600,75,5);
    ctx.fillRect(0,0,500,660);
    paddle(paddleXCoord, 600, paddleWidth, paddleHeight, "#666");
    ball();

}

function paddle(x, y, width, height, color){
    var color = "#000";
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(x,y,width,height);
}

//function ball(x, y, width, height, color){
function ball() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,5,0,2*Math.PI);
    ctx.stroke();
}

// Handle keyboard controls
var keysDown = {};  
var up = 38, down = 40, left = 37, right = 39;
    // ^store keycode, label for easier reading

addEventListener("keydown", function (e) {
    console.log(e.keyCode);
    keysDown[e.keyCode] = true;
    switch(e.keyCode){
        case left:
            paddleXCoord *= (paddleSpeed);
            run();
            break;
        case right:
            paddleXCoord /= (paddleSpeed);
            run();
            break;
        default:
            console.log("default keys case");

    }

}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);