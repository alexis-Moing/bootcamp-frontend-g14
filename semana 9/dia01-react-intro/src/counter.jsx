import {useState} from 'react' 

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