const server = require("./server");
const { app, BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    frame: true,
    // titleBarStyle: 'hidden',
    // titleBarOverlay: true
  })
  // https://www.electronjs.org/docs/latest/tutorial/window-customization#create-frameless-windows

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/p2p-app/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  // mainWindow.loadURL(`http://localhost:4200/index.html`);

  mainWindow.removeMenu();
  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

server.serverInit();

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})