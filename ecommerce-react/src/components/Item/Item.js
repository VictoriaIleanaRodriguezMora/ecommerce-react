import "./Item.css"

const Item = ({ name, img, description }) => {
    return (
        <li className="li_Item">
            <p className="li__titulo">{name}</p>
            <img src={img} alt={name} />
            <p className="li__description">{description}</p>
        </li>
    )
}
export default Item