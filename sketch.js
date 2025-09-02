let aspectH;
let catimgup, catimgdown, catimgleft, catimgright, catidle;
let arrowr, arrowl, arrowu, arrowd;
let note_array = [];

function preload() {
    catimgup = loadImage("cat dance up.png");
    catimgdown = loadImage("cat dance down.png");
    catimgleft = loadImage("cat dance left.png");
    catimgright = loadImage("cat dance right.png");
    catidle = loadImage("cat idle.png");
    arrowr = loadImage("arrow.png");
    arrowl = loadImage("arrowL.png");
    arrowu = loadImage("arrowU.png");
    arrowd = loadImage("arrowD.png");

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
    arrowRight = new Control(windowWidth * 0.4, aspectH * 0.75, windowWidth * 0.15, windowWidth * 0.15, "right");
    arrowLeft = new Control(0, aspectH * 0.75, windowWidth * 0.15, windowWidth * 0.15, "left");
    arrowUp = new Control(windowWidth * 0.13, aspectH * 0.75, windowWidth * 0.15, windowWidth * 0.15, "up");
    arrowDown = new Control(windowWidth * 0.26, aspectH * 0.75, windowWidth * 0.15, windowWidth * 0.15, "down");
}

function draw(){
    background(255, 0,0);

    cat.show();
    arrowLeft.show();
    arrowRight.show();
    arrowUp.show();
    arrowDown.show();
    if (random(0,2) >= 1.8){
        dot = new Note(windowWidth * 0.48, 0);
        note_array.push(dot);
    }
    dot.show();
    dot.update();
    reset();
}

function keyPressed(){
    if (keyCode === LEFT_ARROW && keyIsPressed){
        cat.imgchange(catimgleft);
        arrowLeft.update(255);
    }
    else if (keyCode === RIGHT_ARROW && keyIsPressed) {
        cat.imgchange(catimgright);
        arrowRight.update(255);
    }
    else if (keyCode === UP_ARROW && keyIsPressed){
        cat.imgchange(catimgup);
        arrowUp.update(255);
    }
    else if (keyCode === DOWN_ARROW && keyIsPressed){
        cat.imgchange(catidle);
        arrowDown.update(255);
    }
}


function reset(){
    if (keyIsPressed === false){
        cat.imgchange(catimgdown);
        arrowLeft.update(100);
        arrowRight.update(100);
        arrowUp.update(100)
        arrowDown.update(100);
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
        tint(255,255);
        image(this.currentimg, this.xpos, this.ypos, this.sizex, this.sizey);
    }
    
    imgchange(newimg) {
        this.currentimg = newimg;
    }
}

class Control{
    constructor(x, y, sizex, sizey, direction){
        this.x = x;
        this.y = y;
        this.sizex = sizex;
        this.sizey = sizey;
        this.direction = direction;
        this.alpha = 100;
    }

    show(){
        tint(255, this.alpha);
        if (this.direction === "right") {
        image(arrowr, this.x, this.y, this.sizex, this.sizey);
        }
        else if (this.direction === "left"){
        image(arrowl, this.x, this.y, this.sizex, this.sizey);
        }
        else if (this.direction === "up") {
            image(arrowu, this.x, this.y, this.sizex, this.sizey);
        }
        else if (this.direction === "down") {
            image(arrowd, this.x, this.y, this.sizex, this.sizey);
        }
    }

    update(alpha){
        this.alpha = alpha
    }
}  

class Note{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = windowWidth * 0.05;
    }

    show(){
        circle(this.x, this.y, this.size);
    }
    update(){
        this.y += 1;
    }
}