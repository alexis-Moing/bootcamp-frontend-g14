import {useState} from 'react' 

// Ejercicio1: usando useState;
// para usar usestate creamos 2 parametros: contador, que  funciona como variable y setContador
// que hace de funcion; creamos el evento onClick para pedir que en cada click al boton de un lado 
// aumente 1 valor al contador y en otro reste uno (se coloca en llaves ya que es una expresion)
// se asigna iniciador como una prop para la funcion que mostrara un numero predeterminado de inicio en el contador
// asginamos algunos estilos con style (tambien se escribien entre llaves)

const Counter = ({ iniciador = 1}) => {
    let [contador, setContador] = useState(iniciador)
  
    return (
        <div style={{display: 'flex', gap: '5px', marginBottom: '5px'}}>
            <button onClick={() => setContador(contador+1)}> + </button>
            <div>{contador}</div>
            <button onClick={() => setContador(contador - 1)}>-</button>
            
        </div>
  
    )
  }

  export default Counter