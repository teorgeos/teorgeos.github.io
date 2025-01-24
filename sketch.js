var canvas;
var cursor;

function CursorSetup(){
    cursor = createElement("cursor", "Love");
    cursor.position(mouseX, mouseY);
}
    
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function mousePressed()
{
createP("What we need is");
}
    
function draw()
{
    fill(random(100, 255), 20, 150);
    ellipse(mouseX, mouseY, 20, 20);
}

