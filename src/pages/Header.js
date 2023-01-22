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

    useEffect(() => {
        const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 1000)
        
        return () => clearInterval(interval)
      }, [])
      const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true); 
   
      
   
    return (
     <div>
    {isDesktop && <Container fluid className="bg-dark mx-auto" >
    <Row>
    <Col xs={2} className="my-auto mx-auto text-center justify-content-center">
          <Link to="/home_lingala" style={{textDecoration:"none"}}>
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
                  <pre className="display-6 couleur2">Menu</pre>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">  
                <NavDropdown.Divider />
                  <Nav.Link href="/home_lingala"><b><pre>Zonga na ebandeli</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link ><b onClick={handleShow}><pre>Tinda Mbongo</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/form_envoie_abonne_id"><b><pre>Na bosani code abonné na ngai ?</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/form_find_code_retrait_lingala"><b><pre>Na bosani code retrait na ngai ?</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link ><b onClick={handleShow2} ><pre>Contacter biso</pre></b></Nav.Link>
                </Nav>     
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </Col>

        <Col xs={6} className="my-auto mx-auto my-auto text-start">
          <Link to="/home_lingala" style={{textDecoration:"none"}}>
          <p className="display-6 text-secondary">KOBO BUSINESS SERVICES</p>
          </Link>
        </Col>
        
        <Col xs={2} className="my-auto mx-auto text-end justify-content-center">
        <div className="text-end couleur2">
           <a href="#" style={{textDecoration:"none",textDecorationColor:"none"}}>
            <Dropdown>
             <Dropdown.Toggle as={"p"} className="couleur2" id="dropdown-basic">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/></svg>
               <span style={{paddingLeft:5}}>Lingala</span>
             </Dropdown.Toggle>

             <Dropdown.Menu>
             <Dropdown.Item href="/home_lingala">Lingala</Dropdown.Item>
             <NavDropdown.Divider />
            <Dropdown.Item href="/">English</Dropdown.Item>
            <NavDropdown.Divider />
            <Dropdown.Item href="/home_french">Français</Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
            </a>
           </div>

          <div>
          <i><pre className="couleur2 display-6  text-end" style={{fontSize: 15}}>{theTime}</pre></i>
          </div>
        </Col>
    </Row>
   

    <Offcanvas show={show} onHide={handleClose}  style={{height:300}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 couleur2 text-center"><b><u>Tinda Mbongo </u></b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <Nav.Link href="/form_envoie_client"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-dark'><i className='text-light'>Mbala libiso na tinda Mbongo</i></Button></Nav.Link>
        <Nav.Link href="/form_envoie_abonne_id"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-dark'><i className='text-light'>Naza déjà abonné</i></Button></Nav.Link>
         </Nav>
        </Offcanvas.Body>
         </Offcanvas>

         <Offcanvas show={show2} onHide={handleClose2}  style={{height:300}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 text-secondary text-center"><b><u>Contacter nous </u></b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <p className='couleur2'><b>Numéro ya téléphone : </b> <b className='text-dark'>00447417588363</b>   
        </p>
        <p className='couleur2'><b>Email : </b> <b className='text-dark'>gisele.makaba@kobobs.com</b>   
        </p>
         </Nav>
        </Offcanvas.Body>
         </Offcanvas>
    
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
                  <pre className="display-6 couleur2">Menu</pre>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">  
                <NavDropdown.Divider />
                <Nav.Link href="/home_lingala"><b><pre>Zonga na ebandeli</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link ><b onClick={handleShow}><pre>Tinda Mbongo</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/form_envoie_abonne_id"><b><pre>Na bosani code abonné na ngai ?</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/form_find_code_retrait_lingala"><b><pre>Na bosani code retrait na ngai ?</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link ><b onClick={handleShow2} ><pre>Contacter biso</pre></b></Nav.Link>
                </Nav>     
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </Col>

        <Col xs={"auto"} className=" mx-auto my-auto text-end">
         
           <div className="text-end couleur2">
           <a href="#" style={{textDecoration:"none",textDecorationColor:"none"}}>
            <Dropdown>
             <Dropdown.Toggle as={"p"} className="couleur2" id="dropdown-basic">
                Lingala
             </Dropdown.Toggle>

             <Dropdown.Menu>
             <Dropdown.Item href="/home_lingala">Lingala</Dropdown.Item>
             <NavDropdown.Divider />
            <Dropdown.Item href="/">English</Dropdown.Item>
            <NavDropdown.Divider />
            <Dropdown.Item href="/home_french">Français</Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
            </a>
           </div>

          <div>
          <i><pre className="couleur2 display-6  text-end" style={{fontSize: 15}}>{theTime}</pre></i>
          </div>
             
        </Col>  
    </Row>
   
    <Offcanvas show={show} onHide={handleClose}  style={{height:300}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 couleur2 text-center"><b><u>envoyer l'argent </u></b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <Nav.Link href="/form_envoie_client"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-dark'><i className='text-light'>Mbala libiso na tinda Mbongo</i></Button></Nav.Link>
        <Nav.Link href="/form_envoie_abonne_id"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-dark'><i className='text-light'>Naza déjà abonné</i></Button></Nav.Link>
         </Nav>
        </Offcanvas.Body>
         </Offcanvas>

         <Offcanvas show={show2} onHide={handleClose2}  style={{height:300}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 text-secondary text-center"><b><u>Contacter Biso </u></b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <p className='couleur2'><b>Numéro ya téléphone : </b> <b className='text-dark'>00447417588363</b>   
        </p>
        <p className='couleur2'><b>Email : </b> <b className='text-dark'>gisele.makaba@kobobs.com</b>   
        </p>
         </Nav>
        </Offcanvas.Body>
         </Offcanvas>
    
    
   </Container>}
   </div>

    )
}

export default Header;