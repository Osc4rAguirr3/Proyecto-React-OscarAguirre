import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategorias } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { redirect, useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {idCategoria} = useParams()
    useEffect(() => {
        const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;
        funcionProductos(idCategoria)
        .then(res => setProductos(res))
    }, [idCategoria])
    return (
        <>
            <h2 style={{ textAlign: "center", color: "#86C7FFFF" }}>Productos Disponibles</h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer