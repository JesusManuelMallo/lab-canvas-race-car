class Car {
  constructor(width, height, speed, canvas) {
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.image = null;
    const img = new Image();
    img.src = "./images/car.png";
    this.image = img;
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.x = this.canvas.width / 2 - w / 2;
    this.y = this.canvas.height - h;
  }
  //....
  draw() {
    this.image.onload = function () {
      this.context.drawImage(
        this.image,
        this.x,
        this.y,
        this.width,
        this.height
      );
    };
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
