var paddleWidth = 75, paddleHeight = 5;


function run(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#666";
    //ctx.fillRect(200,600,75,5);
    ctx.fillRect(0,0,500,660);
    paddle(200, 600, paddleWidth, paddleHeight, "#666");
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

