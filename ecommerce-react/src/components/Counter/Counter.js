import "./Counter.css"
import { useContext, useState } from "react"
// import CartContext from "../CartContext/CartContext";

const Counter = ({stock = 0, initial = 1, onAdd}) => {

    const [quant, setQuant] = useState(initial)

    const increment = () => {
        if(quant < stock) {
            setQuant(quant+1)
        }
    }
 
    const decrement = () => {
        if(quant > 1) {
            setQuant(quant - 1)
        }     
    }


    return (
        <div className="counter" >
            <div className="divButton">
                <button onClick={decrement} className="divButton__btn" >-</button>
                <p className="divButton__quant" >{quant}</p>
                <button onClick={increment} className="divButton__btn" >+</button>
            </div>
            <div className="agregar__carrito">
                <button onClick={() => onAdd(quant)} >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Counter