/**
 * Todas las casillas tienen la clase .casilla
 * 
 */

/**
 * Almacenamos todas las casillas, es decir, todos los divs que tienen clase 'casilla'
 * En total tenemos 9 casillas que van desde la 0 hasta la 8
 */
let casillas = document.getElementsByClassName("casilla");

/**
 * Creamos un array con arrays que contienen todas las combinaciones ganadoras
 * 
 * [0] => [0, 1, 2]
 * [1] => [3, 4, 5]
 * ...
 */
let combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

/**
 * Recorrer las casillas que tengo en array casillas
 * Comprobar el contenido de cada una
 */

/**
 * Utilizo el array posicionesLlenas para introducir aquellas posiciones que contienen
 * un texto igual a 'X'
 * 
 * Al realizar un push lo que hago es introducir en el array, el numero de la posicion
 */


// let posicionesLlenas = [];
// for(let i = 0; i < casillas.length; i++){
//     console.log('La casilla numero ' + i + ' contiene: ' + casillas[i].innerHTML);
//     if(casillas[i].innerHTML == 'X'){
//         posicionesLlenas.push(i);
//     }
// }
// console.log(posicionesLlenas);

/**
 * Una vez tengo un array con las posiciones que contienen una 'X',
 * me interesa poder comparar si en el contenido de 'posicionesLlenas' esta incluido
 * alguna de las combinaciones de 'combinacionesGanadoras'.
 * 
 * En este caso en 'posicionesLlenas' tenemos:
 * [0] ---> 0
 * [1] ---> 1
 * [2] ---> 2
 * [3] ---> 5
 * 
 * En este caso en 'combinacionesGanadoras' tenemos:
 * [0] ---> [0, 1, 2]           // CORRECTA
 */

/**
 * ------------------------------------------------------------------
 * CONTENIDO NUEVO
 * ------------------------------------------------------------------
 */

let turno = true;
let terminar = true

let equis = [];
let circulo = [];

let contX = 0;
let contO = 0;

function agregarFicha(numero) {
    console.log('Has hecho un click en la casilla ' + numero);

    /**
     * Cuando se activa esta función por el evento del click
     * es necesario eliminar el click del div
     */

    // casillas[numero].removeAtribute('onclick');

    if (turno) {
        casillas[numero].textContent = 'X';
        casillas[numero].removeAttribute('onclick');
        equis.push(numero);
        console.log( 'equis '+ equis);
        turno = false;
    } else {
        casillas[numero].textContent = 'O';
        casillas[numero].removeAttribute('onclick');
        circulo.push(numero);
        console.log(circulo);
        turno = true;
    }

    if (equis.length >= 3 ){
        verGanador(turno);
    }
}

let mirarCombo = [];
let cont = 0;
let encontrado = false;
let ganador = false; 
let resultado;

/**
 * @description Función donde se mira el ganador. Se recorre el array de combinacionesGanadoras y se va comparando con otro array en el cual se
 *  meten valores. 
 * @param turno
 * @returns boolean
 */

function verGanador(turno) {

    let uno;
    let dos;
    let tres;
    for (combos in combinacionesGanadoras) {

        for (num in combinacionesGanadoras[combos]) {
            if (equis.includes(combinacionesGanadoras[combos][num])) {
                mirarCombo.push(combinacionesGanadoras[combos][num]);
                
            } 
        }
    }

    for(i = 0; i < combinacionesGanadoras.length ; i++ ){


        for(j = 0; j < combinacionesGanadoras[i].length ; j++){
            
            if(equis.includes(combinacionesGanadoras[i][j])){

            }
        }
    }

    if (ganador){
        if (turno){
            console.log('Gandador O');
        } else {
            console.log('Ganador X');
        }
    }else{
        console.log('No hay Ganador');
    }

}


// function terminarJuego(){
//     for (hola in casillas){
//         if(casillas[hola].textContent != ''){
//             terminar = false;
//         }
//     }

//     if(terminar){
//         for (hola in casillas){
//             casillas[hola].textContent = '';
//         }
//     }
// }



/**
 * Para acbar el juego necesitamos:
 * 1. Colocar ficha
 * 2. Comprobar en cada inserción de ficha si se ha ganado el juego
 * 3. Cambiar turno 
 * 4. Cuando hay ganador, mostrar mensaje
 * 
 * OPCIONES EXTRA:
 * 1. Generar un contador de victorias y resetear el tablero
 */

/*
    1. ¿hay ganador?
        Leo fichas tablero (mirar array X / O)
        Comprobar con combinaciones ganadoras.
    
    2. ¡Hay ganador!
        No eventos click (removeAtribute(onclick)
        Contador de equipo suma 1.
        Mostrar línea ganadora (opcional)
        Reiniciar tablero (textContent setAtribute)
    
    3. Contador tiempo para cambiar de turno (extra)

    4. Mínimos lógicos de buen programador
        Comentarios en la cabeera de funciones
        Buenas practicas variables
        No errores en consola
        Estilos
        GitHub
*/
