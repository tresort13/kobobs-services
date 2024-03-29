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
import ClipLoader from "react-spinners/ClipLoader";
import  './Header.css';
import HeaderFrench from './HeaderFrench';
import HeaderEnglish from './HeaderEnglish';
// import SessionOut from './SessionOut';



const useState = React.useState

function ConfirmationRetraitInfoOperationFrench(props)
{
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2,setModalShow2] = React.useState(false);
    
    const [message,setMessage] = useState("Page de confirmation Retrait")
    const [couleur,setCouleur] = useState("text-dark")
    const navigate = useNavigate()
    


    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

      console.log(props.abonne.infoAbonne.agent_id)
      const closePage = ()=>
      {
        props.setEnvoie2({infoEnvoie :{
          agent_id:'',
          nom_expediteur : '',
          prenom_expediteur : '',
          adresse_expediteur : 'N/A',
          email_expediteur : '',
          numero_expediteur: '',
          pays_expediteur : 'UK',
          nom_beneficiaire : '',
          prenom_beneficiaire : '',
          pays_beneficiaire : '',
          montant_beneficiaire : '',
          montant_pour_payer :'',
          frais_envoie : '',
          frais_tva : '',
          type_service : '',
          numero_transfer :'',
          date_operation : '',
          date_heure_operation : '',
          month_year_operation :''
          }})
      
      navigate('/form_retrait_operation_french')
      }
  
      const payerRetrait = (e)=>
      {  
        e.preventDefault()  
        setModalShow2(true) 
        const date_time = {
          date_heure_operation_retrait : new Date().toLocaleString(),
          date_operation_retrait : new Date().toLocaleString().slice(0,10),
          month_year_operation_retrait : new Date().toLocaleString().slice(3,10),
          year_operation_retrait : new Date().toLocaleString().slice(6,10)
        } 
        fetch('https://kobobsapi.herokuapp.com/api/payerCodeRetrait/'+props.envoie2.infoEnvoie.code_retrait+'/'+props.abonne.infoAbonne.agent_id+'/', {
                method: 'PUT',
                 headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(date_time)
                })
                .then( res => res.json())
                .then(
                  res => {    
                    props.setModalShowRetrait(true)     
                    
                    navigate('/home_french')

                  }
                )
                .catch( (error) =>
                  {          
                     console.log(error)
                  } )
  
      }
  
    
   
    return (
        
        <>
<HeaderFrench dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/> 
{isDesktop && <Container className=' justify-content-center text-center mb-5 text-light text-bold rounded'  >
<Row className='mt-3'>
        <Col xs={12} className="text-start text-light">
            <p><Link to='/retrait_info_operation_french' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Retourner</u>  </b></Link> </p>
        </Col>
    </Row>
  <Row className='justify-content-center mt-3'>
<Col xs={12} style={{border:"2px solid white",width:1000}}>
<Row className='justify-content-center  pt-3' >
        <Col xs={6}>
        <p className='couleur2'><i><b>{message} </b></i></p>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={6}>
        <p className='text-light'>Code Retrait : <b className='text-light'> {props.envoie2.infoEnvoie.code_retrait}</b></p>
        <p className='text-light'>Montant à récupérer: <b className='couleur2 p-2' style={{border:"2px solid white"}}>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Noms Beneficiare: <b className='text-light'>{props.envoie2.infoEnvoie.nom_beneficiaire} {props.envoie2.infoEnvoie.postnom_beneficiaire} {props.envoie2.infoEnvoie.prenom_beneficiaire}</b> </p>
        <p className='text-light'>Pays Beneficiare: <b className='text-light'> {props.envoie2.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-light'>Type de retrait: <b className='text-light'>{props.envoie2.infoEnvoie.type_service}</b> </p>
       
        </Col>

        <Col xs={6}>
        <p className='text-light'>Noms Expediteur: <b className='text-light'>{props.envoie2.infoEnvoie.nom_expediteur} {props.envoie2.infoEnvoie.postnom_expediteur} {props.envoie2.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Pays Expediteur: <b className='text-light'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-light'>Numéro à transferer de l'argent: <b className='text-light'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-light'>date : <b className='text-light'> {props.envoie2.infoEnvoie.date_heure_operation}</b></p>
        {props.envoie2.infoEnvoie.numero_transfer==='N/A' ? <p></p> : <p className='text-light'>Numéro Mobile money: <b className='text-light'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>}

        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={e=>payerRetrait(e)}> 
        Payé Beneficiaire
        </Button>
        </Link>
        </Col>

        <Col xs={6}>
        <Button variant="danger" type="submit" onClick={closePage}>
        Annuler l'opération
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
            <p><Link to='/retrait_info_operation_french' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Retourner</u>  </b></Link> </p>
        </Col>
    </Row>
  <Row className='justify-content-center mt-3'>
<Col xs={12} style={{border:"2px solid white"}}>
<Row className='justify-content-center  pt-3' >
        <Col xs={12}>
        <p className='couleur2'><i><b>{message} </b></i></p>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={12}>
        <p className='text-light'>Code Retrait : <b className='text-light'> {props.envoie2.infoEnvoie.code_retrait}</b></p>
        <p className='text-light'>Montant à récupérer: <b className='couleur2 p-2' style={{border:"2px solid white"}}>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Noms Beneficiare: <b className='text-light'>{props.envoie2.infoEnvoie.nom_beneficiaire} {props.envoie2.infoEnvoie.postnom_beneficiaire} {props.envoie2.infoEnvoie.prenom_beneficiaire}</b> </p>
        <p className='text-light'>Pays Beneficiare: <b className='text-light'> {props.envoie2.infoEnvoie.pays_beneficiaire}</b></p>
        <p className='text-light'>Type de retrait: <b className='text-light'>{props.envoie2.infoEnvoie.type_service}</b> </p>
       
        </Col>

        <Col xs={12}>
        <p className='text-light'>Noms Expediteur: <b className='text-light'>{props.envoie2.infoEnvoie.nom_expediteur} {props.envoie2.infoEnvoie.postnom_expediteur} {props.envoie2.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Pays Expediteur: <b className='text-light'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        <p className='text-light'>Numéro à transferer de l'argent: <b className='text-light'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-light'>date : <b className='text-light'> {props.envoie2.infoEnvoie.date_heure_operation}</b></p>
        {props.envoie2.infoEnvoie.numero_transfer==='N/A' ? <p></p> : <p className='text-light'>Numéro Mobile money: <b className='text-light'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>}

        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={e=>payerRetrait(e)}> 
        Payé Beneficiaire
        </Button>
        </Link>
        </Col>

        <Col xs={6}>
        <Button variant="danger" type="submit" onClick={closePage}>
        Annuler l'opération
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
<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
<MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
{/*<SessionOut setIsadmin={props.setIsadmin}/>*/}
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
          Paiement Réussi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-success'><b>le code de retrait a été payé avec succès </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/home">
        <Button variant='warning' onClick={props.onHide}>Fermer</Button>
        </Link>
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
          Veuillez Patienter...
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


export default ConfirmationRetraitInfoOperationFrench;