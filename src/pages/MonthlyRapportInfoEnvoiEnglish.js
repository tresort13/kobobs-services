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
//import SessionOut from './SessionOut';


const useState = React.useState
function MonthlyRapportInfoEnvoiEnglish(props)
{

    const [message,setMessage] = useState("Monthly sending Report")
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
      props.dataDetailEnvoieTotal(props.monthlyRapport)
      navigate('/details_envois_info')
     }

     const detailValide =()=>
     {
      props.dataDetailEnvoieTotal(props.monthlyRapport.filter((value)=>
      {
        return value.status_retrait !== "code retrait en attente de validation"
      }))
      navigate('/details_envois_info')
     }

     const detailNonValide =()=>
     {
      props.dataDetailEnvoieTotal(props.monthlyRapport.filter((value)=>
      {
        return value.status_retrait === "code retrait en attente de validation"
      }))
      navigate('/details_envois_info')
     }
     
    return (
        
        <>
        <Header username={props.username} isAdmin={props.isAdmin}/>
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
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
        <p className='text-dark'>Type of Rapport: <b className='couleur2'>Mensuel</b> </p>
        <p className='text-dark'>Period : <b className='couleur2'>{props.moisInfo}</b>  </p>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <p className='text-dark'>Total Number of sendings made : <b className='couleur2'> {nombre_envoie_total}</b>  </p>
         </Col>

         <Col xs={6}>
       {nombre_envoie_total > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailTotal}>See Details </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit"  onClick={closeModal}>See Details </p></a>}
       
    </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>

        <Row>
          <Col>
        <p className='text-dark'>Number of validated sendings : <b className='couleur2'> {nombre_envoie_valide}</b> </p>
        <p className='text-dark'>Number of no validated sendings : <b className='couleur2'> {nombre_envoie_nonvalide}</b></p>
        </Col>

       <Col xs={6}>
        {nombre_envoie_valide > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailValide}>See Details </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={closeModal}>See Details </p></a>}
        {nombre_envoie_nonvalide > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailNonValide}>See Details </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit"  onClick={closeModal}>See Details </p></a>}
    </Col>
    </Row>



    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="danger" type="submit">
        close
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
{/*<SessionOut setIsadmin={props.setIsadmin}/>*/}
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
        No operation available
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='couleur2'><b>No operation available for this month </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MonthlyRapportInfoEnvoiEnglish;