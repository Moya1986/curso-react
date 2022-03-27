import { getProducts } from "../../asynmock.js"
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList.js'

const ItemListContainer = ({greeting}) => {
     
    const [products, setProducts] = useState([])
    useEffect(() => {
         getProducts().then(response => {
            setProducts(response)
         })
     }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ul>
                {products.map(product => <li key={product.id}>{product.title}</li>)}
            </ul>
        </div>
    )
  }

  export default ItemListContainer
  