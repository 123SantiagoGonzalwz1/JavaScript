// Datos primitivos
let word = 'JavaScript';

word[0] = 'Y';

console.log(word);


let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo);


let js = 'JavaScript';
let py = 'Python';

console.log(js == py);


let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff);


// Datos no primitivos
let nums = [1,2,3]; // Array
let numbers = nums;

console.log(nums == numbers);

let userOne = {
    name: 'Santiago',
    role: 'Teaching',
    country: 'Finland'
}

let userTwo = userOne;

console.log(userOne == userTwo);


// Tipos de números
let age = 16;
const gravity = 9.81;
let mass = 72;
const boilingPoint = 100;
const bodyTemp = 37;

console.log(age, gravity, mass, boilingPoint, bodyTemp);


// Obtejo Matemático
const PI = Math.PI;

console.log(PI);
// Redondear un número
console.log(Math.round(PI));
console.log(Math.round(9.81));

// Redondear un número hacia abajo y hacia arriba
console.log(Math.floor(PI));
console.log(Math.ceil(PI));

// Valor mínimo y máximo
console.log(Math.min(-5, 3, 20, 4, 5, 10));
console.log(Math.max(-5, 3, 20, 4, 5, 10));

// Valor random
const randNum = Math.random();
let numBtnZeroAndTen = randNum * 11;

console.log(numBtnZeroAndTen);

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor);


// Valor random entre un número del 1 al 10
const num = Math.floor(Math.random() * 11);
console.log(num);

// Valor absoluto
console.log(Math.abs(-10));

// Raíz cuadrada
console.log(Math.sqrt(100));
console.log(Math.sqrt(2));

// Potencía
console.log(Math.pow(3,2));
console.log(Math.E);

// Logaritmo
console.log(Math.log(2));
console.log(Math.log(10));

// Logaritmo natural de 2 10
console.log(Math.LN2);
console.log(Math.LN10);

// Trigonometría
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);


// Cadenas
let space = ' ';
let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
let country = 'Finland';
let city = 'Helsinki';
let language = 'JavaScript';
let job = 'Teacher';
let quote = "The saying, 'Seeing is Beleiving' is not correct in 2020.";
let quotWithBackTick = `The saying, 'Seeing is Beleiving' is not correct in 2020.`;

// Literales extensos
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph);

// Concatenación
let fullName = firstName + space + lastName;
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country;
console.log(personInfoOne);

// Scapes
console.log('I hope everyone is enjoying the 30 Days of JavaScript challenge.\nDo you ?') // \n Hace un salto de línea
console.log('Days\tTopics\tExcercises'); // Tabulación
console.log('This is a BackSlash symbol (\\)'); // Para insertar un BackSlash
console.log('In every programming language it starts with \"Hello, World!\"') // Para insertar comillas simples o dobles
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

// Plantillas de Cadena