//Dado un array de enteros sumar los elementos pares y devolver si esta suma es mayor a 20

let array = [15,40,20,57,25,17,10];

function arrayPares(arraycito){
    let sumaPares = 0; //variable auxiliar

for(let i = 0; i< arraycito.length; i++){
    //Obtenemos el numero de cada posicion y 
    //console.log(arraycito[i]);
    //vemos si es par
    if(arraycito[i] % 2 == 0){
        //Guardamos la suma de todos los numeros pares
        sumaPares = sumaPares +  arraycito[i]; 
    }
}

//vemos si es mayor a 20
if(sumaPares > 20){
    return "Si es mayor";
}else{
    return "No es mayor";
}
}

console.log(arrayPares(array));

/*

Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the 
outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

*/

function concStrings (a, b) {
    if (a.length == 0 || b.length == 0) {
        return "A or B is empty";
    } 

    if (a.length < b.length) {
        return a + b + a;
    } else {
        return b + a + b;
    }
};

console.log(concStrings("", "22"));
console.log(concStrings("22", "1"));

/*

FizzBuzz
Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” 
instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples 
of both three and five print “FizzBuzz”.

Si el numero es multiplo de 3 imprime Fizz
Si el numero es multiple de 5 imprime Buzz
Si es multiplo de ambos imprime FizzBuzz
Si es multiple de ninguno imprime el numero

*/

function FizzBuzz () {
    for (let num = 1; num <= 100; num++) {
        if (num % 3 == 0 && num % 5 == 0) {
            console.log("FizzBuzz");
        } else if (num % 5 == 0) {
            console.log("Buzz");
        } else if (num % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(num);
        }
    }
}

FizzBuzz();
// Using arrays
// Forma 1
function FizzBuzzArray(arr) {
    let arraycito = [];
    for (let num = 0; num < arr.length; num++) {
        if (arr[num] % 3 == 0 && arr[num] % 5 == 0) {
            arraycito.push("FizzBuzz");
        } else if (arr[num] % 5 == 0) {
            arraycito.push("Buzz");
        } else if (arr[num] % 3 == 0) {
            arraycito.push("Fizz");
        } else {
            arraycito.push(arr[num]);
        }
    }
    console.log(arraycito);
}

FizzBuzzArray([1,2,3,4,5,6,7,15,18,21]);

