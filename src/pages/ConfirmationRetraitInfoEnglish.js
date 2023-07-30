import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useNavigate} from  'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HeaderEnglish from './HeaderEnglish';
import Footer from './Footer';



const useState = React.useState

function ConfirmationRetraitInfoEnglish(props)
{
  
    const [message,setMessage] = useState("Status of your tracking number")
    const [couleur,setCouleur] = useState("text-dark")
    const navigate = useNavigate()
    
    console.log(props.envoie2)
    

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
   
    return (
        
        <>
        <HeaderEnglish abonne={props.abonne} envoie2={props.envoie2} dataAbonne={props.dataAbonne} envoie3={props.envoie3} isAdmin={props.isAdmin} isStaff={props.isStaff} language2={props.language2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} setLanguage2={props.setLanguage2} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center  pt-3' >
        <Col xs={6}>
        <p className='couleur2 '><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-start pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      {props.envoie2.infoEnvoie.status_retrait == "code retrait en attente de validation" ? <p className='text-dark'>your transfer status : <b className="text-danger">your tracking number validation is still pending...</b> </p> :
     props.envoie2.infoEnvoie.status_retrait == "Code Retrait Valide" ? <p className='text-dark'><b>your transfer status :</b> <b className="text-success">Your tracking number has been validated and Money is ready to be picked up</b> </p> : 
     <p className='text-dark'><b>your transfer status :</b> <b className="text-success">Your receiver has picked up the money</b> </p> }
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>

    <Row className='justify-content-start pb-3' >

    <Col xs={6} className='text-start'>
        <p className='text-dark'>Tracking Number : <b className='text-danger'> {props.envoie2.infoEnvoie.code_retrait}</b></p>
        <p className='text-dark'>amount to get by the receiver : <b className='text-danger'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Receiver full name : <b className='text-dark'>{props.envoie2.infoEnvoie.prenom_beneficiaire} {props.envoie2.infoEnvoie.nom_beneficiaire}  </b> </p>
        <p className='text-dark'>receiver country : <b className='text-dark'> {props.envoie2.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type of service : <b className='text-dark'>{props.envoie2.infoEnvoie.type_service}</b> </p>
       
        </Col>

        <Col xs={6} className='text-start'>
        <p className='text-dark'>Sender full name : <b className='text-dark'>{props.envoie2.infoEnvoie.prenom_expediteur} {props.envoie2.infoEnvoie.nom_expediteur}  </b> </p>
        <p className='text-dark'>sender country : <b className='text-dark'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        {props.envoie2.infoEnvoie.numero_transfer==='N/A' ? <p></p> : <p className='text-dark'>Mobile money Number: <b className='text-dark'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>}
        <p className='text-dark'>date : <b className='text-dark'> {props.envoie2.infoEnvoie.date_heure_operation}</b></p>
        
        </Col>
        
    </Row>

   

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning"> 
         ok
        </Button>
        </Link>
        </Col>
    </Row>  
</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50}} >
<Row className='justify-content-center  pt-3' >
        <Col xs={12}>
        <p className='couleur2 '><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-start pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      {props.envoie2.infoEnvoie.status_retrait == "code retrait en attente de validation" ? <p className='text-dark'>your transfer status : <b className="text-danger">your tracking number validation is still pending...</b> </p> :
     props.envoie2.infoEnvoie.status_retrait == "Code Retrait Valide" ? <p className='text-dark'><b>your transfer status :</b> <b className="text-success">Your tracking number has been validated and Money is ready to be picked up</b> </p> : 
     <p className='text-dark'><b>your transfer status :</b> <b className="text-success">Your receiver has picked up the money</b> </p> }
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>

    <Row className='justify-content-start pb-3' >

    <Col xs={12} className='text-start'>
        <p className='text-dark'>Tracking Number : <b className='text-danger'> {props.envoie2.infoEnvoie.code_retrait}</b></p>
        <p className='text-dark'>amount to get by the receiver : <b className='text-danger'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Receiver full name : <b className='text-dark'>{props.envoie2.infoEnvoie.prenom_beneficiaire} {props.envoie2.infoEnvoie.nom_beneficiaire}  </b> </p>
        <p className='text-dark'>receiver country : <b className='text-dark'> {props.envoie2.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type of service : <b className='text-dark'>{props.envoie2.infoEnvoie.type_service}</b> </p>
       
        </Col>

        <Col xs={12} className='text-start'>
        <p className='text-dark'>Sender full name : <b className='text-dark'>{props.envoie2.infoEnvoie.prenom_expediteur} {props.envoie2.infoEnvoie.nom_expediteur}  </b> </p>
        <p className='text-dark'>sender country : <b className='text-dark'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        {props.envoie2.infoEnvoie.numero_transfer==='N/A' ? <p></p> : <p className='text-dark'>Mobile money Number: <b className='text-dark'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>}
        <p className='text-dark'>date : <b className='text-dark'> {props.envoie2.infoEnvoie.date_heure_operation}</b></p>
        
        </Col>
        
    </Row>

   

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <Link to="/" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning"> 
         ok
        </Button>
        </Link>
        </Col>
    </Row>  
</Container>
}
<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
<Footer />
        </>
       
    )
}




export default ConfirmationRetraitInfoEnglish;