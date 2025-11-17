const form = document.getElementById('inscription-form');
const resultat = document.getElementById('resultat');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const sexe = document.getElementById('sexe').value;
  const nombrePlace = document.getElementById('nombre-place').value;

  const inscription = {
    nom,
    prenom,
    sexe,
    nombrePlace
  };

  // Enregistrer les données dans une base de données ou un fichier
  // Pour cet exemple, nous allons simplement afficher les données
  resultat.textContent = `Inscription réussie ! Voici vos informations : 
    Nom : ${nom}
    Prénom : ${prenom}
    Sexe : ${sexe}
    Nombre de places : ${nombrePlace}
  `;
});