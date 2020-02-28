function Player() {
    this.y = height / 2;
    this.x = 0.1*width;
    this.gravity = 0;
    this.velocityY = 0;
    this.velocityX = 0;
    this.accX = 0;
    this.size = 30;
    this.friction = 0.9;

    this.show = function () {
        fill(255);
        ellipse(this.x, this.y, this.size, this.size);
    }

    this.update = function () {
        this.y += this.velocityY;
        this.x += this.velocityX;
        this.velocityY += this.gravity;
        this.velocityX += this.accX;

        this.accX = 0;

        if (this.y > height) {
            this.y = height;
            this.velocityY = -this.velocityY * this.friction;
        }
        if (this.x > width - 20) {
            this.y = width / 2;
            this.x = height / 2;
            this.velocityY = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.velocityY = -this.velocityY * this.friction;;
        }
    }

    this.up = function () {
        this.velocityY += -this.gravity * 100;


    }


}