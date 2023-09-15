import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductosContexto = createContext();

const ProductosContext = ({ children }) => {
  const [productos, setProductos] = useState([]);

  //POST
  const agregarProducto = (producto) => {
    try {
      const response = axios.post("http://localhost:8081/api/servicios", producto);
      console.log(response);
      setProductos([...productos, response]);
    } catch (error) {
      console.log(error);
    }
  };

  // GET

  const obtenerProductos = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/servicios");
      setProductos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

// DELETE

const eliminarProducto = async (id) =>{

    try { 
        await axios.delete(`http://localhost:8081/api/servicios/${id}`);
        const eliminarProducto = productos.filter((producto) => producto._id !== id)
        setProductos(eliminarProducto)
        
    } catch (error) {
       console.log(error) 
    }
}
// PUT

const actualizarProducto = async (producto) => {
  try {
    await axios.put(`http://localhost:8081/api/servicios/${producto._id}`, producto)
    await obtenerProductos()
  } catch (error) {
    console.log(error)
  }
}

  return (
    <>
      <ProductosContexto.Provider
        value={{ productos, setProductos, agregarProducto, obtenerProductos, eliminarProducto, actualizarProducto }}
      >
        {children}
      </ProductosContexto.Provider>
    </>
  );
};

export default ProductosContext;
