// electron space
const {app, BrowserWindow} = require('electron')

app.on('ready', () => {
  normal(); //executes promise
  let mainWin = new BrowserWindow({ width: 1000, height: 600 })
  //mainWin.loadURL(`file://${__dirname}/index.html`)
  mainWin.loadURL(`http://localhost:9000`)

  // mainWindow.on('closed', function() {
  //   mainWindow = null;
  // });

})


let quitWhenDone = new Promise(
  function(resolve, reject) {
    console.log(`electron here. Directory: ${__dirname}`)
    let piece = {
      info: "none yet",
      other: "some other"
    }
      resolve(piece) // will get passed to callback
      reject(new Error('something failed'))
  })

function normal() {
  quitWhenDone.then(function(passed) {
    console.log(passed)
    //app.quit();
  })
}
