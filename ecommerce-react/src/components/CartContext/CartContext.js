import { createContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [quantAdded, setquantAdded] = useState(0)

    const [cart, setCart] = useState([])
    console.log(cart);
    
    const addProdToCart = (productToAdd) => {
        if (!cart.some(prod => prod.id === productToAdd.id)) {
            setCart([...cart, productToAdd])
            console.log(cart.name);
        }
    }

    // const addCartItem = () => {
    //     return (

    //     )
    // }

    const removeProdFromCart = (id) => {
        const removeProd = cart.filter(prod => prod.id !== id)
        setCart(removeProd)
    }

    const getQuantity = () => {
        let totalQuantity = 0
        cart.forEach(prod => totalQuantity += prod.quant)
        return totalQuantity
    }



    return (
        <CartContext.Provider value={{
            cart,
            addProdToCart,
            removeProdFromCart,
            getQuantity,
            quantAdded,
            setquantAdded
        }} >
            {children}
        </CartContext.Provider>
    )
}
export default CartContext