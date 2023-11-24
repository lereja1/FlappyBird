let bird;
let pipe;
let pipe2;

function setup() {  
    createCanvas(window.innerWidth,window.innerHeight);

    bird = new Bird

    pipe = new Obstacle();
    pipe2 = new Obstacle(300);   
}

function draw() {
    background(51);

    bird.move();
    bird.draw();

    pipe.move();
    pipe.draw();

    pipe2.move();
    pipe2.draw();
}

function keyPressed() {
    bird.jump();
}    