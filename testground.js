const readline = require('readline');

function operando2Numeros() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Escribe un signo dependiendo de la operacion que necesitas procesar(+, -, *, /): ", (operacion) => {
    rl.question("Numero a: ", (a) => {
      rl.question("Numero b: ", (b) => {
        a = parseFloat(a);
        b = parseFloat(b);
        let x;
        
        switch (operacion) {
          case '+':
            x = a + b;
            console.log(`a más b = ${x}`);
            break;
          case '-':
            x = a - b;
            console.log(`a menos b = ${x}`);
            break;
          case '*':
            x = a * b;
            console.log(`a por b = ${x}`);
            break;
          case '/':
            x = a / b;
            console.log(`a entre b = ${x}`);
            break;    
          default:
            console.log(`Perdón, no sé qué es ${operacion}.`);
        }
        
        rl.close();
      });
    });
  });
}

operando2Numeros();

// Crea una función que tome un array de 
// números y un número multiplicador. 
// La función debe devolver un nuevo array donde cada elemento del array 
// original esté multiplicado por el número dado.

let a = 6;
arr = [1,2,3];

function arrayMultiplicador(arr, a){
  let i = 0;
  arrMulti = [];

  while (i < arr.length){
    arrMulti.push(arr[i] * a);
    i++;
  }
  return arrMulti;
}

console.log(arrayMultiplicador(arr, a));

//Escribe una función que encuentre el elemento 
//máximo en un array de números.
function largestElement(arr, size){
  let max = arr[0];
  for (i = 1 ; i < size; i++){
    if (max < arr[i]) {
      max = arr[i];
    }
    return max;
  }
}

console.log(largestElement([3, 4, 1, 7, 2], 0));


// Multiplicar
// Función para generar la tabla de multiplicar del 1 al 10 en formato ASCII
function generarTablaMultiplicarASCII() {
  // Encabezado de la tabla
  console.log("+----+----+----+----+----+----+----+----+----+----+----+");
  console.log("| x  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 |");
  console.log("+----+----+----+----+----+----+----+----+----+----+----+");

  // Contenido de la tabla (filas con resultados de la multiplicación)
  for (let i = 1; i <= 10; i++) {
      let row = `| ${i.toString().padStart(2)} |`;

      for (let j = 1; j <= 10; j++) {
          let product = (i * j).toString().padStart(3);
          row += ` ${product} |`;
      }

      console.log(row);
      console.log("+----+----+----+----+----+----+----+----+----+----+----+");
  }
}

// Llamar a la función para generar la tabla de multiplicar en formato ASCII
generarTablaMultiplicarASCII();

/**
 * Crea una función que tome un array de números y un número multiplicador.
 * La función debe devolver un nuevo array donde cada elemento del array original 
 * esté multiplicado por el número dado.
 */

// Usando For
function arrayMult(array, multiplicator) {
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
      resultArray[i] = array[i] * multiplicator;
  }
  return resultArray;
}

function arrayMult1(array, multiplicator) {
  for (let i = 0; i < array.length; i++) {
      array[i] = array[i] * multiplicator;
  }
  return array;
}

// Usando While
function arrayMult3(array, multiplicator) {
  let i = 0, length = array.length;
  while (i < length) {
      array[i] = array[i] * multiplicator;
      i++;
  }
  return array;
}

// Usando While
function arrayMult4(array, multiplicator) {
  let length = array.length;
  while (length > 0) {
      array[length-1] = array[length-1] * multiplicator;
      length--;
  }
  return array;
}

function minNumber(array) {
  let minimus = array[0], length = array.length;
  while(length > 1) {
      if(minimus > array[length-1]) minimus = array[length-1];
      length--;
  }
  return minimus;
}

function minNumber1(array) {
  let minimus = array[0];
  for (let i = 1; i < array.length; i++) {
      if(minimus > array[i]) minimus = array[i];
  }
  return minimus;
}

// Crea una tabla de muliplicacion en base a un numero dado (la tabla lleva valores del 1 al 10)
function multTable(myNumber){
  let row = "";
  for(let i = 1; i <= myNumber; i++) {
      for (let j = 1; j <= 10; j++) {
          row = `${i} x ${j} = ${ i * j}`;
          console.log(row);
      }
      console.log('~~~~~~~~~~~~~~~')
  }
}

//Implementacion
let myArray = [10, 3, 19, 15, 9];
let myMultiplicator = 2;
multTable(5)
// console.log(minNumber(myArray));
// console.log(minNumber1(myArray));
// console.log(arrayMult4(myArray, myMultiplicator));

/*
* Crea una función que tome un array de números y un número límite.
* La función debería devolver un nuevo array que contenga solo los números que son mayores al límite dado.
*/

let arr = [1,2,3,4,5,6,7,8,9,10];
let num = 5;

function arrayMayores(arr, num){
  let arrmax = [], length = arr.length, i = 0;
  //console.log(length);
  //console.log(num);
      while (i < length) {
        if (arr[i] > num) {
          arrmax.push(arr[i]);
        }
        i++;
      }
  return arrmax;
}

console.log(arrayMayores(arr, num));


/*
*
*Escribe una función que reciba un array de números y devuelva la suma de los elementos
*que son pares
*
*/

//Problema que tuve con este ejercicio
//No inicialice i, utilice mal las variables, potencial loop error
/*
function sumaPar(arraycito) {
    console.log(arraycito);
    let x = 0;
    while (i < arraycito.length) {
        if (i % 2 === 0) {
            x += x;
        }
    }
    return x;
}

console.log(sumaPar(arraycito = [10, 5, 6, 7, 9, 20, 4, 17]));
*/ 

function sumaPar(arraycito) {
  let x = 0;
  let i = 0; 
  while (i < arraycito.length) {
      if (arraycito[i] % 2 === 0) { 
          x += arraycito[i];
      }
      i++;
  }
  return x;
}

//console.log(sumaPar([10, 5, 6, 7, 9, 20, 4, 17])); 

/*
*
* 5. Eliminar elementos duplicados:
* Escribe una función que elimine los elementos duplicados de un array.
*
*/

// Mi version MALA
//let arrdp = [2,2,4,4,5,5,6,6];
//let singleNum = [];

function duplicateNum(arrdp){
  let i =0, j = 0;
  while (i in arrdp){
    while (j in arrdp) {
      if (arrdp[i] === arrdp[i] && i != j) {
        if (!singleNum.includes(arrdp[i])) {
          singleNum.push(arrdp[i]);
        }
      }
      j++;
    }
    i++;
  }
  return singleNum;
}

console.log(duplicateNum(arrdp));

//CHAT GPT FUncionando
let arrdp = [2, 2, 4, 4, 5, 5, 6, 6];
let singleNum = [];

function duplicateNum(arrdp) {
    let i = 0;

    // Outer loop to iterate through each element in the array
    while (i < arrdp.length) {
        let j = i + 1; // Start inner loop from next element after arrdp[i]

        // Inner loop to check for duplicates of arrdp[i]
        while (j < arrdp.length) {
            if (arrdp[i] === arrdp[j]) {
                // If duplicate is found, add it to singleNum if not already added
                if (!singleNum.includes(arrdp[i])) {
                    singleNum.push(arrdp[i]);
                }
                break; // Exit inner loop once a duplicate is found
            }
            j++;
        }

        i++; // Move to the next element in the outer loop
    }

    return singleNum;
}

console.log(duplicateNum(arrdp)); // Output: [2, 4, 5, 6]

// Mismo EJERCICIO Metodo MAP
/* 
*
*1. Uso de un Objeto o Mapa para Contar Ocurrencias
*
*Este enfoque utiliza un objeto o un mapa para mantener un registro de cuántas veces aparece cada elemento en el array. 
*Es eficiente porque utiliza una sola pasada a través del array para contar las ocurrencias y otra pasada para identificar los duplicados.
*
*/
function findDuplicates(arr) {
  let countMap = {};
  let duplicates = [];

  // Contar las ocurrencias de cada elemento
  for (let num of arr) {
      if (countMap[num]) {
          countMap[num]++;
      } else {
          countMap[num] = 1;
      }
  }

  // Identificar los elementos duplicados
  for (let num in countMap) {
      if (countMap[num] > 1) {
          duplicates.push(parseInt(num)); // Convertir de string a número si es necesario
      }
  }

  return duplicates;
}

let arrdp = [2, 2, 4, 4, 5, 5, 6, 6];
console.log(findDuplicates(arrdp)); // Output: [2, 4, 5, 6]

/*
*
* Eficiencia: Este método tiene una complejidad de tiempo de O(n), donde n es el número de elementos en el array.
* Esto se debe a que se realiza una única pasada para contar las ocurrencias y otra para identificar los duplicados.
*
*/

//Metodo SET
/*
*
* 2. Uso de un Set para Encontrar Duplicados
*
* Este enfoque utiliza un conjunto (Set) para identificar rápidamente los elementos duplicados mientras se itera sobre el array. 
* Los conjuntos en JavaScript garantizan que no haya elementos duplicados, por lo que son útiles para encontrar duplicados de manera eficiente.
*
*/
function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();

  for (let num of arr) {
      if (seen.has(num)) {
          duplicates.add(num);
      } else {
          seen.add(num);
      }
  }

  return Array.from(duplicates); // Convertir el conjunto de duplicados a un array
}

let arrdp = [2, 2, 4, 4, 5, 5, 6, 6];
console.log(findDuplicates(arrdp)); // Output: [2, 4, 5, 6]

/*
	Eficiencia: Este método también tiene una complejidad de tiempo de O(n), donde n es el número de elementos en el array. 
  Utiliza un conjunto (Set) para almacenar los elementos vistos y otro conjunto para almacenar los duplicados encontrados, 
  garantizando operaciones de inserción y búsqueda eficientes.
*/