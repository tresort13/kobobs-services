import React,{ useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {Link, Navigate, useNavigate} from  'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HeaderEnglish from './HeaderEnglish';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import ClipLoader from "react-spinners/ClipLoader";



const useState = React.useState

function ConfirmationEnvoieInfoEnglish(props)
{

    const [message,setMessage] = useState("Your tracking number status will be valid only after the full payement of your amount's transfer !!")
    const [couleur,setCouleur] = useState("text-dark")
    const [modalShow, setModalShow] = React.useState(true);
    const [modalShow2, setModalShow2] = React.useState(true);
    const navigate = useNavigate()

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  console.log(props.envoie3.infoEnvoie)
  const closePage = ()=>{
    props.setModalShowEnvoi(true)
    navigate('/')
  }

  useEffect(()=>
  {
     const interval =  setInterval(()=> {
       setModalShow2(false)
      }
       ,5000);
      return () => clearInterval(interval)
  },[])
    
   
    return (
        
        <>
<HeaderEnglish dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/> 
{isDesktop && <Container className='bg-light justify-content-center   mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='text-danger'><i><b>{message}</b></i></p>
        </Col>
    </Row>
    

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={6} className='text-start'>
        <p className='text-dark'>Tracking Number : <b className='text-success  p-2' style={{border:"2px solid black"}}> {props.envoie3.infoEnvoie.code_retrait} </b></p>
        {props.envoie3.infoEnvoie.status_retrait == "code retrait en attente de validation" ? <p className='text-dark'>Tracking Number status : <b className="couleur2">pending for validation...</b> </p> :
     <p className='text-dark'><b>Tracking Number status :</b> <b className="text-success">Your tracking number has been validated</b> </p> }
        <p className='text-dark'>Sender full name: <b className='text-dark'>{props.envoie3.infoEnvoie.prenom_expediteur} {props.envoie3.infoEnvoie.nom_expediteur}  </b> </p>
        <p className='text-dark'>amount to get by the receiver: <b className='text-dark'>{Number(props.envoie3.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>amount to pay for the transfer (including all fees): <b className='bg-warning  p-2' style={{border:"2px solid black"}}>{Number(props.envoie3.infoEnvoie.montant_total).toFixed(2)} £</b> </p>
        <p className='text-dark'>sender country  : <b className='text-dark'> {props.envoie3.infoEnvoie.pays_expediteur}</b></p>
        </Col>

        <Col xs={6} className='text-start'>
        <p className='text-dark'>Receiver full name: <b className='text-dark'>{props.envoie3.infoEnvoie.prenom_beneficiaire} {props.envoie3.infoEnvoie.nom_beneficiaire}</b> </p> 
        <p className='text-dark'>receiver country : <b className='text-dark'> {props.envoie3.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type of service : <b className='text-dark'>{props.envoie3.infoEnvoie.type_service}</b> </p>
        <p className='text-dark'>Mobile Money Number : <b className='text-dark'>{props.envoie3.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-dark'>date and time: <b className='text-dark'> {props.envoie3.infoEnvoie.date_heure_operation}</b></p>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center text-center pb-3' >
        <Col xs={12}>
        <Button onClick={()=>closePage()} variant="dark" type="submit">
        close
        </Button>
        
        </Col>
    </Row>  
</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center  mx-auto my-auto'>
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='display-6 couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
    <Row className='justify-content-start pb-3' >
    <Col xs={12}>
        <p className='text-dark'>Tracking Number : <b className='text-danger'> {props.envoie3.infoEnvoie.code_retrait} </b><b className='text-dark'>(this code will be valid only after the full payement of your transfer fees)</b></p>

        <p className='text-dark'>Sender full name: <b className='text-dark'>{props.envoie3.infoEnvoie.prenom_expediteur} {props.envoie3.infoEnvoie.nom_expediteur} </b> </p>
        <p className='text-dark'>amount to get by the receiver: <b className='text-dark'>{Number(props.envoie3.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>amount to pay for the transfer (including all fees): <b className='text-danger'>{Number(props.envoie3.infoEnvoie.montant_total).toFixed(2)} £</b> </p>
        <p className='text-dark'>sender country  : <b className='text-dark'> {props.envoie3.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-dark'>Receiver full name: <b className='text-dark'>{props.envoie3.infoEnvoie.prenom_beneficiaire} {props.envoie3.infoEnvoie.nom_beneficiaire}</b> </p> 
        <p className='text-dark'>receiver country : <b className='text-dark'> {props.envoie3.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type of service : <b className='text-dark'>{props.envoie3.infoEnvoie.type_service}</b> </p>
        <p className='text-dark'>Mobile Money Number : <b className='text-dark'>{props.envoie3.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-dark'>date : <b className='text-dark'> {JSON.stringify(props.envoie3.infoEnvoie.data_operation)}</b></p>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        close
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
  <MyVerticallyCenteredModal envoie3={props.envoie3} show={modalShow} onHide={() => setModalShow(false)} />
  <MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
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
        
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><b>Your Tracking Number :</b> </p>
      <p ><b className='text-success display-6 p-2' style={{border:"2px solid black"}}><strong>{props.envoie3.infoEnvoie.code_retrait}</strong></b></p>
        <p ><b className='text-danger'>Always Keep it secret !! </b></p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>ok i got it</Button>
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
          Please wait...
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


export default ConfirmationEnvoieInfoEnglish;