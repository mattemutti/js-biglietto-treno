
// - Richiedere all'utente i km che vuole percorrere tramite un prompt 
// - Richiedere all'utente l'età tramite un prompt

const distance = Number(prompt (`Quanti km vuoi percorrere`)); // km trasfirmati in numero
const age = Number(prompt (`Quanti anni hai`)); // anni trasformati i nnumero


console.log(typeof distance, distance); // Controllo e stampa in console tipo del dato e numero digitato
console.log(typeof age, age);


// - calcolare il costo del biglietto in base ai km di percorrenza

let price = Number((distance * 0.21)) // calcolo costo biglietto in base ai km
console.log(typeof price, price);


// - controllare se il prezzo deve essere soggetto a scontistica in base all'età dell'utente



// - Se soggetto a scontistica, applicare sconto di riferimento



// - mandare in console il prezzo del biglietto. (Oppure con un prompt o alert)



