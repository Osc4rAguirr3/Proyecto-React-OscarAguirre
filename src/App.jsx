import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContiner from "./components/ItemListContiner/ItemListContiner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./components/Cart/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContiner />} />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContiner />}
            />
            <Route path="/item/:idItem" element={<ItemDetailContiner />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={ <h2> Sitio en construccion</h2> }/>
          </Routes>
        </CarritoProvider>
        <ToastContiner />
      </BrowserRouter>
    </>
  );
};

export default App;