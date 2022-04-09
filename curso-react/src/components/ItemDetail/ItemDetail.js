import { useState, useContext } from "react"
import {Card} from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../App"

const ItemDetail = ({id, title, img, price, stock, description}) => {
    const [quantity, setQuantity] = useState(0)

    const {cart, setCart} = useContext(CartContext)

    const handleOnAdd = (count) => {
        console.log("agregué al carrito")
        setQuantity(count)
        setCart([...cart, {id, title, price, count}])
    }

    return (
        <div>
            <Card style={{ width: '18rem' }} key = {id}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>${price}</Card.Text>
                {quantity === 0 ? <ItemCount onAdd = {handleOnAdd}  /> : <button>Ir al Carrito</button> }
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail