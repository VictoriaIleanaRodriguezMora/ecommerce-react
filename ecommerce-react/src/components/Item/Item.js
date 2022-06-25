import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {
    return (
        <li className="li__Item">
            <p className="li__titulo">{name}</p>
            <img src={img} alt={name} />
            <p className="li__description">${price}</p>
            <Link to={`/detail/${id}`} > Ver detalle </Link>
        </li>
    )
}
export default Item