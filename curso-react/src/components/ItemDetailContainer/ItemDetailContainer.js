import { useState, useEffect } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = ({addToCart, cart}) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(firestoreDb, 'items', itemId)

        getDoc(docRef).then(querySnapshot => {
            const item = {id: querySnapshot.id, ...querySnapshot.data()}
            setProduct(item)
        }).catch(error=> {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [itemId])

    if(loading) {
        return <h1>Cargando...</h1>

    }

    return(
        <div>
            <ItemDetail {...product} addToCart={addToCart} cart={cart} />
        </div>
    )

}

export default ItemDetailContainer