import { useEffect, useState } from "react"
import { getProductosById } from "../asynckmock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {


    const [prods, setProds] = useState()

    useEffect(() => {
        getProductosById("1").then(response => {
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