import CartItem from "../CartItem/CartItem"
import CartContext from "../CartContext/CartContext"
import { useContext } from "react"
import { CartItemMsg } from "../CartItem/CartItem";
import "./Cart.css"
import { addDoc, collection, updateDoc, doc, writeBatch, getDocs, query, where, documentId } from "firebase/firestore"
import { bdd } from "../../services/firebase/index"
import { useState } from "react"
import Form from "../Form/Form";


const Cart = () => {

    const { cart, quantAdded } = useContext(CartContext)

    const handleUpdateStock = () => {
        const docRef = doc(bdd, 'products', 'otZTZ97oRPcfYUQAR62H')
        updateDoc(docRef, { stock: 100 },)
    }

    return (
        <>
            {quantAdded === 0
                ? <CartItemMsg />
                :
                cart.map(cart =>
                    <CartItem key={cart.id}{...cart} />)
            }
            <Form></Form>

        </>
    )

}
export default Cart