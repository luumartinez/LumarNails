import { useContext } from "react";
import { Container } from "react-bootstrap";
import { TurnosContexto } from "../../context/TurnosContext";
import "./tablaTurnos.css"


const TablaTurnos = () => {

    const { turnos, turnosAgendados } = useContext(TurnosContexto)
  return (
    <>
      <Container className="contenedorTablaTurnos table-responsive">
        <table className="tablaTurnos col-12">
          <thead className="col-12">
            <tr className="trTurnos">
              <th className="col-3">NOMBRE</th>
              <th className="col-3">APELLIDO</th>
              <th className="col-2">FECHA</th>
              <th className="col-2">HORA</th>
              <th className="col-3">ACCIONES</th>
            </tr>
          </thead>
          {turnos.map((turno) => {
            return (
              <>
                <tbody className="tbodyTurnos" key={turno._id}>
                  <tr>
                    <td>{turno.nombre}</td>
                    <td>{turno.apellido}</td>
                    <td>{turno.fecha}</td>
                    <td>{turno.hora}</td>
                    <td>
                      <button
                        className="btn botonEditProd m-1"
                        // onClick={() => handleEdit(producto)}
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
                  </tr>{" "}
                </tbody>
              </>
            );
          })}
        </table>
      </Container>
    </>
  );
};

export default TablaTurnos;
