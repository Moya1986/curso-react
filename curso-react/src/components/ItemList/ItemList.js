import React from "react"
import { memo } from 'react'
import Item from "../Item/Item.js"


const ItemList = ({items}) => {

    return (
            <ul>
                {items.map((item) => {
                    return <Item key={item.id} item = {item}/>
                }
                )}

                {/* {items.map(item => <Item key={item.id} {...item} />)} */}
            </ul>
    )
}

export default memo(ItemList)