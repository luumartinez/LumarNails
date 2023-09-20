import TablaProductos from "../../components/productos/TablaProductos";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./administracion.css";
import TablaUsuarios from "../../components/usuarios/TablaUsuarios";
import { useState } from "react";
import FormAgregarProd from "../../components/productos/FormAgregarProd";
import TablaTurnos from "../../components/turnos/TablaTurnos";

const Administracion = () => {

  const [showAgregar, setShowAgregar] = useState(false);
  const handleCloseAgregar = () => setShowAgregar(false);
  const handleShowAgregar = () => setShowAgregar(true);

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
              <div className="d-flex justify-content-center mb-3">         
              <button className="botonAgregarProd" onClick={handleShowAgregar}>AGREGAR PRODUCTO</button>
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
          <div className="contenedorTablaProd">
            <div className="contenedorTitTablaProd">
              <h2>TURNOS</h2>
            </div>
            <div className="tablaProd">
              <TablaTurnos />
            </div>
          </div>
        </div>
      </div>

      <Modal centered show={showAgregar} onHide={handleCloseAgregar}>
        <Modal.Body className="bodyModalEditProd">
          <FormAgregarProd handleCloseAgregar={handleCloseAgregar} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Administracion;
