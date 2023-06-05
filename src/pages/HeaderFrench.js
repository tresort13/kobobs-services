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
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ClipLoader from "react-spinners/ClipLoader";




function HeaderFrench(props)
{
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow4, setModalShow4] = React.useState(false);
  const [modalShow5, setModalShow5] = React.useState(false);
  const [modalShow6, setModalShow6] = React.useState(false);
  
  const [theTime, setTheTime] = useState(new Date().toLocaleString())
  const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [show2, setShow2] = useState(false);

   

  
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const showLogin = ()=>setModalShow(true);
    
    const openRegister = ()=>{
      setModalShow(false)
      setModalShow4(true)
    }

    const logout = ()=>
    {
      window.localStorage.setItem("username", JSON.stringify(""))
      window.localStorage.setItem("isAdmin", false)
      window.localStorage.setItem("isLogged", false)
      window.localStorage.setItem("isStaff", false)
      window.location.reload();
     // navigate('/')
      
    }

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
    {isDesktop && <Container fluid className=" mx-auto mt-2" >
    <Row>
    <Col xs={2} className="my-auto mx-auto text-center justify-content-center">
          <Link to="/home_french" style={{textDecoration:"none"}}>
          <Image  src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:130}}></Image>
          </Link>
        </Col>

        <Col xs={2} className="my-auto mx-auto text-start">
        {[false].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-1">
          <Container>
            <Navbar.Toggle className="couleur"   aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start" style={{height:550}} >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">  
                <NavDropdown.Divider />
                <Nav.Link href="/home_french"><b> <pre>Accueil</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link ><b onClick={handleShow}> <pre>envoyer l'argent</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/form_envoie_abonne_id_french"><b> <pre>J'ai oublié mon code abonné ?</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link  href="/form_find_code_retrait_french"> <b><pre>J'ai oublié mon code de retrait ?</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link ><b onClick={handleShow2} > <pre>Contacter nous</pre></b></Nav.Link>
                </Nav>     
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </Col>

        <Col xs={2} className="my-auto mx-auto my-auto text-start">
          <Link to="/home_french" style={{textDecoration:"none"}}>
          <p className="display-6 text-secondary"></p>
          </Link>
        </Col>

        { props.isLogged === true ?  <Col xs={4} className="my-auto  my-auto text-end">
        <Link to="/" style={{textDecoration:"none"}}>
        <Button variant='outline-light'  className='btn btn-outline-light btn-lg'>Bonjour, <strong className='textUpper'>{props.username}</strong></Button>
          </Link>
          <Link to="/" style={{textDecoration:"none",marginLeft:10}}>
          <Button onClick={logout} style={{marginLeft:10}}  className='btn--dark-orange btn2 rounded zoom btn-lg'>Deconnexion</Button>
          </Link>
        </Col> :
        <Col xs={4} className="my-auto  my-auto text-end">
        <Link to="" style={{textDecoration:"none"}}>
          <Button onClick={showLogin}  className='btn2 btn--blue rounded zoom btn-lg '>Connexion </Button>
          </Link>
          <Link to="" onClick={()=>openRegister()} style={{textDecoration:"none",marginLeft:10}}>
          <Button  className='btn--dark-orange btn2 rounded zoom btn-lg'>Créer Compte</Button>
          </Link>
        </Col>
        }
        
        <Col xs={2} className="my-auto mx-auto text-end justify-content-center">
        <div className="text-end text-light">
          <a href="#" style={{textDecoration:"none",textDecorationColor:"none"}}>
            <Dropdown>
             <Dropdown.Toggle as={"p"} className="couleur2" id="dropdown-basic">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/></svg>
               <span style={{paddingLeft:5}}>Français</span>
             </Dropdown.Toggle>

             <Dropdown.Menu>
             <Dropdown.Item href="/home_french">Français</Dropdown.Item>
             <NavDropdown.Divider />
             <Dropdown.Item href="/">English</Dropdown.Item>
             <NavDropdown.Divider />
             <Dropdown.Item href="/home_lingala">Lingala</Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
            </a>
           </div>

          <div>
          <i><pre className="text-light display-6  text-end" style={{fontSize: 15}}>{theTime}</pre></i>
          </div>
        </Col>
    </Row>




    <Offcanvas show={show} onHide={handleClose}  style={{height:300}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 couleur2 text-center"><b><u>envoyer l'argent </u></b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <Nav.Link href="/form_envoie_client_french"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-dark'><i className='text-light'>Nouveau client</i></Button></Nav.Link>
        <Nav.Link href="/form_envoie_abonne_id_french"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-dark'><i className='text-light'>Je suis déjà abonné</i></Button></Nav.Link>
         </Nav>
        </Offcanvas.Body>
         </Offcanvas>

         <Offcanvas show={show2} onHide={handleClose2}  style={{height:300}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 text-secondary text-center"><b><u>Contacter nous </u></b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <p className='couleur2'><b>Numéro de téléphone : </b> <b className='text-dark'>00447417588363</b>   
        </p>
        <p className='couleur2'><b>Email : </b> <b className='text-dark'>gisele.makaba@kobobs.com</b>   
        </p>
         </Nav>
        </Offcanvas.Body>
         </Offcanvas>
    
   </Container>}


   {isMobileOrTablet && <Container className="pt-2" fluid >
    <Row>
        
        <Col xs={6} className="mx-auto my-auto text-start">
        <a href="/home_french" style={{textDecoration:"none"}}>
          <Image  src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:80}}></Image>
          </a>
        </Col>
     

    
        <Col xs={6} className=" mx-auto my-auto text-start ">
        {[false].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-1">
          <Container className='justify-content-end'>
            <Navbar.Toggle className="couleur"   aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start" style={{height:550}} >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            <div className="text-start couleur2">
           <a href="#" style={{textDecoration:"none",textDecorationColor:"none"}}>
            <Dropdown>
             <Dropdown.Toggle as={"p"} className="couleur2" id="dropdown-basic">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/></svg>
               <span style={{paddingLeft:5}}>Français</span> 
             </Dropdown.Toggle>

             <Dropdown.Menu>
             <Dropdown.Item href="/home_french">Français</Dropdown.Item>
             <NavDropdown.Divider />
             <Dropdown.Item href="/">English</Dropdown.Item>
             <NavDropdown.Divider />
             <Dropdown.Item href="/home_lingala">Lingala</Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
            </a>
           </div>
           <div>
            <Link to="/" style={{textDecoration:"none"}}>
            <Button  className='btn2 btn--blue rounded zoom btn-lg '>Connexion </Button>
            </Link>
            <Link to="/" style={{textDecoration:"none",marginLeft:10}}>
            <Button  className='btn--dark-orange btn2 rounded zoom btn-lg'>Créer Compte</Button>
            </Link>
           </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">  
                <NavDropdown.Divider />
                  <Nav.Link href="/home_french"><b> <pre>Accueil</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link ><b onClick={handleShow}> <pre>envoyer l'argent</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/form_envoie_abonne_id_french"><b> <pre>J'ai oublié mon code abonné ?</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/form_find_code_retrait_french"><b><pre>J'ai oublié mon code de retrait ?</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link ><b onClick={handleShow2} > <pre>Contacter nous</pre></b></Nav.Link>
                </Nav>     
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </Col>
    </Row>
   


    <Offcanvas show={show} onHide={handleClose}  style={{height:300}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 couleur2 text-center"><b><u>envoyer l'argent </u></b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <Nav.Link href="/form_envoie_client_french"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-dark'><i className='text-light'>Nouveau client</i></Button></Nav.Link>
        <Nav.Link href="/form_envoie_abonne_id_french"><Button style={{width:300,height:50}} className='btn-lg rounded-pill zoom btn-dark'><i className='text-light'>Je suis déjà abonné</i></Button></Nav.Link>
         </Nav>
        </Offcanvas.Body>
         </Offcanvas>

         <Offcanvas show={show2} onHide={handleClose2}  style={{height:300}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-end mx-auto"><i className="display-6 text-secondary text-center"><b><u>Contacter nous </u></b></i> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
        <p className='couleur2'><b>Numéro de téléphone : </b> <b className='text-dark'>00447417588363</b>   
        </p>
        <p className='couleur2'><b>Email : </b> <b className='text-dark'>gisele.makaba@kobobs.com</b>   
        </p>
         </Nav>
        </Offcanvas.Body>
         </Offcanvas>

   </Container>}
   <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} setModalShow={setModalShow} setModalShow2={setModalShow2} setModalShow3={setModalShow3}  setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} openRegister={openRegister} />
   <MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
   <MyVerticallyCenteredModal3 show={modalShow3} onHide={() => setModalShow3(false)} />
   <MyVerticallyCenteredModal4 show={modalShow4} onHide={() => setModalShow4(false)} setModalShow2={setModalShow2} setModalShow4={setModalShow4} setModalShow5={setModalShow5} setModalShow6={setModalShow6}/>
   <MyVerticallyCenteredModal5 show={modalShow5} onHide={() => setModalShow5(false)} setModalShow={setModalShow} setModalShow5={setModalShow5}/>
   <MyVerticallyCenteredModal6 show={modalShow6} onHide={() => setModalShow6(false)} />
   </div>

    )
}

function MyVerticallyCenteredModal(props) {

  const [state,setState] = useState({
    credentials :{
        username : '',
        password : ''
    }})

  const [visible,setVisible] = useState(false)

    

     //login implimentation
     const navigate = useNavigate()
    
     const connection = (e)=>
     {
       console.log(state.credentials)
        props.setModalShow2(true)
         fetch('https://kobobsapi.herokuapp.com/api/login/', {
             method: 'POST',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify(state.credentials)
           })
           .then( data => data.json())
           .then(
             data => {
              console.log(data) 
              props.setModalShow(false)
               props.setModalShow2(false)
               props.setModalShow3(false)
              console.log('you are connected') 
               
               if (data.username === state.credentials.username)
               {
 
                 props.setUsername(data.first_name)
                 props.setIsadmin(data.is_superuser)
                 props.setIsStaff(data.is_staff)
                 props.setIsLogged(true)
                 console.log(data.is_superuser)
                 setState({credentials:{username :data.username}})
                  
                 navigate('/home_french')
                 console.log('you are connected')
               } 
               else
               {
                props.setModalShow(true)
                props.setModalShow2(false)
                props.setModalShow3(true)
                navigate('/home_french')
               }
               
               
               
             }
           )
           .catch( (error) =>
             {
              props.setModalShow2(false)
              props.setModalShow3(true)
               //setMessage("accès réfusé")
             //  navigate('/')
             } )
     }
 
     const inputChanged = (event)=>
     {
          const cred = state.credentials;
          cred[event.target.name] = event.target.value;
          setState({credentials:cred})
     }
 
    
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Connexion
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
    <Row className='justify-content-start'>
        <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email"  name="username"
        value ={state.credentials.username} onChange={inputChanged} autoFocus/>
        
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-start'>
       {visible===false ? <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Control type="password" placeholder="Mot de passe" name="password"
         value ={state.credentials.password} onChange={inputChanged} /> 
         </Form.Group>
        </Col> :
        <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Control type="text" placeholder="Mot de passe" name="password"
         value ={state.credentials.password} onChange={inputChanged} /> 
         </Form.Group>
        </Col>
        }



       { visible===false ? <Col xs={1} className='justify-content-start text-start' >
       <span onClick={()=>setVisible(true)}>
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-eye-slash-fill text-dark" viewBox="0 0 16 16">
        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
        </svg>
       </span>

        </Col> :
        <Col xs={1} className='justify-content-start text-start' >
        <span onClick={()=>setVisible(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
        </svg>
        </span>
 
         </Col>
        }
    </Row>
  
    <Row className='justify-content-start pb-3'>
        <Col  xs={6}>    
        <Link to="" style={{color:'white',textDecorationLine:'none'}}> 
        
        <Button variant="outline-warning" type="submit" onClick={e=>connection(e)}>
        <b>connexion</b>
        </Button>
        </Link>
        </Col>
    </Row>
</Form>
<a href='https://kobobsapi.herokuapp.com/api/reset_password_french/'  className='text-dark'><strong> Mot de passe oublié ?</strong></a>
<p className='text-dark mt-3'>vous n'avez pas un compte ? <span> <Link to='' onClick={()=>props.openRegister()}><strong> S'enregistrer</strong></Link> </span></p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Veuillez Patienter...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ClipLoader color={"#ff8c00"} loading={true} size={150} /> 
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}


function MyVerticallyCenteredModal3(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Echec connexion
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-danger'><b>désolé mot de passe ou email incorrect !! </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.onHide}>ok</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal4(props) {

  const [state,setState] = useState({
    registrationInfo :{
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        password : ''
    }})

  const [visible,setVisible] = useState(false)

    

     //login implimentation
     const navigate = useNavigate()
    
     const registration = (e)=>
     {
       console.log(state.registrationInfo)
        props.setModalShow2(true)
         fetch('https://kobobsapi.herokuapp.com/api/register/', {
             method: 'POST',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify(state.registrationInfo)
           })
           .then( data => data.json())
           .then(
             data => {
               if(data.confirmMessage ==="registered")
               {
                console.log(data) 
                props.setModalShow2(false)
                 props.setModalShow4(false)
                 props.setModalShow5(true)
                console.log('you are registered sucessfully !!')   

               }
               else{
                props.setModalShow2(false)
                props.setModalShow6(true)
               }
              
             }
           )
           .catch( (error) =>
             {
              props.setModalShow2(false)
              props.setModalShow6(true)
               //setMessage("accès réfusé")
             //  navigate('/')
             } )
     }
 
     const inputChanged = (event)=>
     {
          const cred = state.registrationInfo;
          cred[event.target.name] = event.target.value;
          setState({registrationInfo:cred})
     }
 
    
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enregistrement Compte
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
    <Row className='justify-content-start'>
        <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Veuillez entrer votre Email"  name="email"
        value ={state.registrationInfo.email} onChange={inputChanged} autoFocus/>
        
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-start'>
        <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Veuillez entrer votre prénom"  name="first_name"
        value ={state.registrationInfo.first_name} onChange={inputChanged} />    
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-start'>
        <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Veuillez entrer votre nom"  name="last_name"
        value ={state.registrationInfo.last_name} onChange={inputChanged} />    
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-start'>
        <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Veuillez entrer votre téléphone"  name="phone"
        value ={state.registrationInfo.phone} onChange={inputChanged} />    
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-start'>
       {visible===false ? <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Control type="password" placeholder="Mot de passe" name="password"
         value ={state.registrationInfo.password} onChange={inputChanged} /> 
         </Form.Group>
        </Col> :
        <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Control type="text" placeholder="Mot de passe" name="password"
         value ={state.registrationInfo.password} onChange={inputChanged} /> 
         </Form.Group>
        </Col>
        }



       { visible===false ? <Col xs={1} className='justify-content-start text-start' >
       <span onClick={()=>setVisible(true)}>
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-eye-slash-fill text-dark" viewBox="0 0 16 16">
        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
        </svg>
       </span>

        </Col> :
        <Col xs={1} className='justify-content-start text-start' >
        <span onClick={()=>setVisible(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
        </svg>
        </span>
 
         </Col>
        }
    </Row>
  
    <Row className='justify-content-start pb-3'>
        <Col  xs={6}>    
        <Link to="" style={{color:'white',textDecorationLine:'none'}}> 
        
        <Button variant="warning" type="submit" onClick={e=>registration(e)}>
        <b>soumettre</b>
        </Button>
        </Link>
        </Col>
    </Row>
</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal5(props) {

  const showLogin2 = ()=>{
    props.setModalShow5(false)
    props.setModalShow(true)
  }
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         l'enregistrement de votre compte a réussi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"  className="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
        <p className='text-success mt-3'><b>Merci de nous avoir choisi</b>   
        </p>
        <Link to=''><strong onClick={()=>showLogin2()}>connexion</strong></Link>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.onHide}>fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal6(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
           echec enregistrement
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-danger'><b>désolé votre a enregistrement a échoué Veuillez récommencer en rempliçant correctement !! </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.onHide}>fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default HeaderFrench;