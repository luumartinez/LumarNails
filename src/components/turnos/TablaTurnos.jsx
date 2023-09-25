import { useContext, useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { TurnosContexto } from "../../context/TurnosContext";
import "./tablaTurnos.css";
import FormEditarTurno from "./FormEditarTurno";
import Swal from "sweetalert2";

const TablaTurnos = () => {

  const { turnos, eliminarTurno } = useContext(TurnosContexto);

  const [showEditarTur, setShowEditarTur] = useState(false);

  const handleCloseEditarTur = () => setShowEditarTur(false);
  const handleShowEditarTur = () => setShowEditarTur(true);

  const [editarTur, setEditarTur] = useState();

  const handleEdit = (turno) =>{
    handleShowEditarTur();
    setEditarTur(turno);
  }

  const handleDelete = (id) =>{
    Swal.fire({
      title: '¿Seguro que quieres cancelar este turno?',
      text: "Una vez cancelado, no podrás recuperarlo",
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
        eliminarTurno(id);
        Swal.fire({
          title: 'Turno cancelado con éxito',
          icon: 'success',
          background: "#fed9ed ",
          color: "grey",
          showConfirmButton:false,
          timer: 1200
       })
      }
    })
  }


  return (
    <>
      <Container className="contenedorTablaTurnos">
        <div className="table-responsive">
          <table className="tablaTurnos">
            <thead>
              <tr className="trTurnos">
                <th>NOMBRE</th>
                <th>APELLIDO</th>
                <th>FECHA</th>
                <th>HORA</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((turno) => (
                <tr className="tbodyTurnos" key={turno._id}>
                  <td>{turno.nombre}</td>
                  <td>{turno.apellido}</td>
                  <td>{turno.fecha}</td>
                  <td>{turno.hora}</td>
                  <td>
                    <button
                      className="btn botonEditProd m-1"
                      onClick={()=> handleEdit(turno)}
                    >
                      {" "}
                      Editar{" "}
                    </button>
                    <button
                      className="btn botonElimProd"
                      onClick={() => handleDelete(turno._id)}
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

      <Modal show={showEditarTur} onHide={handleCloseEditarTur}>
        <Modal.Body className="bodyEditarTurno"><FormEditarTurno editarTur={editarTur} handleCloseEditarTur={handleCloseEditarTur} /></Modal.Body>
      </Modal>
    </>
  );
};

export default TablaTurnos;
