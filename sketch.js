let aspectH;
let catimgup, catimgdown, catimgleft, catimgright;

function preload() {
    catimgup = loadImage("cat dance up.png");
    catimgdown = loadImage("cat dance down.png");
    catimgleft = loadImage("cat dance left.png");
    catimgright = loadImage("cat dance right.png");
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
    
}

function draw(){
    background(0);
    cat.show()
}

function keyPressed(){
    if (keyCode === LEFT_ARROW){
        cat.imgchange(catimgleft);
    }
    else if (keyCode === RIGHT_ARROW) {
        cat.imgchange(catimgright);
    }
    else if (keyCode === UP_ARROW){
        cat.imgchange(catimgup);
    }
    else if (keyCode === DOWN_ARROW){
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