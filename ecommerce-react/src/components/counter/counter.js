const Counter = (props) => {
console.log(props);

return(
    <div className="divButton">
        <button className="btn">-</button>
        <p>{props.text}</p>
        <button className="btn">+</button>
    </div>
)

}
export default Counter