import {
  Button,
  Container,
  Offcanvas,
  Nav,
  Navbar,
} from 'react-bootstrap'
import { Theme, useTheme } from '../../context/Context'

import './style.scss'
export default function Navigation() {
  const { theme, setTheme } = useTheme()

  return (
    <Navbar bg={theme} className="navbar" expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Switch Themes
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#themeCyan">
                <Button
                  className="theme__btn purplebtn"
                  variant=""
                  onClick={() => setTheme(Theme.Purple)}
                >
                  P
                </Button>{' '}
                Purple
              </Nav.Link>
              <Nav.Link href="#themeBlue">
                <Button
                  className="theme__btn"
                  variant="primary"
                  onClick={() => setTheme(Theme.Blue)}
                >
                  B
                </Button>{' '}
                Blue
              </Nav.Link>
              <Nav.Link href="#themeGreen">
                <Button
                  className="theme__btn"
                  variant="success"
                  onClick={() => setTheme(Theme.Green)}
                >
                  G
                </Button>{' '}
                Green
              </Nav.Link>
              <Nav.Link href="#themeRed">
                <Button
                  className="theme__btn"
                  variant="danger"
                  onClick={() => setTheme(Theme.Red)}
                >
                  R
                </Button>{' '}
                Red
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}
