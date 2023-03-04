const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const {v4: uuidv4} = require('uuid');
const screenshot= require('screenshot-desktop');
var socket= require('socket.io-client')('http://localhost:5000')


function createWindow () {
  const win = new BrowserWindow({
    width: 600,
    height: 150,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.removeMenu();
  win.loadFile('index.html')
}
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.on("start-share", function(event, arg){

})

ipcMain.on("stop-share", function(event, arg){           

})
