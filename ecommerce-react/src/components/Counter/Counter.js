import { useState } from "react"
import CartWidget from "../CartWidget/CartWidget";
import "./Counter.css"
import { useContext } from "react"
// import { CartContext } from "../CartContext/CartContext"
import CartContext from "../CartContext/CartContext";

const Counter = ({ name, id, price }) => {
    const { addItemToCart } = useContext(CartContext)

    const [quant, setQuant] = useState(0)

    const increment = () => {
        setQuant(quant + 1)
    }
    const decrement = () => {
        setQuant(quant - 1)
    }
    const addItem = () => {
        console.log(`Se agregaron ${quant} ${name}`);
        addItemToCart( { name, id, price, quant })
    }


    return (
        <div className="counter" >
            <div className="divButton">
                <button onClick={decrement} className="divButton__btn" >-</button>
                <p className="divButton__quant" >{quant}</p>
                <button onClick={increment} className="divButton__btn" >+</button>
            </div>
            <div className="agregar__carrito">
                {/* <button >Agregar al carrito</button> */}
                <button onClick={addItem} >Agregar al carrito</button>

            </div>
        </div>
    )
}

export default Counter