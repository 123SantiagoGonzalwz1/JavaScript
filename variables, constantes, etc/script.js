
/* Variables
    * Son espacios de memoria que se utilizan para almacenar valores
    * Se pueden declarar con var, let y const
    * var: es la forma antigua de declarar variables
    * let: es la forma moderna de declarar variables
    * const: es la forma moderna de declarar constantes
    * _nombre, $nombre, nombre, nombre1, nombre_1, nombre1_ son nombres de variables válidos
    * 1nombre, %nombre, nombre%, nombre%, nombre%, nombre% son nombres de variables inválidos
    * No usar palabras reservadas como nombres de variables
*/
let nombre = "Santiago";
const PI = 3.1416;

console.log(nombre);

/* Operaciones ariméticas
    * +: suma
    * -: resta
    * *: multiplicación
    * /: división
    * %: módulo
*/
let edad = 24;
let cambio = 2.5;
console.log(edad * cambio);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);


/* Tipos de Datos - Primitivos - Objetos
    * String: texto     /   String()
    * Number: número    /   Number()  /   parseInt()   /   parseFloat()
    * Boolean: true o false /   Boolean()
    * Undefined: valor indefinido
    * Symbol: valor único   /   Symbol()
    * Null: valor nulo
*/

let texto = "Hola Mundo";
let numero = 1;
let booleano = true;
let indefinido = undefined;
let simbolo = Symbol();
let nulo = null;

console.log(parseInt("200.5"));

/* Coerción de tipos
    * Conversión de un tipo de dato a otro
    * Implícita: el lenguaje convierte los tipos de datos automáticamente
    * Explícita: el programador convierte los tipos de datos
*/

parseInt("200.5"); // Explícita
console.log(Number("10") + 10); // Explícita
console.log(2 == "2"); // Implícita
console.log(2 === "2"); // Explícita

/* Booleanos
    * true: verdadero, 1
    * false: falso, 0, null, undefined, NaN, "", -0
*/

let notificaciones_activas = true;
let activo = false;

let resultado = Boolean(1); // Función para convertir a booleano
console.log(resultado);