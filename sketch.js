var timer;

function setup() {
  createCanvas(600, 400);
  background(150);
  timer = new Timer();
}

function draw() {
  timer.displayTime();
  timer.counting();
}


class Timer {
  constructor() {
    this.second = second();
    this.timePassed = 0;
  }

  counting() {
    if (this.second != second()) {
      this.timePassed++;
      this.timePassed = nf(this.timePassed, 3, 0)
      this.second = second();
    }
  }

  //change to minutes:seconds
  displayTime() {
    if (this.second != second()) {
      noStroke();
      fill(130);
      rect(0, 0, 150, 50);
      stroke(0);
      fill(0);
      textSize(30);
      text(this.timePassed, 5, 30);
    }
  }
}