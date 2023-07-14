// EJERCICIO BASICO DE TOODO o listado de tareas con opcion de tachar y borrar las tareas que agregemos

const taskInput = document.querySelector('.task__input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

taskAdd.addEventListener('click', function(event) {
  // Se ejecutará cuando hagamos click en el botón "Añadir tarea"

 // IF creado para verificar si se a rellenado el campo taskTnput de lo contrario no permitira continuae con el programa
  if (taskInput.value === '') {
    alert('El campo es requerido')
    return // <return> se agrega para evitar que el programa sigua corriendo aun despues del alert y regresar todo desde el principio
  }
  
  const li = document.createElement('li') // basicamnete todo el elemento li que agrupara todo lo de abajo 

  // forma de crear elementos dinamicos desde js (en este caso se crearan cuando escuchemos el evento click en boton de variable taskAdd)
  // createElement => crea elementos de html
  // añadir atributos o caracteres
  // appendChild => añade el elemento hijo donde se le ubique como en este caso en el elemento li
  let checkbox = document.createElement('input') 
  checkbox.setAttribute('type', 'checkbox')
  li.appendChild(checkbox) 

  let span = document.createElement('span')
  span.innerText  = taskInput.value
  li.appendChild(span)

  // TODO: añadir un botón al li con el texto 'Borrar'
  let button = document.createElement('button')
  button.innerText = 'Borrar'
  li.appendChild(button)

  taskList.appendChild(li)

  // para que limpie el taskInput despues de escribir cada tarea
  taskInput.value = ''
})

taskList.addEventListener('click', function(event) {
  // console.log(event)
  const target = event.target

  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
    target.classList.toggle('checked')

    target.classList.add('container')
  }


  // <parentElement> nos da acceso al elemento padre al que pertenesca en este caso el button o la tarea en esta ocasion el elemento padre seria todo el 'li'
  if (target.tagName === 'BUTTON') {
    target.parentElement.remove()
  }
})