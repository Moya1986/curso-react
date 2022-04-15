import { useContext } from "react"
import CartContext from '../Context/CartContext'
import { Button } from "react-bootstrap"

const Cart = () => {

    const { cart, clearCart } = useContext(CartContext)

    return(
        <div>
            <h1>Cart</h1>
            <ul>
                {cart.map(prod =><li key={prod.id}>{prod.name}</li>)}
            </ul>
            <Button variant='primary' onClick={clearCart}>Vaciar carrito</Button>
        </div>
    )
}

export default Cart