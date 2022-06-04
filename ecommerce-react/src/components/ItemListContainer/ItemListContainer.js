import { getProductos } from "../asynckmock"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
const ItemListContainer = ({ }) => {

    const [prods, setProds] = useState([])

    useEffect(() => {
        getProductos().then(response => {
            setProds(response);
        })
    }, [])

    // const prodsComponentes = prods.map(prod => {
    //         return (
    //             <li key={prod.id}>
    //                 {prod.name}
    //             </li>
    //         )
    //     })
    

    return (
        <div>
            <p>hola</p>
            <ItemList prods={prods} />
        </div>
    )
}
export default ItemListContainer