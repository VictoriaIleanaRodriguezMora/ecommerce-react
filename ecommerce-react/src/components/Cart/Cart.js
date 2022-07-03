import CartContext from "../CartContext/CartContext"
import { useContext } from "react"
import { CartItemMsg } from "../CartItem/CartItem";
import "./Cart.css"
import CartList from "../CartList/CartList";

const Cart = () => {

    const { quantAdded } = useContext(CartContext)

    return (
        <>
            {quantAdded === 0
                ? <CartItemMsg />
                :
                <CartList/>
            }

        </>
    )

}
export default Cart