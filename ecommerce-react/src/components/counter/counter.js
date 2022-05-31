import { useState } from 'react'
import Button from '../Button/Button'

const Counter = ({numInicial}) => {
    let [count, setCount] = useState(numInicial)

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
          
            <Button operacion={decrementar} btnClass="btn" label="-"><h1>-</h1></Button>
            <p>{count}</p>
            <Button  operacion={incrementar} btnClass="btn" label="+"><h1>+</h1></Button>
        </div>
    )

}
export default Counter