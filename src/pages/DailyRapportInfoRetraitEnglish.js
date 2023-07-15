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
//import SessionOut from './SessionOut';
import Modal from 'react-bootstrap/Modal';
import HeaderEnglish from './HeaderEnglish';


const useState = React.useState
function DailyRapportInfoRetraitEnglish(props)
{

    const [message,setMessage] = useState("Daily withdrawal operation Report")
    const [couleur,setCouleur] = useState("text-dark")
    const [modalShow, setModalShow] = React.useState(false);

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
      const closeModal = ()=>{
        setModalShow(true)
      }
    
      const navigate = useNavigate()
    

     

      const nombre_retrait_paye = props.dailyRapport.filter((value)=>
      {
        return value.status_retrait === "Code Retrait Payé"
      }).reduce((total,value)=>
      {
        total = total + 1
        return total
      },0)
 
 
      const nombre_retrait_valide = props.dailyRapport.filter((value)=>
      {
        return value.status_retrait === "Code Retrait Valide"
      }).reduce((total,value)=>
      {
        total = total + 1
        return total
      },0)
 
      const nombre_retrait_nonvalide = props.dailyRapport.filter((value)=>
      {
        return value.status_retrait === "code retrait en attente de validation"
      }).reduce((total,value)=>
      {
        total = total + 1
        return total
      },0)
  
    
      


      const detailPaye =()=>
      {
       props.dataDetailEnvoieTotalTableau(props.dailyRapport.filter((value)=>
       {
         return value.status_retrait === "Code Retrait Payé"
       }))
       navigate('/table_daily_rapport_english')
      }
 
      const detailValide =()=>
      {
       props.dataDetailEnvoieTotalTableau(props.dailyRapport.filter((value)=>
       {
         return value.status_retrait === "Code Retrait Valide"
       }))
       navigate('/table_daily_rapport_english')
      }
 
      const detailNonValide =()=>
      {
       props.dataDetailEnvoieTotalTableau(props.dailyRapport.filter((value)=>
       {
         return value.status_retrait === "code retrait en attente de validation"
       }))
       navigate('/table_daily_rapport_english')     
      }

   
    return (
        
        <>
        <HeaderEnglish dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>

   
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-dark'><b>Type of Rapport :</b> <b className='couleur2'>Daily</b> </p>
        <p className='text-dark'><b>Date :</b>Date : <b className='couleur2'>{props.dateInfo}</b>  </p>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <p className='text-dark py-2 text-center'><b>Number of withdrawals:</b> <b className='couleur2'> {nombre_retrait_paye}</b> </p>
        </Col>

        <Col xs={6}>
        {nombre_retrait_paye > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailPaye}>See Details </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={closeModal}>See Details </p></a>}
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        close
        </Button>
        </Link>
        </Col>
        
    </Row>
    
    

</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center mx-auto my-auto'>
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>

   
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={12}>
        <p className='text-dark'>Type de Rapport: <b className='couleur2'>Journalier</b> </p>
        <p className='text-dark'>Date : <b className='couleur2'>{props.dateInfo}</b>  </p>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={6}>
        <p className='text-dark'>etraits payés: <b className='couleur2'> {nombre_retrait_paye}</b> </p>
        <p className='text-dark'>retraits validés: <b className='couleur2'> {nombre_retrait_valide}</b> </p>
        <p className='text-dark'>retraits non validés: <b className='couleur2'> {nombre_retrait_nonvalide}</b></p>
        </Col>

        <Col xs={6}>
        <Link to="/details_envoie_info" style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailPaye}>Voir Details </p></Link>
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
        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
      {/* <SessionOut setIsadmin={props.setIsadmin}/>*/} 
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


export default DailyRapportInfoRetraitEnglish;