import { useContext, useState } from "react"
import CartContext from "../CartContext/CartContext";
import "./CartItem.css"
import { Link } from "react-router-dom";

const CartItem = () => {

    const { cart, getTotalPrice } = useContext(CartContext)
    console.log(cart);
    // console.log(cart[0].name);
    const cartPosCero = cart[0]

    // export const CartItemMsg = () => {
    //     return (
    //         <div>
    //             <p>No hay productos agregados aun. </p>
    //             <Link to="/" >Podes ir acá para empezar tu compra</Link>
    //         </div>
    //     )
    // }

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