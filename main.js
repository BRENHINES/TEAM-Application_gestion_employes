// todo: Initialisation du processus de cycle de vie de l'application

// init: Initialisation et appel des modules utiles pour l'application
const { app, BrowserWindow } = require('electron')
const path = require('path')

// build: Création de la fenêtre et initialisation de son cycle de vie
const createWindow = () => {
    // Création et initialisation dela fenêtre de l'application
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, './preload.js')
        }
    })

    // Chargement du fichier d'entré de l'application (la première page qui doit s'afficher au démarrage de l'application)
    window.loadFile('./FRONTEND/index.html')
}

// build: Initialisation de la promesse d'attente de l'affichage de la fenêtre
app.whenReady().then(() => {
    createWindow()

    // build: garder l'application en exécution lorsque aucune fenêtre n'est plus ouverte
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// build: Cas de crash de l'application dans le cas où l'application n'a aucune fenêtre ouverte et n'est pas sous MacOs
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})