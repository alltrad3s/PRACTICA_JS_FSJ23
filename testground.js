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