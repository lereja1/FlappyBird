let bird;
let pipe;
let pipe2

function gameOver() {

    stroke(0,255,255);
    strokeWeight(3);

    fill(255 , 100 ,0);

    textSize(60);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height /2);

    textSize(28);

    text("Refresh page to play again", width / 2, height / 2 + 100)
}

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

    pipe.move(bird);



    pipe.draw();

    pipe2.move(bird);
    pipe2.draw();

    if(pipe.isColliding(bird) ||
        pipe2.isColliding(bird)
    ) {
        gameOver();
        noLoop();
    }
}

function keyPressed() {
    bird.jump();
}    