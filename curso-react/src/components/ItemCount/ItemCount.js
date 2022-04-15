import {useState} from 'react'
import { Button } from "react-bootstrap"
import './ItemCount.css'

const ItemCount = ({onAdd}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
            setCount(count + 1)
    }

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <div className='btn'>
                <Button variant='primary' onClick={increment}>+</Button>
            </div>
            <p>{count}</p>
            <div className='btn'>
                <Button variant='primary' onClick={decrement}>-</Button>
            </div>
            <div className='btn'>
                <Button variant='primary' onClick={() => onAdd(count)}>Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount