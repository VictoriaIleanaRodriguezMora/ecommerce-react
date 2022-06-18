import { createContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log(cart);

    const addItemToCart = (productToAdd) => {
        if (!cart.some(prod => prod.id === productToAdd.id )) {
            setCart([...cart, productToAdd ])
        }
    }

    return (
        <CartContext.Provider value={{cart, addItemToCart}} >
            {children}
        </CartContext.Provider>
    )
}
export default CartContext