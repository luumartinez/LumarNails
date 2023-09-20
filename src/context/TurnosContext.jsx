import { createContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const TurnosContexto = createContext();

const TurnosContext = ({ children }) => {
  const [turnos, setTurnos] = useState([]);

  //POST

  const agendarTurno = async (turno) => {
    try {
      const response = await axios.post("http://localhost:8081/api/turnos/agendarTurno",
      turno);
      if(response.status === 201){
        setTurnos([...turnos, response]);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "¡Turno agendado!",
          showConfirmButton: false,
          background: "#fed9ed ",
          color: "grey",
        },
        setTimeout(()=>{
          window.location.href = "/";}, 1000))}
      } catch (error) {
        if (error.response.status === 409){
          Swal.fire({
            icon: "error",
            title: "Turno no disponible",
            text:"Pruebe en otro horario",
            showConfirmButton: false,
            background: "#fed9ed ",
            color: "grey",
            timer:1000
          });
        }
      }
  };

  return (
    <>
      <TurnosContexto.Provider value={{ turnos, agendarTurno }}>
        {children}
      </TurnosContexto.Provider>
    </>
  );
};

export default TurnosContext;
