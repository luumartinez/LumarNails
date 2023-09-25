import { useContext, useState } from "react";
import { UsuariosContexto } from "../../context/UsuariosContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "./formEditarUsuario.css";

const FormEditarUsuario = ({ editarUsu, handleClose }) => {
  const [usuario, setUsuario] = useState(editarUsu);

  const { editarUsuario } = useContext(UsuariosContexto);

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    editarUsuario(usuario);
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
              <h1 className="d-flex justify-content-center">EDITAR USUARIO</h1>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={usuario.nombre}
                  onChange={handleChange}
                  aria-describedby="nombre"
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="apellido"
                  value={usuario.apellido}
                  onChange={handleChange}
                  aria-describedby="apellido"
                  required
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="deshabilitado"
                  name="email"
                  value={usuario.email}
                  // onChange={handleChange}
                  aria-describedby="email"
                  disabled
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="rol" className="form-label">
                  Rol
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="rol"
                  value={usuario.rol}
                  onChange={handleChange}
                  aria-describedby="rol"
                  required
                ></input>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="botonEditUsuario">
                  Editar usuario
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormEditarUsuario;
