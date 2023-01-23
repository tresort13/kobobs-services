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
    
    

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
   
    return (
        
        <>
        <HeaderEnglish />
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='display-6 couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-start pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      {props.envoie2.infoEnvoie.status_retrait == "code retrait en attente de validation" ? <p className='text-dark'>your transfer status : <b className="text-danger">your tracking number validation is still pending...</b> </p> :
     <p className='text-dark'><b>your transfer status :</b> <b className="text-success">Your tracking number has been validated</b> </p> }
    </Row>

    <Row className='justify-content-start pb-3'>
      {props.envoie2.infoEnvoie.status_retrait == "Code Retrait Payé" ? <p className='text-dark'><b className="text-success">Your receiver has picked up the money</b> </p> :
     <p></p> }
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>

    <Row className='justify-content-center pb-3' >

    <Col xs={6}>
        <p className='text-dark'>Tracking Number : <b className='text-danger'> {props.envoie2.infoEnvoie.code_retrait}</b></p>
        <p className='text-dark'>amount to get by the receiver : <b className='text-danger'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Receiver full name : <b className='text-dark'>{props.envoie2.infoEnvoie.prenom_beneficiaire} {props.envoie2.infoEnvoie.nom_beneficiaire}  </b> </p>
        <p className='text-dark'>receiver country : <b className='text-dark'> {props.envoie2.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type of service : <b className='text-dark'>{props.envoie2.infoEnvoie.type_service}</b> </p>
       
        </Col>

        <Col xs={6}>
        <p className='text-dark'>Sender full name : <b className='text-dark'>{props.envoie2.infoEnvoie.prenom_expediteur} {props.envoie2.infoEnvoie.nom_expediteur}  </b> </p>
        <p className='text-dark'>sender country : <b className='text-dark'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-dark'>Mobile Money Number: <b className='text-dark'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-dark'>date : <b className='text-dark'> {props.envoie2.infoEnvoie.data_operation}</b></p>
        
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

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center  mx-auto my-auto' >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='display-6 couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-start pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      {props.envoie2.infoEnvoie.status_retrait == "code retrait en attente de validation" ? <p className='text-dark'>your transfer status : <b className="text-danger">your tracking number validation is still pending...</b> </p> :
     <p className='text-dark'><b>your transfer status :</b> <b className="text-success">Your tracking number has been validated</b> </p> }
    </Row>

    <Row className='justify-content-start pb-3'>
      {props.envoie2.infoEnvoie.status_retrait == "Code Retrait Payé" ? <p className='text-dark'><b className="text-success">Your receiver has picked up the money</b> </p> :
     <p></p> }
    </Row>
    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>

    <Row className='justify-content-start pb-3' >
    <Col xs={12}>
        <p className='text-dark'>Tracking Number : <b className='text-danger'> {props.envoie2.infoEnvoie.code_retrait}</b></p>
        <p className='text-dark'>amount to get by the receiver : <b className='text-danger'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Receiver full name : <b className='text-dark'>{props.envoie2.infoEnvoie.prenom_beneficiaire} {props.envoie2.infoEnvoie.nom_beneficiaire}  </b> </p>
        <p className='text-dark'>receiver country : <b className='text-dark'> {props.envoie2.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type of service : <b className='text-dark'>{props.envoie2.infoEnvoie.type_service}</b> </p>
        <p className='text-dark'>Sender full name : <b className='text-dark'>{props.envoie2.infoEnvoie.prenom_expediteur} {props.envoie2.infoEnvoie.nom_expediteur} </b> </p>
        <p className='text-dark'>sender country : <b className='text-dark'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-dark'>Mobile Money Number: <b className='text-dark'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-dark'>date : <b className='text-dark'> {JSON.stringify(props.envoie2.infoEnvoie.data_operation)}</b></p>
        
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
</Container>}
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