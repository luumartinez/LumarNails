import { useContext } from "react";
import { Card } from "react-bootstrap";
import { ProductosContexto } from "../../context/ProductosContext";

const CardProductos = () => {
  const { productos } = useContext(ProductosContexto);

  return (
    <>
      {productos === undefined ? (
        <h1>No hay productos</h1>
      ) : (
        productos.map((producto) => {
          return (
            <div key={producto._id}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Precio: {producto.precio}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          );
        })
      )}
    </>
  );
};

export default CardProductos;
