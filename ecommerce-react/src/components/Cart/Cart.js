import CartItem from "../CartItem/CartItem"
import CartContext from "../CartContext/CartContext"
import { useContext } from "react"
import { CartItemMsg } from "../CartItem/CartItem";
const Cart = () => {

    const { cart, quantAdded } = useContext(CartContext)

    return (
        <>
            {quantAdded === 0
                ? <CartItemMsg />
                : cart.map(cart =>
                    <CartItem key={cart.id}{...cart} />)
            }
        </>
    )

}
export default Cart