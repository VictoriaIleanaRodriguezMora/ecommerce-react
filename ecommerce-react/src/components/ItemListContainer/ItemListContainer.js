import { getProductos } from "../asynckmock"
import { useEffect, useState } from "react"

const ItemListContainer = ({ }) => {

    const [prods, setProds] = useState([])

    useEffect(() => {
        getProductos().then(response => {
            setProds(response);
        })
    }, [])
    console.log(prods)
    return (
        <div>
            <p>Hola</p>
        </div>
    )
}
export default ItemListContainer