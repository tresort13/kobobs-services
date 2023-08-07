import React,{useEffect} from 'react';
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
function EnvoieInfoFrench(props)
{

    const [message,setMessage] = useState("Veuillez vous assurer que tout est correct")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

      const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(true);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);
    
    const closePage = ()=>
    {
      props.setEnvoie({infoEnvoie :{
        agent_id:'',
        nom_expediteur : '',
        prenom_expediteur : '',
        adresse_expediteur : 'N/A',
        email_expediteur : 'N/A',
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
        month_year_operation :'',
        year_operation :''
        }})
    
    navigate('/menu_operation_envoi_french')
    }

    useEffect(()=>
    {
       const interval =  setInterval(()=> {
         setModalShow(false)
        }
         ,5000);
        return () => clearInterval(interval)
    },[])
    
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
                    props.setSaveAbonne(res.message_english)
                   
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
                        adresse_expediteur : 'N/A',
                        email_expediteur : 'N/A',
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
                        month_year_operation:'',
                        year_operation :''
                      }})
                      navigate('/confirmation_envoie_info_french')
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
        <HeaderFrench  dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
{isDesktop && <Container className=' justify-content-center text-center mb-5 text-light text-bold rounded'  >
<Row className='mt-3'>
        <Col xs={12} className="text-start text-light">
            <p><Link to='/form_envoie_client_french' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Retourner</u>  </b></Link> </p>
        </Col>
    </Row>
  <Row className='justify-content-center mt-3'>
<Col xs={12} style={{border:"2px solid white",width:1000}}>
<Row className='justify-content-center  pt-3' >
        <Col xs={6}>
        <p className='couleur2'><i><b>{message} !</b></i></p>
        <hr style={{color:"darkorange"}}></hr>
        </Col>
    </Row>


    

    <Row className='justify-content-center pb-3' >
        <Col xs={6} className="text-start" style={{borderRight:"2px solid darkorange"}}>
        <p className='couleur2 text-center'><b><u>Expéditeur </u></b> </p>
        <p className='text-light'>Nom complet: <b className='text-light'>{props.envoie.infoEnvoie.prenom_expediteur} {props.envoie.infoEnvoie.nom_expediteur}</b> </p>
        <p className='text-light'>Téléphone: <b className='text-light'> {props.envoie.infoEnvoie.numero_expediteur} </b></p>
        <p className='text-light'>Pays: <b className='text-light'> {props.envoie.infoEnvoie.pays_expediteur}</b></p>
        </Col>
    
        <Col xs={6} className="text-start"> 
        <p className='couleur2 text-center'><b><u>Bénéficiare </u></b> </p>
        <p className='text-light'>Nom complet: <b className='text-light'>{props.envoie.infoEnvoie.prenom_beneficiaire} {props.envoie.infoEnvoie.nom_beneficiaire} </b> </p>
        <p className='text-light'>Pays: <b className='text-light'>{props.envoie.infoEnvoie.pays_beneficiaire}</b> </p>
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>

    <Row className='justify-content-center pb-3' >
        <Col xs={6} className="text-start">
        <p className='text-light'>Montant Total à payer: <b className='text-dark bg-warning p-2' style={{border:"2px solid white"}}>{Number(props.envoie.infoEnvoie.montant_pour_payer).toFixed(2)} £</b> </p>
        <p className='text-light'>Montant à recevoir par le Bénéficiare: <b className='text-light p-2' style={{border:"2px solid white"}}>{Number(props.envoie.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        </Col>

        <Col xs={6} className="text-start">
        <p className='text-light'>Type de service : <b className='text-light'>{props.envoie.infoEnvoie.type_service}</b> </p>
        {props.envoie.infoEnvoie.numero_transfer==='' ? <p></p> : <p className='text-light'>Numéro yako tinda mbongo: <b className='text-light'>{props.envoie.infoEnvoie.numero_transfer}</b> </p>}
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={4}>
        <Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>
        Valider formulaire
        </Button>
        </Col>

        <Col xs={4}>
        <Link to="/form_envoie_client_french">
         <Button variant="secondary" type="submit">
        Modifier
        </Button>
        </Link>
        </Col>

        <Col xs={4}>
        <Button variant="danger" type="submit" onClick={closePage}>
        Fermer
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
            <p><Link to='/form_envoie_client_french' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Retourner</u>  </b></Link> </p>
        </Col>
    </Row>
  <Row className='justify-content-center mt-3'>
<Col xs={12} style={{border:"2px solid white",width:1000}}>
<Row className='justify-content-center  pt-3' >
        <Col xs={12}>
        <p className='couleur2'><i><b>{message} !</b></i></p>
        <hr style={{color:"darkorange"}}></hr>
        </Col>
    </Row>


    

    <Row className='justify-content-center pb-3' >
        <Col xs={12} className="text-start" style={{borderRight:"2px solid darkorange"}}>
        <p className='couleur2 text-center'><b><u>Expéditeur </u></b> </p>
        <p className='text-light'>Nom complet: <b className='text-light'>{props.envoie.infoEnvoie.prenom_expediteur} {props.envoie.infoEnvoie.nom_expediteur}</b> </p>
        <p className='text-light'>Téléphone: <b className='text-light'> {props.envoie.infoEnvoie.numero_expediteur} </b></p>
        <p className='text-light'>Pays: <b className='text-light'> {props.envoie.infoEnvoie.pays_expediteur}</b></p>
        </Col>
    
        <Col xs={12} className="text-start"> 
        <p className='couleur2 text-center'><b><u>Bénéficiare </u></b> </p>
        <p className='text-light'>Nom complet: <b className='text-light'>{props.envoie.infoEnvoie.prenom_beneficiaire} {props.envoie.infoEnvoie.nom_beneficiaire} </b> </p>
        <p className='text-light'>Pays: <b className='text-light'>{props.envoie.infoEnvoie.pays_beneficiaire}</b> </p>
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>

    <Row className='justify-content-center pb-3' >
        <Col xs={12} className="text-start">
        <p className='text-light'>Montant Total à payer: <b className='text-dark bg-warning p-2' style={{border:"2px solid white"}}>{Number(props.envoie.infoEnvoie.montant_pour_payer).toFixed(2)} £</b> </p>
        <p className='text-light'>Montant Bénéficiare: <b className='text-light p-2' style={{border:"2px solid white"}}>{Number(props.envoie.infoEnvoie.montant_beneficiaire).toFixed(2)} $</b> </p>
        </Col>

        <Col xs={12} className="text-start">
        <p className='text-light'>Type de service : <b className='text-light'>{props.envoie.infoEnvoie.type_service}</b> </p>
        {props.envoie.infoEnvoie.numero_transfer==='' ? <p></p> : <p className='text-light'>Numéro yako tinda mbongo: <b className='text-light'>{props.envoie.infoEnvoie.numero_transfer}</b> </p>}
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={4}>
        <Button variant="warning" type="submit" onClick={e=>submitEnvoie(e)}>
        Valider formulaire
        </Button>
        </Col>

        <Col xs={4}>
        <Link to="/form_envoie_client_french">
         <Button variant="secondary" type="submit">
        Modifier
        </Button>
        </Link>
        </Col>

        <Col xs={4}>
        <Button variant="danger" type="submit" onClick={closePage}>
        Fermer
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
        Envoi échoué
        </Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        <p className='text-danger'><b>Quelque chose s'est mal passé avec le serveur, veuillez réessayer plus tard ou appeler le service technique!!!</b>   
      </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>fermer</Button>
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
        S'il vous plaît, veuillez patienter...
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
        Envoi échoué
        </Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        <p className='text-danger'><b>Veuillez essayer de remplir tous les champs correctement!!!</b>   
      </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EnvoieInfoFrench;