import React from "react"
import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount.js"
 
const Item = ({item}) => {
    const onAdd = (quantity) => {
        console.log(quantity)
      }
    return (
        <div>
            <Card style={{ width: '18rem' }} key = {item.id}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                <p>${item.price}</p>
                </Card.Text>
                <Button variant="primary">Detalle</Button>
                <ItemCount initial={0} stock={25} onAdd ={onAdd}/>
                </Card.Body>
            </Card>
        </div>
    )}

    export default Item