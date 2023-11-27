class Obstacle {
    constructor(decalage = 0){
        this.x = width + decalage;
        this.gap = 300;
        this.gapHeight = 200;

    }
    draw() {
        fill(0,255,0) 
        strokeWeight(10);  
        stroke(255,0,0)

        //      x,  y, w,    h
        rect(this.x, 0, 40, this.gapHeight);
        //      x,  y, w,     h
        rect(this.x, this.gap + this.gapHeight, 40, height - this.gapHeight + this.gap );
    }

    move(bird) {
        this.x = this.x - 2;

        this.gapHeight = 100*noise(this.x/100) + 100
 
        if (Math.floor(this.x / 2) === Math.floor(bird.x / 2)){
        bird.score = bird.score + 1 

            if (bird.score > bird.highscore) {
                bird.highscore = bird.score;

                localStorage.setItem("highscore", bird.highscore);
            }
        }
        if (this.x < 0) {
            this.x = width;
            this.gap = random(100, 200)
            this.gapHeight = random(100,400)
        }
     
    }

    isColliding(bird) { 
        
        if (this.x < bird.x && this.x + 40 > bird.x) {
         
            if (bird.y < this.gapHeight || bird.y > this.gapHeight + this.gap) {
               return true;
            
            }
        }
        
        return false;                 
    }

}  