import { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ProductosContexto } from "../../context/ProductosContext";
import Swal from "sweetalert2";
import "./formEditarProd.css";

const FormEditarProd = ({ editarProd, handleClose }) => {
  const [producto, setProducto] = useState(editarProd);

  const { actualizarProducto } = useContext(ProductosContexto);

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    actualizarProducto(producto);
    Swal.fire({
      title: "Cambios guardados con éxito",
      icon: "success",
      background: "#fed9ed ",
      color: "grey",
      showConfirmButton: false,
      timer: 1200,
    });
    handleClose();
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleEdit}>
              <div className="d-flex justify-content-end">
                <h5 className="btn-close" onClick={handleClose}></h5>
              </div>
              <h1 className="d-flex justify-content-center">EDITAR PRODUCTO</h1>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={producto.nombre}
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
                  value={producto.precio}
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
                  value={producto.stock}
                  onChange={handleChange}
                  aria-describedby="stock"
                ></input>
              </div> */}
              <div className="d-flex justify-content-center">
                <Button type="submit" className="botonEditProducto">
                  {" "}
                  Editar producto{" "}
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormEditarProd;
