const { app, BrowserWindow } = require("electron");
require("@electron/remote/main").initialize();

const createWindow = () => {
    const window = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            enableRemoteModule: true
        }
    });

    window.loadURL("http://localhost:3000");
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit()
})

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})