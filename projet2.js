const dateAnniversaireInput = document.getElementById('date-anniversaire');
const calculerButton = document.getElementById('calculer');
const resultatDiv = document.getElementById('resultat');

calculerButton.addEventListener('click', () => {
  const dateAnniversaire = new Date(dateAnniversaireInput.value);
  const dateActuelle = new Date();
  const difference = dateActuelle.getTime() - dateAnniversaire.getTime();
  const jours = Math.floor(difference / (1000 * 60 * 60 * 24));
  const mois = Math.floor(jours / 30);
  const annees = Math.floor(mois / 12);
  resultatDiv.innerHTML = `
    <p>Vous avez ${annees} ans, ${mois % 12} mois et ${jours % 30} jours.</p>
    <p>Nombre d'années : ${annees}</p>
    <p>Nombre de mois : ${mois}</p>
    <p>Nombre de jours : ${jours}</p>
  `;
});