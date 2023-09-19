import Clima from "../../components/clima/Clima";
import imagenEsmalte from "../../img/esmaltePagPpal.jpg";
import "./inicio.css";
import videoEsmaltado from "../../img/esmaltadovideo.mp4";
import imagenServicios from "../../img/serviciosLumar.jpg";
import imagen1 from "../../img/coloresNails.jpg";
import imagen2 from "../../img/floresNails.jpg"
import imagen3 from "../../img/descarga.jpg";
import imagen4 from "../../img/degradeNails.jpg";
import imagen5 from "../../img/nailsRosas.jpg";

const Inicio = () => {
  return (
    <>
      <div className="contenedorPagPpal container-fluid">
        <div className="contenedorEncabezadoPpal container-fluid">
          <div className="contendorPpalTitulo">
          <div className="contenedorTitulo">
            <h1 className="tituloPpal">
              MIMOS PARA TUS MANOS,
              <br></br>
              AMOR POR TUS UÑAS
            </h1>
          </div>
          </div>
          <div className="contenedorVideo">
            <video
              className="videoPpal"
              src={videoEsmaltado}
              autoPlay
              loop
              muted
            ></video>
          </div>

          {/* <div className="contenedorTitulo">
            <h1 className="tituloPpal">
              MIMOS PARA TUS MANOS,
              <br></br>
              AMOR POR TUS UÑAS
            </h1>
          </div> */}
        </div>
        {/* <div>
          <Clima />
        </div> */}
        <div className="contenedorTarjetas mt-3">
          <div className="tarjetaInicio">
            <img
              src={imagenServicios}
              className="card-img-top"
              alt="servicio de esmaltado"
            />
            <div className="bodyTarjetaInicio">
              <h5 className="card-title d-flex justify-content-center">
                SERVICIOS
              </h5>
              <p className="card-text">
              This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <div className="contenedorBotonTarjeta">
                <button className="botonTarjeta" href="/tienda">
                  RESERVA TU TURNO
                </button>
                </div>
            </div>
          </div>
          <div className="tarjetaInicio">
            <img src={imagenEsmalte} className="card-img-top" alt="productos" />
            <div className="bodyTarjetaInicio">
              <h5 className="card-title d-flex justify-content-center">
                PRODUCTOS
              </h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
                </p>
                <div className="contenedorBotonTarjeta">
                <button className="botonTarjeta" href="/tienda">
                  IR A LA TIENDA
                </button>
                </div>
            </div>
          </div>
        </div>
        <div className="contenedorTendencias">
          <h1 className="tituloTendencias">TENDENCIAS</h1>
          <div className="imagenes1">
            <div className="contenedorImg1">
              <img className="imagen1" src={imagen1} />
            </div>
            <div className="contenedorImg2">
              <img className="imagen2" src={imagen2} />
            </div>
          </div>
          <div className="imagenes2">
            <div className="contenedorImg3">
              <img className="imagen3" src={imagen3} />
            </div>
            <div className="contenedorImg4">
              <img className="imagen4" src={imagen4} />
            </div>
            <div className="contenedorImg5">
              <img className="imagen5" src={imagen5} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
