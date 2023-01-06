const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Hide the menu bar
  win.setMenuBarVisibility(false)
  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
