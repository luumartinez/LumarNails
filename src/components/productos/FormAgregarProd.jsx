import { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ProductosContexto } from "../../context/ProductosContext";
import Swal from 'sweetalert2'

const FormAgregarProd = () => {
  const { agregarProducto } = useContext(ProductosContexto);

  const [productos, setProductos] = useState({
    nombre: "",
    precio: "",
    // stock: "",
  });

  const handleChange = (e) => {
    setProductos({ ...productos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarProducto(productos);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado",
      showConfirmButton: false
    },
    setTimeout(() => {
      window.location.href = "/tienda";
    }, 1500));
    setProductos({
      producto: "",
      precio: "",
      stock: "",
    });
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={productos.nombre}
                  onChange={handleChange}
                  aria-describedby="nombre"
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="precio" className="form-label">
                  Precio
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="precio"
                  value={productos.precio}
                  onChange={handleChange}
                  aria-describedby="precio"
                ></input>
              </div>
              {/* <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Stock
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="stock"
                  value={productos.stock}
                  onChange={handleChange}
                  aria-describedby="stock"
                ></input>
              </div> */}
              <Button type="submit" className="btn btn-primary">
                {" "}
                Agregar producto{" "}
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormAgregarProd;
