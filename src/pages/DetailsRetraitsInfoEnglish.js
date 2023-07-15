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
//import SessionOut from './SessionOut';



const useState = React.useState
function DetailsRetraitsInfoEnglish(props)
{

   
     const navigate = useNavigate()  
    const [message,setMessage] = useState("Operation Details")
    const [couleur,setCouleur] = useState("text-dark")
    const [modalShow, setModalShow] = React.useState(true);



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
     <p className='text-dark'>Date and time  of deletion: <b className='text-dark'> {value.date_heure_operation_deletion}</b></p></div>  :
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



export default DetailsRetraitsInfoEnglish;