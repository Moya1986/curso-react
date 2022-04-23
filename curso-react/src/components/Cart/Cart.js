import { useContext } from "react"
import CartContext from '../Context/CartContext'
import { Button } from "react-bootstrap"

const Cart = () => {

    const { cart, clearCart, getTotal, removeItem, getQuantity } = useContext(CartContext)

if(getQuantity() === 0) {
    return(
        <h1>No hay productos en el carrito.</h1>
    )
}

    return(
        <div>
            <h1>Cart</h1>
            <ul>
                {cart.map(prod =><li key={prod.id}>{prod.title} precio uni: {prod.price} cantidad: {prod.quantity} subtotal: {prod.price * prod.quantity} <button onClick={() => removeItem(prod.id)}>x</button></li>)}
            </ul>
            <h1>Total: {getTotal()}</h1>
            <Button variant='primary' onClick={clearCart}>Vaciar carrito</Button>
        </div>
    )
}

export default Cart