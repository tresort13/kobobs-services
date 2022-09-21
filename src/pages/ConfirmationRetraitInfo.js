import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useNavigate} from  'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from './Header';
import Footer from './Footer';
import  './Header.css';



const useState = React.useState

function ConfirmationRetraitInfo(props)
{
    
    const [message,setMessage] = useState("Informations Ya transfert Na Yo")
    
    
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
   
    return (
        
        <>
        <Header  />
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='display-6 couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-start pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      {props.envoie2.infoEnvoie.status_retrait == "code retrait en attente de validation" ? <p className='text-dark'>status ya transfert nayo : <b className="text-danger"></b> Code ya retrait nayo eza  nanu validé te...</p> :
     <p className='text-dark'><b>status ya transfert nayo :</b> <b className="text-success">Code ya retrait nayo ekomi valide</b> </p> }
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={6}>
        <p className='text-dark'>Code Retrait : <b className='text-danger'> {props.envoie2.infoEnvoie.code_retrait}</b></p>
        <p className='text-dark'>Mbongo Yako Zwa: <b className='text-danger'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Kombo Ya Mozui: <b className='text-dark'>{props.envoie2.infoEnvoie.nom_beneficiaire} {props.envoie2.infoEnvoie.postnom_beneficiaire} {props.envoie2.infoEnvoie.prenom_beneficiaire}</b> </p>
        <p className='text-dark'>Ekolo Ya Mozui: <b className='text-dark'> {props.envoie2.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-dark'>Nzela Yako Zwa Mbongo: <b className='text-dark'>{props.envoie2.infoEnvoie.type_service}</b> </p>
       
        </Col>

        <Col xs={6}>
        <p className='text-dark'>Kombo Ya Motindi: <b className='text-dark'>{props.envoie2.infoEnvoie.prenom_expediteur} {props.envoie2.infoEnvoie.nom_expediteur} {props.envoie2.infoEnvoie.postnom_expediteur} </b> </p>
        <p className='text-dark'>Ekolo Ya Motindi: <b className='text-dark'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-dark'>Numéro Ya Mobile money : <b className='text-dark'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-dark'>date na heure : <b className='text-dark'> {JSON.stringify(props.envoie2.infoEnvoie.date_heure_operation)}</b></p>
        
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <Link to="/home_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" > 
        ok
        </Button>
        </Link>
        </Col>
    </Row>  
</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center mx-auto my-auto'>
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='display-6 couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>


    <Row className='justify-content-start pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      {props.envoie2.infoEnvoie.status_retrait == "code retrait en attente de validation" ? <p className='text-dark'>status ya transfert nayo : <b className="text-danger"></b> Code ya retrait nayo eza  nanu validé te...</p> :
     <p className='text-dark'><b>status ya transfert nayo :</b> <b className="text-success">Code ya retrait nayo ekomi valide</b> </p> }
    </Row>
    
    <Row className='justify-content-start pb-3' >
    <Col xs={12}>
        <p className='text-dark'>Code Retrait : <b className='text-danger'> {props.envoie2.infoEnvoie.code_retrait}</b></p>
        <p className='text-dark'>Montant à récupérer: <b className='text-danger'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Noms Beneficiare: <b className='text-dark'>{props.envoie2.infoEnvoie.prenom_beneficiaire} {props.envoie2.infoEnvoie.nom_beneficiaire} {props.envoie2.infoEnvoie.postnom_beneficiaire} </b> </p>
        <p className='text-dark'>Pays Beneficiare: <b className='text-dark'> {props.envoie2.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type de retrait: <b className='text-dark'>{props.envoie2.infoEnvoie.type_service}</b> </p>
        <p className='text-dark'>Noms Expediteur: <b className='text-dark'>{props.envoie2.infoEnvoie.prenom_expediteur} {props.envoie2.infoEnvoie.nom_expediteur} {props.envoie2.infoEnvoie.postnom_expediteur} </b> </p>
        <p className='text-dark'>Pays Expediteur: <b className='text-dark'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-dark'>Mobile Money: <b className='text-dark'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-dark'>date et heure : <b className='text-dark'> {JSON.stringify(props.envoie2.infoEnvoie.date_heure_operation)}</b></p>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <Link to="/home_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" > 
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