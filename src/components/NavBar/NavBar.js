// import "./NavBar.css"
import "../../sassCarpeta/index.scss"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

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
            </ul>
            <CartWidget/>
            <Link to="/form" >
                <h3 className="nav__marca" >👥</h3>
            </Link>
        </nav>
    )
}
export default NavBar