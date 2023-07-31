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


const useState = React.useState
function MonthlyRapportInfoEnvoiLingala(props)
{

    const [message,setMessage] = useState("Rapport yaba Envois ya sanza na sanza")
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
      props.setRapportType("monthlyRapportEnvoi")
      props.setTitleEnglish("Rapport of all sendings")
      props.setTitleFrench("Rapport de tous les envois")
      props.setTitleLingala("Rapport yaba envois nionso")
      props.setMessage2("Rapport of all sendings")
      navigate('/table_monthly_rapport_lingala')
     }

     const detailValide =()=>
     {
      props.dataDetailEnvoieTotalTableau(props.monthlyRapport.filter((value)=>
      {
        return value.status_retrait !== "code retrait en attente de validation"
      }))
      props.setRapportType("monthlyRapportEnvoi")
      props.setTitleLingala("Rapport yaba envois validés")
      props.setTitleFrench("Rapport de envois validés")
      props.setTitleEnglish("Rapport of validated sendings")
      props.setMessage2("Rapport of validated sendings")
      navigate('/table_monthly_rapport_lingala')
     }

     const detailNonValide =()=>
     {
      props.dataDetailEnvoieTotalTableau(props.monthlyRapport.filter((value)=>
      {
        return value.status_retrait === "code retrait en attente de validation"
      }))
      props.setRapportType("monthlyRapportEnvoi")
      props.setTitleLingala("Rapport yaba envois non validés")
      props.setTitleEnglish("Rapport of non validated sendings")
      props.setTitleFrench("Rapport de envois non validés")
      props.setMessage2("Rapport of non validated sendings")
      navigate('/table_monthly_rapport_lingala')
     }
     
    return (
        
        <>
        <Header dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
{isDesktop && <div className='justify-content-center text-center mb-5 text-light text-bold rounded'>
<Row className='mt-3 px-5'>
        <Col xs={12} className="text-start text-light">
            <p><Link to='/select_mois_form_envoi_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u>  </b></Link> </p>
        </Col>
    </Row>
   <Container className='bg-light text-dark rounded' style={{width:750}}>
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
        <p className='text-dark'><b>Lolenge ya Rapport:</b> <b className='couleur2'>Mokolo na mokolo</b> </p>
        <p className='text-dark'><b>Période ya :</b> <b className='couleur2'>{props.moisInfo}</b>  </p>
        
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <p className='text-dark'><b>total ya ba envois oyo esalemi :</b> <b className='couleur2'> {nombre_envoie_total}</b>  </p>
         </Col>

         <Col xs={6}>
       {nombre_envoie_total > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailTotal}>Tala ba détails </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit"  onClick={closeModal}>Tala ba détails </p></a>}
       
    </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>

        <Row>
          <Col>
        <p className='text-dark'><b>Nombre ya ba envois validés :</b> <b className='couleur2'> {nombre_envoie_valide}</b> </p>
        <p className='text-dark'><b>Nombre ya ba envois non validés : </b><b className='couleur2'> {nombre_envoie_nonvalide}</b></p>
        </Col>

       <Col xs={6}>
        {nombre_envoie_valide > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailValide}>Tala ba détails </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={closeModal}>Tala ba détails </p></a>}
        {nombre_envoie_nonvalide > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailNonValide}>Tala ba détails </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit"  onClick={closeModal}>Tala ba détails </p></a>}
    </Col>
    </Row>



    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/menu_rapport_envoi_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="danger" type="submit">
        kokanga
        </Button>
        </Link>
        </Col>
        
    </Row>
    
    

</Container>
</div>
}

{isMobileOrTablet && <div className='justify-content-center text-center mb-5 text-light text-bold rounded'>
<Row className='mt-3 px-5'>
        <Col xs={12} className="text-start text-light">
            <p><Link to='/select_mois_form_envoi_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u>  </b></Link> </p>
        </Col>
    </Row>
   <Container className='bg-light text-dark rounded' style={{width:750}}>
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
        <p className='text-dark'><b>Lolenge ya Rapport:</b> <b className='couleur2'>Mokolo na mokolo</b> </p>
        <p className='text-dark'><b>Période ya :</b> <b className='couleur2'>{props.moisInfo}</b>  </p>
        
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <p className='text-dark'><b>Envois nionso esalemi :</b> <b className='couleur2'> {nombre_envoie_total}</b>  </p>
         </Col>

         <Col xs={6}>
       {nombre_envoie_total > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailTotal}>Tala ba détails </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit"  onClick={closeModal}>Tala ba détails </p></a>}
       
    </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>

        <Row>
          <Col>
        <p className='text-dark'><b>Ba envois validés :</b> <b className='couleur2'> {nombre_envoie_valide}</b> </p>
        <p className='text-dark'><b>Ba envois non validés : </b><b className='couleur2'> {nombre_envoie_nonvalide}</b></p>
        </Col>

       <Col xs={6}>
        {nombre_envoie_valide > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailValide}>Tala ba détails </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={closeModal}>Tala ba détails </p></a>}
        {nombre_envoie_nonvalide > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailNonValide}>Tala ba détails </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit"  onClick={closeModal}>Tala ba détails </p></a>}
    </Col>
    </Row>



    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/menu_rapport_envoi_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="danger" type="submit">
        kokanga
        </Button>
        </Link>
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
         operation eza te
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='couleur2'><b>operation eza te na mois oponi</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>kokanga</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default MonthlyRapportInfoEnvoiLingala;