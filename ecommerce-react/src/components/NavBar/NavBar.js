import TagLi from "../TagLi/TagLi"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="header__nav">
            <h3 className="nav__marca" >Marca</h3>
            <ul className="nav__ul">
                <TagLi liClass={"nav__li"} liContent={'Libros'} />
                <TagLi liClass={"nav__li"} liContent={'Carrito'} />
                <TagLi liClass={"nav__li"} liContent={'Quienes somos'} />
                <TagLi liClass={"nav__li"} liContent={'Contacto'} />
            </ul>
            <p className="nav__carrito">🛒</p>
        </nav>
    )
}
export default NavBar