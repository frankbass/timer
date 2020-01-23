const electron = require('electron');
const path = require('path');
const url = require('url');

process.enb.NODE_ENV = 'development';

const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;

app.on('ready', function() {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes:true
  }));
  mainWindow.on('closed', function(){
    app.quit();
  });
  const mainMenu = menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

if(process.platform == 'darwin'){
  mainMenuTemplate.unshift({});
}

if(process.env.NODE_ENV !== 'production'){
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu:[
      {
        role: 'reload'
      },
      {
        label: 'Toggle DevTools',
        accelerator:process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      }
    ]
  });
}

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
