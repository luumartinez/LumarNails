import { useState, useRef, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import "./registro.css";
import videoReg from "../../img/tornoReg.mp4";
import { UsuariosContexto } from "../../context/UsuariosContext";

const Registro = () => {
  const form = useRef();

  const { usuarios } = useContext(UsuariosContexto);

  const [datosUsuarios, setDatosUsuarios] = useState
  ({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    rol: "usuario",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8081/api/usuarios/registro",
        datosUsuarios
      );
      console.log(response.status);
      if (response.status === 201) {
        setDatosUsuarios({
          nombre: "",
          apellido: "",
          email: "",
          password: "",
          rol: "usuario",
        });

        Swal.fire(
          {
            icon: "success",
            title: "Usuario registrado con éxito",
            showConfirmButton: false,
            timer: 1500,
            background: "#fed9ed ",
            color: "grey",
          },
          setTimeout(() => {
            window.location.href = "/";
          }, 1500)
        );
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          Swal.fire({
            icon: "error",
            title: "¡Error 404!",
            text: "No se puede registrar",
            background: "#fed9ed ",
            color: "grey",
          });
        }
        if (error.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "No se puede registrar",
            background: "#fed9ed ",
            color: "grey",
          });
        } else if (error.response.status === 409) {
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "El correo electronico ya se encuentra registrado",
            background: "#fed9ed ",
            color: "grey"
          });
        }
      }
    }
  };

  const handleChange = (e) => {
    setDatosUsuarios({ ...datosUsuarios, [e.target.name]: e.target.value });
  };

  const [errorNombre, setErrorNombre] = useState("");
  const [errorApellido, setErrorApellido] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const validacionDatosPerso = (datosPerso) => {
    const expReg = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{2,15}$/;
    return expReg.test(datosPerso);
  };

  const handleBlurNombre = () => {
    const nombreValido = validacionDatosPerso(datosUsuarios.nombre);

    if (!nombreValido) {
      setErrorNombre("Ingrese un nombre válido");
    } else {
      setErrorNombre("");
    }
  };

  const handleBlurApellido = () => {
    const apellidoValido = validacionDatosPerso(datosUsuarios.apellido);

    if (!apellidoValido) {
      setErrorApellido("Ingrese un apellido válido");
    } else {
      setErrorApellido("");
    }
  };

  const validacionEmail = (email) => {
    const expReg = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    return expReg.test(email);
  };

  const handleBlurEmail = () => {
    const emailValido = validacionEmail(datosUsuarios.email);
    if (!emailValido) {
      setErrorEmail("Ingrese un correo correcto");
    } else {
      setErrorEmail("");
    }
  };

  const validacionPassword = (password) => {
    const expReg = /^[A-Za-z0-9!?-]{4,12}$/;
    return expReg.test(password);
  };

  const handleBlurPassword = () => {
    const passwordValida = validacionPassword(datosUsuarios.password);
    if (!passwordValida) {
      setErrorPassword("Minimo 4 caracteres y maximo 12");
    } else {
      setErrorPassword("");
    }
  };

  return (
    <>
      <div className="contenedorPagRegistro container-fluid">
        <div className="contendorRegistro">
          <div className="contenedorFormReg">
            {/* <form ref={form} onSubmit={handleSubmit}> */}
            <form ref={form} onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  NOMBRE
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={datosUsuarios.nombre}
                  onChange={handleChange}
                  onBlur={handleBlurNombre}
                  name="nombre"
                  minLength="2"
                  maxLength="15"
                  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                  required
                ></input>
                <span className="errorMensaje">{errorNombre}</span>
              </div>

              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  APELLIDO
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={datosUsuarios.apellido}
                  onChange={handleChange}
                  onBlur={handleBlurApellido}
                  name="apellido"
                  minLength="2"
                  maxLength="15"
                  pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                  required
                ></input>
                <span className="errorMensaje">{errorApellido}</span>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  EMAIL
                </label>
                <input
                  type="email"
                  autoComplete="on"
                  className="form-control"
                  value={datosUsuarios.email}
                  onChange={handleChange}
                  onBlur={handleBlurEmail}
                  name="email"
                  minLength="7"
                  maxLength="30"
                  required
                ></input>
                <div>
                  <span className="errorMensaje">{errorEmail}</span>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  CONTRASEÑA
                </label>
                <input
                  type="password"
                  className="form-control"
                  value={datosUsuarios.password}
                  onChange={handleChange}
                  onBlur={handleBlurPassword}
                  // pattern="^[A-Za-z0-9!?-]$"
                  name="password"
                  minLength="4"
                  maxLength="12"
                  required
                ></input>
                <div>
                  <span className="errorMensaje">{errorPassword}</span>
                </div>
              </div>
              <input
                type="hidden"
                className="form-control"
                value={datosUsuarios.rol}
                name="rol"
              ></input>
              <div className="contenedorBotonReg">
                <button type="submit" value="send" className="botonReg">
                  REGISTRAR
                </button>
              </div>
            </form>
          </div>
          <div className="contenedorVideoReg">
            <video
              className="videoReg"
              src={videoReg}
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;
