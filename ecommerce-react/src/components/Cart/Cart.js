import CartItem from "../CartItem/CartItem"
import CartContext from "../CartContext/CartContext"
import { useContext } from "react"
import { CartItemMsg } from "../CartItem/CartItem";
const Cart = () => {

    const { quantAdded } = useContext(CartContext)

    return (
        <>
            {quantAdded === 0
                ? <CartItemMsg />
                : <CartItem />
            }
        </>
    )

}
export default Cart