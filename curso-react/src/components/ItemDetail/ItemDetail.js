import { useState, useContext} from "react"
import {Card} from "react-bootstrap"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import CartContext from "../Context/CartContext"
import './ItemDetail.css'

const ItemDetail = ({id, title, img, price, stock, description}) => {
    const [quantity, setQuantity] = useState(0)

    const {addItem}= useContext(CartContext)

    const handleOnAdd = (count) => {
        setQuantity(count)
        addItem({id, title, price}, count)
    }

    return (
        <div>
            <Card style={{ width: '18rem' }} key = {id}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>${price}</Card.Text>
                {quantity === 0 ? <ItemCount onAdd = {handleOnAdd}  /> : 
                <Button variant='primary'>
                    <Link to='/cart' className='Link'> Ir al Carrito </Link>
                </Button> }
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail