import Container from "react-bootstrap/esm/Container";
import { Link,useNavigate} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import {useEffect,useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { useMediaQuery } from 'react-responsive';
import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from "react-bootstrap/esm/Dropdown";




function Header(props)
{
    const [theTime, setTheTime] = useState(new Date().toLocaleString())
    const isDesktop = useMediaQuery({
      query: "(min-width: 1224px)"
    });
    const isMobileOrTablet = useMediaQuery({
      query: "(max-width: 1224px)"
    });
const working = (donne)=>
{
  props.changeVersion(donne)
  console.log(props.version)
}

    useEffect(() => {
        const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 1000)
        
        return () => clearInterval(interval)
      }, [])

      
   
    return (
     <div>
    {isDesktop && <Container fluid className="bg-dark mx-auto" >
    <Row>
    <Col xs={2} className="my-auto mx-auto text-center justify-content-center">
          <Link to="/home" style={{textDecoration:"none"}}>
          <Image  src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:130}}></Image>
          </Link>
        </Col>

        <Col xs={2} className="my-auto mx-auto text-start">
        {[false].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-1">
          <Container>
            <Navbar.Toggle className="couleur"   aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start" style={{height:550}} >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <pre className="display-6">Menu</pre>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown.Divider />
                  <Nav.Link href="/home"><b>Home</b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_envoie"><b>Envoi Argent</b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/form_retrait"><b>Retrait Argent</b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_gestion_abonne"><b>Gestion Client</b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_gestion_operation"><b>Gestion Operations</b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_gestion_recettes"><b>Gestion Recettes</b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_users"><b>Gestion Utilisateurs</b></Nav.Link>
                  <NavDropdown.Divider />


                 
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </Col>

        <Col xs={6} className="my-auto mx-auto my-auto text-start">
          <Link to="/" style={{textDecoration:"none"}}>
          <p className="display-6 text-secondary">KOBO BUSINESS SERVICES</p>
          </Link>
        </Col>
        
        <Col xs={2} className="my-auto mx-auto text-end justify-content-center">
        <div className="text-end couleur2">
           <Link to="" style={{textDecoration:"none"}}>
            <Dropdown>
             <Dropdown.Toggle as={"p"} className="couleur2" id="dropdown-basic">
                {props.version}
             </Dropdown.Toggle>

             <Dropdown.Menu>
             <Dropdown.Item onClick={working("Lingala")}>Lingala</Dropdown.Item>
             <Dropdown.Divider />
            <Dropdown.Item onClick={working("English")}>English</Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
           </Link>
           </div>

          <div>
          <i><pre className="couleur2 display-6  text-end" style={{fontSize: 15}}>{theTime}</pre></i>
          </div>
        </Col>
    </Row>
   
    
   </Container>}


   {isMobileOrTablet && <Container className="pt-2 bg-dark" fluid >
    <Row>
        
        <Col xs={"auto"} className="mx-auto my-auto text-center">
        <a href="#" style={{textDecoration:"none"}}>
          <Image  src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:80}}></Image>
          </a>
        </Col>
     </Row>

    <Row className="mt-2">
        <Col xs={"auto"} className=" mx-auto my-auto text-start ">
        {[false].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-1">
          <Container>
            <Navbar.Toggle className="couleur"   aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start" style={{height:550}} >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <pre className="display-6">Menu</pre>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown.Divider />
                  <Nav.Link href="/home"><b>Home</b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_envoie"><b>Envoi Argent</b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/form_retrait"><b>Retrait Argent</b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_gestion_abonne"><b>Gestion Client</b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_gestion_operation"><b>Gestion Operations</b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_gestion_recettes"><b>Gestion Recettes</b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/menu_users"><b>Gestion Utilisateurs</b></Nav.Link>
                  <NavDropdown.Divider />
                
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </Col>

        <Col xs={"auto"} className=" mx-auto my-auto text-end">
         
           <div className="text-end couleur2">
           <Link to="" style={{textDecoration:"none"}}>
            <Dropdown>
             <Dropdown.Toggle as={"p"} className="couleur2" id="dropdown-basic">
                {props.version}
             </Dropdown.Toggle>

             <Dropdown.Menu>
             <Dropdown.Item >Lingala</Dropdown.Item>
             <Dropdown.Divider />
            <Dropdown.Item >English</Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
           </Link>
           </div>

          <div>
          <i><pre className="couleur2 display-6  text-end" style={{fontSize: 15}}>{theTime}</pre></i>
          </div>
             
        </Col>  
    </Row>
   
    
   </Container>}
   </div>

    )
}

export default Header;