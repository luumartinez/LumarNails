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
    Swal.fire({
      title: "¿Seguro que quieres eliminar este producto?",
      text: "Una vez eliminado, no podrás recuperarlo",
      icon: "warning",
      showCancelButton: true,
      background: "#fed9ed ",
      color: "grey",
      confirmButtonColor: "#e84e4e",
      cancelButtonColor: "#2d7d97",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProducto(id);
        Swal.fire({
          title: "Producto eliminado con exito",
          icon: "success",
          background: "#fed9ed ",
          color: "grey",
          showConfirmButton: false,
          timer: 1200,
        });
      }
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
      <Container className="contenedorTablaProductos">
        <div className="table-responsive">
          <table className="tablaProductos col-12">
            <thead className="col-12">
              <tr className="trProd">
                <th className="col-4">PRODUCTO</th>
                <th className="col-4">PRECIO</th>
                <th className="col-4">ACCIONES</th>
                <th className="col-4"></th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr className="tbodyProd" key={producto._id}>
                  <td>{producto.nombre}</td>
                  <td>${producto.precio}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="bodyModalEditProd">
          <FormEditarProd editarProd={editarProd} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TablaProductos;
