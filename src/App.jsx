import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Rutas from "../src/rutas/Rutas";
import Footer from "./components/footer/Footer";
import ProductosContexto from "./context/ProductosContext";
import UsuariosContexto from "./context/UsuariosContext";
import NavbarWeb from "./components/navbar/NavbarWeb";
import TablaUsuarios from "./components/usuarios/TablaUsuarios";
import TurnosContexto from "./context/TurnosContext";

const App = () => {
  return (
    <>
      <UsuariosContexto>
        <ProductosContexto>
          <TurnosContexto>
            <NavbarWeb />
            <Rutas />
            <Footer />
          </TurnosContexto>
        </ProductosContexto>
      </UsuariosContexto>
    </>
  );
};

export default App;
