import TablaProductos from "../../components/productos/TablaProductos";
import { Container, Row, Col } from "react-bootstrap";
import "./administracion.css";
import TablaUsuarios from "../../components/usuarios/TablaUsuarios";

const Administracion = () => {
  return (
    <>
      <div className="contenedorPagAdm">
        <div className="contenedorContenido">
          <div className="contenedorTitAdm">
            <h1 className="tituloAdm">ADMINISTRACION</h1>{" "}
          </div>
          <div className="contenedorTablaProd">
            <div className="contenedorTitTablaProd">
              <h2>PRODUCTOS</h2>
            </div>
            <div className="tablaProd">
              <TablaProductos />
            </div>
          </div>
          <div className="contenedorTablaProd">
            <div className="contenedorTitTablaProd">
              <h2>USUARIOS</h2>
            </div>
            <div className="tablaProd">
              <TablaUsuarios />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Administracion;
