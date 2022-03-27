import products from "../../asynmock"

const Item = () => {

    return(
        <div>
            <h3>{products[0].title}</h3>
            <img src={products[0].img} alt="imagen del artículo"/>
            <p>{products[0].description}</p>
            <p>{products[0].price}</p>
            <p>{products[0].stock}</p>
        </div>
    )
}

export default Item