import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList.js'
import items from "../../asynmock.js"

const ItemListContainer = ({greeting}) => {
     
    const [products, setProducts] = useState([])
    useEffect(() => {
         let getItems = new Promise ((resolve, reject) => {
             setTimeout (() => {
                 items && items.length ? resolve(items) : reject ("error 404")
             }, 2000)
         })
         getItems.then((resolve) => {setProducts(resolve)})
     }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList items={products} />
        </div>
    )
  }

  export default ItemListContainer
  