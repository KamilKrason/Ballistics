class Bullet {
    constructor(_player) {
        this.x = _player.x;
        this.y = player.y;
        this.g = 0.1;
        this.vy = player.velocityY;
        this.vx = 22 + player.velocityX; //speed 
        this.r = 2; //radius
        this.m = 1; // mass
        this.n = 1; // quantity
        this.cd = 0.02; //drag coef

    }


    show() {
        fill(204, 0, 0);
        ellipse(this.x, this.y, this.r * 15, this.r * 5)
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.g;
        this.vx -= this.cd * this.r;
        if (this.vx < 0) {
            this.vx = 0;
        }
    }
}