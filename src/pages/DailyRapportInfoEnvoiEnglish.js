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
import HeaderEnglish from './HeaderEnglish';
//import SessionOut from './SessionOut';



const useState = React.useState
function DailyRapportInfoEnvoiEnglish(props)
{

    const [message,setMessage] = useState("Daily Sending operation Report")
    const [couleur,setCouleur] = useState("text-dark")
    const [modalShow, setModalShow] = React.useState(false);
    const navigate = useNavigate()

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

      const closeModal = ()=>{
        setModalShow(true)
      }
    
      
      console.log(props.dailyRapport)
     
     const nombre_envoie_total =  props.dailyRapport.reduce((total,value)=>
     {
        total = total + 1
        return total
     },0)


     const nombre_envoie_valide = props.dailyRapport.filter((value)=>
     {
       return value.status_retrait !== "code retrait en attente de validation"
     }).reduce((total,value)=>
     {
       total = total + 1
       return total
     },0)

     const nombre_envoie_nonvalide = props.dailyRapport.filter((value)=>
     {
       return value.status_retrait === "code retrait en attente de validation"
     }).reduce((total,value)=>
     {
       total = total + 1
       return total
     },0)

     
    

   

     const detailTotal =()=>
     {
      //props.dataDetailEnvoieTotal(props.dailyRapport)
      props.dataDetailEnvoieTotalTableau(props.dailyRapport)
      props.setRapportType("dailyRapportEnvoi")
      props.setTitleEnglish("Rapport of all sendings")
      props.setTitleFrench("Rapport de tous les envois")
      props.setTitleLingala("Rapport yaba envois nionso")
      props.setMessage2("Rapport of all sendings")
      navigate('/table_daily_rapport_english')
     }

     const detailValide =()=>
     {
      props.dataDetailEnvoieTotalTableau(props.dailyRapport.filter((value)=>
      {
        return value.status_retrait !== "code retrait en attente de validation"
      }))
      props.setTitleLingala("Rapport yaba envois validés")
      props.setTitleFrench("Rapport de envois validés")
      props.setTitleEnglish("Rapport of validated sendings")
      props.setMessage2("Rapport of validated sendings")
      props.setRapportType("dailyRapportEnvoi")
      navigate('/table_daily_rapport_english')
     }

     const detailNonValide =()=>
     {
      props.dataDetailEnvoieTotalTableau(props.dailyRapport.filter((value)=>
      {
        return value.status_retrait === "code retrait en attente de validation"
      }))
      props.setRapportType("dailyRapportEnvoi")
      props.setTitleLingala("Rapport yaba envois non validés")
      props.setTitleEnglish("Rapport of non validated sendings")
      props.setTitleFrench("Rapport de envois non validés")
      props.setMessage2("Rapport of non validated sendings")
      navigate('/table_daily_rapport_english')
       
     }
     
    return (
        
        <>
        <HeaderEnglish dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
{isDesktop && <div className='justify-content-center text-center mb-5 text-light text-bold rounded'>
<Row className='mt-3 px-5'>
        <Col xs={12} className="text-start text-light">
            <p><Link to='/select_date_form_envoi_english' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Back</u>  </b></Link> </p>
        </Col>
    </Row>
   <Container className='bg-light text-dark rounded' style={{width:750}}>

  <Row className='justify-content-center mt-3'>
<Col xs={12} >
<Row className='justify-content-center  pt-3' >
        <Col xs={6}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        <hr style={{color:"darkorange"}}></hr>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-dark'><b>Type of report :</b> <b className='couleur2'>Daily</b> </p>
        <p className='text-dark'><b>Date :</b> <b className='couleur2'>{props.dateInfo}</b>  </p>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <p className='text-dark py-2 text-center'><b>Number of total sendings made :</b> <b className='couleur2'> {nombre_envoie_total}</b>  </p>
         </Col>

         <Col xs={6}>
       {nombre_envoie_total > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailTotal}>See details </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='couleur rounded py-2' type="submit"  onClick={closeModal}>See details </p></a>}
       
    </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>

        <Row>
          <Col>
        <p className='text-dark py-2 text-center'><b>Number of validated sendings :</b> <b className='couleur2'> {nombre_envoie_valide}</b> </p>
        <p className='text-dark py-2 text-center'><b>Number of no validated sendings :</b> <b className='couleur2'> {nombre_envoie_nonvalide}</b></p>
        </Col>

       <Col xs={6}>
        {nombre_envoie_valide > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailValide}>See details </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={closeModal}>See details </p></a>}
        {nombre_envoie_nonvalide > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailNonValide}>See details </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit"  onClick={closeModal}>See details </p></a>}
    </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/menu_rapport_envoi_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="danger" type="submit">
        close
        </Button>
        </Link>
        </Col>
        
    </Row>
    
    </Col>
</Row>  

</Container>
</div>
}

{isMobileOrTablet && <div className='justify-content-center text-center mb-5 text-light text-bold rounded'>
<Row className='mt-3 px-5'>
        <Col xs={12} className="text-start text-light">
            <p><Link to='/select_date_form_envoi_english' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Back</u>  </b></Link> </p>
        </Col>
    </Row>
   <Container className='bg-light text-dark rounded' >

  <Row className='justify-content-center mt-3'>
<Col xs={12} >
<Row className='justify-content-center  pt-3' >
        <Col xs={12}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        <hr style={{color:"darkorange"}}></hr>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-dark'><b>Type of report :</b> <b className='couleur2'>Daily</b> </p>
        <p className='text-dark'><b>Date :</b> <b className='couleur2'>{props.dateInfo}</b>  </p>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <p className='text-dark py-2 text-center'><b>Total sendings :</b> <b className='couleur2'> {nombre_envoie_total}</b>  </p>
         </Col>

         <Col xs={6}>
       {nombre_envoie_total > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailTotal}>See details </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit"  onClick={closeModal}>See details </p></a>}
       
    </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>

        <Row>
          <Col xs={6}>
        <p className='text-dark py-2 text-center'><b>validated sendings :</b> <b className='couleur2'> {nombre_envoie_valide}</b> </p>
        <p className='text-dark py-2 text-center'><b>No validated sendings :</b> <b className='couleur2'> {nombre_envoie_nonvalide}</b></p>
        </Col>

       <Col xs={6}>
        {nombre_envoie_valide > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailValide}>See details </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={closeModal}>See details </p></a>}
        {nombre_envoie_nonvalide > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailNonValide}>See details </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit"  onClick={closeModal}>See details </p></a>}
    </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <Link to="/menu_rapport_envoi_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="danger" type="submit">
        close
        </Button>
        </Link>
        </Col>
        
    </Row>
    
    </Col>
</Row>  

</Container>
</div>
}
<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
      {/* <SessionOut setIsadmin={props.setIsadmin}/>*/} 
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
        <p className='couleur2'><b>No operation available for this date </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DailyRapportInfoEnvoiEnglish;