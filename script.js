/*-------------------
FASE DI PREPARAZIONE
-------------------*/

//Recuperare dalla pagina tutti gli elementi di interesse
const grid = document.querySelector('.grid');

// preparo delle informazioni utili alla logica
const totalCells = 19;
const func = [];
const oper = [];
const num = [];
let x = 0;
let y = 0;
let operatorSign = '+';
let risultato = false;
let operatorChose = false;

//CREO GLI ARREY PER I NUMERI, OPERATORI, E ALTRI VALORI
func.push('<h1>AC</h1>','<h1>+/-</h1>','<h1>%</h1>');
oper.push('','','','<h1>/</h1>','','','','<h1>X</h1>','','','','<h1>-</h1>','','','','<h1>+</h1>','','','<h1>=</h1>');
num.push('','','','','7','8','9','','4','5','6','','3','2','1');

for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    //CREO LE CELLE
    cell.classList.add('cell');
    cell.innerText = i;
    //INSERISCO I NUMERI ALL'INTERNO DELLE CELLE
    if (i<3) {
        cell.classList.add('functions');
        cell.innerHTML = func[i];
    }
    
    else if (i == 3 || i == 7 || i == 11 || i == 15 || i == 18) {
        cell.classList.add('operator');
        cell.innerHTML = oper[i];
    }

    else if (4<=i && i<15) {
        cell.classList.add('numbers');
        cell.innerHTML = '<h1>'+num[i]+'</h1>';
    } 
    else if(i == 16){
        cell.classList.add('zero');
        cell.innerHTML = '<h1>0</h1>'

    }
    else if(i == 17){
        cell.classList.add('numbers');
        cell.innerHTML = '<h1>,</h1>'

    }

    // LEGGO IL PRIMO NUMERO (INCOMPLETA DI STORE DATA MA FUNZIONALE NELLA SELEZIONE HOVER)
    cell.addEventListener('click', function(){
        if (cell.classList.contains('numbers') || cell.classList.contains('zero')) {
            console.log('Elemento selezionato')
        }
    })
    //INSERISCO LE CELLE ALL'INTERNO DELLA GRIGLIA
    grid.appendChild(cell);
}

/*----------------------
CREO FUNZIONI NECESSARIE
----------------------*/
function sum(){

}