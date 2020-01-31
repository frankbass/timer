var timer;
let running = false;
let playButton;
let resetButton;
let updateButton;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(150);
  timer = new Timer(0);
  playButton = createButton('play');
  playButton.position(5, 30);
  playButton.mousePressed(playStop);
  resetButton = createButton('reset time');
  resetButton.mousePressed(timeReset);
  resetButton.position(50, 30);
  updateButton = createButton('check for updates');
  updateButton.mousePressed(checkUpdates);
  updateButton.position(130, 30);
}

function draw() {
  timer.displayTime();
  timer.counting();
}

class Timer {
  constructor(inputTime) {
    this.second = second();
    this.timePassed = inputTime;
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
    }
  }
}

function keyPressed() {
  if (keyCode == 32) {
    if (running) {
      running = false;
      playButton.html('play');
    } else {
      running = true;
      playButton.html('stop');
    }
  }
}

function playStop() {
  if (running) {
    running = false;
    playButton.html('play');
  } else {
    running = true;
    playButton.html('stop');
  }
}

function timeReset() {
  timer.timePassed = 0;
}

function checkUpdates() {

}
