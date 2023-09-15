import { useContext, useState } from "react";
import { ProductosContexto } from "../../context/ProductosContext";
import { Modal, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import FormEditarProd from "./FormEditarProd";
import "./tablaProductos.css";

const TablaProductos = () => {
  const { productos, eliminarProducto } = useContext(ProductosContexto);

  const [editarProd, setEditarProd] = useState();

  const handleDelete = (id) => {
    eliminarProducto(id);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto eliminado",
    });
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (producto) => {
    setEditarProd(producto);
    handleShow();
  };

  return (
    <>
<Container className="contenedorTablaProductos table-responsive">
        <table className="tablaProductos col-12">
          <thead className="col-12">
            <tr className="trProd">
              <th className="col-4">PRODUCTO</th>
              <th className="col-4">PRECIO</th>
              <th className="col-4">ACCIONES</th>
              <th className="col-4"></th>
            </tr>
          </thead>
          {productos.map((producto) => {
            return (
              <>
                <tbody className="tbodyProd" key={producto._id}>
                  <tr>
                    <td>{producto.nombre}</td>
                    <td>{producto.precio}</td>
                    <td>
                      <button
                        className="btn botonEditProd m-1"
                        onClick={() => handleEdit(producto)}
                      >
                        {" "}
                        Editar{" "}
                      </button>
                      <button
                        className="btn botonElimProd"
                        onClick={() => handleDelete(producto._id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>{" "}
                </tbody>
              </>
            );
          })}
        </table>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDICION DE PRODUCTO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormEditarProd editarProd={editarProd} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TablaProductos;
