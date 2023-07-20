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



const useState = React.useState
function RetraitInfoLingala(props)
{

    const [message,setMessage] = useState("Vérifier status ya code retrait avant yako validé")
    const [message2,setMessage2] = useState("")
    const [couleur,setCouleur] = useState("text-dark")
    const [modalShow,setModalShow] = React.useState(false);
    const [modalShow2,setModalShow2] = React.useState(false);


    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  
const navigate = useNavigate()
   


    const validerRetrait = (e)=>
    { 
      e.preventDefault() 
      
      fetch('https://kobobsapi.herokuapp.com/api/getRetraitInfo/'+props.envoie2.infoEnvoie.code_retrait+'/', {
              method:'GET',
               headers: {'Content-Type': 'application/json'},
                //body: JSON.stringify(props.envoie2.infoEnvoie)
              })
              .then( res => res.json())
              .then(
                res => { 
                  if(res[0].status_retrait==='Code Retrait Valide')
                  {
                    props.dataEnvoie2(res)
                    navigate('/confirmation_retrait_info_operation_lingala')
                  }  
                  else if(res[0].status_retrait==='Code Retrait Payé')
                  {
                    setModalShow2(true)
                  }
                  else
                  {
                    setModalShow(true)
                  }
                
                }
              )
              .catch( (error) =>
                {            
                   console.log(error)
                } )

    }


    console.log(props.envoie2.infoEnvoie.status_retrait)

   
    return (
        
        <>
        <Header dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/> 
{isDesktop && <Container className=' justify-content-center text-center mb-5 text-light text-bold rounded'  >
<Row className='mt-3'>
        <Col xs={12} className="text-start text-light">
            <p><Link to='/form_retrait_operation_lingala' style={{textDecoration:"none"}}><b className='text-light'>Futa Mbongo &gt;&gt; </b></Link> <Link to='/retrait_info_operation_lingala' style={{textDecoration:"none"}}><b className='text-warning'>Validation pona ko futa mbongo</b></Link></p>
        </Col>
    </Row>
  <Row className='justify-content-center mt-3'>
<Col xs={12} style={{border:"2px solid white",width:1000}}>
<Row className='justify-content-center  pt-3' >
        <Col xs={6}>
        <p className='couleur2'><i><b>{message} !</b></i></p>
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u> Status ya Retrait</u></b> </p>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={12}>
        {props.envoie2.infoEnvoie.status_retrait === 'Code Retrait Valide' ?  <p className='text-light'>Status ya Retrait : <b className='text-success'>{props.envoie2.infoEnvoie.status_retrait}</b> </p> : <p className='text-light'>Status Retrait : <b className='text-danger'>{props.envoie2.infoEnvoie.status_retrait}</b> </p>}
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Informations ya Motindi</u></b> </p>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={6}>
        <p className='text-light'>Nom ya Motindi: <b className='text-light'>{props.envoie2.infoEnvoie.nom_expediteur}</b> </p>
        <p className='text-light'>Prénom ya Motindi: <b className='text-light'>{props.envoie2.infoEnvoie.prenom_expediteur}</b> </p>
        </Col>

        <Col xs={6}>
        <p className='text-light'>Email ya Motindi: <b className='text-light'>{props.envoie2.infoEnvoie.email_expediteur}</b> </p>
        <p className='text-light'>Numéro Téléphone ya Motindi: <b className='text-light'> {props.envoie2.infoEnvoie.numero_expediteur} </b></p>
        <p className='text-light'>Mboka ya Motindi: <b className='text-light'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Informations Mozui</u></b> </p>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={6}>
        <p className='text-light'>Nom ya Mozui: <b className='text-light'>{props.envoie2.infoEnvoie.nom_beneficiaire}</b>  </p>
        <p className='text-light'>Prénom ya Mozui: <b className='text-light'>{props.envoie2.infoEnvoie.prenom_beneficiaire} </b> </p>
        </Col>

        <Col xs={6}>
        <p className='text-light'>Mboka ya Mozui: <b className='text-light'>{props.envoie2.infoEnvoie.pays_beneficiaire}</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Informations ya Mbongo</u></b> </p>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={6}>
        <p className='text-light'>Motango: <b className='text-light'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Type ya retrait: <b className='text-light'>{props.envoie2.infoEnvoie.type_service}</b> </p>
        
        </Col>

        <Col xs={6}>
        {props.envoie2.infoEnvoie.numero_transfer==='' ? <p></p> : <p className='text-light'>Numéro ya transfer: <b className='text-light'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>}
        <p className='text-light'>date ya transfert: <b className='text-light'>{props.envoie2.infoEnvoie.date_heure_operation}</b> </p>
        </Col>
    </Row>

   
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={e=>validerRetrait(e)}>
        Valider Retrait mpo na kosala
        </Button>
        </Link>
        </Col>
        
    </Row>
    <Row className='justify-content-center pb-3'>
        <Col  xs={"auto"}>    
        <p className='pt-3 text-danger'><b>{message2}</b></p>
        </Col>
    </Row>
    
    </Col>

    </Row>

</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center bordure mx-auto mt-5' >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2 display-6'><i><b>{message}</b></i></p>
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Retrait Status</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        {props.envoie2.infoEnvoie.status_retrait === 'Code Retrait Valide' ?  <p className='text-dark'>Status Retrait : <b className='text-success'>{props.envoie2.infoEnvoie.status_retrait}</b> </p> : <p className='text-dark'>Status Retrait : <b className='text-danger'>{props.envoie2.infoEnvoie.status_retrait}</b> </p>}
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='text-dark'><b><u>Expediteur Informations</u></b> </p>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={6}>
        <p className='text-dark'>Nom: <b className='text-dark'>{props.envoie2.infoEnvoie.nom_expediteur}</b> </p>
        <p className='text-dark'>Postnom: <b className='text-dark'>{props.envoie2.infoEnvoie.postnom_expediteur}</b>  </p>
        <p className='text-dark'>Prénom: <b className='text-dark'>{props.envoie2.infoEnvoie.prenom_expediteur}</b> </p>
        </Col>

        <Col xs={6}>
        <p className='text-dark'>Email: <b className='text-dark'>{props.envoie2.infoEnvoie.email_expediteur}</b> </p>
        <p className='text-dark'>Numéro Téléphone: <b className='text-dark'> {props.envoie2.infoEnvoie.numero_expediteur} </b></p>
        <p className='text-dark'>Pays: <b className='text-dark'> {props.envoie2.infoEnvoie.pays_expediteur}</b></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='text-dark'><b><u>Bénéficiare Informations</u></b> </p>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={6}>
        <p className='text-dark'>Nom: <b className='text-dark'>{props.envoie2.infoEnvoie.nom_beneficiaire}</b>  </p>
        <p className='text-dark'>Postnom: <b className='text-dark'>{props.envoie2.infoEnvoie.postnom_beneficiaire}</b> </p>
        <p className='text-dark'>Prénom: <b className='text-dark'>{props.envoie2.infoEnvoie.prenom_beneficiaire} </b> </p>
        </Col>

        <Col xs={6}>
        <p className='text-dark'>Email Adresse: <b className='text-dark'> {props.envoie2.infoEnvoie.adresse_beneficiaire}</b></p>
        <p className='text-dark'>Numéro Téléphone: <b className='text-dark'>{props.envoie2.infoEnvoie.numero_beneficiaire}</b>  </p>
        <p className='text-dark'>Pays: <b className='text-dark'>{props.envoie2.infoEnvoie.pays_beneficiaire}</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='text-dark'><b><u>Motant Informations</u></b> </p>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={12}>
        <p className='text-dark'>Montant: <b className='text-dark'>{Number(props.envoie2.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Type de retrait: <b className='text-dark'>{props.envoie2.infoEnvoie.type_service}</b> </p>
        <p className='text-dark'>Numéro à transferer de l'argent: <b className='text-dark'>{props.envoie2.infoEnvoie.numero_transfer}</b> </p>
        </Col>
    </Row>

   
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit" onClick={e=>validerRetrait(e)}>
        Valider Retrait pour Servir
        </Button>
        </Link>
        </Col>
        
    </Row>
    <Row className='justify-content-center pb-3'>
        <Col  xs={"auto"}>    
        <p className='pt-3 text-danger'><b>{message2}</b></p>
        </Col>
    </Row>
    

</Container> }
<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
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
          Echec ya Validation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <p className='text-danger'><b>code ya retrait oyo eza nanu valide te !!!</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>kokanga</Button>
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
          Echec ya Validation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-danger'><b>Désolé  code ya retrait esi efutama !!!</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>kokanga</Button>
      </Modal.Footer>
    </Modal>
  );
}





export default RetraitInfoLingala;