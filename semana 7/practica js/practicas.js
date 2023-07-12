let numer1 = 34
let text1 = "arrived of terra"
let novia = false
console.log(numer1)
console.log(text1)
console.log(novia)

console.log(typeof numer1)
console.log(typeof text1)
console.log(typeof novia)

let mivariable = 12
let miVariable = 23
let result = mivariable + miVariable
console.log(result)
console.log(mivariable, miVariable)

// ejercicio simple usando if & else if para calcular si alguien puede sacar licencia con dos condiciones

const edad = 18
const tieneCarnet = false

if ( edad >= 18) {
  if (tieneCarnet) {
    console.log('puede conducir')
  } else {
    console.log('no puede conducir')
  }
} else {
  console.log('no puede conducir')
}

// practica

// ejercicio para calcular si se aprueba un curso incluyendo lab

const promedio = 15
const laboratorio = true

if (promedio >= 11) {
  if (laboratorio) {
    console.log('aprobo el curso')
  } else {
    console.log('no aprobo el laboratorio y pasa a sustitutorio')
  }
} else if (promedio >= 8 && promedio < 11) {
  console.log('pasa a sustitutorio')
} else {
  console.log('desaprueba el curso')
}

// Ejercicio para hallar si me puedo graduar de la carrera

const creditos = 120
const ingles = true
const tesina = true
const adicionales = ingles && tesina

if (creditos === 120) {
  if (adicionales) {
    console.log('se gradua')
  } else if (ingles || tesina)  {
    console.log('falta un adicional')
  } else {
    console.log('faltan los adicionales') 
  }
} else {
  console.log('le faltan creditos')
}


// -------------- BUCLE WHILE --------------------------- 

// let cuentaAtras = 10 

// while (cuentaAtras > 0) {
//   cuentaAtras = cuentaAtras - 1
//   console.log(cuentaAtras + ' segundos')
  
//   if (cuentaAtras === 0) {
//     break
//   }
// }
// console.log('despege')

let cuentaAtras = 10 

while (cuentaAtras > 0) {
  cuentaAtras = cuentaAtras - 1
  if (cuentaAtras % 2 === 0) {
    continue // saltar a la siguiente iteracion
  }

  console.log(cuentaAtras + ' segundos')
}
  
console.log('despege')

// ------------------------------------

const NUMERO_REVISIONES = 3
let cuentaAtras2 = 10

while (cuentaAtras2 > 0) {
    console.log(cuentaAtras2)

    let revisionesRealizadas = 0

    while (revisionesRealizadas < NUMERO_REVISIONES) {

        revisionesRealizadas = revisionesRealizadas + 1
        console.log(revisionesRealizadas + 'revisiones realizadas ...')
    }

    cuentaAtras2 = cuentaAtras2  - 1
}

// -------------------------------------

let drinkCoffe = 0

while (drinkCoffe < 10) {
    drinkCoffe = drinkCoffe + 1

    if (drinkCoffe === 8) {
        break
    }
    
    if (drinkCoffe === 5) {
        continue
    }

    console.log(drinkCoffe + 'cafe')
}