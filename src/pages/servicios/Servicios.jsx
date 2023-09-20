import { Card, Button, Modal } from "react-bootstrap";
import imgSemi from "../../img/serviciosemi.jpg";
import imgRusa from "../../img/serviciorusa.jpg";
import imgLash from "../../img/serviciolash.jpg";
import "./servicios.css";
import { useState } from "react";
import FormTurnos from "../../components/turnos/FormTurnos";

const Servicios = () => {

  const [showTurnos, setShowTurnos] = useState(false)
  const handleCloseTurnos = () => setShowTurnos(false)
  const handleShowTurnos = () => setShowTurnos(true)

  return (
    <>
      <div className="contenedorPagServicios">
        <div className="contenedorServicios">
          <Card className="mb-3 tarjetaServicios">
            <div className="row g-0">
              <div className="col-md-7">
                <Card.Img
                  className="img-fluid rounded-start imgSemi"
                  src={imgRusa}
                />
              </div>
              <div className="col-md-5 d-flex align-items-center">
                <Card.Body className="bodyTarjetaServicios">
                  <Card.Title>
                    <h1 className="tituloTarjServ">MANICURIA RUSA</h1>
                  </Card.Title>
                  <Card.Text className="textoTarjServ">
                    Experimenta el lujo y la elegancia de una manicura rusa en
                    nuestras manos expertas. Con técnicas de precisión y
                    productos de alta calidad, te ofrecemos una experiencia
                    única en el cuidado de tus uñas. Disfruta de uñas hermosas y
                    duraderas con nuestra manicura rusa. ¡Reserva tu cita hoy
                    mismo y descubre el arte en cada detalle!
                  </Card.Text>
                  <button className="botonTurnoServicio" onClick={handleShowTurnos}>PEDIR TURNO</button>
                </Card.Body>
              </div>
            </div>
          </Card>
          <Card className="mb-3 tarjetaServicios">
            <div className="row g-0">
              <div className="col-md-5 d-flex align-items-center">
                <Card.Body>
                  <Card.Title>
                    <h1 className="tituloTarjServ">ESMALTADO SEMIPERMANENTE</h1>
                  </Card.Title>
                  <Card.Text className="textoTarjServ">
                    Descubre la belleza que perdura con nuestro esmaltado
                    semipermanente. Olvídate de retoques constantes y luce unas
                    uñas impecables durante semanas. Nuestra amplia gama de
                    colores y la calidad de nuestros productos te garantizan un
                    resultado espectacular. ¡Eleva tu estilo con un esmaltado
                    semipermanente que hace que tus uñas luzcan radiantes por
                    mucho más tiempo!
                  </Card.Text>
                  <button className="botonTurnoServicio"onClick={handleShowTurnos}>PEDIR TURNO</button>
                </Card.Body>
              </div>
              <div className="col-md-7">
                <Card.Img
                  className="img-fluid rounded-start imgRusa"
                  src={imgSemi}
                />
              </div>
            </div>
          </Card>
          <Card className="mb-3 tarjetaServicios">
            <div className="row g-0">
              <div className="col-md-7">
                <Card.Img
                  className="img-fluid rounded-start imgLash"
                  src={imgLash}
                />
              </div>
              <div className="col-md-5 d-flex align-items-center">
                <Card.Body className="bodyTarjetaServicios">
                  <Card.Title>
                    <h1 className="tituloTarjServ">LIFTING DE PESTAÑAS</h1>
                  </Card.Title>
                  <Card.Text className="textoTarjServ">
                    Despierta con pestañas irresistiblemente hermosas. Nuestro
                    servicio de lifting de pestañas resalta tu mirada de forma
                    natural y duradera. Olvídate de las pestañas postizas y el
                    rímel diario. Con el lifting de pestañas, tus ojos serán el
                    centro de atención sin esfuerzo. ¡Reserva ahora y descubre
                    la magia de unas pestañas encantadoras
                  </Card.Text>
                  <button className="botonTurnoServicio" onClick={handleShowTurnos}>PEDIR TURNO</button>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Modal show={showTurnos} onHide={handleCloseTurnos}>
        <Modal.Body className="bodyModalTurnos"><FormTurnos /></Modal.Body>
      </Modal>
    </>
  );
};

export default Servicios;
