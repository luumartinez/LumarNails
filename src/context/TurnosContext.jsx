import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const TurnosContexto = createContext();

const TurnosContext = ({ children }) => {
  const [turnos, setTurnos] = useState([]);

  //GET
  const turnosAgendados = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/turnos/turnosAgendados"
      );
      setTurnos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    turnosAgendados();
  }, []);

  //POST

  const agendarTurno = async (turno) => {
    try {
      const response = await axios.post(
        "http://localhost:8081/api/turnos/agendarTurno",
        turno
      );
      if (response.status === 201) {
        setTurnos([...turnos, response]);
        Swal.fire(
          {
            position: "center",
            icon: "success",
            title: "¡Turno agendado!",
            showConfirmButton: false,
            background: "#fed9ed ",
            color: "grey",
          },
          setTimeout(() => {
            window.location.href = "/";
          }, 1000)
        );
      }
    } catch (error) {
      if (error.response.status === 409) {
        Swal.fire({
          icon: "error",
          title: "Turno no disponible",
          text: "Pruebe en otro horario",
          showConfirmButton: false,
          background: "#fed9ed ",
          color: "grey",
          timer: 1000,
        });
      }
    }
  };

  //PUT

  const editarTurno = async (turno) => {
    try {
      await axios.put(`http://localhost:8081/api/turnos/${turno._id}`, turno);
      await turnosAgendados();
    } catch (error) {
      console.log(error);
    }
  };

  //DELETE

  const eliminarTurno = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/api/turnos/${id}`);
      const turnoEliminado = turnos.filter((turno) => turno._id !== id);
      setTurnos(turnoEliminado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <TurnosContexto.Provider
        value={{ turnos, agendarTurno, turnosAgendados, editarTurno, eliminarTurno }}
      >
        {children}
      </TurnosContexto.Provider>
    </>
  );
};

export default TurnosContext;
