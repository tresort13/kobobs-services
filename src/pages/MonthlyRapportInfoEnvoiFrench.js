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
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import HeaderFrench from './HeaderFrench';
import SessionOutFrench from './SessionOutFrench';
//import SessionOut from './SessionOut';


const useState = React.useState
function MonthlyRapportInfoEnvoiFrench(props)
{

    const [message,setMessage] = useState("Rapport Mensuel des Envois")
    const [couleur,setCouleur] = useState("text-dark")
    const [modalShow, setModalShow] = React.useState(false)

    const closeModal = ()=>{
      setModalShow(true)
    }

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
      const navigate = useNavigate()
      console.log(props.monthlyRapport)
     
     const nombre_envoie_total =  props.monthlyRapport.reduce((total,value)=>
     {
        total = total + 1
        return total
     },0)


     const nombre_envoie_valide = props.monthlyRapport.filter((value)=>
     {
       return value.status_retrait !== "code retrait en attente de validation"
     }).reduce((total,value)=>
     {
       total = total + 1
       return total
     },0)

     const nombre_envoie_nonvalide = props.monthlyRapport.filter((value)=>
     {
       return value.status_retrait === "code retrait en attente de validation"
     }).reduce((total,value)=>
     {
       total = total + 1
       return total
     },0)

     
    

   

     const detailTotal =()=>
     {
      props.dataDetailEnvoieTotalTableau(props.monthlyRapport)
      navigate('/table_monthly_rapport_french')
     }

     const detailValide =()=>
     {
      props.dataDetailEnvoieTotalTableau(props.monthlyRapport.filter((value)=>
      {
        return value.status_retrait !== "code retrait en attente de validation"
      }))
      navigate('/table_monthly_rapport_french')
     }

     const detailNonValide =()=>
     {
      props.dataDetailEnvoieTotalTableau(props.monthlyRapport.filter((value)=>
      {
        return value.status_retrait === "code retrait en attente de validation"
      }))
      navigate('/table_monthly_rapport_french')
     }
     
     
    return (
        
        <>
        <HeaderFrench dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center pt-3' >
        <Col xs={6}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>

   
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-dark'><b>Type de Rapport</b>: <b className='couleur2'>Mensuel</b> </p>
        <p className='text-dark'><b>Période</b> : <b className='couleur2'>{props.moisInfo}</b>  </p>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <p className='text-dark'><b>Nombres d'envois total effectués :</b> <b className='couleur2'> {nombre_envoie_total}</b>  </p>
         </Col>

         <Col xs={6}>
       {nombre_envoie_total > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailTotal}>Voir Details </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit"  onClick={closeModal}>Voir Details </p></a>}
       
    </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>

        <Row>
          <Col>
        <p className='text-dark'><b>Nombres d'envois validés :</b> <b className='couleur2'> {nombre_envoie_valide}</b> </p>
        <p className='text-dark'><b>Nombres d'envois non validés :</b> <b className='couleur2'> {nombre_envoie_nonvalide}</b></p>
        </Col>

       <Col xs={6}>
        {nombre_envoie_valide > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailValide}>Voir Details </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={closeModal}>Voir Details </p></a>}
        {nombre_envoie_nonvalide > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailNonValide}>Voir Details </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit"  onClick={closeModal}>Voir Details </p></a>}
    </Col>
    </Row>



    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="danger" type="submit">
        Fermer
        </Button>
        </Link>
        </Col>
        
    </Row>
    
    

</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center  mx-auto my-auto'>
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>

   
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-dark'>Type de Rapport: <b className='couleur2'>Mensuel</b> </p>
        <p className='text-dark'>Période : <b className='couleur2'>{props.moisInfo}</b>  </p>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Rapport</u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <p className='text-dark'>envoies effectué: <b className='couleur2'> {nombre_envoie_total}</b>  </p>
        <p className='text-dark'>envoies validés: <b className='couleur2'> {nombre_envoie_valide}</b> </p>
        <p className='text-dark'>envoies non validés: <b className='couleur2'> {nombre_envoie_nonvalide}</b></p>
        </Col>

        <Col xs={6}>
        <Link to="/details_envoie_info" style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailTotal}>Voir Details </p></Link>
        <Link to="/details_envoie_info" style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailValide}>Voir Details </p></Link>
        <Link to="/details_envoie_info" style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailNonValide}>Voir Details </p></Link>
       
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        Fermer
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
<SessionOutFrench setIsadmin={props.setIsadmin}/>
<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
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
          Aucune opération disponible
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='couleur2'><b>Pas d'opération disponible par rapport à ce mois </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>Fermer</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MonthlyRapportInfoEnvoiFrench;