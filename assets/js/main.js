
// - Richiedere all'utente i km che vuole percorrere tramite un prompt 
// - Richiedere all'utente l'età tramite un prompt

const distance = Number(prompt (`Quanti km vuoi percorrere?`)); // km trasfirmati in numero
const age = Number(prompt (`Quanti anni hai?`)); // anni trasformati in numero
let priceDiscount20;
let priceDiscount40;



/* Richiesta anno di nascita, ma meglio chiedere l'età in quanto conta anche il giorno e il mese per lo scatto dell'età 

const date = Number(prompt (`Inserisci l'anno completo della tua nascita `)); // richiesta di inserimento anno preciso di nascita
const currentYear = new Date();
const year = currentYear.getFullYear(); // anno di oggi
console.log(year);
const age = Number((year - date));
console.log(age);

***********************************************************************************************************************/


console.log(typeof distance, distance); // Controllo e stampa in console tipo del dato e numero digitato
console.log(typeof age, age);


// - calcolare il costo del biglietto in base ai km di percorrenza

let price = Number((distance * 0.21)); // calcolo costo biglietto in base ai km
console.log(typeof price, price);


// - controllare se il prezzo deve essere soggetto a scontistica in base all'età dell'utente
// - Se soggetto a scontistica, applicare sconto di riferimento
// - mandare in console il prezzo del biglietto. (Oppure con un prompt o alert)


if (age < 18) {
	priceDiscount20 = (price * 20 / 100)
	console.log(priceDiscount20);
	alert(`Il prezzo del tuo biglietto con lo sconto minorenni del 20% è: ` + priceDiscount20.toFixed(2) + " \u20AC"); // 2 cifre dopo la virgola e simbolo euro

} else if (age > 64) {
	priceDiscount40 = (price * 20 / 100)
	console.log(priceDiscount40);
	alert(`Il prezzo del tuo biglietto con lo sconto over 65 del 40% è: ` + priceDiscount40.toFixed(2) + " \u20AC"); // 2 cifre dopo la virgola e simbolo euro

} else {
	console.log(price);
	alert(`Il prezzo del tuo biglietto è: ` + price.toFixed(2) + " \u20AC"); // 2 cifre dopo la virgola
}






