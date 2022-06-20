import { createContext, useState } from "react";
import { CartItemMsg } from "../CartItem/CartItem";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [quantAdded, setquantAdded] = useState(0)

    const [cart, setCart] = useState([])

    const addProdToCart = (productToAdd) => {
        if (!cart.some(prod => prod.id === productToAdd.id)) {
            setCart([...cart, productToAdd])
        }
    }


    const removeProdFromCart = (id) => {
        const removeProd = cart.filter(prod => prod.id !== id)
        // setCart(<CartItemMsg />)
        setCart(removeProd)
        { <CartItemMsg /> }
        console.log(`removeProdFromCart --> ${id}`);
    }

    const getQuantity = () => {
        let totalQuantity = 0
        cart.forEach(prod => totalQuantity += prod.quant)
        return totalQuantity
    }

    const getTotalPrice = () => {
        let totalPrice = (cart[0].price * cart[0].quant)
        return totalPrice
    }


    return (
        <CartContext.Provider value={{
            cart,
            addProdToCart,
            removeProdFromCart,
            getQuantity,
            getTotalPrice,
            quantAdded,
            setquantAdded
        }} >
            {children}
        </CartContext.Provider>
    )
}
export default CartContext