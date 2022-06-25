import "./ItemDetail.css"
import Counter from "../Counter/Counter"
import { useContext, useState } from "react"
import CartContext from "../CartContext/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({cart, description, img, id, name, price,stock  }) => {
    const [quantAdded, setquantAdded] = useState(0)
    const { addProdToCart } = useContext(CartContext)

    const handleOnAdd = (quant) => {
        addProdToCart({ id, name, price, quant})
        setquantAdded(quant)
    }

    return (
        <div className="div__IDC" >
            <div className="IDC__info" >
                <h2 className="li__titulo">{name}</h2>
                <p className="li__description"> {description}</p>
                <p className="li__description">$ {price}</p>

                {quantAdded === 0
                    ? <Counter  name={name} stock={stock} id={id} price={price} onAdd={handleOnAdd} />
                    : <Link to="/cart"> Terminar compra </Link>
                }
            </div>
            <img src={img} alt={name} />
        </div>
    )
}
export default ItemDetail