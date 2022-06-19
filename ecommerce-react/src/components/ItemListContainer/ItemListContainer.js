import { getProductos } from "../asynckmock"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router"
// import { getProductosByCategory } from "../asynckmock"
import Spinner from "../Spinner/Spinner"
import { getDocs, collection } from "firebase/firestore"
import { bdd } from "../../services/firebase"

const ItemListContainer = () => {

    const [load, setLoad] = useState(true)
    const [prods, setProds] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        setLoad(true)

        getDocs(collection(bdd, "products")).then(res => {
            console.log(res);
        })

        // if (!categoryId) {
        //     getProductos()
        //     .then(prods => {
        //         setProds(prods);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
        //     .finally( () =>{
        //         setLoad(false)
        //     })
        // } else {
        //     getProductosByCategory(categoryId)
        //     .then(prods => {
        //         setProds(prods)
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
        //     .finally( () =>{
        //         setLoad(false)
        //     })
        // }
    }, [categoryId])

    if (load) {
        return (<Spinner />)
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