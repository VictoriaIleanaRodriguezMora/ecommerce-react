import { getProductos } from "../asynckmock"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router"
import { getProductosByCategory } from "../asynckmock"

const ItemListContainer = () => {

    
    const [prods, setProds] = useState([])
    const { categoryId } = useParams()
    console.log(categoryId);


    useEffect(() => {
        if (!categoryId) {
            getProductos().then(prods => {
                setProds(prods);
            })
        } else {
            getProductosByCategory(categoryId).then(prods => {
                setProds(prods)
            })
        }

    }, [categoryId])


    return (
        <div className="div__ILC">
            {prods.length > 0
                ? <ItemList prods={prods} />
                : <h1>No hay productos que coincidan con esta busqueda</h1>
            }
        </div>
    )
}
export default ItemListContainer