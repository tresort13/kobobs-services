import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useNavigate} from  'react-router-dom';
import Footer from './Footer';
import './Header.css'
import { useMediaQuery } from 'react-responsive';
import HeaderFrench from './HeaderFrench';
import LoginBoxFrench from './LoginBoxFrench';
import Modal from 'react-bootstrap/Modal';
import HeaderEnglish from './HeaderEnglish';
import SessionOutFrench from './SessionOutFrench';



function HomeManagementFrench(props)
{

  const navigate = useNavigate()
  const establishedUserStatus = ()=>
{
  if(props.isLogged)
  {
    navigate('/form_envoie_client_french')  
  }
  else{
    props.setModalShow(true)
  }
 }

 const establishedUserStatus2 = ()=>
{
  if(props.isLogged)
  {
    navigate('/form_retrait_info_french')  
  }
  else{
    props.setModalShow(true)
  }
 }

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    return (
<>
<HeaderFrench dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/> 
{isDesktop && <Container className=' justify-content-center text-center mb-5 text-light text-bold rounded'>  

  <Row className='mt-3'>
        <Col xs={12} className="text-start text-light">
        <p><Link to='/home_french' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Retourner</u>  </b></Link> </p>
        </Col>
    </Row>
  <Row className="text-center justify-content-center  mt-3">
    <Col md={1}>
    </Col>
    <Col md={6}>
    </Col>
    <Col md={5} className="my-auto text-start">
      <h1 className='display-6  couleur2' >
      
      <strong><b>Gestions des opérations<br></br>
          </b>et services clients</strong>
      </h1>

    </Col >

  </Row>

  {props.isAdmin === true ? <Row className="text-center justify-content-center mt-2 mb-5">

           
           <Col md={4} className="my-auto text-center">
           <Link to="/menu_rapport_envoi_french">
            <Button   variant="outline-light" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
             </svg><br></br>
            <b className="display-6"><strong> Rapport des envoies</strong></b>
            </Button>
            </Link>
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/menu_rapport_retrait_french">
            <Button   variant="outline-light" style={{width:300,height:300}}  className=" btn-lg rounded-pill zoom ">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
           <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
           </svg><br></br>
            <b className="display-6"><strong>Rapport des retraits</strong></b>
           </Button> 
            </Link>
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/menu_gestion_french">
            <Button   variant="outline-light" style={{width:300,height:300}}  className=" btn-lg rounded-pill zoom ">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-house-gear-fill" viewBox="0 0 16 16">
  <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5Z"/>
  <path d="M11.07 9.047a1.5 1.5 0 0 0-1.742.26l-.02.021a1.5 1.5 0 0 0-.261 1.742 1.5 1.5 0 0 0 0 2.86 1.504 1.504 0 0 0-.12 1.07H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6 4.724 4.724a1.5 1.5 0 0 0-1.654 1.03Z"/>
  <path d="m13.158 9.608-.043-.148c-.181-.613-1.049-.613-1.23 0l-.043.148a.64.64 0 0 1-.921.382l-.136-.074c-.561-.306-1.175.308-.87.869l.075.136a.64.64 0 0 1-.382.92l-.148.045c-.613.18-.613 1.048 0 1.229l.148.043a.64.64 0 0 1 .382.921l-.074.136c-.306.561.308 1.175.869.87l.136-.075a.64.64 0 0 1 .92.382l.045.149c.18.612 1.048.612 1.229 0l.043-.15a.64.64 0 0 1 .921-.38l.136.074c.561.305 1.175-.309.87-.87l-.075-.136a.64.64 0 0 1 .382-.92l.149-.044c.612-.181.612-1.049 0-1.23l-.15-.043a.64.64 0 0 1-.38-.921l.074-.136c.305-.561-.309-1.175-.87-.87l-.136.075a.64.64 0 0 1-.92-.382ZM12.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
</svg><br></br>
            <b className="display-6"><strong>Finances/ Utilisateurs</strong></b>
           </Button> 
           </Link>
            </Col>

            

           </Row> :

<Row className="text-center justify-content-center mt-2 mb-5">

           
<Col md={4} className="my-auto text-center">
           <Link to="/menu_rapport_envoi_french">
            <Button   variant="outline-light" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
             </svg><br></br>
            <b className="display-6"><strong> Rapport des envoies</strong></b>
            </Button>
            </Link>
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/menu_rapport_retrait_french">
            <Button   variant="outline-light" style={{width:300,height:300}}  className=" btn-lg rounded-pill zoom ">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
           <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
           </svg><br></br>
            <b className="display-6"><strong>Rapport des retraits</strong></b>
           </Button> 
            </Link>
            </Col>
</Row> 
}


</Container>}

{isMobileOrTablet &&   <Container className=' justify-content-center text-center mb-5 text-light text-bold rounded'>  

<Row className='mt-3'>
      <Col xs={12} className="text-start text-light">
      <p><Link to='/home_french' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Retourner</u>  </b></Link> </p>
      </Col>
  </Row>
<Row className="text-center justify-content-center  mt-3 mb-5">
  <Col md={1}>
  </Col>
  <Col md={6}>
  </Col>
  <Col md={5} className="my-auto text-start">
    <h1 className='display-6  couleur2' >
    
    <strong><b>Gestions des opérations<br></br>
        </b>et services clients</strong>
    </h1>

  </Col >

</Row>

{props.isAdmin === true ? <Row className="text-center justify-content-center mt-2 mb-5">

         
         <Col md={4} className="my-auto text-center mb-3">
         <Link to="/menu_rapport_envoi_french">
          <Button   variant="outline-light" style={{width:"auto"}} className='btn-lg rounded-pill zoom'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
           </svg>
          <b className="display-6"><strong> Rapport des envoies</strong></b>
          </Button>
          </Link>
          </Col>

          <Col md={4} className="my-auto text-center mb-3">
          <Link to="/menu_rapport_retrait_french">
          <Button   variant="outline-light" style={{width:"auto"}}  className=" btn-lg rounded-pill zoom ">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
         </svg>
          <b className="display-6"><strong>Rapport des retraits</strong></b>
         </Button> 
          </Link>
          </Col>

          <Col md={4} className="my-auto text-center mb-3">
          <Link to="/menu_gestion_french">
          <Button   variant="outline-light" style={{width:"auto"}} className=" btn-lg rounded-pill zoom ">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-house-gear-fill" viewBox="0 0 16 16">
<path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5Z"/>
<path d="M11.07 9.047a1.5 1.5 0 0 0-1.742.26l-.02.021a1.5 1.5 0 0 0-.261 1.742 1.5 1.5 0 0 0 0 2.86 1.504 1.504 0 0 0-.12 1.07H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6 4.724 4.724a1.5 1.5 0 0 0-1.654 1.03Z"/>
<path d="m13.158 9.608-.043-.148c-.181-.613-1.049-.613-1.23 0l-.043.148a.64.64 0 0 1-.921.382l-.136-.074c-.561-.306-1.175.308-.87.869l.075.136a.64.64 0 0 1-.382.92l-.148.045c-.613.18-.613 1.048 0 1.229l.148.043a.64.64 0 0 1 .382.921l-.074.136c-.306.561.308 1.175.869.87l.136-.075a.64.64 0 0 1 .92.382l.045.149c.18.612 1.048.612 1.229 0l.043-.15a.64.64 0 0 1 .921-.38l.136.074c.561.305 1.175-.309.87-.87l-.075-.136a.64.64 0 0 1 .382-.92l.149-.044c.612-.181.612-1.049 0-1.23l-.15-.043a.64.64 0 0 1-.38-.921l.074-.136c.305-.561-.309-1.175-.87-.87l-.136.075a.64.64 0 0 1-.92-.382ZM12.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
</svg>
          <b className="display-6"><strong>Finances/ Utilisateurs</strong></b>
         </Button> 
         </Link>
          </Col>

          

         </Row> :

<Row className="text-center justify-content-center mt-2 mb-5">

         
<Col md={4} className="my-auto text-center mb-3">
         <Link to="/menu_rapport_envoi_french">
          <Button   variant="outline-light" style={{width:"auto"}} className='btn-lg rounded-pill zoom'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
           </svg>
          <b className="display-6"><strong> Rapport des envoies</strong></b>
          </Button>
          </Link>
          </Col>

          <Col md={4} className="my-auto text-center mb-3">
          <Link to="/menu_rapport_retrait_french">
          <Button   variant="outline-light" style={{width:"auto"}}  className=" btn-lg rounded-pill zoom ">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
         </svg>
          <b className="display-6"><strong>Rapport des retraits</strong></b>
         </Button> 
          </Link>
          </Col>
</Row> 
}


</Container>}
  <SessionOutFrench setIsadmin={props.setIsadmin}/>

  <MyVerticallyCenteredModal2 envoie3={props.envoie3} show={props.modalShowEnvoi} onHide={() => props.setModalShowEnvoi(false)} />
     <LoginBoxFrench language2={props.language2} setLanguage2={props.setLanguage2} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} modalShow={props.modalShow} modalShow4={props.modalShow4} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} setLanguage={props.setLanguage}/>
<Footer />
</>
    )
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
          Merci d'avoir utilisé KBStrans
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b className='text-success'>Votre envoi a été effectué avec succès </b>   
        </Modal.Body>
        <Modal.Footer>
        <p >code : <b className='text-success  p-2' style={{border:"2px solid black"}}>{props.envoie3.infoEnvoie.code_retrait}</b>   
          </p>
          <Button variant='warning' onClick={props.onHide}>OK</Button>
  
        </Modal.Footer>
      </Modal>
    );
  }
  

export default HomeManagementFrench;