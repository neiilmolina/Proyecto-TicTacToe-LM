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

let longitudCombinacionesGanadoras = combinacionesGanadoras.length;
let longitudCombo;

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
let casillasLlenas = [];

let contX = 0;
let contO = 0;
let contTablas = 0;
let verContador = 0;

let uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');

/**
 * @description Función que sirve para añadir una X o O en una casilla
 * @param numero
 * @returns NO
 */

function agregarFicha(numero) {

    if (turno) {
        casillas[numero].textContent = 'X';
        casillas[numero].style.color = 'blue';
        casillas[numero].removeAttribute('onclick');
        casillasLlenas.push(casillas[numero]);
        equis.push(numero);
        console.log('equis ' + equis);
        turno = false;
    } else {
        casillas[numero].textContent = 'O';
        casillas[numero].style.color = 'red';
        casillas[numero].removeAttribute('onclick');
        casillasLlenas.push(casillas[numero]);
        circulo.push(numero);
        console.log(circulo);
        turno = true;
    }


    ganador = verGanador();

    if (ganador) {
        if (turno) {
            console.log('Gandador O');
            contO++;
            verContador = 1;
        } else {
            console.log('Ganador X');
            contX++;
            verContador = 2;
        }
    } else {
        console.log('No hay Ganador');
        contTablas++;
        verContador = 3;
    }
    subirContador(verContador);
}

let mirarCombo = [];
let contI = 0;
let contJ = 0;
let encontradoCombo = false;
let encontradoPosicion = true;
let ganador = false;
let resultado;

/**
 * @description Función donde se mira el ganador. Se recorre el array de combinacionesGanadoras y se va comparando con otro array en el cual se
 *  meten valores. 
 * @param turno (boolean)
 * @returns boolean (ganador)
 */

function verGanador() {

// dos while y dos boolean para salir de los bucles?
    while (contI < longitudCombinacionesGanadoras || !encontradoCombo){
        longitudCombo = combinacionesGanadoras[contI].length;
        while(contJ < longitudCombo || encontradoPosicion){
            console.log(combinacionesGanadoras[contI][contJ])
            if (equis.includes(combinacionesGanadoras[contI][contJ])) {
                encontradoPosicion = true;
            } else {
                encontradoPosicion = false;
            }
            
            contJ++;
        }

        if(encontradoPosicion){
            encontradoCombo = true;;
        } 
        contI++

    }

    if (encontradoPosicion){
        ganador = true
    }else{
        ganador = false
    }
    return ganador;
}

/**
 * @description Función que sirve para reiniciar el tablero si el usuario quiere
 * @param NO
 * @returns NO
 */

function reiniciarJuego() {

    for (i = 0; i < casillas.length; i++) {
        for (j = 0; j < casillasLlenas.length; j++) {
            if (casillas[i] == casillasLlenas[j]) {
                casillas[i].textContent = '';
                casillas[i].setAttribute('onclick', `agregarFicha(${i})`);
            }
        }
    }
}

/**
 * @description Función que sirve para subir el recuento de algún contador dependiendo de lo que haya sucedido en la partida
 * @param verContador
 * @returns NO
 */

function subirContador(verContador) {
    switch (verContador) {
        case 1:
            uno.textContent = `${contX}`;
            break;

        case 2:
            dos.textContent = `${cont0}`;
            break;

        case 3:
            tres.textContent = `${contTablas}`;
            break;
    }
}




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