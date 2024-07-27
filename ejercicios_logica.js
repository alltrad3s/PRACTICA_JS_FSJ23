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

// Crear una funcion que tomando un array de enteros y un numero limite.
// Devolver un array que contenga solo numeros mayores a el numero limite
// EL EJERCICIO SE DEBE RESOLVER SIN UTILIZAR EL BUCLE FOR Y EL METODO MAP

let array3 = [15,10,8,5,73,30,4];

function arrayNumeroMayorConMetodo(array,x){
    return array.filter( numero => numero > x);
}

console.log(arrayNumeroMayorConMetodo(array3,5));

function arrayNumeroMayor(array,x){
   //Code ur solution
    let i = 0;
    let resp = [];

    while(i<array.length){

        if(array[i]>x){
            resp.push(array[i])
        }
        i++;
    }

    //array.map((numero)=>{ if(numero>x){resp.push(numero)}})
    return resp;
}

console.log(arrayNumeroMayor(array3,5));

let arr1 = [1,2,3,4];

arr1.map((valor)=>{ valor > 1 ? console.log("El valor es mayor"): console.log("El valor es menor");});


//Crea una función que tome un array de números y un número límite. 
//La función debería devolver un nuevo array que contenga solo los números que son mayores al límite dado.
// Lo arregle para que muestre SOLO los mayores al limite.

function arreNumMayor(arre, x){
    let arraycito = [];
    for(let i = 0; i <= arre.length; i++){
        if(arre[i]>x){
            arraycito.push(arre[i]);
        }
    }
    console.log(arraycito)
}

let x = 6;
arre = [1,2,3,4,5,6,7,15,18,21];

//arreNumMayor(arre, x);

function arrayNumMayor(arre, x){
    let largor = arre.length;
    let contador=0;
    arraycito = [];

    while(contador<largor){
        if(arre[contador]>x){
            arraycito.push(arre[contador]);
        }
        contador++;
    }
    return arraycito;
}


imprimir = arrayNumMayor(arre,x);
console.log(imprimir)

// hacerlo con metodos ahora con filter
function arrNumMayorFilter(arre,x){
    return arrayNumMayor.filter(numero => numero > x);
}

//Hacerlo con MAP

let arr1 = [1,2,3,4];

arr1.map((valor)=>{valor > 1 ? console.log("El valor es mayor"): console.log("El valor es menor");})