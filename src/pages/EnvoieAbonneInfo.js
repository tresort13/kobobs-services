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
function EnvoieAbonneInfo(props)
{

    const [message,setMessage] = useState("Tala lisusu Makomi nayo bien avant yako tinda formulaire2")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

      const navigate = useNavigate()
    const [modalShow2, setModalShow2] = React.useState(false);
    
  
    
console.log(props.envoie.infoEnvoie)

    const submitEnvoie = (e)=>
    {    
      e.preventDefault()  
        fetch('https://kobobsapi.herokuapp.com/api/envoieFormulaireAbonne/',{
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(props.envoie.infoEnvoie)
              })
              .then( res => res.json())
              .then(
                res => {  

                 props.dataEnvoie3(res)
                 console.log(res)
                 navigate('/confirmation_envoie_info')
                }
              )
              .catch( (error) =>
                {
                  setModalShow2(true)  
                   console.log(error)
                } )

    }

   
    return (
        
        <>
        <Header langue={props.langue} />
{isDesktop && <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Motindi </u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Ya Libota : <b className='couleur2'>{props.envoie.infoEnvoie.nom_expediteur}</b> </p>
        <p className='text-light'>Kombo Ya Authenticité : <b className='couleur2'>{props.envoie.infoEnvoie.postnom_expediteur}</b>  </p>
        <p className='text-light'>Kombo Ya Mukristu : <b className='couleur2'>{props.envoie.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Adresse : <b className='couleur2'>{props.envoie.infoEnvoie.adresse_expediteur}</b> </p>
        <p className='text-light'>Email  : <b className='couleur2'>{props.envoie.infoEnvoie.email_expediteur}</b> </p>
        <p className='text-light'>Numéro Ya Tshombo : <b className='couleur2'> {props.envoie.infoEnvoie.numero_expediteur} </b></p>
        <p className='text-light'>Ekolo : <b className='couleur2'> {props.envoie.infoEnvoie.pays_expediteur}</b></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mozui</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Ya Libota : <b className='couleur2'>{props.envoie.infoEnvoie.nom_beneficiaire}</b>  </p>
        <p className='text-light'>Kombo Ya Authenticité : <b className='couleur2'>{props.envoie.infoEnvoie.postnom_beneficiaire}</b> </p>
        <p className='text-light'>Kombo Ya Mukristu : <b className='couleur2'>{props.envoie.infoEnvoie.prenom_beneficiaire} </b> </p>
        <p className='text-light'>Adresse : <b className='couleur2'> {props.envoie.infoEnvoie.adresse_beneficiaire}</b></p>
        <p className='text-light'>Numéro Ya Tshombo : <b className='couleur2'>{props.envoie.infoEnvoie.numero_beneficiaire}</b>  </p>
        <p className='text-light'>Ekolo : <b className='couleur2'>{props.envoie.infoEnvoie.pays_beneficiaire}</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mbongo</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Mbongo ya kozwa epayi ya Mozui: <b className='couleur2'>{Number(props.envoie.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Nzela yako zwa Mbongo : <b className='couleur2'>{props.envoie.infoEnvoie.type_service}</b> </p>
        <p className='text-light'>Numero ya téléphone pona kotinda mbongo : <b className='couleur2'>{props.envoie.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-light'>Mbongo Nionso Yako Futa Pona ko Tinda: <b className='bg-warning text-dark'>{Number(props.envoie.infoEnvoie.montant_pour_payer).toFixed(2)} £</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Button variant="warning" type="submit" onClick={submitEnvoie}>
        Tinda Formulaire
        </Button>
        </Col>
        
    </Row>
    
    

</Container>
}

{isMobileOrTablet &&<Container className='bg-dark justify-content-center text-center bordure mx-auto my-auto'>
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Motindi </u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Ya Libota : <b className='couleur2'>{props.envoie.infoEnvoie.nom_expediteur}</b> </p>
        <p className='text-light'>Kombo Ya Authenticité : <b className='couleur2'>{props.envoie.infoEnvoie.postnom_expediteur}</b>  </p>
        <p className='text-light'>Kombo Ya Mukristu : <b className='couleur2'>{props.envoie.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Adresse : <b className='couleur2'>{props.envoie.infoEnvoie.adresse_expediteur}</b> </p>
        <p className='text-light'>Email  : <b className='couleur2'>{props.envoie.infoEnvoie.email_expediteur}</b> </p>
        <p className='text-light'>Numéro Ya Tshombo : <b className='couleur2'> {props.envoie.infoEnvoie.numero_expediteur} </b></p>
        <p className='text-light'>Ekolo : <b className='couleur2'> {props.envoie.infoEnvoie.pays_expediteur}</b></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mozui</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Kombo Ya Libota : <b className='couleur2'>{props.envoie.infoEnvoie.nom_beneficiaire}</b>  </p>
        <p className='text-light'>Kombo Ya Authenticité : <b className='couleur2'>{props.envoie.infoEnvoie.postnom_beneficiaire}</b> </p>
        <p className='text-light'>Kombo Ya Mukristu : <b className='couleur2'>{props.envoie.infoEnvoie.prenom_beneficiaire} </b> </p>
        <p className='text-light'>Adresse : <b className='couleur2'> {props.envoie.infoEnvoie.adresse_beneficiaire}</b></p>
        <p className='text-light'>Numéro Ya Tshombo : <b className='couleur2'>{props.envoie.infoEnvoie.numero_beneficiaire}</b>  </p>
        <p className='text-light'>Ekolo : <b className='couleur2'>{props.envoie.infoEnvoie.pays_beneficiaire}</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mbongo</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Mbongo ya kozwa epayi ya Mozui: <b className='couleur2'>{Number(props.envoie.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Nzela yako zwa Mbongo : <b className='couleur2'>{props.envoie.infoEnvoie.type_service}</b> </p>
        <p className='text-light'>Numero ya téléphone pona kotinda mbongo : <b className='couleur2'>{props.envoie.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-light'>Mbongo Nionso Yako Futa Pona ko Tinda: <b className='bg-warning text-dark'>{Number(props.envoie.infoEnvoie.montant_pour_payer).toFixed(2)} £</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Button variant="warning" type="submit" onClick={submitEnvoie}>
        Tinda Formulaire
        </Button>
        </Col>
        
    </Row>
    
    

</Container>}
<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>

   <MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
<Footer />
        </>
       
    )
}



function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          KO Tinda Esimbi te 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Makomi : </h4>
        <p className='text-danger'><b>Bolimbisi Kotinda esimbi te... Bandela ko koma bien formulaire na yo!!!</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EnvoieAbonneInfo;