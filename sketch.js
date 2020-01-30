var timer;
let running = false;

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
    if (running) {
      if (this.second != second()) {
        this.timePassed++;
        this.timePassed = nf(this.timePassed, 3, 0)
        this.second = second();
      }
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
      this.formatMinutes = nf(floor(this.timePassed/60), 2);
      this.formatSeconds = nf(this.timePassed%60, 2);

      text(this.formatMinutes+ ":" + this.formatSeconds, 5, 30);
      // text(this.formatSeconds, 25, 30);
    }
  }
}

function keyPressed() {
  if (keyCode == 32) {
    if (running) {
      running = false;
    } else {
      running = true;
    }
  }
}
