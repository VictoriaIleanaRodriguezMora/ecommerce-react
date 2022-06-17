import "./ItemDetail.css"
import Counter from "../Counter/Counter"

const ItemDetail = ({ name, img, price, description, cart, setCart, id }) => {
    return (
        <div className="div__IDC" >
            <div className="IDC__info" > 
                <h2 className="li__titulo">{name}</h2>
                <p className="li__description"> {description}</p>
                <p className="li__description">$ {price}</p>
            <Counter name={name} cart={cart} setCart={setCart} id={id} price={price} />
            </div>
            <img src={img} alt={name} />
        </div>
    )
}
export default ItemDetail