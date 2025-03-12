
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

/* Operadores de comparación
    * ==: igual a
    * ===: estrictamente igual a
    * !=: diferente de
    * !==: estrictamente diferente de
    * >: mayor que
    * <: menor que
    * <=: menor o igual que
    * >=: mayor o igual que
*/
let edad1 = 20;
let comparaciones;

comparaciones = edad1 == 10; // false
comparaciones = edad1 === "20"; // false
comparaciones = edad1 != 20; // false
comparaciones = edad1 !== "20"; // true
comparaciones = edad1 > 10; // true
comparaciones = edad1 < 50; // true
comparaciones = edad1 <= 10; // false
comparaciones = edad1 >= 20; // true

/* Operadores lógicos
    * &&: and / Si todos los valores son verdaderos devuelve true sino false.
    * ||: or / Si uno de los valores es verdadero devuelve true sino false.
    * !: not / Convierte un valor a booleano. Y luego lo invierte, si el valor es verdadero devuelve false sino true.
    * ??: nullish coalescing / Devuelve el primer valor que no sea null o undefined.
*/

let valor1 = true;
let valor2 = false;

console.log(valor1 && valor2); // false
console.log(valor1 || valor2); // true
console.log(!valor1); // false
console.log(valor1 ?? valor2); // true

/* Condicionales
    * if: si se cumple la condición se ejecuta el bloque de código
    * else if: si no se cumple la condición anterior se evalúa otra condición
    * else: si no se cumple la condición se ejecuta el bloque de código
*/
let calificacion = 7;

if (calificacion == 10) {
    console.log("Excelente");
} else if (calificacion >= 7) {
    console.log("Muy bien");
} else if (calificacion >= 5) {
    console.log("Puedes mejorar");
} else {
    console.log("Reprobado");
}

/* Ciclos
    * for: se ejecuta un bloque de código un número específico de veces
    * while: se ejecuta un bloque de código mientras la condición sea verdadera
    * do while: se ejecuta un bloque de código al menos una vez y luego se ejecuta mientras la condición sea verdadera
    * break: termina el ciclo
    * continue: salta a la siguiente iteración
*/

for (let i = 1; i <= 10; i++) {
    if (i == 5) { break; }
    console.log(i);

    if (i % 2 != 0) { continue; }
    console.log("Es par");
}

let i = 1;
while (i <= 10) {
    console.log(i);
    i++; // Finalizar siempre dentro del ciclo para que no sea infinito
}

do {
    console.log("ejecución");
} while (prompt());

/* Undefined, null y NaN
    * undefined: Se le asigna a una variable cuando no tiene ningún valor
    * null: Objeto que no tiene ningún valor
    * NaN: Not a Number, valor que no es un número
    * Infinity: valor que representa el infinito
*/

let indefinido1; // undefined
let nulo1 = null;
let no_es_numero = 100 / "Hola"; // NaN
let infinito = 1 / 0; // Infinity