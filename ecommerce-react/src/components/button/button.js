const Button = (props) => {
    return (
        <button onClick={props.operacion} className={props.btnClass} >{props.label}</button>
    )
}
export default Button