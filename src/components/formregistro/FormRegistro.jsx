import { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";
import emailjs from '@emailjs/browser';


const Registro = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_t2fmmkr', 'template_blyrl6m', form.current, 'K--SsiSeribC-MKoR')
    //   .then(() => {
        try {
          const response = axios.post("http://localhost:8081/api/usuarios/registro", datosUsuarios);
          console.log(response.data);
          setDatosUsuarios({
            nombre: "",
            email: "",
            password: "",
            rol:"usuario"
          });
          Swal.fire(
            {
              icon: "success",
              title: "Usuario registrado con exito",
              showConfirmButton: false,
              timer: 1500,
            },
            setTimeout(() => {
              window.location.href = "/";
            }, 1500)
          );
        } catch (error) {
          console.log(error);
        }
      // }, (error) => {
      //     console.log(error.text);
      // });
  };


  const [datosUsuarios, setDatosUsuarios] = useState({
    nombre: "",
    email: "",
    password: "",
    rol:"usuario"
  });


  const handleChange = (e) => {
    setDatosUsuarios({ ...datosUsuarios, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = axios.post("http://localhost:8080/users", datosUsuarios);
  //     console.log(response.data);
  //     setDatosUsuarios({
  //       nombre: "",
  //       email: "",
  //       password: "",
  //     });
  //     Swal.fire(
  //       {
  //         icon: "success",
  //         title: "Usuario registrado con exito",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       },
  //       setTimeout(() => {
  //         window.location.href = "/inicio";
  //       }, 1500)
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
    <Container>

      {/* <form ref={form} onSubmit={handleSubmit}> */}
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            value={datosUsuarios.nombre}
            onChange={handleChange}
            name="nombre"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={datosUsuarios.email}
            onChange={handleChange}
            name="email"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={datosUsuarios.password}
            onChange={handleChange}
            name="password"
          ></input>
        </div>
          <input
            type="hidden"
            className="form-control"
            value={datosUsuarios.rol}
            name="rol"
          ></input>
        <button type="submit" value="send" className="btn btn-primary">
          Registrar
        </button>
      </form>
      </Container>
    </>
  );
};

export default Registro;
