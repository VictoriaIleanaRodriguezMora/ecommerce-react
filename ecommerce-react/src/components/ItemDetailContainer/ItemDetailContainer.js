import { useEffect, useState } from "react"
import { getProductosById } from "../asynckmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ({ cart, setCart }) => {

    const [prods, setProds] = useState()
    const { productId } = useParams()

    useEffect(() => {
        getProductosById(productId).then(response => {
            setProds(response);
        })
    }, [])


    return (
        <>
            <ItemDetail {...prods} cart={cart} setCart={setCart} />
        </>
    )
}
export default ItemDetailContainer