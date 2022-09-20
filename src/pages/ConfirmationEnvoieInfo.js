import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {Link} from  'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HeaderFrench from './HeaderFrench';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';



const useState = React.useState

function ConfirmationEnvoieInfo(props)
{

    const [message,setMessage] = useState("Code retrait nayo eko zala valide kaka na sima yako futa mbongo ya transfert")
    const [couleur,setCouleur] = useState("text-dark")
    const [modalShow, setModalShow] = React.useState(true);

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  
    console.log(props.envoie3)
   
    return (
        
        <>
        <HeaderFrench username={props.username} />
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2 display-6'><i><b>{message}</b></i></p>
        </Col>
    </Row>

   
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6} className="text-start">
        <p className='text-dark'>Code Retrait : <b className='text-danger'> {props.envoie3.infoEnvoie.code_retrait} </b></p>
        <p className='text-dark'>Code Abonné : <b className='text-danger'> {props.envoie3.infoEnvoie.code_abonne} (à retenir)</b></p>
        <p className='text-dark'>Mbongo Yako Zwa: <b className='text-dark'>{Number(props.envoie3.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Mbongo Yako Futa: <b className='text-dark'>{Number(props.envoie3.infoEnvoie.montant_total).toFixed(2)} £</b> </p>
        <p className='text-dark'>Kombo Ya Motindi: <b className='text-dark'>{props.envoie3.infoEnvoie.nom_expediteur} {props.envoie3.infoEnvoie.postnom_expediteur} {props.envoie3.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-dark'>Ekolo Ya Motindi: <b className='text-dark'> {props.envoie3.infoEnvoie.pays_expediteur}</b></p>
        </Col>

        <Col xs={6} className="text-start">
        <p className='text-dark'>Kombo Ya Mozui: <b className='text-dark'>{props.envoie3.infoEnvoie.nom_beneficiaire} {props.envoie3.infoEnvoie.postnom_beneficiaire} {props.envoie3.infoEnvoie.prenom_beneficiaire}</b> </p>   
        <p className='text-dark'>Ekolo Ya Mozui: <b className='text-dark'> {props.envoie3.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-dark'>Nzela Yako Zwa Mbongo: <b className='text-dark'>{props.envoie3.infoEnvoie.type_service}</b> </p>
        <p className='text-dark'>Numéro Ya Mobile money:  <b className='text-dark'>{props.envoie3.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-dark'>date na heure : <b className='text-dark'> {JSON.stringify(props.envoie3.infoEnvoie.date_heure_operation)}</b></p>
        </Col>
    </Row>
    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/home_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        kanga page
        </Button>
        </Link>
        </Col>
    </Row>  
</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center mx-auto my-auto'>
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2 display-6'><i><b>{message}</b></i></p>
        </Col>
    </Row>

   
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
    <Col xs={6} className="text-start">
        <p className='text-dark'>Code Retrait : <b className='text-danger'> {props.envoie3.infoEnvoie.code_retrait} </b></p>
        <p className='text-dark'>Code Abonné : <b className='text-danger'> {props.envoie3.infoEnvoie.code_abonne} (à retenir)</b></p>
        <p className='text-dark'>Mbongo Yako Zwa: <b className='text-dark'>{Number(props.envoie3.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Mbongo Yako Futa: <b className='text-dark'>{Number(props.envoie3.infoEnvoie.montant_total).toFixed(2)} £</b> </p>
        <p className='text-dark'>Kombo Ya Motindi: <b className='text-dark'>{props.envoie3.infoEnvoie.nom_expediteur} {props.envoie3.infoEnvoie.postnom_expediteur} {props.envoie3.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-dark'>Ekolo Ya Motindi: <b className='text-dark'> {props.envoie3.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-dark'>Kombo Ya Mozui: <b className='text-dark'>{props.envoie3.infoEnvoie.nom_beneficiaire} {props.envoie3.infoEnvoie.postnom_beneficiaire} {props.envoie3.infoEnvoie.prenom_beneficiaire}</b> </p>   
        <p className='text-dark'>Ekolo Ya Mozui: <b className='text-dark'> {props.envoie3.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-dark'>Nzela Yako Zwa Mbongo: <b className='text-dark'>{props.envoie3.infoEnvoie.type_service}</b> </p>
        <p className='text-dark'>Mobile money Numéro: <b className='text-dark'>{props.envoie3.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-dark'>date na heure : <b className='text-dark'> {JSON.stringify(props.envoie3.infoEnvoie.date_heure_operation)}</b></p>
        </Col>
    </Row>
    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/home_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        kanga page
        </Button>
        </Link>
        </Col>
    </Row>  
</Container>}
<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
  <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
<Footer />
        </>
       
    )
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Kotinda Esimbi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-success'><b>Makomi nayo ya transfer etindami malamu</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>kanga page</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationEnvoieInfo;