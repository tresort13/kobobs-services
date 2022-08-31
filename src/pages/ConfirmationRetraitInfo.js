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
import Header from './Header';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';



const useState = React.useState

function ConfirmationRetraitInfo(props)
{
  const [modalShow, setModalShow] = React.useState(false);
    const [message,setMessage] = useState("Status Ya Code Retrait Na Yo")
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
        <Header username={props.username} />
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
        <p className='text-light'>Status Retrait Na Yo : <b className='text-dark bg-warning'> {props.envoie2.infoEnvoie.code_retrait}  {props.envoie2.infoEnvoie.status_retrait}</b></p>
        <p className='text-light'>Kombo Mobimba ya Motindi : <b className='couleur2'>{props.envoie2.infoEnvoie.nom_expediteur} {props.envoie2.infoEnvoie.postnom_expediteur} {props.envoie2.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Kombo Mobimba ya Mozui : <b className='text-dark bg-warning'>{props.envoie2.infoEnvoie.nom_beneficiaire} {props.envoie2.infoEnvoie.postnom_beneficiaire} {props.envoie2.infoEnvoie.prenom_beneficiaire}</b> </p>
        <p className='text-light'>Ekolo Motindi : <b className='couleur2'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-light'>Ekolo Mozui : <b className='couleur2'> {props.envoie2.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-light'>Mbongo ya kozwa epayi ya Motindi : <b className='text-dark bg-warning'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
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
        <p className='text-light'>Kombo Mobimba ya Mozui : <b className='text-dark bg-warning'>{props.envoie2.infoEnvoie.nom_beneficiaire} {props.envoie2.infoEnvoie.postnom_beneficiaire} {props.envoie2.infoEnvoie.prenom_beneficiaire}</b> </p>
        <p className='text-light'>Ekolo Motindi : <b className='couleur2'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-light'>Ekolo Mozui : <b className='couleur2'> {props.envoie2.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-light'>Mbongo ya kozwa epayi ya Motindi : <b className='text-dark bg-warning'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
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




export default ConfirmationRetraitInfo;