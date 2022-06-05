import ItemList from "../ItemList/ItemList"

const NavBar = (props) => {
    return (
        <nav className="header__nav">
            <ul>
                <ItemList liClass={"nav__li"} liContent={'Libros'} />
                <ItemList liClass={"nav__li"} liContent={'Carrito'} />
                <ItemList liClass={"nav__li"} liContent={'Quienes somos'} />
                <ItemList liClass={"nav__li"} liContent={'Contacto'} />
            </ul>
        </nav>
    )

}
export default NavBar