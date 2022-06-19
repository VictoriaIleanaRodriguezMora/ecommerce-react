import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem"
import CartContext from "../CartContext/CartContext"
import { useContext, useState } from "react"

const Cart = () => {

    const { quantAdded } = useContext(CartContext)


    const CartItemMsg = () => {
        return (
            <div>
                <p>No hay productos agregados aun. </p>
                <Link to="/" >Podes ir acá para empezar tu compra</Link>
            </div>
        )
    }

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