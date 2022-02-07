import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import {
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button,
  Router,
  Route,
  Header,
  BootstrapHeader,
} from 'react-bootstrap';
import { MenuElements } from './components/MenuElements';

export default function App() {
  return (
    <>
      {' '}
      <Router>
        <Header />
        <BootstrapHeader />
        {MenuElements.map((item) => {
          return (
            <Route
              key={item.id}
              path={item.path}
              exact
              component={item.component}
            />
          );
        })}
      </Router>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Examen DI React.js</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Nav.Link>Inicio</Nav.Link>
                <Nav.Link>Ejercicio 1</Nav.Link>
                <Nav.Link>Ejercicio 2</Nav.Link>
                <Nav.Link>Ejercicio 3</Nav.Link>
                <NavDropdown title="Desplegable">
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Otra Acción</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Algo mas aqui</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form>
                <FormControl
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button>Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <h1>Desarrollo de Interfaces: Examen React.js </h1>
      <p>
        Resuelve los ejercicios propuestos en los distintos apartados de la
        barra de navegación. Para ello, haz un fork de este repositorio desde tu
        cuenta de Github y súbelo a la tarea de examen. El repositorio debe
        tener el nombre examen-react-Nombre-Apellido1, donde nombre y apellido
        son los tuyos.
      </p>
      <Ejercicio1 />
      <Ejercicio2 />
      <Ejercicio3 />
    </>
  );
}
