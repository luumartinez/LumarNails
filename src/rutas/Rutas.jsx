import { Routes, Route } from "react-router-dom"
import Registro from "../pages/registro/Registro"
import FormAgregarProd from "../components/productos/FormAgregarProd";
import Tienda from "../pages/tienda/Tienda"
import Administracion from "../pages/administracion/Administracion";
import Login from "../components/login/Login";
import Inicio from "../pages/inicio/Inicio";
import Servicios from "../pages/servicios/Servicios";
import Error404 from "../pages/error404/Error404";


const Rutas = () =>{
    return(
        <>
        <Routes>
        <Route path="/" element={<Inicio />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/agregarproductos" element={<FormAgregarProd />} /> */}
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/administracion" element={<Administracion />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/error404" element={<Error404 />} />

        </Routes>

        </>
    )
}

export default Rutas;