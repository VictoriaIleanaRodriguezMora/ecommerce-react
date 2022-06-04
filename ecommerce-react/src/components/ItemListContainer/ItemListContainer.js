import { getProductos } from "../asynckmock"
import { useEffect, useState } from "react"

const ItemListContainer = ({ }) => {

    const [prods, setProds] = useState([])

    useEffect(() => {
        getProductos().then(response => {
            setProds(response);
        })
    }, [])

    const prodsComponentes = prods.map(prod => {
            return (
                <li key={prod.id}>
                    {prod.name}
                </li>
            )
        })
    

    return (
        <div>
            <ul>
                {prodsComponentes}
            </ul>
        </div>
    )
}
export default ItemListContainer