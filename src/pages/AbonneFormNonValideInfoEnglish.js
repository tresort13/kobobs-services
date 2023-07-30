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
import ClipLoader from "react-spinners/ClipLoader";
import  './Header.css';
import HeaderFrench from './HeaderFrench';
import HeaderEnglish from './HeaderEnglish';
//import SessionOut from './SessionOut';




const useState = React.useState
function AbonneFormNonValideInfoEnglish(props)
{

    const [message,setMessage] = useState("form not validated")
    
    const[codeRetrait,setCodeRetrait] = useState("")

    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(true);
    const [modalShow5, setModalShow5] = React.useState(false);
    const [modalShow6, setModalShow6] = React.useState(false);


    const navigate = useNavigate()

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
    
    const closePage = ()=>{
      navigate('/table_validation_english')
    }


     

      const validateCodeRetrait = (e)=>
      {       
          e.preventDefault()
          console.log(e.target.value)
         // setStatus("Code Retrait Valide") 
         const date_time = {
          date_heure_operation_validation : new Date().toLocaleString(),
          date_operation_validation : new Date().toLocaleString().slice(0,10)
        }     
          fetch('https://kobobsapi.herokuapp.com/api/validateCodeRetrait/'+e.target.value+'/'+props.abonne.infoAbonne.agent_id+'/', {
                  method: 'PUT',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify(date_time)
                })
                .then( res => res.json())
                .then(
                  res => {   
                    setModalShow(true)
                  }
                )
                .catch( (error) =>
                  {
                    
                      console.log(error)
                  } )
  
      }

      const suprimerOperation = (e)=>
      {       
          e.preventDefault()
           setCodeRetrait(e.target.value)
          setModalShow5(true)
      }

      const suprimerOperationConfirm = (value)=>
      {  
        setModalShow5(false)
        setModalShow3(true)
        console.log(value)   
        const date_time_deletion = {
          date_heure_operation_deletion : new Date().toLocaleString(),
          date_operation_deletion : new Date().toLocaleString().slice(0,10)
        }      
         // e.preventDefault()     

         // setStatus("Code Retrait Valide")     
          fetch('https://kobobsapi.herokuapp.com/api/suprimer/'+value+'/'+props.abonne.infoAbonne.agent_id+'/', {
                  method: 'DELETE',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify(date_time_deletion)
                })
                .then( res => res.json())
                .then(
                  res => {  
                    if(res.message==="success")
                    {
                      console.log(res.message)
                      setModalShow3(false)               
                      setModalShow2(true)
                    }
                    else{
                      console.log(res.message)
                      console.log(res)
                      console.log(res.error)
                      setModalShow3(false)  
                      setModalShow6(true)
                    }
                                    
                    
                  }
                )
                .catch( (error) =>
                  {
                    setModalShow3(false)               
                    setModalShow2(false)
                    setModalShow6(true)
                      console.log(error)
                  } )
  
      }


   
   
    return (
        
        <>
<HeaderEnglish dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/> 
{isDesktop && props.dataValidation.length > 0  ?  props.dataValidation.map((value)=>
    {
    return <Container className='bg-light justify-content-center text-center mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center pt-3' >
        <Col xs={6}>
        <p className='couleur2 '><i><b>{message}</b></i></p>
        </Col>
    </Row>



    <Row className='justify-content-center '>
      <hr style={{color:"darkorange"}}></hr>

    </Row>
    <Row className='justify-content-start pb-3 text-start' >
    <Col className='justify-content-start text-start'  xs={6}>
       <p className='text-dark'>Withdrawal Code : <b className='text-danger'>{value.code_retrait}</b> </p>
        <p className='text-dark'>Status Withdrawal Code : <b className='text-dark '>{value.status_retrait}</b> </p>
        <p className='text-dark'>Sender Nmae: <b className='text-dark '>{value.nom_expediteur} {value.postnom_expediteur} {value.prenom_expediteur}</b> </p>
        <p className='text-dark'>Receiver Name: <b className='text-dark'>{value.nom_beneficiaire} {value.postnom_beneficiaire} {value.prenom_beneficiaire}</b> </p>
        <p className='text-dark'>Sender Country: <b className='text-dark'> {value.pays_expediteur}</b></p>
        <p className='text-dark'>Sender Number: <b className='text-dark'> {value.numero_expediteur}</b></p>
    </Col>

    <Col className='justify-content-start text-start'  xs={6}>
    <p className='text-dark'>Amount to pay: <b className='text-danger'>{Number(value.montant_total).toFixed(2)} £</b> </p>
    <p className='text-dark'>Amount to pick up: <b className='text-dark'>{Number(value.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Sender Email: <b className='text-dark'> {value.email_expediteur}</b></p>
        <p className='text-dark'>Receiver Country: <b className='text-dark'> {value.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type of service: <b className='text-dark '>{value.type_service}</b> </p>
        <p className='text-dark'>date and time : <b className='text-dark'> {value.date_heure_operation}</b></p> 
        
    </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>

    </Row>
    <Row>
      <Col className='justify-content-start text-center'  xs={12}>
      <p className='text-dark'>Sending done by : <b className='text-dark'> {value.envoi_executed_by_agent}</b></p> 
      </Col>
    </Row>

    <Row className="pb-3">
      <hr style={{color:"darkorange"}} ></hr>

    <Col className='text-center' xs={6}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button name='validate' value={value.code_retrait} className='pt-3' variant="warning" type="submit" onClick={e=>validateCodeRetrait(e)}>
        validate code
        </Button>
        </Link>
        </Col>

        <Col className='text-center' xs={6}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button name='validate' value={value.code_retrait} className='pt-3' variant="danger" type="submit" onClick={e=>suprimerOperation(e)}>
        delete operation
        </Button>
        </Link>
        </Col>
    </Row>

    

</Container> }
)
: <MyVerticallyCenteredModal4 show={false} onHide={() => {
  setModalShow4(false)
  closePage()
}} />
}



{isMobileOrTablet && props.dataValidation.length > 0  ?  props.dataValidation.map((value)=>
    {
    return <Container className='bg-light justify-content-center text-center mb-5' style={{marginTop:50}} >
<Row className='justify-content-center pt-3' >
        <Col xs={12} >
        <p className='couleur2 '><i><b>{message}</b></i></p>
        </Col>
    </Row>



    <Row className='justify-content-center '>
      <hr style={{color:"darkorange"}}></hr>

    </Row>
    <Row className='justify-content-start pb-3 text-start' >
    <Col className='justify-content-start text-start'  xs={12}>
       <p className='text-dark'>Withdrawal Code : <b className='text-danger'>{value.code_retrait}</b> </p>
        <p className='text-dark'>Status Withdrawal Code : <b className='text-dark '>{value.status_retrait}</b> </p>
        <p className='text-dark'>Sender Nmae: <b className='text-dark '>{value.nom_expediteur} {value.postnom_expediteur} {value.prenom_expediteur}</b> </p>
        <p className='text-dark'>Receiver Name: <b className='text-dark'>{value.nom_beneficiaire} {value.postnom_beneficiaire} {value.prenom_beneficiaire}</b> </p>
        <p className='text-dark'>Sender Country: <b className='text-dark'> {value.pays_expediteur}</b></p>
        <p className='text-dark'>Sender Number: <b className='text-dark'> {value.numero_expediteur}</b></p>
    </Col>

    <Col className='justify-content-start text-start'  xs={12}>
    <p className='text-dark'>Amount to pay: <b className='text-danger'>{Number(value.montant_total).toFixed(2)} £</b> </p>
    <p className='text-dark'>Amount to pick up: <b className='text-dark'>{Number(value.montant_beneficiaire).toFixed(2)} $</b> </p>
        <p className='text-dark'>Sender Email: <b className='text-dark'> {value.email_expediteur}</b></p>
        <p className='text-dark'>Receiver Country: <b className='text-dark'> {value.pays_beneficiaire}</b></p>
        <p className='text-dark'>Type of service: <b className='text-dark '>{value.type_service}</b> </p>
        <p className='text-dark'>date and time : <b className='text-dark'> {value.date_heure_operation}</b></p> 
        
    </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>

    </Row>
    <Row>
      <Col className='justify-content-start text-center'  xs={12}>
      <p className='text-dark'>Sending done by : <b className='text-dark'> {value.envoi_executed_by_agent}</b></p> 
      </Col>
    </Row>

    <Row className="pb-3">
      <hr style={{color:"darkorange"}} ></hr>

    <Col className='text-center' xs={6}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button name='validate' value={value.code_retrait} className='pt-3' variant="warning" type="submit" onClick={e=>validateCodeRetrait(e)}>
        validate code
        </Button>
        </Link>
        </Col>

        <Col className='text-center' xs={6}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button name='validate' value={value.code_retrait} className='pt-3' variant="danger" type="submit" onClick={e=>suprimerOperation(e)}>
        delete operation
        </Button>
        </Link>
        </Col>
    </Row>

    

</Container> }
)
: <MyVerticallyCenteredModal4 show={false} onHide={() => {
  setModalShow4(false)
  closePage()
}} />
}


<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
<MyVerticallyCenteredModal show={modalShow} onHide={() => {
  setModalShow(false)
  closePage()
}
} />
<MyVerticallyCenteredModal2 show={modalShow2} onHide={() =>{ 
  setModalShow(false)
  closePage()
}
  } />
<MyVerticallyCenteredModal3 show={modalShow3} onHide={() => setModalShow3(false)} />
<MyVerticallyCenteredModal5 show={modalShow5} onHide={() => setModalShow5(false)} codeRetrait={codeRetrait} suprimerOperationConfirm={suprimerOperationConfirm} setModalShow5={setModalShow5} setModalShow3={setModalShow3}/>
<MyVerticallyCenteredModal6 show={modalShow6} onHide={() => setModalShow6(false)} />
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
          Validation Successful
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-success'><b>the withdrawal code has been validated successfully </b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>Ok</Button>
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
          Successful deletion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-success'><b>the sending form has been successfully deleted</b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>close</Button>
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
          No sending to validate available
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='couleur2'><b>No withdrawal code awaiting validation at the moment </b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>close</Button>
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
          do you really want to delete this sending form?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
        <Button variant='dark' className='mx-2'  onClick={props.onHide}>No</Button> <Button variant='danger' className='mx-5' onClick={()=>{
           props.suprimerOperationConfirm(props.codeRetrait)}
        }>yes</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>cancel</Button>
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
          deletion failed
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-danger'><b>sorry something went wrong to delete this operation !!</b>   
          </p>
          <p ><b>please contact the maintenance service if the problem persist.</b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


export default AbonneFormNonValideInfoEnglish;