import { app } from "../../services/firebase"
import { getAuth, signOut } from "firebase/auth"
import { useState } from "react"
import { addDoc, collection, updateDoc, doc, writeBatch, getDocs, query, where, documentId } from "firebase/firestore"
import { bdd } from "../../services/firebase/index"
import CartContext from "../CartContext/CartContext"
import { useContext } from "react"
const auth = getAuth(app)


const Form = () => {
    const { cart, quantAdded } = useContext(CartContext)


    const valorInicial = {
        name: '',
        email: '',
        phone: '',
    }
    const [user, setUser] = useState(valorInicial)

    const capturarInputs = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })

    }

    const guardarDatos = async (e) => {
        e.preventDefault();
        console.log(user);
        setUser({ ...valorInicial })

    }


    
    const handleCreateOrder = () => {
        valorInicial["buyer"] = user
        valorInicial["items"] = cart
        valorInicial["total"] = quantAdded
        console.log(user);
        console.log(cart);

    }
    return (
        <form onSubmit={guardarDatos}>
        <div>
            <label>Name</label>
            <input type="text" name='name' placeholder='Ingrese su nombre'
                onChange={capturarInputs} value={user.name} />
        </div>
        <div>
            <label>Email</label>
            <input type="text" name='email' placeholder='Ingrese su Email'
                onChange={capturarInputs} value={user.email} />
        </div>
        <div>
            <label>Phone</label>
            <input type="text" name='phone' placeholder='Ingrese su telefono'
                onChange={capturarInputs} value={user.phone} />
        </div>

        <button onClick={handleCreateOrder} >Generar Orden</button>
    </form>
    )
}


export default Form

