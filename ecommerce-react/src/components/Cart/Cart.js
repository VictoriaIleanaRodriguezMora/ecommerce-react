import CartItem from "../CartItem/CartItem"
import CartContext from "../CartContext/CartContext"
import { useContext } from "react"
import { CartItemMsg } from "../CartItem/CartItem";
import "./Cart.css"
import { Link } from "react-router-dom"


const Cart = () => {

    const { cart, quantAdded } = useContext(CartContext)

    return (
        <>
            {quantAdded === 0
                ? <CartItemMsg />
                :
                cart.map(cart =>
                    <CartItem key={cart.id}{...cart} />)
                }
                <Link to="/form" >Generar orden</Link>

        </>
    )

}
export default Cart