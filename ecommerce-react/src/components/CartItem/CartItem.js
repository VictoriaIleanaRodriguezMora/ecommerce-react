import { useContext, useState } from "react"
import CartContext from "../CartContext/CartContext";

const CartItem = ({ price, name, quant }) => {

    const { cart } = useContext(CartContext)
    console.log(cart);
    console.log(cart[0].name);

    return (
        <>
            <p>{cart[0].name}</p>
            <p>{quant}</p>

        </>
    )

}
export default CartItem