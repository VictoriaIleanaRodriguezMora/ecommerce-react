// import TagLi from "../TagLi/TagLi"
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="header__nav">
            <Link to="/" > 
            <h3 className="nav__marca" >Marca</h3>
            </Link>
            <ul className="nav__ul">
                <Link to="/category/celular" className="nav__li"> celulares</Link>
                <Link to="/category/notebooks" className="nav__li"> notebooks</Link>
                <Link to="/category/tablet" className="nav__li"> tablet</Link>

                {/* <TagLi liClass={"nav__li"} liContent={'notebooks'} />
                <TagLi liClass={"nav__li"} liContent={'tablet'} />
                <TagLi liClass={"nav__li"} liContent={'Carrito'} /> */}

            </ul>
            <p className="nav__carrito">🛒</p>
        </nav>
    )
}
export default NavBar