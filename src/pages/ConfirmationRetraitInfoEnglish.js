import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {Link,useNavigate} from  'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HeaderEnglish from './HeaderEnglish';
import Footer from './Footer';



const useState = React.useState

function ConfirmationRetraitInfoEnglish(props)
{
  const [modalShow, setModalShow] = React.useState(false);
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
        <HeaderEnglish langue={props.langue} />
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
        <p className='text-light'>Tracking Number : <b className='text-dark bg-warning'> {props.envoie2.infoEnvoie.code_retrait}</b></p>
        <p className='text-light'>Status of your tracking number : <b className='text-dark bg-warning'> {props.envoie2.infoEnvoie.status_retrait}</b><b className='couleur2'>(please follow the explaination below of your status)</b></p>
        <p className='text-light'>Sender full name : <b className='couleur2'>{props.envoie2.infoEnvoie.nom_expediteur} {props.envoie2.infoEnvoie.postnom_expediteur} {props.envoie2.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Receiver full name : <b className='couleur2'>{props.envoie2.infoEnvoie.nom_beneficiaire} {props.envoie2.infoEnvoie.postnom_beneficiaire} {props.envoie2.infoEnvoie.prenom_beneficiaire}</b> </p>
        <p className='text-light'>sender country   : <b className='couleur2'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-light'>receiver country : <b className='couleur2'> {props.envoie2.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-light'>amount to get by the receiver : <b className='couleur2'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Type of service : <b className='couleur2'>{props.envoie2.infoEnvoie.type_service}</b> </p>
        <p className='text-light'>date and time : <b className='couleur2'> {JSON.stringify(props.envoie2.infoEnvoie.date_heure_operation)}</b></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Status explaination</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'><b className='couleur2'>Code Retrait en attente de validation :</b> <b className='text-dark bg-warning'> That means your tracking number is pending to be validated until the full payement of the transfer fees</b></p>
        <p className='text-light'><b className='couleur2'>Code Retrait Valide : </b><b className='text-dark bg-warning'> That means your tracking number has been validated and the reciever cand pick up the money</b></p>
        <p className='text-light'><b className='couleur2'>Code Retrait Payé :</b> <b className='text-dark bg-warning'> That means the receiver has picked up the money </b> </p>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/menu_envoi_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning"> 
         ok
        </Button>
        </Link>
        </Col>
    </Row>  
</Container>
}

{isMobileOrTablet && <Container className='bg-dark my-auto mx-auto justify-content-center text-center bordure mb-5' style={{marginTop:50,backgroundColor:'white'}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
            <Link to="/tracer_baggages">
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
        <p className='text-light'>Status Retrait Na Yo : <b className='text-dark bg-warning'> {props.envoie2.infoEnvoie.code_retrait}  {props.envoie2.infoEnvoie.status_retrait}</b></p>
        <p className='text-light'>Kombo Mobimba ya Motindi : <b className='couleur2'>{props.envoie2.infoEnvoie.nom_expediteur} {props.envoie2.infoEnvoie.postnom_expediteur} {props.envoie2.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Kombo Mobimba ya Mozui : <b className='couleur2'>{props.envoie2.infoEnvoie.nom_beneficiaire} {props.envoie2.infoEnvoie.postnom_beneficiaire} {props.envoie2.infoEnvoie.prenom_beneficiaire}</b> </p>
        <p className='text-light'>Ekolo Motindi : <b className='couleur2'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-light'>Ekolo Mozui : <b className='couleur2'> {props.envoie2.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-light'>Mbongo ya kozwa epayi ya Motindi : <b className='couleur2'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Nzela yako zwa Mbongo : <b className='couleur2'>{props.envoie2.infoEnvoie.type_service}</b> </p>
        <p className='text-light'>date et heure : <b className='couleur2'> {JSON.stringify(props.envoie2.infoEnvoie.date_heure_operation)}</b></p>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/menu_envoie" style={{color:'white',textDecorationLine:'none'}}>
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