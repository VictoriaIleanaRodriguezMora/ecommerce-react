import { useState } from 'react'
import Button from '../Button/Button'

const Counter = ({ numInicial }) => {
    let [count, setCount] = useState(numInicial)

    const incrementar = () => {
        setCount(count + 1)
        // console.log(count);

    }
    const decrementar = () => {
        // console.log(count);
        setCount(count - 1)
    }
    const reset = () => {
        // console.log(count);
        setCount(numInicial)
    }

    console.log("antes del montaje y en cada render");
    return (
        <div className="divButton">
            {/* El prototipo de este, es OBJETO */}
            <Button accion={decrementar} btnClass="btn" label="-"><h1>-</h1></Button>
            <p>{count}</p>
            <Button accion={reset} btnClass="btn" label="RESET"><h1>RESET</h1></Button>

            {/* El prototipo de este, es ARRAY */}
            <Button accion={incrementar} btnClass="btn" label="+"><h1>+</h1><h1>+</h1></Button>
        </div>
    )

}
export default Counter