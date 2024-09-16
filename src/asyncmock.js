const misProductos = [
    { id: "1", nombre: "Iphone 11", stock: 8, precio: 500, img: "../img/iphone-11.png", idCat: "phone" },
    { id: "2", nombre: "Iphone 12", stock: 3, precio: 600, img: "../img/iphone-12.png", idCat:"phone" },
    { id: "3", nombre: "Airpods", stock: 2, precio: 150, img: "../img/airpods.png", idCat:"accesories" }, 
    { id: "4", nombre: "Cargador", stock: 4, precio: 20, img: "../img/cargador.png", idCat:"accesories" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })

}


export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 100);

    })

}