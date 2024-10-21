
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCRrBHBMsdLUnCFAcsS4UVwml2M2um5d_I",
    authDomain: "proyecto-reactjs-oscaraguirre.firebaseapp.com",
    projectId: "proyecto-reactjs-oscaraguirre",
    storageBucket: "proyecto-reactjs-oscaraguirre.appspot.com",
    messagingSenderId: "638923158126",
    appId: "1:638923158126:web:9d3e866c4cb15ccb56ec7f"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)


//const misProductos = [
//    { nombre: "Iphone 11", stock: 8, precio: 500, img: "../img/iphone-11.png", idCat: "phone" },
//   { nombre: "Iphone 12", stock: 3, precio: 600, img: "../img/iphone-12.png", idCat:"phone" },
//    { nombre: "Airpods", stock: 2, precio: 150, img: "../img/airpods.png", idCat:"accesories" }, 
//    { nombre: "Cargador", stock: 4, precio: 20, img: "../img/cargador.png", idCat:"accesories" },
//]

//import {collection, doc, writeBatch} from "firebase/firestore"
//
//const  subirProductos = async () => {
//   const batch = writeBatch (db)
//    const productosRef = collection(db, "productos")
//
//    misProductos.forEach((producto)=>{
//       const nuevoDoc =doc(productosRef)
//        batch.set(nuevoDoc, producto)
//    })
//
//    try {
//        await batch.commit();
//       console.log("producto subido con exito")
//    } catch(error) {
//       console.log("error subiendo productos", error)
//    }
//}

//subirProductos()