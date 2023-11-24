class Bird  {
    constructor(){
        this.x = width / 5;
        this.y = height / 2;

        this.vy = 0;    
    }

    draw() {
        fill(0,255,255)

        circle(this.x, this.y, 32)        
    }

    move() {
        this.y = this.y + this.vy
        
        this.vy = this.vy + 0.3;
    }

    jump() {
        this.vy = -30
    }

}