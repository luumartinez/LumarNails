import { useContext, useState } from "react";
import { UsuariosContexto } from "../../context/UsuariosContext";
import { Container, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import FormEditarUsuario from "./FormEditarUsuario";
import "./tablaUsuarios.css";

const TablaUsuarios = () => {
  const { usuarios, eliminarUsuario } = useContext(UsuariosContexto);

  const [editarUsu, seteditarUsuario] = useState()

  const handleDelete = (id) => {
   
    Swal.fire({
      title: '¿Seguro que quieres eliminar este usuario?',
      text: "Una vez eliminado, no podrás recuperarlo",
      icon: 'warning',
      showCancelButton: true,
      background: "#fed9ed ",
      color: "grey",
      confirmButtonColor: '#e84e4e',
      cancelButtonColor: '#2d7d97', 
      confirmButtonText: 'Borrar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) { 
        eliminarUsuario(id);
        Swal.fire({
          title: 'Usuario eliminado con exito',
          icon: 'success',
          background: "#fed9ed ",
          color: "grey",
          showConfirmButton:false,
          timer: 1200
       })
      }
    })
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (usuario) =>{
    seteditarUsuario(usuario)
    handleShow()
  };

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
                  <td className="d-none">{usuario.rol}</td>
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
      <Modal.Body className="bodyModalEditUsu">
        <FormEditarUsuario editarUsu={editarUsu} handleClose={handleClose}/>
      </Modal.Body>
    </Modal>
    </>
  );
};

export default TablaUsuarios;
