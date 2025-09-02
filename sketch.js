let aspectH;

function windowResized() {
    centerCanvas();
    canvas.resize((windowWidth / 1.78), windowHeight / 1.78);
}

function setup() {
    aspectH = 9 * windowWidth/16;
    canvas = createCanvas(windowWidth, aspectH);
    canvas.position(0, windowHeight/2 - (height/2));
    canvas.parent("game");
    
}

function draw(){
    background(0);
}