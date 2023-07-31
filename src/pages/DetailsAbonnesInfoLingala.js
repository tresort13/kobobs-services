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
//import SessionOut from './SessionOut';



const useState = React.useState
function DetailsAbonnesInfoLingala(props)
{

   
     const navigate = useNavigate()  
    const [message,setMessage] = useState("Ba informations ya abonné")
    const [couleur,setCouleur] = useState("text-dark")
    const [modalShow, setModalShow] = React.useState(true);



    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
    
    

      const closePage = ()=>{
        navigate('/menu_rapport_envoi_french')
      }
    
     /* useEffect(()=>
      {
         const interval =  setInterval((e)=>submit(e),1000);
          return () => clearInterval(interval)
      },[envoie4])

*/

     
console.log(props.abonneInfoDetail)
   
   
    return (
        
        <>
        <Header dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
        {isDesktop && props.abonneInfoDetail.length > 0 ? props.abonneInfoDetail.map((value)=>
    {
    return <div className=' justify-content-center text-center mb-5 text-light text-bold rounded'>
    <Row className='mt-3 px-5'>
     <Col xs={12} className="text-start text-light">
    <p><Link to='/table_abonnes_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u>  </b></Link> </p>
   </Col>
     </Row>
    <Container className='bg-light justify-content-center text-center mb-5' style={{marginTop:50,width:1000}} >
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
        <p className='text-dark'>kombo Mukristu: <b className='text-dark'>{value.prenom_expediteur}</b> </p>
        <p className='text-dark'>kombo ya Libota: <b className='text-dark'>{value.nom_expediteur} {value.postnom_expediteur}</b> </p>
        <p className='text-dark'>Email ya Abonné: <b className='text-dark '> {value.email_expediteur}</b></p>
        <p className='text-dark'>Mboka ya Abonné: <b className='text-dark '> {value.pays_expediteur}</b></p>
        <p className='text-dark'>Numéro ya Abonné: <b className='text-dark'> {value.numero_expediteur}</b></p>
        {value.adresse_expediteur != 'N/A' ? <p className='text-dark'>Adresse ya Abonné: <b className='text-dark'> {value.adresse_expediteur}</b></p> : <span></span>}
        <p className='text-dark'>Date et heure ya création ya abonné: <b className='text-dark'> {value.date_heure_operation}</b></p>

    </Col>

    </Row>


   { /*<Row className='justify-content-center pb-3 mb-3 text-start' >

    <Col xs={6}> 
        <p className='text-dark'>Abonné creé par: <b className='text-dark'>{value.agent_id}</b> </p>
        <p className='text-dark'>Date et heure de création: <b className='text-dark'> {value.date_heure_operation}</b></p> 
    </Col>
    </Row>*/}

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
     
    </Row>

    
    <Row className='justify-content-center pb-3'>
    <Col xs={6}>
        <Link to="/table_abonnes_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button name='validate' value={value.code_retrait} className='py-2' variant="danger" type="submit">
        kokanga
        </Button>
        </Link>
        </Col>
    </Row>

    

</Container>
</div> })
:
<MyVerticallyCenteredModal show={false} onHide={() => {
  setModalShow(false)
  closePage()
}} />
} 


{isMobileOrTablet && props.abonneInfoDetail.length > 0 ? props.abonneInfoDetail.map((value)=>
    {
    return <div className=' justify-content-center text-center mb-5 text-light text-bold rounded'>
    <Row className='mt-3 px-5'>
     <Col xs={12} className="text-start text-light">
    <p><Link to='/table_abonnes_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u>  </b></Link> </p>
   </Col>
     </Row>
    <Container className='bg-light justify-content-center text-center mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
     
    </Row>
    <Row className='justify-content-start text-start pb-3 mb-3' >
    <Col xs={12} className='justify-content-start'>
        <p className='text-dark'>kombo Mukristu: <b className='text-dark'>{value.prenom_expediteur}</b> </p>
        <p className='text-dark'>kombo ya Libota: <b className='text-dark'>{value.nom_expediteur} {value.postnom_expediteur}</b> </p>
        <p className='text-dark'>Email ya Abonné: <b className='text-dark '> {value.email_expediteur}</b></p>
        <p className='text-dark'>Mboka ya Abonné: <b className='text-dark '> {value.pays_expediteur}</b></p>
        <p className='text-dark'>Numéro ya Abonné: <b className='text-dark'> {value.numero_expediteur}</b></p>
        {value.adresse_expediteur != 'N/A' ? <p className='text-dark'>Adresse ya Abonné: <b className='text-dark'> {value.adresse_expediteur}</b></p> : <span></span>}
        <p className='text-dark'>Date et heure ya création ya abonné: <b className='text-dark'> {value.date_heure_operation}</b></p>

    </Col>

    </Row>


   { /*<Row className='justify-content-center pb-3 mb-3 text-start' >

    <Col xs={6}> 
        <p className='text-dark'>Abonné creé par: <b className='text-dark'>{value.agent_id}</b> </p>
        <p className='text-dark'>Date et heure de création: <b className='text-dark'> {value.date_heure_operation}</b></p> 
    </Col>
    </Row>*/}

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
     
    </Row>

    
    <Row className='justify-content-center pb-3'>
    <Col xs={6}>
        <Link to="/table_abonnes_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button name='validate' value={value.code_retrait} className='py-2' variant="danger" type="submit">
        kokanga
        </Button>
        </Link>
        </Col>
    </Row>

    

</Container>
</div> })
:
<MyVerticallyCenteredModal show={false} onHide={() => {
  setModalShow(false)
  closePage()
}} />
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
         operation eza te
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='couleur2'><b>operation eza te na date oponi</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>kokanga</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default DetailsAbonnesInfoLingala;