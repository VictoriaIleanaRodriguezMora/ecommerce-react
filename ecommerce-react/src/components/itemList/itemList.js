const ItemList = ({ prods }) => {
    return (
        <ul>
            {prods.map(prods => <li key={prods.id}> {prods.name}</li>)}
        </ul>
    )}
export default ItemList
