const Item = ({name, img}) =>{
return(
    <li>
        <img src={img} />
        {name}
    </li>
)
}
export default Item