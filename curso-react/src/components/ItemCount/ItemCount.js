import {useState} from 'react'

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
            <button onClick={increment}>+</button>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount