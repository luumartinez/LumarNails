import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const ProductosContexto = createContext();

const ProductosContext = ({ children }) => {
  const [productos, setProductos] = useState([]);

  //POST
  const agregarProducto = async (producto) => {
    try {
      const response = await axios.post("http://localhost:8081/api/servicios", producto);
      
      if(response.status === 201){
      setProductos([...productos, response]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto agregado",
        showConfirmButton: false,
        background: "#fed9ed ",
        color: "grey",
      },
      setTimeout(()=>{
        window.location.href = "/administracion";}, 1000))}
    } catch (error) {
      if (error.response.status === 409){
        Swal.fire({
          icon: "error",
          title: "Este producto ya existe",
          showConfirmButton: false,
          background: "#fed9ed ",
          color: "grey",
        });
      }
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
