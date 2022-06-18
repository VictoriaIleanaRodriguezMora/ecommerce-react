import { useContext } from "react"
import CartContext from "../CartContext/CartContext"
const CartWidget = () => {

const { getQuantity } = useContext(CartContext)
const totalQuantity = getQuantity()

    return (
        <>
            <p className="nav__carrito"><span>{totalQuantity}</span>🛒</p>
        </>
    )
}

export default CartWidget