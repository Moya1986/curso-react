const products = [
    {
        id: 1,
        title: "Camiseta Boca Juniors Titular",
        price: 10000,
        img: "../public/camiseta_boca.jpg",
        stock: 25,
        description: "Hombre fútbol"
    },
    {
        id: 2,
        title: "Short Boca Juniors Titular",
        price: 6500,
        img: "../public/short_boca.jpg",
        stock: 25,
        description: "Hombre fútbol"
    },
    {
        id: 3,
        title: "Buzo con capucha estampada Boca Juniors",
        price: 9000,
        img: "../public/buzo_boca.jpg",
        stock: 25,
        description: "Hombre fútbol"
    },
    {
        id: 4,
        title: "Zapatillas Duramo SL",
        price: 15000,
        img: "../public/zapatillas_duramo.jpg",
        stock: 25,
        description: "Zapatillas hombre"
    },
    {
        id: 5,
        title: "Campera deportiva Boca Juniors 3 tiras",
        price: 12500,
        img: "../public/campera_boca.jpg",
        stock: 25,
        description: "Campera hombre"
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve(products)
        }, 2000)
    })
}

export default products