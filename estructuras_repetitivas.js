/**
 * Repetir un bloque
 * for
 * while
 * do while
 * foreach
 */

//coleccion datos (arreglo de objetos)
let arreglo_empleados = [
    {
        nombre: "Judith",
        categoria: "A",
        sueldo: 750
    },
    {
        nombre: "Xander",
        categoria: "C",
        sueldo: 605
    },
    {
        nombre: "Jorge",
        categoria: "B",
        sueldo: 810
    }
]

//CICLO => (for, while, do while) => contador, condicion (para finalizar el contador), incremento / decremento del contador
/**
 * contador = contador + 1 (contador++)
 */
for(let contador = 1; contador <= 10; contador++){
    console.log(contador);
}

//utilizando for para iterar el arreglo
/**
 * length => devuelve el tamaño de un arreglo o cadena
 * para acceder a una posicion del arreglo se utiliza [numero posicion] = [0]
 * para acceder a una propiedad del objeto se utiliza el punto (.)
 */
let aumento_salario = 0;
for(let posicion = 0; posicion < arreglo_empleados.length; posicion++){
    //accediendo al sueldo de los empleados del arreglo
    let salario = arreglo_empleados[posicion].sueldo 
    
    //switch - if else if else
    switch(arreglo_empleados[posicion].categoria){
        case "A":
            aumento_salario = salario + (salario * 0.15)
        break;
        case "B":
            aumento_salario = salario + (salario * 0.30)
        break;
        case "C":
            aumento_salario = salario + (salario * 0.10)
        break;
        case "D":
            aumento_salario = salario + (salario * 0.20)
        break;
        default:
            aumento_salario = 0
    }

    //accediendo al nombre de los empleados del arreglo
    console.log(arreglo_empleados[posicion].nombre);
    console.log("Sueldo anterior: " + salario);
    console.log("Sueldo con aumento: " + aumento_salario);
}