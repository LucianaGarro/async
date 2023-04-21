//Ejemplo con map.



// const nuevosValores = valoresOriginales.map( element => element + 1);

// console.log(nuevosValores);

// const funcionCallback = (valor) =>{
//     if (valor %2 === 0){
//         return valor;
//     } else{
//         return "no es par";
//     }
// }
// const nuevosValores = valoresOriginales.map(funcionCallback);
// console.log (nuevosValores);

//map:
// const valoresOriginales = [1,2,3,4,5];
// const miFuncionMap = (arreglo, callback) =>{
//     const nuevoArreglo = [];

//     for (let i = 0; i <arreglo.length; i++){
//         const nuevoValor = callback(arreglo[i]);
//         nuevoArreglo.push(nuevoValor);
//     }
//     return nuevoArreglo;
// };

// const resultado = miFuncionMap(valoresOriginales, x=> x*2);
// console.log(resultado);

// const sumar = (numero1, numero2) => numero1 + numero2;
// const restar = (numero1, numero2) => numero1 - numero2;
// const multiplicar = (numero1, numero2) => numero1 * numero2;
// const dividir = (numero1, numero2) => numero1 / numero2;

// const realizarOperacion = (numero1, numero2, callback)=>{
//     const resultado = callback (numero1, numero2);
//     console.log(resultado);
// }

// realizarOperacion (2,5, sumar);
// realizarOperacion (2,5, restar);
// realizarOperacion (2,5, multiplicar);
// realizarOperacion (2,5, dividir);


