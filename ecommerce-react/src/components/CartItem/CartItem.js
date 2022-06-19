import { useContext } from "react"
import CartContext from "../CartContext/CartContext";
import "./CartItem.css"
import { Link } from "react-router-dom";

export const CartItemMsg = () => {
    return (
        <div>
            <p>No hay productos agregados aun. </p>
            <Link to="/" >Podes ir acá para empezar tu compra.</Link>
        </div>
    )
}

const CartItem = () => {

    const { cart, getTotalPrice, removeProdFromCart } = useContext(CartContext)
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
                <button onClick={ () => removeProdFromCart(cartPosCero.id) } >Remover item</button>
            </div>
        </>
    )

}
export default CartItem