import Button from '../button/button'

const Counter = (props) => {

    const incrementar = (num) => {
        console.log("SUMA");
    }

    return (
        <div className="divButton">
            {/* <button className="btn">-</button> */}
            <Button btnClass="btn" label="-"></Button>
            <p>{props.num}</p>
            <Button operacion={incrementar} btnClass="btn" label="+"></Button>
        </div>
    )

}
export default Counter