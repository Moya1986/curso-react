import React from "react"
import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount.js"
import { Button } from "react-bootstrap"
import './Item.css'

const Item = ({item}) => {

    return (
        <div>
            <Card style={{ width: '18rem' }} key = {item.id}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                ${item.price}
                </Card.Text>
                <Button variant="primary" >
                    <Link to={`/item/${item.id}`} className="Link" > Detalle </Link> 
                </Button>
                <ItemCount initial={0} stock={25}/>
                </Card.Body>
            </Card>
        </div>
    )}

    export default Item