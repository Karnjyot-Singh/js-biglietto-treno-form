// Funzione per calcolare il prezzo del biglietto
function calcolaPrezzo(km, eta) {
  const prezzoPerKm = 0.21;
  let prezzo = km * prezzoPerKm;

  // Applicazione sconto in base all'età
  if (eta < 18) {
      prezzo *= 0.80; // Sconto 20% per i minorenni
  } else if (eta > 65) {
      prezzo *= 0.60; // Sconto 40% per gli over 65
  }

  return prezzo.toFixed(2);
}

// Funzione per generare un numero di carrozza casuale tra 1 e 15
function generaCarrozza() {
  return Math.floor(Math.random() * 15) + 1;
}

// Funzione per generare un codice CP casuale di 5 cifre
function generaCodiceCP() {
  return Math.floor(10000 + Math.random() * 90000); // Un numero casuale di 5 cifre
}
document.getElementById('ticketForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const nome = document.getElementById('firstNameInput').value;
  const cognome = document.getElementById('lastNameInput').value;
  const km = parseFloat(document.getElementById('kmInput').value);
  const eta = parseInt(document.getElementById('ageInput').value);
  // Controllo se i valori sono validi
  if (!nome || !cognome || isNaN(km) || isNaN(eta) || km <= 0 || eta <= 0) {
      alert('Per favore, inserisci tutti i campi correttamente.');
      return;
  }
  // Calcola il prezzo
  const prezzo = calcolaPrezzo(km, eta);
  // Genera carrozza e codice CP
  const carrozza = generaCarrozza();
  const codiceCP = generaCodiceCP();
  // Mostra il biglietto con tutte le informazioni
  document.getElementById('ticketName').textContent = nome;
  document.getElementById('ticketSurname').textContent = cognome;
  document.getElementById('ticketKm').textContent = km;
  document.getElementById('ticketAge').textContent = eta;
  document.getElementById('ticketPrice').textContent = prezzo;
  document.getElementById('ticketCarrozza').textContent = carrozza;
  document.getElementById('ticketCp').textContent = codiceCP;
  // Rende visibile il biglietto
  document.getElementById('ticketInfo').style.display = 'block';
});