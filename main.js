/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60
 */

// richiesta km che l'utente vuole percorrere, parseFloat serve per convertire una stringa in un numero decimale (cioè un numero con la virgola)
const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));

// richiesta età utente , parseInt è una funzione in JavaScript che serve a convertire una stringa in un numero intero, se volessi come dato sempre un numero nel caso in cui l'utente si sbagli

const age = parseInt(prompt("Quanti anni hai?"));

// Prezzo per km
const kmPrice = 0.21;
// Calcolo del prezzo per km
const totalPrice = km * kmPrice;

// sconto in base all'età se <18 20% con valore 0.20 (perché sto usando numeri decimali) se >65 sconto 40% con valore 0.40 (perché  sto usando numeri decimali)
