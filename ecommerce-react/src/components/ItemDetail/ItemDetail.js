import "./ItemDetail.css"

const ItemDetail = ({ name, img, price, description }) => {
    return (
        <div className="div__IDC" >
            <div className="IDC__info" > 
                <h2 className="li__titulo">{name}</h2>
                <p className="li__description"> {description}</p>
                <p className="li__description">$ {price}</p>
            </div>
            <img src={img} alt={name} />
        </div>
    )
}
export default ItemDetail