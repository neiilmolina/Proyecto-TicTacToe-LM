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

let equis = [];
let circulo = [];
let casillasLlenas = [];

let contX = 0;
let contO = 0;
let contTablas = 0;

let uno = document.getElementById('uno');
let dos = document.getElementById('dos');
let tres = document.getElementById('tres');

let encontradoCombo = false;
let ganador = false;
let posicion1;
let posicion2;
let posicion3;

/**
 * @description Función que sirve para añadir una X o O en una casilla
 * @param numero
 * @returns NO
 */

function agregarFicha(numero) {

    if (turno) {
        casillas[numero].textContent = 'X';
        casillas[numero].style.color = 'grey';
        casillas[numero].removeAttribute('onclick');
        casillasLlenas.push(casillas[numero]);
        equis.push(numero);
        turno = false;
    } else {
        casillas[numero].textContent = 'O';
        casillas[numero].style.color = 'black';
        casillas[numero].removeAttribute('onclick');
        casillasLlenas.push(casillas[numero]);
        circulo.push(numero);
        turno = true;
    }

    ganador = verGanador(turno);

    if (ganador) {
        if (turno) {
            contO++;
            dos.textContent = `${contO}`;
            window.alert('Ganador O')
        } else {
            contX++;
            uno.textContent = `${contX}`;
            window.alert('Ganador X');
        }
        reiniciarJuego();
    }

    if(casillasLlenas.length >=9){
        contTablas++;
        tres.textContent = `${contTablas}`;
        window.alert('Tablas');
        reiniciarJuego();
    }

    encontradoCombo = false;
    ganador = false;
}

/**
 * @description Función donde se mira el ganador. Se recorre el array de combinacionesGanadoras y se va comparando con otro array en el cual se
 *  meten valores. 
 * @param turno (boolean)
 * @returns boolean (ganador)
 */

function verGanador(turno) {

    for (let i = 0; i < longitudCombinacionesGanadoras; i++) {
        for (let j = 0; j < 3; j++) {
            switch (j) {
                case 0:
                    posicion1 = combinacionesGanadoras[i][j];
                    break;
                case 1:
                    posicion2 = combinacionesGanadoras[i][j];
                    break;

                case 2:
                    posicion3 = combinacionesGanadoras[i][j];
                    if(turno){
                        if (circulo.includes(posicion1) && circulo.includes(posicion2) && circulo.includes(posicion3)) {
                            encontradoCombo = true;
                        } 
                    } else{
                        if (equis.includes(posicion1) && equis.includes(posicion2) && equis.includes(posicion3)) {
                            encontradoCombo = true;
                        }
                    }
                    break;
            }
        }

        if (encontradoCombo) {
            ganador = true;
        }
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

    equis = [];
    circulo = [];
    casillasLlenas = [];
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