import { useContext } from "react";
import { Card } from "react-bootstrap";
import { ProductosContexto } from "../../context/ProductosContext";
import './cardProductos.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardProductos = () => {
  const { productos } = useContext(ProductosContexto);

  return (
    <>
      {/* {productos === undefined ? (
        <h1>No hay productos</h1>
      ) : (
        productos.map((producto) => {
          return (
            <div key={producto._id}>
              <div className="contenedorTarjeta">
              <Card className="cardTienda" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Precio: {producto.precio}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
            </div>
          );
        })
      )} */}
      <div className="contenedorTarjetasTienda">
      {productos === undefined ? (
        <h1>No hay productos</h1>
      ) : (
        <div className="contenedorTarjeta">
          {productos.map((producto) => (
            <Card key={producto._id} className="tarjetaTienda">
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  ${producto.precio}
                </Card.Subtitle>
                <button className="botonTarjetaTienda"><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default CardProductos;
