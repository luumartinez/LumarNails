import "./footer.css";
import logoEsmalte from "../../img/pinceLumar.png";
import logoLumar from "../../img/LogoLumarRect.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="contenedorFooter">
        <div className="row">
          <div className="colum1">
            <h3 className="titCol1 d-flex justify-content-center mt-2">LUMAR NAILS</h3>
            <h5 className="d-flex justify-content-center">
              <FontAwesomeIcon
                icon="fa-solid fa-location-dot"
                className="logoUbi"
              />
             <a className="direccion" onClick={() =>
                  window.open("https://goo.gl/maps/N7fe7ZdDkcjQtgcr9")}>Lamadrid 117</a> 
            </h5>
          </div>
          <div className="colum2">
            {/* <img className="logoFoot" src={logoLumar} /> */}
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.034467953004!2d-65.20334722520273!3d-26.838855990120642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0641f5f0cb%3A0xf4e36bc175cef429!2sLamadrid%20117%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1693864072430!5m2!1ses-419!2sar"
              style={{border: "0", width:"600", height:"450" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
          <div className="colum3">
            <h5 className="titCol3 d-flex justify-content-center mt-2">
              SEGUINOS EN NUESTRAS REDES
            </h5>
            <div className="d-flex justify-content-center">
              <FontAwesomeIcon
                onClick={() =>
                  window.open("https://www.facebook.com/nailsLumar", "_blank")
                }
                icon={faFacebook}
                className="logoFb"
              />
              <FontAwesomeIcon
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/lumar.nailss/",
                    "_blank"
                  )
                }
                icon={faInstagram}
                className="logoIg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
