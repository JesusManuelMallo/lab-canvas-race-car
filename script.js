window.onload = function () {
  const canvas = document.querySelector("#canvas");
  const car = new Car(50, 70, 0, 600, 600, canvas);
  car.clear();
  car.draw();

  /*  const ctx = canvas.getContext("2d");
  const car = new Image();
  car.src = "./images/car.png";
  car.onload = function () {
    ctx.drawImage(car, canvas.width / 2 - 25, 500, 50, 100);
  }; */
};
