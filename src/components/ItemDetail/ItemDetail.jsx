import React from 'react'
import "./ItemDetail.css"
import Contador from '../Counter/Counter'
import { useState } from 'react'
import { Link } from 'react-router-dom'


    const ItemDetail = ({id, nombre, precio, img, stock}) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0)


    const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregador:" + cantidad)
}

    return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio {precio} </h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Articulos Originales</p>
        
        {
        agregarCantidad > 0 ? (<Link to="/cart"> Finalizar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
    )
}

export default ItemDetail