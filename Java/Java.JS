const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 1. Vérifier la mémoire au chargement
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = true; // Met le bouton à droite (noir)
}

// 2. Écouter le changement de l'interrupteur
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        // Bouton à DROITE -> Mode Sombre
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        // Bouton à GAUCHE -> Mode Clair
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});