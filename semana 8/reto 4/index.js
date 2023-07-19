let preguntas = [
    {
        pregunta: "¿Cual es un lenguaje de programación?",
        opciones: ["CSS", "JavaScript", "Git"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cual es el comportamiento por defecto de Grid",
        opciones: ["tablas", "columnas", "filas"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Forma correcta de declarar variables en Javascript",
        opciones: ["let", "function", "innerHTML"],
        respuestaCorrecta: 0
    }
];

let respuestas = [];
let index = 0;

let preguntaDiv = document.getElementById("pregunta");
let opcionesDiv = document.getElementById("opciones");

function mostrarPregunta() {
    let preguntaActual = preguntas[index];
    preguntaDiv.textContent = preguntaActual.pregunta;

    opcionesDiv.innerHTML = "";
    console.log(opcionesDiv);
    for (let i = 0; i < preguntaActual.opciones.length; i++) {
        let radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.name = "opcion";
        radioBtn.value = i;
        opcionesDiv.appendChild(radioBtn);

        let opcionLabel = document.createElement("label");
        opcionLabel.textContent = preguntaActual.opciones[i];
        opcionesDiv.appendChild(opcionLabel);

        opcionesDiv.appendChild(document.createElement("br"));
    }
}

function siguientePregunta() {
    let seleccion = document.querySelector('input[name="opcion"]:checked');
    if (seleccion) {
        respuestas.push(parseInt(seleccion.value));
        seleccion.checked = false;
        index++;
        if (index < preguntas.length) {
            mostrarPregunta();
        } else {
            preguntaDiv.textContent = "Cuestionario completado.";
            opcionesDiv.style.display = "none";
            
        }
    } else {
        alert("Por favor, selecciona una opción.");
    }
}

function calcularPuntaje() {
    let puntaje = 0;
    for (var i = 0; i < preguntas.length; i++) {
        if (respuestas[i] === preguntas[i].respuestaCorrecta) {
            puntaje++;
        }
    }
    alert("Puntaje obtenido: " + puntaje + " de " + preguntas.length);
}

mostrarPregunta();