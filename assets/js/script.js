console.log("miao");

/*
Consegna
- L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
- Ogni cella ha un numero progressivo, da 1 a 100 (Ci saranno quindi 10 caselle per ognuna delle 10 righe)
- Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
- emetto un messaggio in console con il numero della cella cliccata.
*/


const fieldEl = document.querySelector(".field");
const limit = 100 // numero delle celle
spawnField(fieldEl, limit);


function spawnField(domEl, limit) {
    //creo il campo
    
    for (let i = 0; i < limit; i++){
        const cellEl = document.createElement("div");
        cellEl.classList = "cell";
        cellEl.innerHTML = i + 1;
        fieldEl.append(cellEl)
    }

}