import { useContext, useState } from "react"
import CartContext from "../CartContext/CartContext";
import "./CartItem.css"
import { Link } from "react-router-dom";

const CartItem = () => {

    const { cart, getTotalPrice } = useContext(CartContext)
    const cartPosCero = cart[0]
    return (
        <>
            <div className="CartItem__div">
                <ul className="CartItem__ul">
                    <li>{cartPosCero.name}</li>
                    <li>{cartPosCero.quant}</li>
                    <li>{cartPosCero.price}</li>
                    <li>{getTotalPrice()}</li>
                </ul>
            </div>
        </>
    )

}
export default CartItem