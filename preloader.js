// TODO: Initialisation du processus d'affichage du module process de l'application

// feat: Ajout du processus d'affichage des versions de dépendences
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    // FEAT: faire une boucle pour permettre d'afficher les versions des différents process parmi la liste présente
    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})