import { useContext, useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { TurnosContexto } from "../../context/TurnosContext";
import "./tablaTurnos.css";
import FormEditarTurno from "./FormEditarTurno";

const TablaTurnos = () => {

  const { turnos } = useContext(TurnosContexto);

  const [showEditarTur, setShowEditarTur] = useState(false);

  const handleCloseEditarTur = () => setShowEditarTur(false);
  const handleShowEditarTur = () => setShowEditarTur(true);

  const [editarTur, setEditarTur] = useState();

  const handleEdit = (turno) =>{
    handleShowEditarTur();
    setEditarTur(turno);
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
                      // onClick={() => handleDelete(producto._id)}
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
