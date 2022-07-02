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
        address: ''
    }
    const [user, setUser] = useState(valorInicial)

    const handleCreateOrder = () => {
        console.log("crear orden")
        const objOrder = {
            buyer: user,
            items: cart,
            total: quantAdded,
        }

        const batch = writeBatch(bdd)
        const ids = cart.map(prod => prod.id)
        const outOfStock = []
        const collectionRef = collection(bdd, 'productos')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()

                    const prod = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = prod.quantity

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(bdd, 'orders')

                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ type: 'out_of_stock', productos: outOfStock })
                }
            }).then(({ id }) => {
                batch.commit()
            }).catch(error => {
                if (error.type === 'out_of_stock') {
                } else {
                    console.log(error)
                }
            })
    }


    const capturarInputs = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })

    }

    const guardarDatos = async (e) => {
        e.preventDefault()
        console.log(user)
        setUser({ ...valorInicial })

    }



    return (
        <form onSubmit={guardarDatos} >
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


            <button onClick={handleCreateOrder} > Generar orden </button>
        </form >
    )
}


export default Form

