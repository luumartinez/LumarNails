import { useContext, useState, useEffect } from "react";
import "./navbar.css";
import { UsuariosContexto } from "../../context/UsuariosContext";
import { NavDropdown, Navbar, Container, Nav, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "../login/Login";

import FormTurnos from "../turnos/FormTurnos";

const NavbarWeb = () => {
  const { logOut } = useContext(UsuariosContexto);
  const usuarioIngresado = JSON.parse(localStorage.getItem("usuario"));

  const [fondoNavbar, setFondoNavbar] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showTurnos, setShowTurnos] = useState(false);
  const handleCloseTurnos = () => setShowTurnos(false);
  const handleShowTurnos = () => setShowTurnos(true);

  useEffect(() => {
    const cambiarFondoNabar = () => {
      if (window.scrollY > 0) {
        setFondoNavbar(true);
      } else {
        setFondoNavbar(false);
      }
    };

    window.addEventListener("scroll", cambiarFondoNabar);
    return () => {
      window.removeEventListener("scroll", cambiarFondoNabar);
    };
  }, []);

  return (
    <>
      <Navbar
        className={`navbarPag ${fondoNavbar ? "solid" : "transparent"}`}
        expand="lg"
      >
        <Container fluid>
          <Nav.Link className="contenedorImgLogo" href="/">
            <img
              className="logoLumar"
              src="src/img/LogoLumarRect.png"
              alt="logo Lumar nails"
            />
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="barraTexto">
              <NavDropdown title="TIENDA" id="basic-nav-dropdown">
                <NavDropdown.Item href="/servicios">SERVICIOS</NavDropdown.Item>
                <NavDropdown.Item href="/tienda">PRODUCTOS</NavDropdown.Item>
              </NavDropdown>
              {usuarioIngresado?.rol === "admin" ? (
                <>
                  <Nav.Link className="nav-link" href="/administracion">
                    ADMINISTRACIÓN
                  </Nav.Link>
                </>
              ) : null}
              {usuarioIngresado ? (
                <>
                  <Nav.Link className="nav-link" onClick={handleShowTurnos}>
                    TURNOS
                  </Nav.Link>
                  <Nav.Link className="logoutBot" onClick={logOut}>
                    <FontAwesomeIcon icon="fa-solid fa-door-open" size="lg" />
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link className="nav-link" onClick={handleShowLogin}>
                    TURNOS
                  </Nav.Link>
                  <Nav.Link className="nav-link " href="/registro">
                    REGISTRO
                  </Nav.Link>

                  <Nav.Link onClick={handleShowLogin}>
                    <FontAwesomeIcon
                      className="iconoLogin"
                      icon="fa-solid fa-right-to-bracket"
                      size="lg"
                    />
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLogin} size="md" onHide={handleCloseLogin}>
        <Modal.Body className="contenedorBodyLog">
          <Login />
        </Modal.Body>
      </Modal>

      <Modal show={showTurnos} onHide={handleCloseTurnos}>
        <Modal.Body className="bodyModalTurnos">
          <FormTurnos />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarWeb;
