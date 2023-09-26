import { createContext, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

export const UsuariosContexto = createContext();

const UsersContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioIngresado, setUsuarioIngresado] = useState();

// GET
  const mostrarUsuarios = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/usuarios/traerusuarios"
      );
      setUsuarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  // POST

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:8081/api/usuarios/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const jwtToken = response.data.data.token;
        const jwtDecode = jwt_decode(jwtToken);

        const usuario = {
          id: jwtDecode.id,
          nombre: jwtDecode.nombre,
          rol: jwtDecode.rol,
        };

        localStorage.setItem("token", jwtToken);
        localStorage.setItem("usuario", JSON.stringify(usuario));
        setUsuarioIngresado(usuario);

        if (jwtDecode.rol === "admin") {
          window.location.href = "/administracion";
        } else {
          window.location.href = "/";
        }
      }
    } catch (error) {
      if (error.response.status >= 400) {
        Swal.fire({
          icon: "error",
          title: "Error al iniciar sesión",
          text: "Usuario y/o contraseña incorrectos",
          showConfirmButton: false,
          background: "#fed9ed ",
          color: "grey",
          timer:1200
        });
      }
    }
  };

  const logOut = () => {
    Swal.fire({
      icon: "warning",
      title: "¿Seguro que querés cerrar sesión?",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#89dc89",
      cancelButtonColor: "#e84e4e",
      background: "#fed9ed ",
      color: "grey",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("usuario");
        localStorage.removeItem("token");
        window.location.href = "/";
      } else if (result.isDenied) {
        return;
      }
    });
  };


  // PUT
  
  const editarUsuario = async(usuario) =>{
    try {
      await axios.put(`http://localhost:8081/api/usuarios/editUsuario/${usuario._id}`, usuario)
      await mostrarUsuarios()
    } catch (error
    ) {
      console.log(error)
    }
  };

  // DELETE

  const eliminarUsuario = async (id) =>{
    try {
      await axios.delete(`http://localhost:8081/api/usuarios//eliminarUsuario/${id}`);
      const usuarioEliminado = usuarios.filter((usuario)=> usuario._id !== id);
      setUsuarios(usuarioEliminado);
      // localStorage.removeItem(usuarioEliminado)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    mostrarUsuarios();
  }, []);

  return (
    <>
      <UsuariosContexto.Provider
        value={{
          usuarios,
          setUsuarios,
          logOut,
          mostrarUsuarios,
          login,
          editarUsuario,
          eliminarUsuario,
          usuarioIngresado,
        }}
      >
        {children}
      </UsuariosContexto.Provider>
    </>
  );
};

export default UsersContext;
