import { Link } from "react-router-dom";

import CartItem from "../CartItem/CartItem"
// import { CartItemMsg } from "../CartItem/CartItem"
const Cart = () => {

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
            {<CartItem /> === true
                ? <CartItem />
                : <CartItemMsg />}
        </>
    )

}
export default Cart