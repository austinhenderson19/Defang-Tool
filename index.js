// const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev');
const path = require('path')
const { menubar } = require('menubar');

mb = menubar({
  index: isDev ? 'http://localhost:3000' : `file://${path.resolve(__dirname, './src/build/index.html')}`,
  icon: path.resolve(__dirname, 'assets', 'NoliaIcon.png'),
  browserWindow: {
    width: 500,
    height: 280,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  },
  resizable: false,
});

// function createWindow () {
//   const win = new BrowserWindow({
//     width: 500,
//     height: 500,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js')
//     }
//   })

//   win.webContents.openDevTools({
//     mode: 'detach'
//   });

//   if (!isDev) {
//     win.loadFile("src/build/index.html");

//     return; 
//   }

//   win.loadURL('http://localhost:3000');
// }

// app.whenReady().then(() => {
//   createWindow()

//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//       createWindow()
//     }
//   })
// })

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })