import React,{ useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useNavigate} from  'react-router-dom';
import Header from './Header';
import { useMediaQuery } from 'react-responsive';
import Footer from './Footer';
import Table from 'react-bootstrap/Table';
import HeaderEnglish from './HeaderEnglish';
import  './Header.css';
import Modal from 'react-bootstrap/Modal';
import ClipLoader from "react-spinners/ClipLoader";



const useState = React.useState
function TableValidationLingala(props)
{
  const [modalShow3, setModalShow3] = React.useState(true);
  const isDesktop = useMediaQuery({
      query: "(min-width: 1224px)"
    });
    const isMobileOrTablet = useMediaQuery({
      query: "(max-width: 1224px)"
    });
    const navigate = useNavigate()

          const message = ()=>
      {
          alert(" sorry the print page is not yet available")
      }
const [envoie4,setEnvoie4] = useState([])
const operationDetailArray = []

const submit =()=>
    {       
        fetch('https://kobobsapi.herokuapp.com/api/getRetraitNonValideInfo/code retrait en attente de validation/', {
                method:'GET',
                headers: {'Content-Type': 'application/json'},
               // body: JSON.stringify(codeRetrait.infoCodeRetrait)
              })
              .then( res => res.json())
              .then(
                res => {   
                  setEnvoie4(res)
                   console.log(res)
                }
              )
              .catch( (error) =>
                {
                    console.log(error)
                } )
    }

    useEffect(()=>
    {
       const interval =  setInterval(()=>setModalShow3(false),4000);
        return () => clearInterval(interval)
    },[])


   /* useEffect(()=>
    {
       const interval =  setInterval((e)=>submit(e),1000);
        return () => clearInterval(interval)
    },[envoie4])*/

     useEffect(()=>
    {    
      submit()
    },[])
    return (
        <>
            <Header dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
            <div className=' justify-content-center text-center mb-5 text-light text-bold rounded'>
            <Row className='mt-3 px-5'>
             <Col xs={12} className="text-start text-light">
            <p><Link to='/home_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u>  </b></Link> </p>
           </Col>
             </Row>
{isDesktop && <Container fluid className='bg-light justify-content-center text-center borders mb-5' style={{marginTop:20}} >



    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='couleur2'>Opérations ya ba envoi oyo eza nanu validé te</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="light">
      <thead>
        <tr className='text-dark' style={{border:"2px solid white"}}>
        <th>Date</th>
          <th>Kombo ya Motindi</th>
          <th>Kombo ya Mozui</th>
          <th>Mboka ya Mozui</th>
          <th>Mbongo yako zwa ($)</th>
          <th>Mbongo yako futa (£)</th>
          <th>Détails ya ba opérations</th>
        </tr>
      </thead>
      <tbody>
      {envoie4.map((value)=>
        {
          return  <tr  style={{border:"2px solid white"}} >
             <td><i ><b>{value.date_operation}</b></i></td>
             <td><i><b className="text-dark">{value.prenom_expediteur} {value.nom_expediteur} {value.postnom_expediteur} </b></i></td>
             <td><i><b className="text-dark"> {value.prenom_beneficiaire} {value.nom_beneficiaire} {value.postnom_beneficiaire}</b></i></td>
             <td><i><b className="text-dark"> {value.pays_beneficiaire}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_beneficiaire).toFixed(2))}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_total).toFixed(2))}</b></i></td>
             <td onClick={()=>{
               operationDetailArray.push(value)
               console.log(operationDetailArray)
               props.setDataValidation(operationDetailArray)
               navigate('/form_abonne_non_valide_lingala')
             }} ><i className="text-primary btn" ><b><u>Tala pona ko validé</u></b></i></td>
            </tr> 
        }) 
        }
       
         
      </tbody>
    </Table>
        </div>
        </Col>
    </Row>



  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={4} >
        <Link to="/home_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="danger" type="submit" >
        kokanga 
        </Button>
        </Link>

        </Col>
    </Row>
  


</div>


</Container>}

{isMobileOrTablet && <Container fluid className='bg-light justify-content-center text-center borders mb-5' style={{marginTop:20}} >



    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='couleur2'>Opérations ya ba envoi oyo eza nanu validé te</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="light">
      <thead>
        <tr className='text-dark' style={{border:"2px solid white"}}>
        <th>Date</th>
          <th>Kombo ya Motindi</th>
          <th>Kombo ya Mozui</th>
          <th>Mboka ya Mozui</th>
          <th>Mbongo yako zwa ($)</th>
          <th>Mbongo yako futa (£)</th>
          <th>Détails ya ba opérations</th>
        </tr>
      </thead>
      <tbody>
      {envoie4.map((value)=>
        {
          return  <tr  style={{border:"2px solid white"}} >
             <td><i ><b>{value.date_operation}</b></i></td>
             <td><i><b className="text-dark">{value.prenom_expediteur} {value.nom_expediteur} {value.postnom_expediteur} </b></i></td>
             <td><i><b className="text-dark"> {value.prenom_beneficiaire} {value.nom_beneficiaire} {value.postnom_beneficiaire}</b></i></td>
             <td><i><b className="text-dark"> {value.pays_beneficiaire}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_beneficiaire).toFixed(2))}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_total).toFixed(2))}</b></i></td>
             <td onClick={()=>{
               operationDetailArray.push(value)
               console.log(operationDetailArray)
               props.setDataValidation(operationDetailArray)
               navigate('/form_abonne_non_valide_lingala')
             }} ><i className="text-primary btn" ><b><u>Tala pona ko validé</u></b></i></td>
            </tr> 
        }) 
        }
       
         
      </tbody>
    </Table>
        </div>
        </Col>
    </Row>



  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={4} >
        <Link to="/home_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="danger" type="submit" >
        kokanga 
        </Button>
        </Link>

        </Col>
    </Row>
  


</div>


</Container>}

<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
</div>
<MyVerticallyCenteredModal3 show={modalShow3} onHide={() => setModalShow3(false)} />
<Footer />
        </>
    )
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
          zela mukie...
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


export default TableValidationLingala;