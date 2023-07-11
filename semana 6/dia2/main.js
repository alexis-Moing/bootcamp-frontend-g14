// let nombre = "alex";
// let edad = 20;

// console.log("mi nombre es", nombre);

// let dobleedad = edad * 2;
// let tripleedad = edad * 3;

// console.log("mi edad es", edad , "su doble es", dobleedad)
// console.log("el triple de mi edad es", tripleedad)




// *TUTORIA* 10-07

// ===> OBJETOS <===

const producto = {
    // clave: valor
    nombre: 'tablet',
    precio: 300,
    disponible: true
}

// para acceder a los valores
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);
console.log(producto)

// para modificar un valor

producto.nombre = "monitor"
console.log(producto.nombre);
producto.precio = 5000

console.log(producto.precio);

console.log(producto)

// si buscara un valor que no existe

console.log(producto.imagen);  //saldria undefile (indefino)

// para que exista tendria que agregarlo al objeto

producto.imagen = "imagen.jpg"
console.log(producto.imagen);
console.log(producto);

// Para eliminar una propiedad de un objeto
// usamos 'delete'

delete producto.disponible
console.table(producto)

// Object.keys() ==> nos devuelve un array con las propiedades del objeto

const todasLasPropiedades = Object.keys(producto)
console.log(todasLasPropiedades)


// ===> DESTRUCTURING <===

let persona = {
    nombre: 'alex',
    pais: 'peru',
    trabajo: 'developer',
}

let nombre1 = persona.nombre
let pais1 = persona.pais
let trabajo1 = persona.trabajo

console.log(nombre1);
console.log(pais1);
console.log(trabajo1);

// forma corta

let {nombre, pais} = persona
console.log(nombre);
console.log(pais);

// Asignando el resto de un objeto
// 'OPERADOR REST' ...

let persona2 = {
    nombre: 'manuel',
    pais: 'peru',
    trabajo: 'developer',
    amigos: ['esthuardo', 'tobias', 'rolando']
}

let {nombre: tuNombre, amigos, ...otrosCampos} = persona2

console.log('ejercicio3 -----------');
console.log(nombre);
console.log(amigos);
console.log(otrosCampos);


// ===> ARRAYS <===

const tecnologias = [20, 30, true, 'React', 'Javascript']

console.log(tecnologias[0]);
console.log(tecnologias[3]);

// Metodos de array 
// AÑADIR ELEMENTOS A ARRAY
// push() = agrega elementos al final del array
// unshift() = agraga elementos al inicio del array

tecnologias.push('HTML')
console.log(tecnologias);

tecnologias.unshift('css')
console.log(tecnologias);

// spread operator ...
// nos permite transformar un array en elementos simples

const nuevoArreglo = ['Typescript',...tecnologias, 'NodeJs']
console.log(nuevoArreglo);

// Eliminar elementos de un array
// pop() => ultimo elemento del array
// shift() => primer elemento del array
// splice() => una posicion en especifico

tecnologias.pop()
console.log(tecnologias)

tecnologias.shift()
console.log(tecnologias)

tecnologias.splice()

// primer parametro => a partir de que elemento eliminar
// segundo parametro => cuantos se van a eliminar

tecnologias.splice(2, 1)
console.log(tecnologias);

// filter() ==>  

// reemplazar elementos de un array

// console.log(tecnologias[0] = 'HTML')
// console.log(tecnologias)

// Con map()

const nuevoArrayy = tecnologias.map(function(tech){
    if(tech === 'Javascript') {
        return 'HTML'
    } else {
        return tech
    }
})

console.log(nuevoArrayy);
console.log(tecnologias);

// includes() para comprobar si un elemento existe en un array

const resultado = tecnologias.includes('HTML')
console.log(resultado);

