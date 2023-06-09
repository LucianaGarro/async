// const dividir = (dividendo, divisor) =>{
//     return new Promise ((resolve,reject) =>{

//     if (divisor === 0){
//         reject ("No se puede hacer divisiones entre cero");
//     } else{
//         resolve(dividendo/divisor)
//     }
// });
// };
// const funcionAsincrona = async () => {
//     try{
//         const resultado = await dividir (10,5)
//         console.log(resultado);
//     }
//     catch (error){
//         console.log(error);
//     }
// }

// funcionAsincrona();

//hand of labs

const suma = (numero1, numero2) =>{
    return new Promise ((resolve, reject) =>{
        if (numero1 === 0 || numero2 ===0) reject ("Operación innecesaria");
        if(numero1 + numero2 <0 ) reject ("la calculadora solo debe devolver valores positivos")
        resolve (numero1 + numero2);
    });
}

const resta = (numero1, numero2) =>{
    return new Promise ((resolve, reject) =>{
        if (numero1 === 0 || numero2 ===0) reject ("Operación innecesaria");
        if(numero1 - numero2 <0 ) reject ("la calculadora solo debe devolver valores positivos")
        resolve (numero1 - numero2);
    });
}

const multiplicacion = (numero1, numero2) =>{
    return new Promise ((resolve, reject) =>{
        if (numero1 < 0 || numero2 <0) reject ("Operación innecesaria");
    
        resolve (numero1 * numero2);
    });
}

const division = (numero1, numero2) => {
	return new Promise((resolve, reject) => {
    	if (numero2 === 0) {
        	reject('No se puede hacer divisiones entre cero');
    	} else {
        	resolve(numero1/numero2);
    	}
	});
};

const calculos = async () => {
    try{
        const numero1 = -10;
        const numero2 = 2;
        console.log(await suma (numero1, numero2));
        console.log(await resta (numero1, numero2));
        console.log(await multiplicacion (numero1, numero2));
        console.log(await division (numero1, numero2));

    }
    catch (error){
        console.log(error);
    }
};

calculos();