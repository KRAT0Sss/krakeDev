// Chuleta de JavaScript con comentarios explicativos

// 1) Declarar variables
let nombre = "Deyvid";   // Variable con alcance de bloque
const PI = 3.14;         // Constante que no cambia

// 2) Tipos basicos
let esActivo = true;     // Valor booleano
let texto = "Hola";      // Texto
let numero = 10;         // Numero

// 3) Strings: charAt y charCodeAt
let s = "Hola";
console.log(s.charAt(0));    // Primer caracter -> 'H'
console.log(s.charAt(10));   // Indice fuera de rango -> ''
console.log(s.charCodeAt(0)); // Codigo Unicode del primer caracter -> 72

// 4) Arrays y push
let arr = [1, 2];
arr.push(3);               // Agrega un elemento al final -> [1,2,3]
console.log(arr[0]);       // Accede al primer elemento -> 1

// 5) Objeto dentro de array
let personas = [{nombre:"Ana", edad:20}, {nombre:"Luis", edad:25}];
console.log(personas[1].nombre); // Accede al nombre de la segunda persona -> 'Luis'

// 6) Bucle for
for (let i = 0; i < 3; i++) {
  console.log(i);         // Recorre los numeros 0,1,2
}

// 7) break (detener bucle)
for (let i = 0; i < 5; i++) {
  if (i === 2) break;     // Sale del bucle cuando i es 2
  console.log(i);         // Imprime 0 y 1
}

// 8) Math.random y Math.floor
let alea = Math.floor(Math.random() * 5); // Numero entre 0 y 4
let alea1a5 = Math.floor(Math.random() * 5) + 1; // Numero entre 1 y 5

// 9) Function y return
function suma(a, b) {
  return a + b;           // Retorna la suma de a y b
}
console.log(suma(2,3));   // Imprime 5

// 10) if / else if / else
let x = 7;
if (x < 3) {
  console.log("pequeno"); // Verifica si x es menor que 3
} else if (x < 10) {
  console.log("mediano"); // Verifica si x es menor que 10
} else {
  console.log("grande"); // Ejecuta si x es mayor o igual a 10
}

// 11) Operadores logicos && (AND) y || (OR) y ! (NOT)
let a = true, b = false;
if (a && b) { /* Ambos true */ }
if (a || b) { /* Al menos uno true */ }
if (!a) { /* a es false */ }

// 12) Errores comunes (ver antes de ejecutar)
// SyntaxError: parentesis o llaves faltantes
// ReferenceError: usar variable no declarada
// TypeError: llamar a un metodo que no existe
// Funcion sin return devuelve undefined

// Ejemplo de funcion mal hecha -> devuelve undefined
function multNoReturn(a,b) {
  let c = a * b; // Calcula c pero no retorna
}
console.log(multNoReturn(2,3)); // Imprime undefined

// 13) Combinaciones practicas cortas
let lista = ["manzana","pera","uva"];
for (let i=0; i<lista.length; i++){
  if (lista[i].charAt(0) === "u") break; // Detiene si empieza con 'u'
  console.log(lista[i]); // Imprime los que no empiezan con 'u'
}

// 14) Agregar objeto desde inputs HTML (version corta)
/* <input id="nombre" placeholder="Nombre">
   <input id="edad" placeholder="Edad" type="number">
   <button onclick="agregar()">Agregar</button> */

function agregar() {
  personas.push({
    nombre: document.getElementById("nombre").value,
    edad: parseInt(document.getElementById("edad").value)
  });
  console.log(personas);
}