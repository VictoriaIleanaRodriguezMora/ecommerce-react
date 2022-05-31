import { useState, useEffect } from 'react'
import Button from '../Button/Button'
const Counter = ({ numInicial }) => {
    // como los hooks siempre se tienen que implementar, aca uso useState
    const [count, setCount] = useState(numInicial)
    const [result, setResult] = useState(0)

    // useEffect
    useEffect(() => { 
        console.log("El componente fue montado")
    }, [])

    useEffect(() => { 
        console.log("despues del montaje y cuando se actualiza count")
    }, [count])

    useEffect(() => { 
        setResult(count * 2)
    }, [count])

    const incrementar = () => {
        setCount(count + 1)
    }
    const decrementar = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(numInicial)
    }

    console.log("antes del montaje y en cada actualizacion");
    return (
        <div className="divButton">
            {/* El prototipo de este, es OBJETO */}
            <Button accion={decrementar} btnClass="btn" label="-"><h1>-</h1></Button>
            <p>{count}</p>
            <p>{result}</p>

            <Button accion={reset} btnClass="btn" label="RESET"><h1>RESET</h1></Button>

            {/* El prototipo de este, es ARRAY */}
            <Button accion={incrementar} btnClass="btn" label="+"><h1>+</h1><h1>+</h1></Button>
        </div>
    )

}
export default Counter