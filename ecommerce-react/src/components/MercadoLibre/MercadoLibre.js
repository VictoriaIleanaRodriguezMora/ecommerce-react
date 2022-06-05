import { useState, useEffect } from "react"



const MercadoLibre = () => {

    const [prods, setProds] = useState([])
    const [input, setInput] = useState("")


    // useEffect(() => {
    //     fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares').then(response => {
    //         return response.json()
    //     }).then(res => {
    //         setProds(res.results)
    //     })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [])
    console.log(prods);

    const buscar = (e) => {
        e.preventDefault()
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`).then(response => {
            return response.json()
        }).then(res => {
            setProds(res.results)
        })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <form onSubmit={buscar}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit" >buscar</button>
            </form>

            <ul>
                <h1>hola</h1>
                {prods.map(prod => {
                    return (
                        <li key={prod.id}>
                            <img src={prod.thumbnail}></img>
                            <h3>{prod.title}</h3>
                            <p>${prod.price}</p>

                        </li>
                    )
                })}
            </ul>
        </>
    )

}
export default MercadoLibre