// console.log('hola js')

const inputPeso = document.getElementById('peso')
const inputAltura = document.getElementById('altura')
const botonCalcular = document.getElementById('calcular')
const divResultado = document.getElementById('resultado')

// inputPeso.addEventListener('input', function(event) {
//     // console.log('escribiendo en la caja de peso')
//     // console.log(event)
//     console.log(event.target.value)
//     const peso = event.target.value
// })


botonCalcular.addEventListener('click', function(event) {
    // console.log(event)
    // console.log('click')
    const peso = inputPeso.value
    const altura = inputAltura.value

    console.log(peso, altura)

    const indiceDeMasaCorporal = peso / ((altura / 100) ** 2)
    console.log(indiceDeMasaCorporal)

    let resultado = ''

    if (indiceDeMasaCorporal < 18.5) {
        resultado = 'bajo'
    } else if (indiceDeMasaCorporal >= 18.5 && indiceDeMasaCorporal <= 24.9) {
        resultado = 'normal'
    } else if (indiceDeMasaCorporal >= 25 && indiceDeMasaCorporal <= 29.9) {
        resultado = 'sobrepeso'
    } else if (indiceDeMasaCorporal > 30) {
        resultado = 'obeso'
    } else {
        resultado = 'datos incorrectos'
    }

    console.log(resultado)

    divResultado.innerText = 'tu indice de masa corporal es ' + resultado
})