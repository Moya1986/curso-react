import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList.js'
import items from "../../asynmock.js"
import {useParams} from 'react-router-dom'
import { getProductsByCategory } from '../../asynmock.js'

const ItemListContainer = ({greeting}) => {
     
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
        if(categoryId) {
            setLoading(true)
            getProductsByCategory(categoryId).then(items => {
                setProducts(items)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(true)
            let getItems = new Promise ((resolve, reject) => {
                setTimeout (() => {
                    items && items.length ? resolve(items) : reject ("error 404")
                }, 2000)
            })
            getItems.then(item => {
                setProducts(item)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
        }

    return (() => {
        setProducts([])
    })
    }, [categoryId])

    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    if(products.length === 0) {
        return <h1>No hay productos de esta categoria</h1>
    }
    
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList items={products} />
        </div>
    )
  }


export default ItemListContainer