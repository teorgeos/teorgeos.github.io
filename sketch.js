var canvas;
var h1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    h1 = createElement("h1", "Love");
}

function mousePressed()
{
createP("What we need is");
}
    
function draw()
{
    fill(random(100, 255), 20, 150);
    ellipse(mouseX, mouseY, 20, 20);
    h1.position(mouseX, mouseY);
}