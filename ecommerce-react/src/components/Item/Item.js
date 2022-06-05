import "./Item.css"

const Item = ({ name, img, price }) => {
    return (
        <li className="li_Item">
            <p className="li__titulo">{name}</p>
            <img src={img} alt={name} />
            <p className="li__description">${price}</p>
        </li>
    )
}
export default Item