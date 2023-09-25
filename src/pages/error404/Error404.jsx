import "./error404.css";
import imgError from "../../img/fondoError.jpg";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>

      <div className="contenedorPagError">
        <div className="contenedorTextoError">
          <h1 className="textoError">ERROR</h1>
          <h1 className="texto404">404</h1>
          <Link to="/" className="linkError">VOLVER AL SITIO</Link>
        </div>
      </div>
    </>
  );
};

export default Error404;
