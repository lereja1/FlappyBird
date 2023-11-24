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
        //      x,  y, w,    h
        rect(this.x, this.gap + this.gapHeight, 40, height - this.gapHeight + this.gap );
    }

    move() {
        this.x = this.x - 2;

        if (this.x < 0) { 
            this.x = width;
        }
     
    }



}  