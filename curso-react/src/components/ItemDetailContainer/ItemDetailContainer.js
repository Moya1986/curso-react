import { useState, useEffect } from 'react'
import { getProductById } from '../../asynmock'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProductById(itemId).then(prod => {
            setProduct(prod)
        }).catch(error => {console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [itemId])

    if(loading) {
        return <h1>Cargando...</h1>

    }

    return(
        <div>
            <ItemDetail {...product} />
        </div>
    )

}

export default ItemDetailContainer