import React from 'react';
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
import HeaderFrench from './HeaderFrench';
import Modal from 'react-bootstrap/Modal';


function MenuRapportRetraitFrench(props)
{
    const [modalShow3, setModalShow3] = React.useState(false);

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    return (
<>
<HeaderFrench dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
{isDesktop && <Container className='justify-content-center text-center mb-5 text-light text-bold'>
    <Row className='mt-3'>
        <Col xs={12} className="text-start text-light">
            <p><Link to='/menu_management_french' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Retourner</u>  </b></Link> </p>
        </Col>
    </Row>
    <Row className='justify-content-center pb-3 pt-5 mt-5'>
        <Col xs = {"auto"}>
        <Link to="/select_date_form_retrait_french" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='btn--blue'  style={{width:400,height:80,border:"2px solid white"}} className='btn-lg btn--blue rounded-pill zoom py-4'>
        <b className='text-light'><pre>Rapport Journalier des Rétraits </pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/select_mois_form_retrait_french" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='btn--blue'  style={{width:400,height:80,border:"2px solid white"}} className='btn-lg btn--blue rounded-pill zoom py-4'>
        <b className='text-light'><pre>Rapport Mensuel des Rétraits</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/select_year_form_retrait_french" style={{color:'white',textDecorationLine:'none'}}>
        <Button  variant='btn--blue'  style={{width:400,height:80,border:"2px solid white"}} className='btn-lg btn--blue rounded-pill zoom py-4'>
        <b className='text-light'><pre>Rapport Annuel des Rétraits</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  

</Container> }

{isMobileOrTablet && <Container className='justify-content-center text-center mb-5 text-light text-bold'>
    <Row className='mt-3'>
        <Col xs={"auto"} className="text-start text-light">
            <p><Link to='/menu_management_french' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Retourner</u>  </b></Link> </p>
        </Col>
    </Row>
    <Row className='justify-content-center pb-3 pt-5 mt-5'>
        <Col xs = {"auto"}>
        <Link to="/select_date_form_retrait_french" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='btn--blue'  style={{width:400,height:80,border:"2px solid white"}} className='btn-lg btn--blue rounded-pill zoom py-4'>
        <b className='text-light'><pre>Rapport Journalier des Rétraits </pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/select_mois_form_retrait_french" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='btn--blue'  style={{width:400,height:80,border:"2px solid white"}} className='btn-lg btn--blue rounded-pill zoom py-4'>
        <b className='text-light'><pre>Rapport Mensuel des Rétraits</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/select_year_form_retrait_french" style={{color:'white',textDecorationLine:'none'}}>
        <Button  variant='btn--blue'  style={{width:400,height:80,border:"2px solid white"}} className='btn-lg btn--blue rounded-pill zoom py-4'>
        <b className='text-light'><pre>Rapport Annuel des Rétraits</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  

</Container> }
<MyVerticallyCenteredModal3 show={modalShow3} onHide={() => setModalShow3(false)} />
<Footer />
</>
    )
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
          <p className='text-danger'><b> Désolé option disponible après paiement...</b></p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Cette option sera disponible après le paiement
        </Modal.Body>
        <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default MenuRapportRetraitFrench;