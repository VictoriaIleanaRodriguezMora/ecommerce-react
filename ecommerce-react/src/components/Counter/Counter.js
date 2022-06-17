import { useState } from "react"
import CartWidget from "../CartWidget/CartWidget";
import "./Counter.css"

const Counter = ({ name, cart, setCart, id, price }) => {

    const [quant, setQuant] = useState(0)

    const increment = () => {
        setQuant(quant + 1)
    }
    const decrement = () => {
        setQuant(quant - 1)
    }
    const onAddCart = () => {
        setCart([...cart, { name, id, price, quant }])
        console.log(`Se agregaron ${quant} ${name}`);
    }


    return (
        <div className="counter" >
            <div className="divButton">
                <button onClick={decrement} className="divButton__btn" >-</button>
                <p className="divButton__quant" >{quant}</p>
                <button onClick={increment} className="divButton__btn" >+</button>


            </div>
            <div className="agregar__carrito">
                <button onClick={onAddCart} >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter