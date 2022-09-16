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
import Modal from 'react-bootstrap/Modal';
import ClipLoader from "react-spinners/ClipLoader";
import  './Header.css';




const useState = React.useState
function EnvoieAbonneInfoEnglish(props)
{

    const [message,setMessage] = useState("Please check well all your informations before sending")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

      const navigate = useNavigate()
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    
  
    
console.log(props.envoie.infoEnvoie)

    const submitEnvoie = (e)=>
    {    
      e.preventDefault()  
      setModalShow(true)
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
                 navigate('/confirmation_envoie_info_english')
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
        <HeaderEnglish langue={props.langue} />
{isDesktop && <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Sender </u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Middle Name : <b className='couleur2'>{props.envoie.infoEnvoie.nom_expediteur}</b> </p>
        <p className='text-light'>Last Name : <b className='couleur2'>{props.envoie.infoEnvoie.postnom_expediteur}</b>  </p>
        <p className='text-light'>First Name : <b className='couleur2'>{props.envoie.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Adresse : <b className='couleur2'>{props.envoie.infoEnvoie.adresse_expediteur}</b> </p>
        <p className='text-light'>Email  : <b className='couleur2'>{props.envoie.infoEnvoie.email_expediteur}</b> </p>
        <p className='text-light'>Mobile Number : <b className='couleur2'> {props.envoie.infoEnvoie.numero_expediteur} </b></p>
        <p className='text-light'>country : <b className='couleur2'> {props.envoie.infoEnvoie.pays_expediteur}</b></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Receiver</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Middle Name : <b className='couleur2'>{props.envoie.infoEnvoie.nom_beneficiaire}</b>  </p>
        <p className='text-light'>Last Name : <b className='couleur2'>{props.envoie.infoEnvoie.postnom_beneficiaire}</b> </p>
        <p className='text-light'>First Name : <b className='couleur2'>{props.envoie.infoEnvoie.prenom_beneficiaire} </b> </p>
        <p className='text-light'>Adresse : <b className='couleur2'> {props.envoie.infoEnvoie.adresse_beneficiaire}</b></p>
        <p className='text-light'>Mobile Number : <b className='couleur2'>{props.envoie.infoEnvoie.numero_beneficiaire}</b>  </p>
        <p className='text-light'>country : <b className='couleur2'>{props.envoie.infoEnvoie.pays_beneficiaire}</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Money </u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Amount to get by the receiver : <b className='couleur2'>{Number(props.envoie.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Type of service : <b className='couleur2'>{props.envoie.infoEnvoie.type_service}</b> </p>
        <p className='text-light'>Mobile number for transfering the money : <b className='couleur2'>{props.envoie.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-light'>Total amount to pay for the transfer (all fees incl.): <b className='bg-warning text-dark'>{Number(props.envoie.infoEnvoie.montant_pour_payer).toFixed(2)} £</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Button variant="warning" type="submit" onClick={submitEnvoie}>
        Send Form
        </Button>
        </Col>

        <Col xs={6}>
        <Link to="/form_envoie_abonne_english">
         <Button variant="outline-warning" type="submit">
         Modify Form
        </Button>
        </Link>
        </Col>
        
    </Row>
    
    

</Container>
}

{isMobileOrTablet && <Container className='bg-dark justify-content-center text-center bordure mx-auto my-auto' >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Sender </u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Middle Name : <b className='couleur2'>{props.envoie.infoEnvoie.nom_expediteur}</b> </p>
        <p className='text-light'>Last Name : <b className='couleur2'>{props.envoie.infoEnvoie.postnom_expediteur}</b>  </p>
        <p className='text-light'>First Name : <b className='couleur2'>{props.envoie.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-light'>Adresse : <b className='couleur2'>{props.envoie.infoEnvoie.adresse_expediteur}</b> </p>
        <p className='text-light'>Email  : <b className='couleur2'>{props.envoie.infoEnvoie.email_expediteur}</b> </p>
        <p className='text-light'>Mobile Number : <b className='couleur2'> {props.envoie.infoEnvoie.numero_expediteur} </b></p>
        <p className='text-light'>country : <b className='couleur2'> {props.envoie.infoEnvoie.pays_expediteur}</b></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Receiver</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Middle Name : <b className='couleur2'>{props.envoie.infoEnvoie.nom_beneficiaire}</b>  </p>
        <p className='text-light'>Last Name : <b className='couleur2'>{props.envoie.infoEnvoie.postnom_beneficiaire}</b> </p>
        <p className='text-light'>First Name : <b className='couleur2'>{props.envoie.infoEnvoie.prenom_beneficiaire} </b> </p>
        <p className='text-light'>Adresse : <b className='couleur2'> {props.envoie.infoEnvoie.adresse_beneficiaire}</b></p>
        <p className='text-light'>Mobile Number : <b className='couleur2'>{props.envoie.infoEnvoie.numero_beneficiaire}</b>  </p>
        <p className='text-light'>country : <b className='couleur2'>{props.envoie.infoEnvoie.pays_beneficiaire}</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Money </u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-light'>Amount to get by the receiver : <b className='couleur2'>{Number(props.envoie.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-light'>Type of service : <b className='couleur2'>{props.envoie.infoEnvoie.type_service}</b> </p>
        <p className='text-light'>Mobile number for transfering the money : <b className='couleur2'>{props.envoie.infoEnvoie.numero_transfer}</b> </p>
        <p className='text-light'>Total amount to pay for the transfer (all fees incl.): <b className='bg-warning text-dark'>{Number(props.envoie.infoEnvoie.montant_pour_payer).toFixed(2)} £</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
    <Col xs={6}>
        <Button variant="warning" type="submit" onClick={submitEnvoie}>
        Send Form
        </Button>
        </Col>

        <Col xs={6}>
        <Link to="/form_envoie_abonne_english">
         <Button variant="outline-warning" type="submit">
         Modify Form
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

   <MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
   <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
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
          Sending failed 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        <p className='text-danger'><b>Please try to fill up all the fields correctly!!!</b>   
      </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>close</Button>
      </Modal.Footer>
    </Modal>
  );
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
          Please wait...
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

export default EnvoieAbonneInfoEnglish;