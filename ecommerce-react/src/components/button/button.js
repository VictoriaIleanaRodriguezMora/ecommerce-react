
const Button = ({accion, btnClass, children}) => {
    // estas props, se definen en el padre, pero es el quien define las props en realidad
    // console.log(children);
    return (
        <button onClick={accion} className={btnClass} >{children}</button>
    )
}
export default Button