import { Routes, Route, Navigate } from "react-router-dom"
import Registro from "../pages/registro/Registro"
import FormAgregarProd from "../components/productos/FormAgregarProd";
import Tienda from "../pages/tienda/Tienda"
import Administracion from "../pages/administracion/Administracion";
import Login from "../components/login/Login";
import Inicio from "../pages/inicio/Inicio";
import Servicios from "../pages/servicios/Servicios";
import Error404 from "../pages/error404/Error404";


const Rutas = () =>{
    const usuarioLoguado = JSON.parse(localStorage.getItem("usuario"));
    const rolAdmin = usuarioLoguado ? usuarioLoguado.rol === "admin" : false;
    return(
        <>
        <Routes>
        <Route exact path="/" element={<Inicio />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tienda" onClick={<Login />} element={usuarioLoguado ? <Tienda />  : <Navigate to="/error404" />} />
            <Route path="/administracion" element= {rolAdmin ?  <Administracion />  : <Navigate to="/error404" />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/error404" element={<Error404 />} />
            <Route path="/*" element={<Error404 />} />

        </Routes>

        </>
    )
}

export default Rutas;