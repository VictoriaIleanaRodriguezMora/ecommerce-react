const Button = ({operacion, btnClass, children}) => {
    console.log(children);
    return (
        <button onClick={operacion} className={btnClass} >{children}</button>
    )
}
export default Button