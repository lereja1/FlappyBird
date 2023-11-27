class Bird  {
    constructor(){
        this.x = width / 5;
        this.y = height / 2;

        this.vy = 0;    

        this.score = 0;
        this.highscore = localStorage.getItem("highscore") || 0;
    }

    draw() {
        fill(0,255,255)

        circle(this.x, this.y, 32)     
        
        noStroke();
        text("Score: " + this.score, 40, 70)
        text("Highscore: " + this.highscore, 40, 40)
    }

    move() {
        this.y = this.y + this.vy
        
        this.vy = this.vy + 0.3;
    }
   
    jump() {
        this.vy = -10
    }

}
