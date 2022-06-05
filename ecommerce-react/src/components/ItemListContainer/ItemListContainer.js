import { getProductos } from "../asynckmock"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = () => {

    const [prods, setProds] = useState([])

    useEffect(() => {
        getProductos().then(response => {
            setProds(response);
        })
    }, [])
    

    return (
        <div className="div__ILC">
            <ItemList prods={prods} />
        </div>
    )
}
export default ItemListContainer