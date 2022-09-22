import React from 'react';
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


function HeaderEnglish(props)
{
    const [theTime, setTheTime] = useState(new Date().toLocaleString())

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    

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

      
   
    return (
     <div>
    {isDesktop && <Container fluid className="bg-dark mx-auto" >
    <Row>
    <Col xs={2} className="my-auto mx-auto text-center justify-content-center">
          <Link to="/" style={{textDecoration:"none"}}>
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
                  <Nav.Link href="/"><b>Home</b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link ><b onClick={handleShow}>Send Money</b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link ><b onClick={handleShow2} >Contact us</b></Nav.Link>
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
          <a href="#" style={{textDecoration:"none",textDecorationColor:"none"}}>
            <Dropdown>
             <Dropdown.Toggle as={"p"} className="couleur2" id="dropdown-basic">
                English
             </Dropdown.Toggle>

             <Dropdown.Menu>
             <Dropdown.Item href="/">English</Dropdown.Item>
             <NavDropdown.Divider />
             <Dropdown.Item href="/home_lingala">Lingala</Dropdown.Item>
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
   

    <Offcanvas show={show} onHide={handleClose}  style={{height:200}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 couleur2 text-center"><b><u>Send money </u></b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <Nav.Link href="/form_envoie_client_english"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-dark'><i className='text-light'>First time to send money</i></Button></Nav.Link>
        <Nav.Link href="/form_envoie_abonne_id_english"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-dark'><i className='text-light'>I am already a subscriber</i></Button></Nav.Link>
         </Nav>
        </Offcanvas.Body>
         </Offcanvas>

         <Offcanvas show={show2} onHide={handleClose2}  style={{height:300}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 text-secondary text-center"><b><u>Contact us </u></b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <p className='couleur2'><b>Mobile number : </b> <b className='text-dark'>00447417588363</b>   
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
        <a href="/" style={{textDecoration:"none"}}>
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
                <Nav.Link href="/"><b>Home</b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/form_retrait_info_english"><b>Track your transfer</b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link onClick={handleShow2} ><b>Contact us</b></Nav.Link>
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
                English
             </Dropdown.Toggle>

             <Dropdown.Menu>
             <Dropdown.Item href="/">English</Dropdown.Item>
             <NavDropdown.Divider />
             <Dropdown.Item href="/home_lingala">Lingala</Dropdown.Item>
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
   
    <Offcanvas show={show} onHide={handleClose}  style={{height:200}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 couleur2 text-center"><b><u>Send money </u></b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <Nav.Link href="/form_envoie_client_lingala"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-dark'><i className='text-light'>First time to send money</i></Button></Nav.Link>
        <Nav.Link href="/form_envoie_abonne_id_lingala"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-dark'><i className='text-light'>I am already a subscriber</i></Button></Nav.Link>
         </Nav>
        </Offcanvas.Body>
         </Offcanvas>

         <Offcanvas show={show2} onHide={handleClose2}  style={{height:300}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 text-secondary text-center"><b><u>Contact us </u></b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <p className='couleur2'><b>Mobile number :</b> <b className='text-dark'>00447417588363</b>   
        </p>
        <p className='couleur2'><b>Email :</b> <b className='text-dark'>gisele.makaba@kobobs.com</b>   
        </p>
         </Nav>
        </Offcanvas.Body>
         </Offcanvas>
    
   </Container>}
   </div>

    )
}



export default HeaderEnglish;