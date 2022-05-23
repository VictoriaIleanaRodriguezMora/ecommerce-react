import { useState } from 'react'
import Button from '../button/button'

const Counter = (props) => {
    let [count, setCount] = useState(props.numInicial)

    const incrementar = () => {
        setCount(count + 1)
        console.log(count);

    }
    const decrementar = () => {
        console.log(count);
        setCount(count - 1)
    }
    return (
        <div className="divButton">
            {/* <button  onClick={decrementar} className="btn">-</button> */}
            
            <Button operacion={decrementar} btnClass="btn" label="-"></Button>
            <p>{count}</p>
            <Button  operacion={incrementar} btnClass="btn" label="+"></Button>
        </div>
    )

}
export default Counter