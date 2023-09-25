import { useContext, useState } from "react";
import { TurnosContexto } from "../../context/TurnosContext";
import Swal from "sweetalert2";
import "./formEditarTurno.css";

const FormEditarTurno = ({ editarTur, handleCloseEditarTur }) => {
  const { editarTurno } = useContext(TurnosContexto);
  const [turno, setTurno] = useState(editarTur);

  const handleChange = (e) => {
    setTurno({ ...turno, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    editarTurno(turno);
    Swal.fire({
      title: "Cambios guardados con éxito",
      icon: "success",
      background: "#fed9ed ",
      color: "grey",
      showConfirmButton: false,
      timer: 1200,
    });
    handleCloseEditarTur();
  };
  return (
    <>
      <form onSubmit={handleEdit}>
        <div className="d-flex justify-content-end">
          <h5 className="btn-close" onClick={handleCloseEditarTur}></h5>
        </div>
        <h1 className="d-flex justify-content-center">EDITAR TURNO</h1>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="deshabilitado"
            name="nombre"
            aria-describedby="nombre"
            value={turno.nombre}
            disabled
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="deshabilitado"
            name="apellido"
            aria-describedby="apellido"
            value={turno.apellido}
            disabled
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">
            Fecha
          </label>
          <input
            type="date"
            className="form-control"
            name="fecha"
            value={turno.fecha}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="hora" className="form-label">
            hora
          </label>
          <input
            type="time"
            className="form-control"
            name="hora"
            value={turno.hora}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="servicio" className="form-label">
            servicio
          </label>
          <input
            type="text"
            className="form-control"
            name="servicio"
            value={turno.servicio}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="botonEditarTur">
            Editar
          </button>
        </div>
      </form>
    </>
  );
};

export default FormEditarTurno;
