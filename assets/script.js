// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Selezionare il bottone dentro l'HTML

const eleBtn = document.querySelector('#btn-play');
console.log(eleBtn);
const eleGrid = document.querySelector('.grid');
console.log(eleGrid);
const eleText = document.querySelector('.text-lose');
const elePoint = document.querySelector('.point-user');
const arrayNumberRandom = [];
let point = 0;
let flagGame = false







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
                
                // AGGIUNGIAMO CHE SE L'UTENTE PRENDE UN NUMERO CHE SI CONTIENE NELLA ARRAY ESPLODE LA BOMBA
            
                if(arrayNumberRandom.includes(i + 1)){
                    console.log('Hai perso')
                    this.classList.toggle('red');
                    eleText.classList.add('text')
                    flagGame = true
                      

                    
                }

                 else{
                    this.classList.toggle('clicked');
                    this.classList.toggle('blue');
                    elePoint.classList('text')
                    point++;
                    console.log(point);
                    elePoint.innerHTML = (point);
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

// Generare 16 numeri e aggiungerli all'array

getRandom (1, 100, arrayNumberRandom)


function getRandom (min, max, numbers) {
    
    while (numbers.length < 16) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
      if (!numbers.includes(randomNumber)) {
    numbers.push(randomNumber);
  }
}
    console.log(numbers);
    return numbers
}




