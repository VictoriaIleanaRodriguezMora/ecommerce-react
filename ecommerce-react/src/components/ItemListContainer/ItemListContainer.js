import { getProductos } from "../asynckmock"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router"
import { getProductosByCategory } from "../asynckmock"

const ItemListContainer = () => {

    const [load, setLoad] = useState(true)
    const [prods, setProds] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        setLoad(true)
        if (!categoryId) {
            getProductos()
            .then(prods => {
                setProds(prods);
            })
            .catch(error => {
                console.log(error);
            })
            .finally( () =>{
                setLoad(false)
            })
        } else {
            getProductosByCategory(categoryId)
            .then(prods => {
                setProds(prods)
            })
            .catch(error => {
                console.log(error);
            })
            .finally( () =>{
                setLoad(false)
            })
        }
    }, [categoryId])

    if (load) {
        return(<h2>cargando..</h2>)
    }

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