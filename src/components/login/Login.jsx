import { useContext, useState, useEffect } from "react";
import { UsuariosContexto } from "../../context/UsuariosContext";
import Swal from "sweetalert2";
import "./login.css";

const Login = () => {
  const { login } = useContext(UsuariosContexto);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
      login(email, password);
  };

  return (
    <>
      <h2 className="d-flex justify-content-center">INICIAR SESIÓN</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            maxLength="30"
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            pattern="[A-Za-z0-9]+"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            minLength="4"
            maxLength="15"
            required
          ></input>
        </div>
        <div className="contenedorBotonLog">
          <button type="submit" className="botonLogin">
            INGRESAR
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
