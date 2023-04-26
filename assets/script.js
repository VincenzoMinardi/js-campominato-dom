// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Selezionare il bottone dentro l'HTML

const eleBtn = document.querySelector('#btn-play');
console.log(eleBtn);
const eleGrid = document.querySelector('.grid');
console.log(eleGrid);
 const arrayNumberRandom = [];
let point = 0;






// Diamo la funziona al bottone dell'html per generare la tabella

eleBtn.addEventListener('click', function () {


    // Generiamo la griglia desiderata
    createGrid(100, eleGrid)

    // applichiamo gli event listener alla griglia che contiene le celle

    const listCells = document.querySelectorAll('.cell');
    for (let i = 0; i < listCells.length; i++) {
        const cell = listCells[i];
        cell.addEventListener('click',
            function colorCell() {
                console.log(this);
                this.classList.toggle('clicked');
                if(arrayNumberRandom === listCells){
                    console.log('Hai perso')
                }

                else{
                    point++
                }
            }
        );
        
    }
});

// FUNCTION DEFINITIONS

function createGrid(numberCell, eleContainer) {
    for (let i = 0; i < numberCell; i++) {
        eleContainer.innerHTML += `<div class="cell">${i + 1}</div>`;
    }


}
// Generare 16 numeri random


getRandom (1, 100, arrayNumberRandom)


function getRandom (min, max, numbers) {
    
    while (numbers.length < 16) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
      if (!numbers.includes(randomNumber)) {
    numbers.push(randomNumber);
  }
}
    console.log(numbers);
}

// Aggiungere Numeri Random dentro La tabella

getRandom === eleGrid;
