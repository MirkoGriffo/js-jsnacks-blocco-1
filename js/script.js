/*
Snack 1.
l software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while

*/

/*

var somma = 0;


for (i = 0; i < 5; i++) {
  var n = parseInt(prompt("Inserisci numero"));

  somma = somma + n;
}



/*
var i = 0;

while (i < 5) {
  var n = parseInt(prompt("Inserisci numero"));

  somma = somma + n;

  i++;
}
document.getElementById("somma").innerHTML = somma;

*/

/* Snack 2.
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo


var n = parseInt(prompt("Inserisci numero"));

if (n % 2 === 0) {
  console.log(n);
} else {
  console.log(n + 1);
}
*/

/*
Snack 3.
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.


var nomi = ["Marco", "Mario", "Giuseppe", "Fabio", "Andrea"];

var cognomi = ["Rossi", "Verdi", "Gialli", "Neri", "Bianchi"];

for (i = 0; i < 3; i++) {
  randomNome = parseInt(Math.random() * nomi.length);
  randomCognome = parseInt(Math.random() * cognomi.length);

  console.log(nomi[randomNome] + " " + cognomi[randomCognome]);
}

*/

/*
Snack 4.
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari


var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];

somma = 0;

for (i = 0; i < numeri.length; i++) {
  if (i % 2 !== 0) {
    somma = somma + numeri[i];
  }
}
console.log(somma);

*/

/*
Snack 5 - Bonus
Crea due array di numeri che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

var array1 = [1, 2, 3, 4, 5];

var array2 = [6, 7];

while (array1.length != array2.length) {
  if (array1.length > array2.length) {
    array2.push(parseInt(Math.random() * 100));
  } else if (array1.length < array2.length) {
    array1.push(parseInt(Math.random() * 100));
  }
}

console.log(array1);

console.log(array2);
