import {Card} from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, title, img, price, stock, description}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} key = {id}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Text>${price}</Card.Text>
                <ItemCount />
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail