import { useContext, useState } from "react";
import { UsuariosContexto } from "../../context/UsuariosContext";
import { Container, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import FormEditarUsuario from "./FormEditarUsuario";
import "./tablaUsuarios.css";

const TablaUsuarios = () => {
  const { usuarios } = useContext(UsuariosContexto);

  const [editarUsuario, seteditarUsuario] = useState()

  const handleDelete = (id) => {
    // eliminarUsuario(id);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Usuario eliminado",
    });
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (usuario) =>{
    seteditarUsuario(usuario)
    handleShow()
  }

  return (
    <>
      <Container className="contenedorTablaUsuarios">
        <div className="table-responsive">
          <table className="tablaUsuarios">
            <thead>
              <tr className="estiloTR">
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>EMAIL</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr className="tbodyUsu" key={usuario._id}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.apellido}</td>
                  <td>{usuario.email}</td>
                  <td>
                    <button
                      className="btn botonEditUsu  m-1"
                      onClick={() => handleEdit(usuario)}
                    >
                      {" "}
                      Editar{" "}
                    </button>
                    <button
                      className="btn botonElimUsu "
                      onClick={() => handleDelete(usuario._id)}
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
      <Modal.Header closeButton>
        <Modal.Title>EDICION DE USUARIO</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormEditarUsuario editarProd={editarUsuario} handleClose={handleClose} />
      </Modal.Body>
    </Modal>
    </>
  );
};

export default TablaUsuarios;
