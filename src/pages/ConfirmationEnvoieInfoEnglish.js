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

    const [message,setMessage] = useState("Your tracking number status will be valid only after the full payment of your amount transfer")
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
    props.setClientForm(false)
    props.setSaveAbonne('')
    props.setModalShowEnvoi(true)
    /*props.setEnvoie3({infoEnvoie :{
    nom_expediteur : '',
    prenom_expediteur : '',
    adresse_expediteur : 'N/A',
    email_expediteur : '',
    numero_expediteur: '',
    pays_expediteur : 'UK',
    nom_beneficiaire : '',
    prenom_beneficiaire : '',
    pays_beneficiaire : '',
    montant_envoie_sans_frais : '',
    montant_beneficiaire : '',
    type_service : '',
    frais_envoie : '',
    frais_tva : '',
    montant_total : '',
    code_retrait : '',
    data_operation : '',
    date_heure_operation : '',
    status_retrait : '',
    numero_transfer:''
    }})*/
    navigate('/')
  }

  const closeSaveAbonne = ()=>{
    props.setSaveAbonne('')
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
{isDesktop && <Container className=' justify-content-center text-center mb-5 text-light text-bold rounded'  >
<Row className='mt-3'>
        <Col xs={12} className="text-start text-light">
        <p> <Link to='/menu_operation_envoi_english' style={{textDecoration:"none",fontSize:20}}><b className='text-light mx-5'><span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg></span> <u>New Sending</u>  </b></Link></p>
        </Col>
    </Row>
  <Row className='justify-content-center mt-3'>
<Col xs={12} style={{border:"2px solid white",width:1000}}>
<Row className='justify-content-center  pt-3' >
        <Col xs={6}>
        <p className='couleur2'><i><b>{message} </b></i></p>
        <hr style={{color:"darkorange"}}></hr>
        </Col>
    </Row>
    

    <Row className='justify-content-start pb-3' >
        <Col xs={6} className='text-start'>
        <p className='text-light'>Tracking Number : <b className='text-success  p-2' style={{border:"2px solid white"}}> {props.envoie3.infoEnvoie.code_retrait} </b></p>
        {props.envoie3.infoEnvoie.status_retrait == "code retrait en attente de validation" ? <p className='text-light'>Tracking Number status : <b className="couleur2">pending for validation...</b> </p> :
     <p className='text-light'><b>Tracking Number status :</b> <b className="text-success">Your tracking number has been validated</b> </p> }
        <p className='text-light'>Sender full name: <b className='text-light'>{props.envoie3.infoEnvoie.prenom_expediteur} {props.envoie3.infoEnvoie.nom_expediteur}  </b> </p>
        <p className='text-light'>amount to get by the receiver: <b className='text-light'>{Number(props.envoie3.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>amount to pay for (including all fees): <b className='bg-warning  p-2' style={{border:"2px solid white"}}>{Number(props.envoie3.infoEnvoie.montant_total).toFixed(2)} £</b> </p>
        <p className='text-light'>sender country  : <b className='text-light'> {props.envoie3.infoEnvoie.pays_expediteur}</b></p>
        </Col>

        <Col xs={6} className='text-start'>
        <p className='text-light'>Receiver full name: <b className='text-light'>{props.envoie3.infoEnvoie.prenom_beneficiaire} {props.envoie3.infoEnvoie.nom_beneficiaire}</b> </p> 
        <p className='text-light'>receiver country : <b className='text-light'> {props.envoie3.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-light'>Type of service : <b className='text-light'>{props.envoie3.infoEnvoie.type_service}</b> </p>
        {props.envoie3.infoEnvoie.numero_transfer==='N/A' ? <p></p> : <p className='text-light'>Mobile money Number: <b className='text-light'>{props.envoie3.infoEnvoie.numero_transfer}</b> </p>}
        <p className='text-light'>date and time: <b className='text-light'> {props.envoie3.infoEnvoie.date_heure_operation}</b></p>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center text-center pb-3' >
        <Col xs={12}>
        <Button onClick={()=>closePage()} variant="danger" type="submit">
        close
        </Button>
        
        </Col>
    </Row>  
    </Col>

    </Row>
</Container>
}

{isMobileOrTablet && <Container className=' justify-content-center text-center mb-5 text-light text-bold rounded'  >
<Row className='mt-3'>
        <Col xs={12} className="text-start text-light">
        <p> <Link to='/menu_operation_envoi_english' style={{textDecoration:"none",fontSize:20}}><b className='text-light mx-5'><span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg></span> <u>New Sending</u>  </b></Link></p>
        </Col>
    </Row>
  <Row className='justify-content-center mt-3'>
<Col xs={12} style={{border:"2px solid white"}}>
<Row className='justify-content-center  pt-3' >
        <Col xs={12}>
        <p className='couleur2'><i><b>{message} </b></i></p>
        <hr style={{color:"darkorange"}}></hr>
        </Col>
    </Row>
    

    <Row className='justify-content-start pb-3' >
        <Col xs={12} className='text-start'>
        <p className='text-light'>Tracking Number : <b className='text-success  p-2' style={{border:"2px solid white"}}> {props.envoie3.infoEnvoie.code_retrait} </b></p>
        {props.envoie3.infoEnvoie.status_retrait == "code retrait en attente de validation" ? <p className='text-light'>Tracking Number status : <b className="couleur2">pending for validation...</b> </p> :
     <p className='text-light'><b>Tracking Number status :</b> <b className="text-success">Your tracking number has been validated</b> </p> }
        <p className='text-light'>Sender full name: <b className='text-light'>{props.envoie3.infoEnvoie.prenom_expediteur} {props.envoie3.infoEnvoie.nom_expediteur}  </b> </p>
        <p className='text-light'>receiver amount: <b className='text-light'>{Number(props.envoie3.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>amount to pay for: <b className='bg-warning  p-2' style={{border:"2px solid white"}}>{Number(props.envoie3.infoEnvoie.montant_total).toFixed(2)} £</b> </p>
        <p className='text-light'>sender country  : <b className='text-light'> {props.envoie3.infoEnvoie.pays_expediteur}</b></p>
        </Col>

        <Col xs={12} className='text-start'>
        <p className='text-light'>Receiver full name: <b className='text-light'>{props.envoie3.infoEnvoie.prenom_beneficiaire} {props.envoie3.infoEnvoie.nom_beneficiaire}</b> </p> 
        <p className='text-light'>receiver country : <b className='text-light'> {props.envoie3.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-light'>Type of service : <b className='text-light'>{props.envoie3.infoEnvoie.type_service}</b> </p>
        {props.envoie3.infoEnvoie.numero_transfer==='N/A' ? <p></p> : <p className='text-light'>Mobile money Number: <b className='text-light'>{props.envoie3.infoEnvoie.numero_transfer}</b> </p>}
        <p className='text-light'>date and time: <b className='text-light'> {props.envoie3.infoEnvoie.date_heure_operation}</b></p>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center text-center pb-3' >
        <Col xs={12}>
        <Button onClick={()=>closePage()} variant="danger" type="submit">
        close
        </Button>
        
        </Col>
    </Row>  
    </Col>

    </Row>
</Container>
}

<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
  <MyVerticallyCenteredModal envoie3={props.envoie3} show={modalShow} onHide={() => {
    closeSaveAbonne();
    setModalShow(false);
    }} saveAbonne={props.saveAbonne} clientForm={props.clientForm}/>
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
        {props.clientForm === true ? <p ><b className='couleur2'>{props.saveAbonne}</b></p> :
        <p ><b className='text-danger'>Always Keep it secret !! </b></p> }
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>ok</Button>
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