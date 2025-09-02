let aspectH;
let catimgup, catimgdown, catimgleft, catimgright, catidle;

function preload() {
    catimgup = loadImage("cat dance up.png");
    catimgdown = loadImage("cat dance down.png");
    catimgleft = loadImage("cat dance left.png");
    catimgright = loadImage("cat dance right.png");
    catidle = loadImage("cat idle.png")
}

function windowResized() {
    centerCanvas();
    canvas.resize((windowWidth / 1.78), windowHeight / 1.78);
}

function setup() {
    aspectH = 9 * windowWidth/16;
    canvas = createCanvas(windowWidth, aspectH);
    canvas.position(0, windowHeight/2 - (height/2));
    canvas.parent("game");
    cat = new Cat(windowWidth / 2, 0, 9 * windowWidth/16, 9 * windowWidth / 16);
    arrowL = new Control(windowWidth * 0.01, aspectH * 0.8, windowWidth * 0.05, aspectH * 0.7, windowWidth * 0.05, aspectH * 0.9);
    arrowU = new Control(windowWidth * 0.08, aspectH * 0.8, windowWidth * 0.05, aspectH * 0.7, windowWidth * 0.05, aspectH * 0.9);
    
}

function draw(){
    background(0);

    cat.show();
    arrowL.show();
    arrowU.show();
    resetCatimg();
}

function keyPressed(){
    if (keyCode === LEFT_ARROW && keyIsPressed){
        cat.imgchange(catimgleft);
    }
    else if (keyCode === RIGHT_ARROW && keyIsPressed) {
        cat.imgchange(catimgright);
    }
    else if (keyCode === UP_ARROW && keyIsPressed){
        cat.imgchange(catimgup);
    }
    else if (keyCode === DOWN_ARROW && keyIsPressed){
        cat.imgchange(catidle);
    }
}

function resetCatimg(){
    if (keyIsPressed === false){
        cat.imgchange(catimgdown);
    }
}

class Cat{
    constructor(xpos, ypos, sizex, sizey){
        this.xpos = xpos;
        this.ypos = ypos;
        this.sizex = sizex
        this.sizey = sizey
        this.currentimg = catimgup;
    }

    show(){
        image(this.currentimg, this.xpos, this.ypos, this.sizex, this.sizey);
    }
    
    imgchange(newimg) {
        this.currentimg = newimg;
    }
}

class Control{
    constructor(x1, y1, x2, y2, x3, y3){
        this.x1 = x1;
        this.x2 = x2;
        this.x3 = x3;
        this.y1 = y1;
        this.y2 = y2;
        this.y3 = y3;
        this.alpha = 100;
    }

    show(){
        fill(255,0,0);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }
}  