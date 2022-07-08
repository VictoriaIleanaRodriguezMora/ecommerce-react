import { useState } from "react"
import { addDoc, collection } from "@firebase/firestore"
import { bdd } from "../../services/firebase/index"
import CartContext from "../CartContext/CartContext"
import { useContext } from "react"
import { CartItemMsg } from "../CartItem/CartItem";

import "./Form.css"

const Form = () => {
    const { cart, quantAdded } = useContext(CartContext)
    let objOrder = {}

    const valorInicial = {
        name: '',
        email: '',
        phone: ''
    }
    const [user, setUser] = useState(valorInicial)

    const capturarInputs = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })

    }

    const guardarDatos = async (e) => {
        e.preventDefault();
        setUser({ ...valorInicial })

    }

    const handleCreateOrder = () => {

        if (user.name === "" || user.email === "" || user.phone === "") {
            alert("Rellena los campos");
        } else {
            objOrder = {
                buyer: user,
                items: cart,
                total: quantAdded
            }

            const orderCollection = collection(bdd, "orders")
            addDoc(orderCollection, objOrder)
                .then(({ id }) => console.log(id))


                console.log(user);
                console.log(cart);
                console.log(objOrder);

        }





    }
    return (
        <div className="form" >
            <form onSubmit={guardarDatos}>
                <div>
                    <label>Nombre</label>
                    <input type="text" name='name' placeholder='Ingrese su nombre'
                        onChange={capturarInputs} value={user.name} required />
                </div>
                <div>
                    <label>Mail</label>
                    <input type="text" name='email' placeholder='Ingrese su Mail'
                        onChange={capturarInputs} value={user.email} required />
                </div>
                <div>
                    <label>Telefono</label>
                    <input type="text" name='phone' placeholder='Ingrese su telefono'
                        onChange={capturarInputs} value={user.phone} required />
                </div>
                {quantAdded === 0
                    ? <CartItemMsg />
                    :
                    <button onClick={handleCreateOrder} className="generarOrden">Generar Orden</button>
                }

            </form>
        </div>
    )
}


export default Form

