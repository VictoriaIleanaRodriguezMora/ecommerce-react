import Item from "../Item/Item"
import './ItemList.css'


const ItemList = ({ prods }) => {
    return (
        <ul className="ul__ItemList">
            {prods.map(prods => <Item key={prods.id} {...prods} />)}
        </ul>
    )
}
export default ItemList
