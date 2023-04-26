// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Selezionare il bottone dentro l'HTML

const eleBtn = document.querySelector('#btn-play');
console.log(eleBtn);
const eleGrid = document.querySelector('.grid');
console.log(eleGrid);
const eleEasy =document.querySelector ('#easy')
console.log(eleEasy)
const eleHard =document.querySelector ('#hard')
console.log(eleHard)
const eleCrazy =document.querySelector ('#crazy')
console.log(eleCrazy)




// Diamo la funziona al bottone dell'html per generare la tabella

eleBtn.addEventListener('click', function(){

    
    // Generiamo la griglia desiderata
    createGrid (100, eleGrid)

 // applichiamo gli event listener alla griglia che contiene le celle
 
 const listCells = document.querySelectorAll('.cell');
 for (let i = 0; i < listCells.length; i++) {
     const cell = listCells[i];
     cell.addEventListener('click',
         function colorCell() {
             console.log(this);
             this.classList.toggle('clicked');
         }
     );
 }
 
 // FUNCTION DEFINITIONS
 
 function createGrid(numberCell, eleContainer){
     for (let i= 0; i < numberCell; i++){
         eleContainer.innerHTML += `<div class="cell">${i+1}</div>`;
     }
     
 }
});


