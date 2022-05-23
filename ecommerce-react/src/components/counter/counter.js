import { useState } from 'react'
import Button from '../button/button'

const Counter = (props) => {
    const incrementar = (num) => {
        console.log("SUMA");
    }
    const decrementar = () => {
        console.log("RESTA");

    }
    return (
        <div className="divButton">
            {/* <button className="btn">-</button> */}
            <Button operacion={decrementar(props.numInicial)} btnClass="btn" label="-"></Button>
            <p>{props.numInicial}</p>
            <Button operacion={incrementar(props.numInicial)} btnClass="btn" label="+"></Button>
        </div>
    )

}
export default Counter