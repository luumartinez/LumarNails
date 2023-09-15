import CardProductos from "../../components/productos/CardProductos";
import { Container, Row, Col } from "react-bootstrap"

const Tienda = () => {
  return (
    <>
    <h1>TIENDA</h1>
      <Container>
        <Row>
          <Col>
            <CardProductos />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Tienda;
