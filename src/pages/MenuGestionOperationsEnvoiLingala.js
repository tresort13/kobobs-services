import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {Link} from  'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Header.css'
import { useMediaQuery } from 'react-responsive';
//import SessionOut from './SessionOut';
import HeaderFrench from './HeaderFrench';
import HeaderEnglish from './HeaderEnglish';
import SessionOutEnglish from './SessionOutEnglish';
import SessionOutLingala from './SessionOutLingala';


function MenuGestionOperationsEnvoiLingala(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    return (
<>
<Header dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/> 
{isDesktop && <Container >
   
    <Row className='justify-content-center pb-3 pt-5 mt-5'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_client" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='btn--blue'  style={{width:400,height:80}} className='btn-lg btn--blue rounded py-4 zoom'>
        <b className='text-light'><pre>Sala envoi pona client</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3 '>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_abonne_id" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='btn--blue'  style={{width:400,height:80}} className='btn-lg btn--blue rounded py-4 zoom'>
        <b className='text-light'><pre>Sala envoi pona  abonné</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/menu_rapport_envoi_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='btn--blue'  style={{width:400,height:80}} className='btn-lg btn--blue rounded py-4 zoom'>
        <b className='text-light'><pre>Rapport yaba envois</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  

</Container> }

{isMobileOrTablet &&  <Container >
   
   <Row className='justify-content-center pb-3 pt-5 mt-5'>
       <Col xs = {12}>
       <Link to="/menu_rapport_envoie" style={{color:'white',textDecorationLine:'none'}}>
       <Button variant='warning'  style={{width:400,height:50}} className='btn-lg rounded-pill zoom'>
       <b className='text-dark'><pre>Opérations Envoi</pre></b>
       </Button>
       </Link>
       </Col>
   </Row>
 


   <Row className='justify-content-center pb-3'>
       <Col xs = {12}>
       <Link to="/menu_rapport_retrait" style={{color:'white',textDecorationLine:'none'}}>
       <Button variant='warning'  style={{width:400,height:50}} className='btn-lg rounded-pill zoom'>
       <b className='text-dark'><pre>Opérations Retrait</pre></b>
       </Button>
       </Link>
       </Col>
   </Row>
 

</Container>}
<SessionOutLingala setIsadmin={props.setIsadmin}/>
<Footer />
</>
    )
}

export default MenuGestionOperationsEnvoiLingala;