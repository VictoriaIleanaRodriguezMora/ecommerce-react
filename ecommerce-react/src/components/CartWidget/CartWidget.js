import { useContext } from "react"
import CartContext from "../CartContext/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)
    const totalQuantity = getQuantity()

    return (
        <>
            <Link to="/cart" >
                <p className="nav__carrito">
                    <span>{totalQuantity}
                    </span>🛒
                </p>
            </Link>
        </>
    )
}

export default CartWidget