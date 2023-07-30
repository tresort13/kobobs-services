import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useNavigate} from  'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HeaderFrench from './HeaderFrench';
import Footer from './Footer';
import  './Header.css';



const useState = React.useState

function ConfirmationRetraitInfoFrench(props)
{
    const [message,setMessage] = useState("Informations du transfert")


    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

   
     
    return (
        
        <>
        <HeaderFrench  abonne={props.abonne} envoie2={props.envoie2} dataAbonne={props.dataAbonne} envoie3={props.envoie3} isAdmin={props.isAdmin} isStaff={props.isStaff} language2={props.language2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} setLanguage2={props.setLanguage2} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className=' couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>


    <Row className='justify-content-start pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      {props.envoie2.infoEnvoie.status_retrait == "code retrait en attente de validation" ? <p className='text-dark'>votre statut de transfert : <b className="text-danger">la validation de votre code  est toujours en attente...</b> </p> :
     props.envoie2.infoEnvoie.status_retrait == "Code Retrait Valide" ? <p className='text-dark'><b>votre statut de transfert :</b> <b className="text-success">Votre code a été validé et l'argent est prêt à être récupéré</b> </p> : 
     <p className='text-dark'><b>votre statut de transfert :</b> <b className="text-success">Votre Bénéficiare a déjà récupéré l'argent</b> </p> }
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>

    <Row className='justify-content-start pb-3' >
        <Col xs={6} className='text-start'>
        <p className='text-dark'>Code Retrait : <b className='text-danger'> {props.envoie2.infoEnvoie.code_retrait}</b></p>
        <p className='text-dark'>Montant à récupérer: <b className='text-danger'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Noms Beneficiare: <b className='text-dark'> {props.envoie2.infoEnvoie.prenom_beneficiaire} {props.envoie2.infoEnvoie.nom_beneficiaire}</b> </p>
        <p className='text-dark'>Pays Beneficiare: <b className='text-dark'> {props.envoie2.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type de retrait: <b className='text-dark'>{props.envoie2.infoEnvoie.type_service}</b> </p>
       
        </Col>

        <Col xs={6} className='text-start'>
        <p className='text-dark'>Noms Expediteur: <b className='text-dark'>{props.envoie2.infoEnvoie.prenom_expediteur} {props.envoie2.infoEnvoie.nom_expediteur}  </b> </p>
        <p className='text-dark'>Pays Expediteur: <b className='text-dark'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        {props.envoie2.infoEnvoie.numero_transfer==='N/A' ? <p></p> : <p className='text-dark'>Numéro de transfert: <b className='text-dark'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>}
        <p className='text-dark'>date : <b className='text-dark'> {props.envoie2.infoEnvoie.date_heure_operation}</b></p>
        
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <Link to="/home_french" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" > 
        ok
        </Button>
        </Link>
        </Col>
    </Row>  
</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className=' couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>


    <Row className='justify-content-start pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      {props.envoie2.infoEnvoie.status_retrait == "code retrait en attente de validation" ? <p className='text-dark'>votre statut de transfert : <b className="text-danger">la validation de votre code  est toujours en attente...</b> </p> :
     props.envoie2.infoEnvoie.status_retrait == "Code Retrait Valide" ? <p className='text-dark'><b>votre statut de transfert :</b> <b className="text-success">Votre code a été validé et l'argent est prêt à être récupéré</b> </p> : 
     <p className='text-dark'><b>votre statut de transfert :</b> <b className="text-success">Votre Bénéficiare a déjà récupéré l'argent</b> </p> }
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>

    <Row className='justify-content-start pb-3' >
        <Col xs={12} className='text-start'>
        <p className='text-dark'>Code Retrait : <b className='text-danger'> {props.envoie2.infoEnvoie.code_retrait}</b></p>
        <p className='text-dark'>Montant à récupérer: <b className='text-danger'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Noms Beneficiare: <b className='text-dark'> {props.envoie2.infoEnvoie.prenom_beneficiaire} {props.envoie2.infoEnvoie.nom_beneficiaire}</b> </p>
        <p className='text-dark'>Pays Beneficiare: <b className='text-dark'> {props.envoie2.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type de retrait: <b className='text-dark'>{props.envoie2.infoEnvoie.type_service}</b> </p>
       
        </Col>

        <Col xs={12} className='text-start'>
        <p className='text-dark'>Noms Expediteur: <b className='text-dark'>{props.envoie2.infoEnvoie.prenom_expediteur} {props.envoie2.infoEnvoie.nom_expediteur}  </b> </p>
        <p className='text-dark'>Pays Expediteur: <b className='text-dark'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        {props.envoie2.infoEnvoie.numero_transfer==='N/A' ? <p></p> : <p className='text-dark'>Numéro de transfert: <b className='text-dark'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>}
        <p className='text-dark'>date : <b className='text-dark'> {props.envoie2.infoEnvoie.date_heure_operation}</b></p>
        
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <Link to="/home_french" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" > 
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




export default ConfirmationRetraitInfoFrench;