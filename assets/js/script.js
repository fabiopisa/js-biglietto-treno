//richieste
var chilometri = parseInt(prompt("quanti chilometri vuoi fare?"));
var eta = parseInt(prompt("quanti anni hai?"));
//prezzo
var prezzo_intero = (chilometri * 0.21);
var n1 = prezzo_intero.toFixed(2);
console.log(prezzo_intero);
//prezzi scontati
var prezzo_minori =(prezzo_intero*0.80);
var n2 = prezzo_minori.toFixed(2);
var prezzo_over65 =(prezzo_intero*0.60);
var n3 = prezzo_over65.toFixed(2);
//possibilità
if(eta >= 18 && eta < 65){
  document.getElementById('prezzo').innerHTML = "Il prezzo del tuo biglietto è di " + n1 + "€"
}
if(eta <= 17){
  document.getElementById('prezzo').innerHTML = "Il prezzo del tuo biglietto è di " + n2 + "€ con il 20% di sconto"
}
if(eta >= 65){
  document.getElementById('prezzo').innerHTML = "Il prezzo del tuo biglietto è di " + n3 + "€ con il 40% di sconto"
}