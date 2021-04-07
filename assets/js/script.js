//richieste
var chilometri = parseInt(prompt("quanti chilometri vuoi fare?"));
var eta = parseInt(prompt("quanti anni hai?"));
//prezzo
var prezzo_intero = (chilometri * 0.21);
var prezzo_intero_decimale = prezzo_intero.toFixed(2);
console.log(prezzo_intero);
//prezzi scontati
var prezzo_minori =(prezzo_intero*0.80);
var prezzo_minori_decimale = prezzo_minori.toFixed(2);
var prezzo_over65 =(prezzo_intero*0.60);
var prezzo_over65_decimale = prezzo_over65.toFixed(2);
//possibilità
if(eta >= 18 && eta < 65){
  document.getElementById('prezzo').innerHTML = "Il prezzo del tuo biglietto è di " + prezzo_intero_decimale + "€"
}
else if(eta < 18){
  document.getElementById('prezzo').innerHTML = "Il prezzo del tuo biglietto è di " + prezzo_minori_decimale + "€ con il 20% di sconto"
}
else{
  document.getElementById('prezzo').innerHTML = "Il prezzo del tuo biglietto è di " + prezzo_over65_decimale + "€ con il 40% di sconto"
}