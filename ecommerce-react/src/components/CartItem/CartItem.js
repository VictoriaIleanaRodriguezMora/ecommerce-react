import { useContext } from "react"
import CartContext from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import "./CartItem.css"

export const CartItemMsg = () => {
    return (
        <div>
            <p>No hay productos agregados aun. </p>
            <Link to="/" >Podes ir acá para empezar tu compra.</Link>
        </div>
    )
}

const CartItem = ({ id, name, quant, price,img }) => {

    const { removeProdFromCart, clearCart } = useContext(CartContext)

    const handleRemove = (id) => {
        removeProdFromCart(id)
    }

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
                                <td>{name}</td>
                                <td>{quant}</td>
                                <td>{price}</td>
                                <td>{quant * price}</td>
                                <td onClick={() => handleRemove(id)} >Remover item</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
    )

}
export default CartItem