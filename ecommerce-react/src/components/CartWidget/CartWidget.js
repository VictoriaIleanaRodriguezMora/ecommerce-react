import { useContext } from "react"
import CartContext from "../CartContext/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {

    const { getQuantity, totalQuantity } = useContext(CartContext)

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