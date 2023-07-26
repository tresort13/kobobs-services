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
function TableHistoricEnglish(props)
{
  const [modalShow3, setModalShow3] = React.useState(false);
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
const total_montant_beneficiaire = props.detailHistoric.reduce((total,value)=>
{
  
  total = total + parseFloat(value.montant_beneficiaire)
  return total
},0)

const total_montant = props.detailHistoric.reduce((total,value)=>
{
  total=total + parseFloat(value.montant_total)
  return total
},0)

console.log(props.detailHistoric)


    return (
        <>
            <HeaderEnglish dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
            <div className=' justify-content-center text-center mb-5 text-light text-bold rounded'>
            <Row className='mt-3 px-5'>
             <Col xs={12} className="text-start text-light">
            <p><Link to='/my_profil_english' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Back</u>  </b></Link> </p>
           </Col>
             </Row>
{isDesktop && <Container fluid className='bg-light justify-content-center text-center borders mb-5' style={{marginTop:20}} >


    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h4 ><b><i className='couleur2'>{props.messageEnglish} on {props.dateHistoric}</i></b></h4>
        </div>
        <div>
        <Table striped bordered hover variant="light">
      <thead>
        <tr className='text-dark' style={{border:"2px solid white"}}>
          <th>Date</th>
          <th>Sender Name</th>
          <th>Recipient Name</th>
          <th>Recipient Country</th>
          <th>Recipient Amount  ($)</th>
          <th>Total Amount  (£)</th>
          <th>Operation details</th>
        </tr>
      </thead>
      <tbody>
        {props.detailHistoric.map((value)=>
        {
          return  <tr  style={{border:"2px solid white"}} >
             <td><i ><b>{props.dateHistoric}</b></i></td>
             <td><i><b className="text-dark">{value.prenom_expediteur} {value.nom_expediteur} {value.postnom_expediteur} </b></i></td>
             <td><i><b className="text-dark"> {value.prenom_beneficiaire} {value.nom_beneficiaire} {value.postnom_beneficiaire}</b></i></td>
             <td><i><b className="text-dark"> {value.pays_beneficiaire}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_beneficiaire).toFixed(2))}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_total).toFixed(2))}</b></i></td>
             <td onClick={()=>{
               operationDetailArray.push(value)
               props.setTableType("historic")
               console.log(operationDetailArray)
               props.dataDetailEnvoieTotal(operationDetailArray)
               navigate('/details_retraits_info_english')
             }} ><i className="text-primary btn" ><b><u>more details</u></b></i></td>
            </tr> 
        }) 
        }
       {props.message === "withdrawal historic" ? <tr style={{border:"2px solid white"}}>
         <td><i><b>TOTAL</b></i></td>
         <td><i className='couleur2'><b></b></i></td>
         <td><i className='couleur2'><b></b></i></td>
         <td><i className='couleur2'><b></b></i></td>
         <td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_montant_beneficiaire).toFixed(2))} $</b></i></td>
       </tr>: props.message === "Validation historic" ? <tr style={{border:"2px solid white"}}>
         <td><i><b>TOTAL</b></i></td>
         <td><i className='couleur2'><b></b></i></td>
         <td><i className='couleur2'><b></b></i></td>
         <td><i className='couleur2'><b></b></i></td>
         <td><i className='couleur2'><b></b></i></td>
         <td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_montant).toFixed(2))} £</b></i></td>
       </tr>: <tr></tr>}
       
         
      </tbody>
    </Table>
        </div>
        </Col>
    </Row>



  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={4} >
        <Link to="/my_profil_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="danger" type="submit" >
        close 
        </Button>
        </Link>

        </Col>
    </Row>
  


</div>


</Container>}

{isMobileOrTablet && <Container fluid className='bg-light justify-content-center text-center borders mx-auto my-auto' >



    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h6 ><u><b><i className='couleur2'>Table des Recettes Journalières</i></b></u></h6>
        </div>
        <div>
        <Table striped bordered hover variant="light">
      <thead>
        <tr className='text-dark' style={{border:"2px solid white"}}>
          <th>Date</th>
          <th>Montant Beneficiaire ($)</th>
          <th>Frais Envoie (£)</th>
          <th>Frais TVA (£)</th>
          <th>Total (£)</th>
        </tr>
      </thead>
      <tbody>
        {props.dailyRapport.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}} >
              <td><i ><b>{props.dateInfo}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_beneficiaire).toFixed(2)) }</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.frais_envoie).toFixed(2))}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.frais_tva).toFixed(2))}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_total).toFixed(2))}</b></i></td>
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
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="outline-warning" type="submit" onClick={message} >
        Imprimer 
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
          Please Wait...
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


export default TableHistoricEnglish;