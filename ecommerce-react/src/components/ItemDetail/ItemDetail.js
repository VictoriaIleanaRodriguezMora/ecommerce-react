import "./ItemDetail.css"
import Counter from "../Counter/Counter"
import { useContext, useState } from "react"
import CartContext from "../CartContext/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({ name, img, price, description, cart, id }) => {

    const { quantAdded } = useContext(CartContext)

    return (
        <div className="div__IDC" >
            <div className="IDC__info" >
                <h2 className="li__titulo">{name}</h2>
                <p className="li__description"> {description}</p>
                <p className="li__description">$ {price}</p>

                {quantAdded === 0
                    ? <Counter name={name} id={id} price={price} />
                    : <Link to="/cart" > Terminar compra </Link>
}
            </div>
            <img src={img} alt={name} />
        </div>
    )    
}
export default ItemDetail