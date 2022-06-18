import "./ItemDetail.css"
import Counter from "../Counter/Counter"
import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"


const ItemDetail = ({ name, img, price, description, cart,  id }) => {


    return (
        <div className="div__IDC" >
            <div className="IDC__info" >
                <h2 className="li__titulo">{name}</h2>
                <p className="li__description"> {description}</p>
                <p className="li__description">$ {price}</p>
                <Counter name={name} id={id} price={price} />
            </div>
            <img src={img} alt={name} />
        </div>
    )
}
export default ItemDetail