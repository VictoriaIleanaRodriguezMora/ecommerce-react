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
    console.log(cartPosCero.id);
    return (
            <div className="CartItem__div">
                <div  >
                    <table className="table">
                        <thead>
                            <tr className="CartItem__categorias">
                                <th scope="col">#</th>
                                <th scope="col">Productos</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Total</th>
                                <th scope="col">Remover</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="CartItem__categorias">
                                <th scope="row"  >1</th>
                                <td>{cartPosCero.name}</td>
                                <td>{cartPosCero.quant}</td>
                                <td>{cartPosCero.price}</td>
                                <td>{getTotalPrice()}</td>
                                <td onClick={() => removeProdFromCart(cartPosCero.id)} >Remover item</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                {/* <ul className="CartItem__ul">
                    <li>{cartPosCero.name}</li>
                    <li>{cartPosCero.quant}</li>
                    <li>{cartPosCero.price}</li>
                    <li>{getTotalPrice()}</li>
                    <button onClick={() => removeProdFromCart(cartPosCero.id)} >Remover item</button>
                </ul> */}
            </div>
    )

}
export default CartItem