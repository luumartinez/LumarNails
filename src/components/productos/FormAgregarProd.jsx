import { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ProductosContexto } from "../../context/ProductosContext";

const FormAgregarProd = ({ handleCloseAgregar }) => {
  const { agregarProducto } = useContext(ProductosContexto);

  const [productos, setProductos] = useState({
    nombre: "",
    precio: "",
  });

  const handleChange = (e) => {
    setProductos({ ...productos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    agregarProducto(productos);
    setProductos({
      producto: "",
      precio: "",
    });
    handleCloseAgregar();
  };

  return (
    <>
      <Container>
        <Row>
      <Col>
      <h2 className="d-flex justify-content-center">CARGAR PRODUCTO</h2>
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
                  required
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
                  required
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
              <div className="d-flex justify-content-center">
                <button type="submit" className="botonAgregarProd">
                  {" "}
                  AGREGAR{" "}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormAgregarProd;
