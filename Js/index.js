// White & Dark mode
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

// Bouton "back to top"
  // On récupère le bouton
  let mybutton = document.getElementById("backToTop");

  // Quand l'utilisateur scrolle, on appelle la fonction
  window.onscroll = function() { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      mybutton.style.display = "block"; // Affiche le bouton
    } else {
      mybutton.style.display = "none"; // Cache le bouton
    }
  }

  // Quand on clique, on remonte en haut de la page
  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Remontée fluide et smoth
    });
  }

  //Clik open - Ouvrie l'image
    function OpenImg(source) {
      const modal = document.getElementById('modalGenerique');
      const imgModale = document.getElementById('imageAgrandie');
        imgModale.src = source;
        modal.showModal();

        document.body.style.overflow = 'hidden'; // Bloque le scroll du site en arrière plan
    }

    function closeModal() {
      const modal = document.getElementById('modalGenerique').modal.close();
    }

    // Réactive le scroll du site
    document.getElementById('modalGenerique').addEventListener('close', () => {
        document.body.style.overflow = 'auto';
    });

    // Gérer la touche "Echap" qui ferme le modal par défaut
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            document.body.style.overflow = 'auto';
        }
    });