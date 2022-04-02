import React from "react"
import Item from "../Item/Item.js"


const ItemList = ({items}) => {


    return (
        <div>
            <h1>Products</h1>
            <ul>
                {items.map((item) => {
                    return <Item key={item.id} item = {item}/>
                }
                )}
            </ul>
        </div>
    )
    

}

export default ItemList