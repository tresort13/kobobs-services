import Container from "react-bootstrap/esm/Container";
import { Link,useNavigate} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import {useEffect,useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import { useMediaQuery } from 'react-responsive';
import Button from "react-bootstrap/Button";
import Offcanvas from 'react-bootstrap/Offcanvas';




function HeaderHome(props)
{
    const [theTime, setTheTime] = useState(new Date().toLocaleString())
    const isDesktop = useMediaQuery({
      query: "(min-width: 1224px)"
    });
    const isMobileOrTablet = useMediaQuery({
      query: "(max-width: 1224px)"
    });

    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 1000)
        
        return () => clearInterval(interval)
      }, [])

      const logout = ()=>
      {
        window.localStorage.setItem("langue", JSON.stringify(""))
        navigate('/')
      }
    return (
     <div>
    {isDesktop && <Container fluid className="bg-dark mx-auto">
    <Row>
        <Col xs={3} className="my-auto mx-auto text-start">
          <a href="/menu_envoie" style={{textDecoration:"none"}}>
          <Image  src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:130}}></Image>
          </a>
        </Col>
        <Col xs={5} className="my-auto mx-auto my-auto text-end">
          <Link to="/menu_envoie" style={{textDecoration:"none"}}>
          <p className="display-6 text-secondary">KOBO BUSINESS SERVICES</p>
          </Link>
         
          
        </Col>
        <Col xs={4} className="my-auto mx-auto text-end ">
         <div>
           <pre className="text-dark display-6" style={{fontSize: 20}}><Image className="navbar-brand rounded-circle" src={require('./login.jpeg')} type="button" alt="profil" style={{width:40}} ></Image><span ><i className="couleur2"> Boyeyi Malamu </i> </span><span className="separateur text-white"></span> <a href="" style={{textDecoration:"none"}}><span className="couleur2"><i>Welcome</i></span></a></pre>
           <i><pre className="couleur2 display-6 timing text-center" style={{fontSize: 15}}>{theTime}</pre></i>
        </div>  
        </Col>
    </Row>
   
  
    <Offcanvas show={show} onHide={handleClose} className="bordure " style={{height:300}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 text-secondary text-end"><b><u>Menu</u></b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <Nav.Link href="/menu_envoie"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning'><i>Nzonga Na ebamdeli</i></Button></Nav.Link>
        <Nav.Link href="/"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning'><i>Pona munoko mususu</i></Button></Nav.Link>
      </Nav>

        </Offcanvas.Body>
      </Offcanvas>
   </Container>}


   {isMobileOrTablet && <Container className="pt-2 bg-dark" fluid >
    <Row>
        
        <Col xs={"auto"} className="mx-auto my-auto text-center">
        <a href="#" style={{textDecoration:"none"}}>
          <Image  src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:150}}></Image>
          </a>
        </Col>
     </Row>

    <Row className="mt-2">
        

        <Col xs={"auto"} className=" mx-auto my-auto text-end">
         <div>
           <pre className="text-dark display-6 text-end" style={{fontSize: 20}}><span ><i className="couleur2">Boyeyi Malamu</i> </span><span className="separateur couleur2"></span><a href="" style={{textDecoration:"none"}}><span className="couleur2"><i onClick={logout}> Welcome</i></span></a></pre>
           <i><pre className="couleur2 display-6  text-end" style={{fontSize: 15}}>{theTime}</pre></i>
        </div>  
        </Col>  
    </Row>
   
    <Offcanvas show={show} onHide={handleClose} className="bordure " style={{height:300}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 text-secondary text-end"><b><u>Menu</u></b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <Nav.Link href="/menu_envoie"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning'><i>Nzonga Na ebamdeli</i></Button></Nav.Link>
        <Nav.Link href="/"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-warning'><i>Pona munoko mususu</i></Button></Nav.Link>
      </Nav>

        </Offcanvas.Body>
      </Offcanvas>
    
   </Container>}
   </div>

    )
}

export default HeaderHome;