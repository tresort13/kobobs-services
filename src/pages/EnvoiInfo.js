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
import Header from './Header';




const useState = React.useState
function EnvoieInfo(props)
{

    const [message,setMessage] = useState("Tala lisusu bien makomi nayo avant yako tinda")
    const [couleur,setCouleur] = useState("text-dark")
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);

    const navigate = useNavigate()
    
    props.setForceUpdate(true)
    const isDesktop = useMediaQuery({
      query: "(min-width: 1224px)"
    });
    const isMobileOrTablet = useMediaQuery({
      query: "(max-width: 1224px)"
    });
  
    
console.log(props.envoie.infoEnvoie)

    const submitEnvoie = (e)=>
    {    
      e.preventDefault()  
      setModalShow(true)
        fetch('https://kobobsapi.herokuapp.com/api/envoieFormulaire/',{
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(props.envoie.infoEnvoie)
              })
              .then( res => res.json())
              .then(
                res => { 
                  console.log(res) 
                  console.log(res.message)
                  props.setEnvoie3({infoEnvoie :{
                    nom_expediteur : res.data.nom_expediteur,
                    prenom_expediteur : res.data.prenom_expediteur,
                    adresse_expediteur : res.data.adresse_expediteur,
                    email_expediteur : res.data.email_expediteur,
                    numero_expediteur: res.data.numero_expediteur,
                    pays_expediteur : res.data.pays_expediteur,
                    nom_beneficiaire : res.data.nom_beneficiaire,
                    prenom_beneficiaire : res.data.prenom_beneficiaire,
                    pays_beneficiaire : res.data.pays_beneficiaire,
                    montant_beneficiaire : res.data.montant_beneficiaire,
                    type_service : res.data.type_service,
                    frais_envoie : res.data.frais_envoie,
                    montant_total : res.data.montant_total,
                    code_retrait : res.data.code_retrait,
                    date_operation : res.data.date_operation,
                    date_heure_operation : res.data.date_heure_operation,
                    status_retrait : res.data.status_retrait,
                    numero_transfer: res.data.numero_transfer
                    }})
                    props.setClientForm(true)
                    props.setSaveAbonne(res.message_lingala)
                   
               //   props.dataEnvoie3(res)
                  console.log(res)
                  console.log(props.envoie3.infoEnvoie.code_retrait)
                    setModalShow(false)
                    
                    if(props.envoie3.infoEnvoie.code_retrait === undefined)
                    {
                      setModalShow(false)
                      setModalShow2(true)

                    }
                    else
                    {
                      props.setEnvoie({infoEnvoie:{
                        agent_id:'',
                        nom_expediteur : '',
                        prenom_expediteur : '',
                        adresse_expediteur : '',
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
                        month_year_operation:''
                      }})
                      navigate('/confirmation_envoie_info')
                    }
                    
                  }
              )
              .catch( (error) =>
                {
                  setModalShow(false)
                  setModalShow4(true)  
                   console.log(error)
                } )

    }

   
    return (
        
        <>
<Header dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/> 
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center  pt-3' >
        <Col xs={6}>
        <p className='text-danger '><i><b>{message} !</b></i></p>
        <hr style={{color:"darkorange"}}></hr>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3' >

        <Col xs={6} className="text-start">
        <p className='text-dark'>Total amount to pay for the transfer (all fees incl.): <b className='text-dark bg-warning p-2' style={{border:"2px solid black"}}>{Number(props.envoie.infoEnvoie.montant_pour_payer).toFixed(2)} £</b> </p>
        <p className='text-dark'>Amount to get by the receiver : <b className='text-dark p-2' style={{border:"2px solid black"}}>{Number(props.envoie.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p> 
        </Col>

        <Col xs={6} className="text-start">
        <p className='text-dark'>Type of service : <b className='text-dark'>{props.envoie.infoEnvoie.type_service}</b> </p>
        {props.envoie.infoEnvoie.numero_transfer==='' ? <p></p> : <p className='text-dark'>Mobile Money Number: <b className='text-dark'>{props.envoie.infoEnvoie.numero_transfer}</b> </p>}
        </Col>
    </Row>
    <hr style={{color:"darkorange"}}></hr>
    <Row className='justify-content-center pb-3' >

<Col xs={6} className="text-start">
<p className='text-dark'>Mbongo Yako Futa (naba taxe.): <b className='text-dark bg-warning p-2' style={{border:"2px solid black"}}>{Number(props.envoie.infoEnvoie.montant_pour_payer).toFixed(2)} £</b> </p>
<p className='text-dark'>Mbongo Yako Zwa : <b className='text-dark p-2' style={{border:"2px solid black"}}>{Number(props.envoie.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p> 
</Col>

<Col xs={6} className="text-start">
<p className='text-dark'>Nzela Yako Zwa Mbongo : <b className='text-dark'>{props.envoie.infoEnvoie.type_service}</b> </p>
{props.envoie.infoEnvoie.numero_transfer==='' ? <p></p> : <p className='text-dark'>Numéro Ya Mobile money: <b className='text-dark'>{props.envoie.infoEnvoie.numero_transfer}</b> </p>}
</Col>
</Row>
<hr style={{color:"darkorange"}}></hr>
<Row className='justify-content-center pb-3' >


<Col xs={6} className="text-start " style={{borderRight:"2px solid black"}}>
<p className='couleur2 text-center'><b><u>Motindi </u></b> </p>
<p className='text-dark'>Kombo : <b className='text-dark'>{props.envoie.infoEnvoie.prenom_expediteur} {props.envoie.infoEnvoie.nom_expediteur}</b> </p>
<p className='text-dark'>Numéro Ya tshombo :<b className='text-dark'> {props.envoie.infoEnvoie.numero_expediteur} </b></p>
<p className='text-dark'>Ekolo : <b className='text-dark'> {props.envoie.infoEnvoie.pays_expediteur}</b></p>
</Col>

<Col xs={6} className="text-start">
<p className='couleur2 text-center'><b><u>Mozui </u></b> </p>
<p className='text-dark'>Kombo : <b className='text-dark'>{props.envoie.infoEnvoie.prenom_beneficiaire} {props.envoie.infoEnvoie.nom_beneficiaire}</b> </p>
<p className='text-dark'>Ekolo : <b className='text-dark'>{props.envoie.infoEnvoie.pays_beneficiaire}</b> </p>
</Col>

</Row>

<Row className='justify-content-center pb-3'>
<hr style={{color:"darkorange"}}></hr>
</Row>
<Row className='justify-content-center pb-3' >
<Col xs={6}>
<Button variant="warning" type="submit" onClick={submitEnvoie}>
Tinda makomi
</Button>
</Col>

<Col xs={6}>
<Link to="/form_envoie_client">
 <Button variant="secondary" type="submit">
 Bongisa makomi
</Button>
</Link>
</Col>

</Row>

    
    

</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center  mx-auto my-auto' >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='couleur2 display-6'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Money </u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >

        <Col xs={12} className="text-start">
        <p className='text-dark'>Total amount to pay for the transfer (all fees incl.): <b className='text-danger'>{Number(props.envoie.infoEnvoie.montant_pour_payer).toFixed(2)} £</b> </p>
        <p className='text-dark'>Amount to get by the receiver : <b className='text-dark'>{Number(props.envoie.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p> 
        
        <p className='text-dark'>Type of service : <b className='text-dark'>{props.envoie.infoEnvoie.type_service}</b> </p>
        <p className='text-dark'>Mobile Money Number: <b className='text-dark'>{props.envoie.infoEnvoie.numero_transfer}</b> </p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Sender </u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
       

        <Col xs={12} className="text-start">
        <p className='text-dark'>First Name : <b className='text-dark'>{props.envoie.infoEnvoie.prenom_expediteur}</b> </p>
        <p className='text-dark'>Last Name : <b className='text-dark'>{props.envoie.infoEnvoie.nom_expediteur}</b>  </p>
  
        <p className='text-dark'>Adress : <b className='text-dark'>{props.envoie.infoEnvoie.adresse_expediteur}</b> </p> 
        <p className='text-dark'>Email: <b className='text-dark'>{props.envoie.infoEnvoie.email_expediteur}</b> </p>

        <p className='text-dark'>Mobile Number :<b className='text-dark'> {props.envoie.infoEnvoie.numero_expediteur} </b></p>
        <p className='text-dark'>country : <b className='text-dark'> {props.envoie.infoEnvoie.pays_expediteur}</b></p>
        </Col>
  
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Receiver</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >

        <Col xs={12} className="text-start">
        <p className='text-dark'>First Name : <b className='text-dark'>{props.envoie.infoEnvoie.prenom_beneficiaire} </b> </p>

        <p className='text-dark'>Last Name :<b className='text-dark'>{props.envoie.infoEnvoie.nom_beneficiaire}</b> </p>
       
        <p className='text-dark'>country : <b className='text-dark'>{props.envoie.infoEnvoie.pays_beneficiaire}</b> </p>
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
         <Button variant="secondary" type="submit">
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
   <MyVerticallyCenteredModal4 show={modalShow4} onHide={() => setModalShow4(false)} />
<Footer />
        </>
       
    )
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
          kotinda elongami te
        </Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        <p className='text-danger'><b>Eloko moko ekendeki mabe na serveur svp meka lisusu sima to benga ba services ya soutien technique!!!</b>   
      </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>kokanga</Button>
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

function MyVerticallyCenteredModal4(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        kotinda elongami te
        </Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        <p className='text-danger'><b>Svp meka kotondisa ba champs nionso malamu!!!</b>   
      </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>kokanga</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EnvoieInfo;