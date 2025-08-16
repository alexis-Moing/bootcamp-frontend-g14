let numeroActual = '0'
let operador = ''
let operando = ''


const inputDisplay = document.querySelector('.display')

// console.log(inputDisplay)

const buttons = document.querySelectorAll('button')
// console.log(buttons)

buttons.forEach(function(button) {
    // console.log(button)

    button.addEventListener('click', function(event) {
        console.log(event)

        const buttonText = event.target.textContent

        console.log(buttonText)

        if ('+-*' .includes(buttonText)) {
            //asigno operacion
            operador = buttonText
            operando = Number(numeroActual)
            numeroActual = '0'
        } else if (buttonText === '=') {

            if (operador === '+') {
                numeroActual = Number(operando) + Number(numeroActual)
            } else if (operador === '-') {
                numeroActual = Number(operando) - Number(numeroActual)
            } else if (operador === '*') {
                numeroActual = Number(operando) * Number(numeroActual)
            }
        } else {
            // numeroActual = numeroActual + Number(buttonText)
            if (numeroActual === '0') {
                numeroActual = buttonText;
              } else {
                numeroActual += buttonText;
              }

        }
        inputDisplay.value = numeroActual
    })
})