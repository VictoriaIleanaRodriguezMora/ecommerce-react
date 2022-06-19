import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { bdd } from "../../services/firebase"
import { getDoc, doc } from "@firebase/firestore"

const ItemDetailContainer = () => {

    const [prods, setProds] = useState()
    const { productId } = useParams()

    useEffect(() => {
        const docProdRef = doc(bdd, "products", productId)

        getDoc(docProdRef)
            .then(doc => {
                const prodMaped = { id: doc.id, ...doc.data() }
                setProds(prodMaped);
            })
            .catch(error => {
                console.log (error);
            })





    }, [])


    return (
        <>
            <ItemDetail {...prods} />
        </>
    )
}
export default ItemDetailContainer