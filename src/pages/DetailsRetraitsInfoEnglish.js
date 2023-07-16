import React,{ useEffect } from 'react';
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
import HeaderEnglish from './HeaderEnglish';
import ClipLoader from "react-spinners/ClipLoader";
//import SessionOut from './SessionOut';



const useState = React.useState
function DetailsRetraitsInfoEnglish(props)
{

  console.log(props.detailEnvoieTotal)
   
     const navigate = useNavigate()  
    const [message,setMessage] = useState("Operation Details")
    const [couleur,setCouleur] = useState("text-dark")
    const [modalShow, setModalShow] = React.useState(true);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);
    const [modalShow5, setModalShow5] = React.useState(false);
    const [modalShow6, setModalShow6] = React.useState(false);
    const[envoie,setEnvoie] = useState({infoEnvoie :{
      agent_id :props.detailEnvoieTotal[0].agent_id,
      nom_expediteur : props.detailEnvoieTotal[0].nom_expediteur,
      prenom_expediteur : props.detailEnvoieTotal[0].prenom_expediteur,
      adresse_expediteur : props.detailEnvoieTotal[0].adresse_expediteur,
      email_expediteur : props.detailEnvoieTotal[0].email_expediteur,
      numero_expediteur: props.detailEnvoieTotal[0].numero_expediteur,
      pays_expediteur : props.detailEnvoieTotal[0].pays_expediteur,
      nom_beneficiaire : props.detailEnvoieTotal[0].nom_beneficiaire,
      prenom_beneficiaire : props.detailEnvoieTotal[0].prenom_beneficiaire,
      pays_beneficiaire : props.detailEnvoieTotal[0].pays_beneficiaire,
      montant_beneficiaire : props.detailEnvoieTotal[0].montant_beneficiaire,
      type_service :props.detailEnvoieTotal[0].type_service,
      numero_transfer : props.detailEnvoieTotal[0].numero_transfer,
      code_retrait : props.detailEnvoieTotal[0].code_retrait,  
      montant_pour_payer : props.detailEnvoieTotal[0].montant_total,
      frais_envoie : props.detailEnvoieTotal[0].frais_envoie,
      frais_tva : props.detailEnvoieTotal[0].frais_tva,
      date_operation : props.detailEnvoieTotal[0].date_operation,
      date_heure_operation :props.detailEnvoieTotal[0].date_heure_operation,
      month_year_operation : props.detailEnvoieTotal[0].month_year_operation
      }})

    const recoverOperation = ()=>
    {
      setModalShow2(true)
        fetch('https://kobobsapi.herokuapp.com/api/recoverOperation/',{
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(envoie.infoEnvoie)
              })
              .then( res => res.json())
              .then(
                res => {  
                  if (res.recoverMessage == "success")
                  {
                    setModalShow2(false)
                    setModalShow4(true)

                   
                  }
                  else{
                    setModalShow2(false)
                    setModalShow3(true)
                  }
                  }
              )
              .catch( (error) =>
                {
                  setModalShow2(false)
                  setModalShow3(true)
                } )
    }

    const deleteOperation = ()=>
    {
      setModalShow2(true)
        fetch('https://kobobsapi.herokuapp.com/api/suprimerPermanently/',{
                method:'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(envoie.infoEnvoie)
              })
              .then( res => res.json())
              .then(
                res => {  
                  if (res.message == "success")
                  {
                    setModalShow2(false)
                    setModalShow5(true)

                   
                  }
                  else{
                    setModalShow2(false)
                    setModalShow3(true)
                  }
                  }
              )
              .catch( (error) =>
                {
                  setModalShow2(false)
                  setModalShow3(true)
                } )
    }

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
    
    

      const closePage = ()=>{
        navigate('/menu_rapport_retrait_english')
      }
    
     /* useEffect(()=>
      {
         const interval =  setInterval((e)=>submit(e),1000);
          return () => clearInterval(interval)
      },[envoie4])

*/

     
console.log(props.detailEnvoieTotal)  
   
   
    return (
        
        <>
        <HeaderEnglish dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
{isDesktop && props.detailEnvoieTotal.length > 0 ? props.detailEnvoieTotal.map((value)=>
    {
    return <Container className='bg-light justify-content-center text-center mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
     
    </Row>
    <Row className='justify-content-start text-start pb-3 mb-3' >
    <Col xs={6} className='justify-content-start'>
        <p className='text-dark'>Sender Name: <b className='text-dark'>{value.nom_expediteur} {value.postnom_expediteur} {value.prenom_expediteur}</b> </p>
        <p className='text-dark'>Receiver Name: <b className='text-dark '>{value.nom_beneficiaire} {value.postnom_beneficiaire} {value.prenom_beneficiaire}</b> </p>
        <p className='text-dark'>Country sender: <b className='text-dark '> {value.pays_expediteur}</b></p>
        <p className='text-dark'>sender Number: <b className='text-dark'> {value.numero_expediteur}</b></p>
        <p className='text-dark'>send email: <b className='text-dark '> {value.email_expediteur}</b></p>
        <p className='text-dark'>country Receiver: <b className='text-dark '> {value.pays_beneficiaire}</b></p>
        <p className='text-dark'>Amount to pick up: <b className='text-dark'>{Number(value.montant_beneficiaire).toFixed(2)} $</b> </p>
        
    </Col>

    <Col xs={6}>
       
        <p className='text-dark'>Amount to be paid: <b className='text-dark'>{Number(value.montant_total).toFixed(2)} £</b> </p>
        <p className='text-dark'>Type of service: <b className='text-dark'>{value.type_service}</b> </p>
        <p className='text-dark'>Mobile Money: <b className='text-dark'>{value.numero_transfer}</b> </p>
        <p className='text-dark'>Withdrawal Code : <b className='text-dark'>{value.code_retrait}</b> </p>
        <p className='text-dark'>Withdrawal Code status : <b className='text-dark'>{value.status_retrait}</b> </p>
        
    </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
     
    </Row>

    <Row className='justify-content-center pb-3 mb-3 text-start' >
    <Col xs={6}>
     {value.status_retrait === "Code Retrait Payé" ? <div><p className='text-dark'>Withdrawal made by : <b className='text-dark'>{value.retrait_executed_by_agent}</b> </p>
     <p className='text-dark'>Date and heure time: <b className='text-dark'> {value.date_heure_operation_retrait}</b></p></div>  :
    <p></p>}        
    </Col>

    <Col xs={6}> 
        <p className='text-dark'>Sent by : <b className='text-dark'>{value.envoi_executed_by_agent}</b> </p>
        <p className='text-dark'>Date and time : <b className='text-dark'> {value.date_heure_operation}</b></p> 
    </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
     
    </Row>

    <Row className='justify-content-center pb-3 mb-3' >
    <Col xs={12}>
     {value.status_retrait !== "code retrait en attente de validation" ? <div><p className='text-dark'>Withdrawal code validated by : <b className='text-dark'>{value.validation_executed_by_owner}</b> </p>
     <p className='text-dark'>Date and time  validation: <b className='text-dark'> {value.date_heure_operation_validation}</b></p></div>  :
    <p></p>}        
    </Col>

    <Col xs={12}>
     {props.message === "Deletion historic" ? <div><p className='text-dark'>operation deleted by : <b className='text-dark'>{value.deletion_executed_by_owner}</b> </p>
     <p className='text-dark'>Date and time  of deletion: <b className='text-dark'> {value.date_heure_operation_deletion}</b></p><br></br>
      <Button onClick={recoverOperation}  className='mx-5' variant='success'>Recover operation</Button>
      <Button  onClick={()=>setModalShow6(true)}className='mx-5' variant='danger'>delete permanently </Button></div>  :
    <p></p>}        
    </Col>

    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
     
    </Row>


   {/* <Row className='justify-content-center pb-3'>
    <Col xs={6}>
        <Link to="/menu_rapport_retrait_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button name='validate' value={value.code_retrait} className='py-2' variant="warning" type="submit">
        close
        </Button>
        </Link>
        </Col>
    </Row>*/}

    

</Container> })
:
<MyVerticallyCenteredModal show={modalShow} onHide={() => {
  setModalShow(false)
  closePage()
}} />
} 


{isMobileOrTablet && props.detailEnvoieTotal.map((value)=>
    {
    return<Container className='bg-light justify-content-center text-center mx-auto my-auto'>
    <Row className='justify-content-center mb-3 pt-3' >
            <Col xs={12}>
            <p className='couleur2'><i><b>{message}</b></i></p>
            </Col>
        </Row>
    
        <Row className='justify-content-center pb-3'>
          <hr style={{color:"darkorange"}}></hr>
          
        </Row>
        <Row className='justify-content-start pb-3' >
        <Col xs={12}>
        <p className='text-dark'>Noms Expediteur: <b className='text-dark'>{value.nom_expediteur} {value.postnom_expediteur} {value.prenom_expediteur}</b> </p>
        <p className='text-dark'>Noms Beneficiare: <b className='text-dark '>{value.nom_beneficiaire} {value.postnom_beneficiaire} {value.prenom_beneficiaire}</b> </p>
        <p className='text-dark'>Pays Expediteur: <b className='text-dark '> {value.pays_expediteur}</b></p>
        <p className='text-dark'>Numéro Expediteur: <b className='text-dark'> {value.numero_expediteur}</b></p>
        <p className='text-dark'>Email Expediteur: <b className='text-dark '> {value.email_expediteur}</b></p>
        <p className='text-dark'>Pays Beneficiare: <b className='text-dark '> {value.pays_beneficiaire}</b></p>
        <p className='text-dark'>Montant à Recuperer: <b className='text-dark'>{Number(value.montant_beneficiaire).toFixed(2)} $</b> </p>    
        <p className='text-dark'>Montant à payer: <b className='text-dark'>{Number(value.montant_total).toFixed(2)} £</b> </p>
        <p className='text-dark'>Type de retrait: <b className='text-dark'>{value.type_service}</b> </p>
        <p className='text-dark'>Mobile Money: <b className='text-dark'>{value.numero_transfer}</b> </p>
        <p className='text-dark'>Code Retrait : <b className='text-dark'>{value.code_retrait}</b> </p>
        <p className='text-dark'>Status Retrait : <b className='text-dark'>{value.status_retrait}</b> </p>
        <p className='text-dark'>date et heure : <b className='text-dark'> {value.date_heure_operation}</b></p> 
    </Col>
        </Row>
    
        <Row className='justify-content-center pb-3'>
        <Col xs={6}>
            <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
            <Button name='validate' value={value.code_retrait} className='pt-3' variant="warning" type="submit">
            Fermer
            </Button>
            </Link>
            </Col>
        </Row>
    
        
    
    </Container> })
} 

<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
{/*<SessionOut setIsadmin={props.setIsadmin}/>*/}
<MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
<MyVerticallyCenteredModal3 show={modalShow3} onHide={() => setModalShow3(false)} />
<MyVerticallyCenteredModal4 show={modalShow4} onHide={() => {
  setModalShow4(false)
  navigate('/my_profil_english')  
  
  }} />
  <MyVerticallyCenteredModal5 show={modalShow5} onHide={() => {
  setModalShow5(false)
 navigate('/my_profil_english')  
  }} />

<MyVerticallyCenteredModal6 show={modalShow6} onHide={() => setModalShow6(false)}  deleteOperation={deleteOperation}/>
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
          No operation available
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='couleur2'><b>No operation available for this date </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>close</Button>
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
          sorry  operation failed 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='couleur2'><b>Please contact the technical support ! </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>close</Button>
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
          operation recovered successful 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-success'><b>you have recovered this operation successfully ! </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>ok</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal5(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          operation deleted permanently successful 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-success'><b>you have permanently deleted this operation </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>ok</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal6(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        do you really want to delete permanently this sending operation ??
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-center'>
      <Button variant='dark' className='mx-2'  onClick={props.onHide}>No</Button> <Button variant='danger' className='mx-5' onClick={()=>{
         props.deleteOperation()}
      }>yes</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default DetailsRetraitsInfoEnglish;