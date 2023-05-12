// TODO: Initialisation du processus de cycle de vie de l'application

// INIT: Initialisation et appel des modules utiles pour l'application
const { app, BrowserWindow } = require('electron')
const path = require('path')

// BUILD: Création de la fenêtre et initialisation de son cycle de vie
const createWindow = () => {
    // Création et initialisation de la fenêtre de l'application
    const window = new BrowserWindow({
        width: 1366,
        height: 768,
        icon: 'Logo.ico',
        webPreferences: {
            preload: path.join(__dirname, './preloader.js')
        }
    })

    // FEAT: Supprimer le menu présent par défaut sur les applications Electron.js
    // window.setMenu(null)
    // build: Chargement du fichier d'entré de l'application (la première page qui doit s'afficher au démarrage de l'application)
    window.loadFile('./App/FrontEnd/Public/Pages/Login.html')
}


// BUILD: Initialisation de la promesse d'attente de l'affichage de la fenêtre
app.whenReady().then(() => {
    createWindow()

    // BUILD: garder l'application en exécution lorsque aucune fenêtre n'est plus ouverte
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// BUILD: Cas de crash de l'application dans le cas où l'application n'a aucune fenêtre ouverte et n'est pas sous MacOs
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})