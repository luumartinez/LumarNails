import { useState, useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ProductosContexto } from "../../context/ProductosContext";
import Swal from "sweetalert2";

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
      showConfirmButton: false,
      timer: 1000,
  });
  handleClose();
}
  

  return (
    <>
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleEdit}>
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
              <Button type="submit" className="btn btn-primary">
                {" "}
                Editar producto{" "}
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormEditarProd;
