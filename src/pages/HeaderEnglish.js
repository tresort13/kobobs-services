import React from 'react';
import Container from "react-bootstrap/esm/Container";
import {Link,useNavigate} from  'react-router-dom';
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
import LoginBoxEnglish from './LoginBoxEnglish';
import ContactBoxEnglish from './ContactBoxEnglish';
import ChangePasswordBoxEnglish from './ChangePasswordBoxEnglish';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import SessionOutEnglish from './SessionOutEnglish';



function HeaderEnglish(props)
{
  const [show2, setShow2] = useState(false);
  const [modalShowNoValidDialog,setModalShowNoValidDialog] = useState(false)
  const [theTime, setTheTime] = useState(new Date().toLocaleString())

  const [count,setCount] = useState(0)

    const submit = ()=>
    {
              
        fetch('https://kobobsapi.herokuapp.com/api/getRetraitNonValideInfo/code retrait en attente de validation/', {
                method:'GET',
                headers: {'Content-Type': 'application/json'},
               // body: JSON.stringify(codeRetrait.infoCodeRetrait)
              })
              .then( res => res.json())
              .then(
                res => {  
                   setCount(res.length)
                   
                   console.log(res)
                }
              )
              .catch( (error) =>
                {
                    console.log(error)
                } )

    }

   /* useEffect(()=>
    {
       const interval =  setInterval(()=>submit(),1000);
        return () => clearInterval(interval)
    },[])*/

    useEffect(()=>
    {
      submit()
    },[])

   const contactUs = ()=>{
     props.setModalShowContact(true)
     
   }
   const openNoValidDialog = ()=>{
     setModalShowNoValidDialog(true)
   }
    
    const showLogin = ()=>props.setModalShow(true);
    
    const openRegister = ()=>{
      props.setModalShow(false)
      props.setModalShow4(true)
    }

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const logout = ()=>
    {
      window.localStorage.setItem("username", JSON.stringify(""))
      window.localStorage.setItem("isAdmin", false)
      window.localStorage.setItem("isLogged", false)
      window.localStorage.setItem("isStaff", false)
      window.localStorage.setItem("abonne",JSON.stringify({infoAbonne :{
        agent_id:'',
        nom_expediteur : '',
        prenom_expediteur : '',
        email_expediteur : '',
        numero_expediteur: '',
        pays_expediteur : 'UK',
        }}))
      window.location.reload();
     // navigate('/')
      
    }
    const passwordChange = ()=>{
      setShow2(false)
      props.setModalShowPasswordChange(true)
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
    {isDesktop && <Container fluid className="mx-auto mt-2" >
    <Row>
    <Col xs={2} className="my-auto mx-auto text-center justify-content-center">
          <Link to="/" style={{textDecoration:"none"}}>
          <Image  src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:130}}></Image>
          </Link>
        </Col>

       {props.isLogged === true ? <Col xs={2} className="my-auto mx-auto text-start">
        {[false].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-1">
          <Container>
            <Navbar.Toggle   className="couleur"   aria-controls={`offcanvasNavbar-expand-${expand}`} />
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
                  <Nav.Link href="/"><b><pre>Home</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/form_envoie_abonne_english"><b><pre>Send Money</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="/my_profil_english"><b><pre>check your historic</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link  href="/form_retrait_info_english"><b><pre>track  transfer</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link ><b onClick={contactUs} ><pre>Contact us</pre></b></Nav.Link>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </Col> :
        <Col xs={2} className="my-auto mx-auto text-start">
        {[false].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-1">
          <Container>
            <Navbar.Toggle   className="couleur"   aria-controls={`offcanvasNavbar-expand-${expand}`} />
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
                  <Nav.Link href="/"><b><pre>Home</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link ><b onClick={showLogin}><pre>Send Money</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link ><b onClick={contactUs} ><pre>Contact us</pre></b></Nav.Link>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </Col>
}


        
        { props.isLogged === true ? <Col xs={6} className="my-auto  my-auto text-end">
        {props.isAdmin ?
         count > 0 ? <Link to="/table_validation_english"><Badge className='m-0' bg="danger">{count}</Badge><span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="text-light bi bi-bell-fill mt-2 "  viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
        </svg></span></Link> : <Link to="" onClick={openNoValidDialog}><span><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="text-light bi bi-bell-fill mt-2 mx-2" viewBox="0 0 16 16">
        
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
        </svg></span></Link>
         :
        <span>
        </span>
         }
         
          <Button variant='outline-light' onClick={()=>handleShow2()}  className='btn btn-outline-light btn-lg'>Hello, <strong  className='textUpper'>{props.username}</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
         <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
         <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg></span></Button>
          
          <Button onClick={logout} style={{marginLeft:10}}  className='btn--dark-orange btn2 rounded zoom btn-lg'>Logout</Button>
          </Col>
             :
            <Col xs={6} className="my-auto  my-auto text-end">
         
            <Link to="" onClick={showLogin} style={{textDecoration:"none"}}>
              <Button  className='btn2 btn--blue rounded zoom btn-lg '>Login</Button>
              </Link>

              <Link to="" onClick={()=>openRegister()} style={{textDecoration:"none",marginLeft:10}}>
              <Button  className='btn--dark-orange btn2 rounded zoom btn-lg'>Sign Up</Button>
              </Link>
            </Col>
            }
        
        <Col xs={2} className="my-auto mx-auto text-end justify-content-center">
        <div className="text-end text-light">
          <a href="#" style={{textDecoration:"none",textDecorationColor:"none"}}>
            <Dropdown>
             <Dropdown.Toggle as={"p"} className="couleur2" id="dropdown-basic">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/></svg>
               <span style={{paddingLeft:5}}>English</span>
             </Dropdown.Toggle>

             <Dropdown.Menu>
             <Dropdown.Item onClick={()=>props.setLanguage2("english")}>English</Dropdown.Item>
             <NavDropdown.Divider />
            <Dropdown.Item onClick={()=>props.setLanguage2("lingala")}>Lingala</Dropdown.Item>
             <NavDropdown.Divider />
             <Dropdown.Item onClick={()=>props.setLanguage2("french")}>Français</Dropdown.Item>
          </Dropdown.Menu>
            </Dropdown>
            </a>


           </div>

          <div>
          <i><pre className="text-light display-6  text-end" style={{fontSize: 15}}>{theTime}</pre></i>
          </div>
        </Col>
    </Row>
   

   
   </Container>}


   {isMobileOrTablet && <Container className="pt-2" fluid >

    <Row className="">
    <Col xs={6} className="mx-auto my-auto text-start">
        <a href="/" style={{textDecoration:"none"}}>
          <Image  src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:80}}></Image>
          </a>
        </Col>

        {props.isLogged === true ?  <Col xs={4} className="text-end py-2"> <strong className='textUpper  btn btn-outline-light' onClick={()=>handleShow2()}>{props.username}</strong> </Col> :
        <Col xs={4}></Col>}

        {props.isLogged === true ? 
        <Col xs={2} className=" text-center">    
        {[false].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-1" >
          <Container className='justify-content-end' >
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
              <span style={{paddingLeft:5}}>English</span>
             </Dropdown.Toggle>

             <Dropdown.Menu>
             <Dropdown.Item onClick={()=>props.setLanguage2("english")}>English</Dropdown.Item>
             <NavDropdown.Divider />
             <Dropdown.Item onClick={()=>props.setLanguage2("lingala")}>Lingala</Dropdown.Item>
             <NavDropdown.Divider />
             <Dropdown.Item onClick={()=>props.setLanguage2("french")}>Français</Dropdown.Item>
             </Dropdown.Menu>
            </Dropdown>
            </a>
           </div>

        <div>
        <Button variant='outline-light'  className='btn btn-outline-dark btn-lg'>Hello, <strong className='textUpper'>{props.username}</strong> <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
         <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
         <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg></span></Button>
          
          <Button onClick={logout} style={{marginLeft:10}}  className='btn--dark-orange btn2 rounded zoom btn-lg'>Logout</Button>
        </div>



                </Offcanvas.Title>
          
              </Offcanvas.Header>
              <Offcanvas.Body>
                
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown.Divider />
                <Nav.Link href="/"><b><pre>Home</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="#"><b><pre>Send Money</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link href="#"><b><pre>track your transfer status</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link  href="#"><b><pre>lost your tracking number ?</pre></b></Nav.Link>
                  <NavDropdown.Divider />
                  <Nav.Link ><b onClick={contactUs} ><pre>Contact us</pre></b></Nav.Link>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>

          </Container>
        </Navbar>
      ))}
        </Col>:

<Col xs={2} className=" text-center">
{[false].map((expand) => (
<Navbar key={expand}  expand={expand} className="mb-1" >
  <Container className='justify-content-end' >
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
      <span style={{paddingLeft:5}}>English</span>
     </Dropdown.Toggle>

     <Dropdown.Menu>
     <Dropdown.Item onClick={()=>props.setLanguage2("english")}>English</Dropdown.Item>
             <NavDropdown.Divider />
             <Dropdown.Item onClick={()=>props.setLanguage2("lingala")}>Lingala</Dropdown.Item>
             <NavDropdown.Divider />
             <Dropdown.Item onClick={()=>props.setLanguage2("french")}>Français</Dropdown.Item>
     </Dropdown.Menu>
    </Dropdown>
    </a>
   </div>

<div>
<Link to="" onClick={showLogin} style={{textDecoration:"none"}}>
              <Button  className='btn2 btn--blue rounded zoom btn-lg '>Login</Button>
              </Link>

              <Link to="" onClick={()=>openRegister()} style={{textDecoration:"none",marginLeft:10}}>
              <Button  className='btn--dark-orange btn2 rounded zoom btn-lg'>Sign Up</Button>
   </Link>
</div>



        </Offcanvas.Title>
  
      </Offcanvas.Header>
      <Offcanvas.Body>
        
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <NavDropdown.Divider />
        <Nav.Link href="/"><b><pre>Home</pre></b></Nav.Link>
          <NavDropdown.Divider />
          <Nav.Link ><b onClick={showLogin}><pre>Send Money</pre></b></Nav.Link>
          <NavDropdown.Divider />
          <Nav.Link ><b onClick={contactUs} ><pre>Contact us</pre></b></Nav.Link>
        </Nav>
       
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
))}
</Col>
}

        {/*<Col xs={"auto"} className=" mx-auto my-auto text-end">
         
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
             
        </Col>  */}
        

    </Row>
   
   </Container>}
   <Offcanvas show={show2} onHide={handleClose2} placement='end'  className='bg-dark mt-5' style={{height:300,width:300}}>
           <Offcanvas.Header closeButton closeVariant='white'>
            <Offcanvas.Title className="text-end mx-auto"><span><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-person-circle text-light" viewBox="0 0 16 16">
         <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
         <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg></span></Offcanvas.Title>
           </Offcanvas.Header>
           <Offcanvas.Body>
           <Nav justify menuVariant="dark"  className="navbar justify-content-end flex-grow-1 pe-3 flex-column">
           <Nav.Link href="/my_profil_english"><span className='couleur2 '><u><b>My Historic</b></u></span></Nav.Link>
           <NavDropdown.Divider />
            <span onClick={passwordChange} className='mb-3 btn3 btn-sm btn--orange' ><b className='text-light'>Change Password</b>  
            </span>
            <NavDropdown.Divider />
            <Button variant='danger' onClick={logout}><span><b>Logout</b>  
            </span></Button>
           </Nav>
           </Offcanvas.Body>
      </Offcanvas>
     <SessionOutEnglish isLogged={props.isLogged}/> 
    <MyVerticallyCenteredModal4 show={modalShowNoValidDialog} onHide={() => setModalShowNoValidDialog(false)} />
    <ChangePasswordBoxEnglish modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} userID={props.userID} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber}/>
   <ContactBoxEnglish language2={props.language2} setLanguage2={props.setLanguage2} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} language={props.language}/>
   <LoginBoxEnglish dataAbonne={props.dataAbonne} language2={props.language2} setLanguage2={props.setLanguage2} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} modalShow={props.modalShow} modalShow4={props.modalShow4} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
   </div>

    )
}

function MyVerticallyCenteredModal4(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Aucun envoi à valider disponible
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='couleur2'><b>Pas de code de rétrait en attente de validation pour le moment </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default HeaderEnglish;