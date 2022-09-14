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
import HeaderEnglish from './HeaderEnglish';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';



const useState = React.useState

function ConfirmationEnvoieInfoEnglish(props)
{

    const [message,setMessage] = useState("")
    const [couleur,setCouleur] = useState("text-dark")
    const [modalShow, setModalShow] = React.useState(true);

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  
    
   
    return (
        
        <>
        <HeaderEnglish  langue={props.langue}/>
{isDesktop && <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
            <Link to="">
            <Image src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:130}}></Image>
            </Link>
        
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Sender full name: <b className='couleur2'>{props.envoie3.infoEnvoie.nom_expediteur} {props.envoie3.infoEnvoie.postnom_expediteur} {props.envoie3.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Receiver full name: <b className='couleur2'>{props.envoie3.infoEnvoie.nom_beneficiaire} {props.envoie3.infoEnvoie.postnom_beneficiaire} {props.envoie3.infoEnvoie.prenom_beneficiaire}</b> </p>
        <p className='text-light'>sender country  : <b className='couleur2'> {props.envoie3.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-light'>receiver country : <b className='couleur2'> {props.envoie3.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-light'>amount to get by the receiver: <b className='bg-warning text-dark'>{Number(props.envoie3.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>amount to pay for the transfer (including all fees): <b className='bg-warning text-dark'>{Number(props.envoie3.infoEnvoie.montant_total).toFixed(2)} £</b> </p>
        <p className='text-light'>Type of service : <b className='couleur2'>{props.envoie3.infoEnvoie.type_service}</b> </p>
        <p className='text-light'>Tracking Number : <b className='bg-warning text-dark'> {props.envoie3.infoEnvoie.code_retrait} </b><b className='couleur2'>(this code will be valid only after the full payement of your transfer fees)</b></p>
        <p className='text-light'>membership Number : <b className='bg-warning text-dark'>{props.envoie3.infoEnvoie.code_abonne} </b> </p>
        <p className='text-light'>date and time : <b className='couleur2'> {JSON.stringify(props.envoie3.infoEnvoie.date_heure_operation)}</b></p>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/menu_envoi_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        close
        </Button>
        </Link>
        </Col>
    </Row>  
</Container>
}

{isMobileOrTablet && <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
            <Link to="">
            <Image src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:130}}></Image>
            </Link>
        
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Mobimba ya Motindi: <b className='couleur2'>{props.envoie3.infoEnvoie.nom_expediteur} {props.envoie3.infoEnvoie.postnom_expediteur} {props.envoie3.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Kombo Mobimba ya Mozui: <b className='couleur2'>{props.envoie3.infoEnvoie.nom_beneficiaire} {props.envoie3.infoEnvoie.postnom_beneficiaire} {props.envoie3.infoEnvoie.prenom_beneficiaire}</b> </p>
        <p className='text-light'>Ekolo Motindi  : <b className='couleur2'> {props.envoie3.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-light'>Ekolo Mozui : <b className='couleur2'> {props.envoie3.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-light'>Mbongo ya kozwa epayi ya Motindi: <b className='bg-warning text-dark'>{Number(props.envoie3.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Mbongo yako Futa: <b className='bg-warning text-dark'>{Number(props.envoie3.infoEnvoie.montant_total).toFixed(2)} £</b> </p>
        <p className='text-light'>Nzela yako zwa Mbongo : <b className='couleur2'>{props.envoie3.infoEnvoie.type_service}</b> </p>
        <p className='text-light'>Code Retrait : <b className='bg-warning text-dark'> {props.envoie3.infoEnvoie.code_retrait} ({props.envoie3.infoEnvoie.status_retrait})</b></p>
        <p className='text-light'>date et heure : <b className='couleur2'> {JSON.stringify(props.envoie3.infoEnvoie.date_heure_operation)}</b></p>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/menu_envoie" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        ok
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
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Informations sent successfully
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Message : </h4>
        <p className='text-success'><b>form submission successfully</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default ConfirmationEnvoieInfoEnglish;