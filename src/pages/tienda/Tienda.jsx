import CardProductos from "../../components/productos/CardProductos";
import { Container, Row, Col } from "react-bootstrap";
import "./tienda.css";
import imagenTienda from "../../img/imgTienda.jpg"

const Tienda = () => {
  return (
    <>
      <div className="contenedorPagTienda container-fluid">
        <div className="contenedorEncabezadoTienda container-fluid">
          <div className="contenedorMayorTituloTienda">
            <div className="contenedorTitTienda">
            <h1 className="tituloTienda">TIENDA</h1></div>
          </div>
          <div className="contenedorImgTienda">
            <img className="imgTienda" src={imagenTienda}/>
          </div>
        </div>
          <CardProductos />
      </div>
    </>
  );
};

export default Tienda;
