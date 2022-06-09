import { useEffect, useState } from "react"
import { getProductosById } from "../asynckmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [prods, setProds] = useState()

    const params = useParams()
    console.log(params);
    useEffect(() => {
        getProductosById(params.productId).then(response => {
            setProds(response);
        })
    }, [])


    return (
        <>
            <ItemDetail {...prods} />
        </>
    )
}
export default ItemDetailContainer