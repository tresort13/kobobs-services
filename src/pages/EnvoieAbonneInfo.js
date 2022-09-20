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
import HeaderFrench from './HeaderFrench';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import ClipLoader from "react-spinners/ClipLoader";
import  './Header.css';




const useState = React.useState
function EnvoieAbonneInfo(props)
{

    const [message,setMessage] = useState("Tala lisusu bien makomi nayo avant yako tinda formulaire nayo")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

      const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    
  
    
console.log(props.envoie.infoEnvoie)

    const submitEnvoie = (e)=>
    {    
      e.preventDefault()  
      setModalShow3(true)
        fetch('https://kobobsapi.herokuapp.com/api/envoieFormulaireAbonne/',{
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(props.envoie.infoEnvoie)
              })
              .then( res => res.json())
              .then(
                res => {  
                 setModalShow(true) 
                 props.dataEnvoie3(res)
                 console.log(res)
                 props.setEnvoie({infoEnvoie:{
                  nom_expediteur : '',
                  postnom_expediteur : '',
                  prenom_expediteur : '',
                  adresse_expediteur : '',
                  email_expediteur : '',
                  numero_expediteur: '',
                  pays_expediteur : 'Angleterre',
                  nom_beneficiaire : '',
                  postnom_beneficiaire : '',
                  prenom_beneficiaire : '',
                  adresse_beneficiaire : '',
                  numero_beneficiaire : '',
                  pays_beneficiaire : 'RD Congo',
                  montant_envoie_sans_frais : '',
                  montant_beneficiaire : '',
                  type_service : 'Kozua na maboko (kozua na nzela ya agence)',
                  frais_envoie : '',
                  frais_tva : '',
                  montant_total : '',
                  code_retrait : '',
                  data_operation : '',
                  date_heure_operation : '',
                  code_abonne : '',
                  status_retrait : '',
                  numero_transfer: '**********'
                 }})
                 navigate('/confirmation_envoie_info')
                }
              )
              .catch( (error) =>
                {
                  setModalShow3(false)
                  setModalShow2(true)  
                   console.log(error)
                } )

    }

   
    return (
        
        <>
        <HeaderFrench  />
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2 display-6'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='text-dark'><b><u>Mbongo </u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6} className="text-start">
        <p className='text-dark'>Mbongo Yako Futa: <b className='text-danger'>{Number(props.envoie.infoEnvoie.montant_pour_payer).toFixed(2)} £</b> </p>
        <p className='text-dark'>Mbongo Yako Zwa: <b className='text-dark'>{Number(props.envoie.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        
       
        </Col>

        <Col xs={6} className="text-start">
        <p className='text-dark'>Nzela Yako Zwa Mbongo: <b className='text-dark'>{props.envoie.infoEnvoie.type_service}</b> </p>
        <p className='text-dark'>Numéro Ya Mobile money: <b className='text-dark'>{props.envoie.infoEnvoie.numero_transfer}</b> </p>
       
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='text-dark'><b><u>Motindi</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6} className="text-start">
        <p className='text-dark'>Kombo Ya Libota: <b className='text-dark'>{props.envoie.infoEnvoie.nom_expediteur}</b> </p>
        <p className='text-dark'>Kombo Ya Authenticité: <b className='text-dark'>{props.envoie.infoEnvoie.postnom_expediteur}</b>  </p>
        <p className='text-dark'>Kombo Ya Mukristu: <b className='text-dark'>{props.envoie.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-dark'>Adresse: <b className='text-dark'>{props.envoie.infoEnvoie.adresse_expediteur}</b> </p> 
        </Col>

        <Col xs={6} className="text-start">
        <p className='text-dark'>Email: <b className='text-dark'>{props.envoie.infoEnvoie.email_expediteur}</b> </p>
        <p className='text-dark'>Téléphone: <b className='text-dark'> {props.envoie.infoEnvoie.numero_expediteur} </b></p>
        <p className='text-dark'>Ekolo Ya Motindi: <b className='text-dark'> {props.envoie.infoEnvoie.pays_expediteur}</b></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='text-dark'><b><u>Mozui</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6} className="text-start">
        <p className='text-dark'>Kombo Ya Libota:<b className='text-dark'>{props.envoie.infoEnvoie.nom_beneficiaire}</b>  </p>
        <p className='text-dark'>Kombo Ya Authenticité: <b className='text-dark'>{props.envoie.infoEnvoie.postnom_beneficiaire}</b> </p>
        <p className='text-dark'>Kombo Ya Mukristu: <b className='text-dark'>{props.envoie.infoEnvoie.prenom_beneficiaire} </b> </p>
        </Col>

        <Col xs={6} className="text-start">
        <p className='text-dark'>Adresse: <b className='text-dark'> {props.envoie.infoEnvoie.adresse_beneficiaire}</b></p>
        <p className='text-dark'>Téléphone: <b className='text-dark'>{props.envoie.infoEnvoie.numero_beneficiaire}</b>  </p>
        <p className='text-dark'>Ekolo Ya Mozui: <b className='text-dark'>{props.envoie.infoEnvoie.pays_beneficiaire}</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>
        Tinda formulaire
        </Button>
        </Col>

        <Col xs={6}>
        <Link to="/form_envoie_abonne">
         <Button variant="secondary" type="submit">
        Bongisa formulaire
        </Button>
        </Link>
        </Col>
        
    </Row>
    
    

</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center  mx-auto my-auto'  >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2 display-6'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='text-dark'><b><u>Mbongo </u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12} className="text-start">
        <p className='text-dark'>Mbongo Yako Futa: <b className='text-danger'>{Number(props.envoie.infoEnvoie.montant_pour_payer).toFixed(2)} £</b> </p>
        <p className='text-dark'>Mbongo Yako Zwa: <b className='text-dark'>{Number(props.envoie.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        
       
        </Col>

        <Col xs={12} className="text-start">
        <p className='text-dark'>Nzela Yako Zwa Mbongo: <b className='text-dark'>{props.envoie.infoEnvoie.type_service}</b> </p>
        <p className='text-dark'>Numéro Ya Mobile money: <b className='text-dark'>{props.envoie.infoEnvoie.numero_transfer}</b> </p>
       
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='text-dark'><b><u>Motindi</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12} className="text-start">
        <p className='text-dark'>Kombo Ya Libota: <b className='text-dark'>{props.envoie.infoEnvoie.nom_expediteur}</b> </p>
        <p className='text-dark'>Kombo Ya Authenticité: <b className='text-dark'>{props.envoie.infoEnvoie.postnom_expediteur}</b>  </p>
        <p className='text-dark'>Kombo Ya Mukristu: <b className='text-dark'>{props.envoie.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-dark'>Adresse: <b className='text-dark'>{props.envoie.infoEnvoie.adresse_expediteur}</b> </p> 
        </Col>

        <Col xs={12} className="text-start">
        <p className='text-dark'>Email: <b className='text-dark'>{props.envoie.infoEnvoie.email_expediteur}</b> </p>
        <p className='text-dark'>Téléphone: <b className='text-dark'> {props.envoie.infoEnvoie.numero_expediteur} </b></p>
        <p className='text-dark'>Ekolo Ya Motindi: <b className='text-dark'> {props.envoie.infoEnvoie.pays_expediteur}</b></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='text-dark'><b><u>Mozui</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12} className="text-start">
        <p className='text-dark'>Kombo Ya Libota:<b className='text-dark'>{props.envoie.infoEnvoie.nom_beneficiaire}</b>  </p>
        <p className='text-dark'>Kombo Ya Authenticité: <b className='text-dark'>{props.envoie.infoEnvoie.postnom_beneficiaire}</b> </p>
        <p className='text-dark'>Kombo Ya Mukristu: <b className='text-dark'>{props.envoie.infoEnvoie.prenom_beneficiaire} </b> </p>
        </Col>

        <Col xs={12} className="text-start">
        <p className='text-dark'>Adresse: <b className='text-dark'> {props.envoie.infoEnvoie.adresse_beneficiaire}</b></p>
        <p className='text-dark'>Téléphone: <b className='text-dark'>{props.envoie.infoEnvoie.numero_beneficiaire}</b>  </p>
        <p className='text-dark'>Ekolo Ya Mozui: <b className='text-dark'>{props.envoie.infoEnvoie.pays_beneficiaire}</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>
        Tinda formulaire
        </Button>
        </Col>

        <Col xs={6}>
        <Link to="/form_envoie_abonne">
         <Button variant="secondary" type="submit">
        Bongisa formulaire
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
   <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
   <MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
   <MyVerticallyCenteredModal3 show={modalShow3} onHide={() => setModalShow3(false)} />
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
          Kotinda Esimbi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-success'><b>Formulaire Na Yo Etindami Malamu</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>kanga page</Button>
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
          Kotinda esimbi te 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-danger'><b>Bolimbisi kotisa ba informations nayo nionso  bien !!!</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>kanga page</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal3(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Zela mukie...
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


export default EnvoieAbonneInfo;