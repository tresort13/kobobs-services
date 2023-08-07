import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useNavigate} from  'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Header.css'
import { useMediaQuery } from 'react-responsive';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ClipLoader from "react-spinners/ClipLoader";
import  './Header.css';
import * as formik from 'formik';
import * as yup from 'yup';
import HeaderFrench from './HeaderFrench';


//import SessionOut from './SessionOut';

const useState = React.useState

function SelectYearFormRetraitFrench(props)
{
    const[dateEnvoie,setDateEnvoie] = useState({infodateEnvoie :{
        dateInfo:""
    }})

    const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);

    const { Formik } = formik;

  const testValidation = yup.object().shape({
    dateInfo : yup.string().required('champs requis'),
  });
 

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    

    const [message,setMessage] = useState("Entrer l'année pour le rapport de retrait annuel")
    const [couleur,setCouleur] = useState("text-dark")

    const submitVol =(values)=>
    {
    // const values_replace = values.dateInfo.replace(/-/g,'/')
   //  console.log(values_replace)
   //  const year = values_replace.slice(0,4)
   //  const mois = values_replace.slice(4,8)
   //  const day = values_replace.slice(8,10)
     const date = { "yearInfo": values.dateInfo}
    
      console.log(date)
      setModalShow2(true)
        fetch('https://kobobsapi.herokuapp.com/api/getYearlyRapportInfoRetrait/', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(date)
          })
          .then( res => res.json())
          .then(
            res => {   
               console.log(res)
               props.dataYearlyRapport(res)
               props.setYear(date.yearInfo)
               navigate('/yearly_rapport_retrait_french')
            }
          )
          .catch( (error) =>
            {
                setModalShow(true)
                setModalShow2(false)
                console.log(error)
            } )
       
                
    }

    const inputChanged = (event)=>
    {
         const cred = dateEnvoie.infodateEnvoie ;
         cred[event.target.name] = event.target.value;
         setDateEnvoie({infodateEnvoie:cred})
    }

return (
    <>
    <HeaderFrench dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>

{isDesktop && <Container className='justify-content-center text-center mb-5 text-light text-bold'  >
<Row className='mt-3'>
        <Col xs={12} className="text-start text-light">
            <p><Link to='/menu_rapport_retrait_french' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Retourner</u>  </b></Link> </p>
        </Col>
    </Row>

<Row className=' justify-content-center mb-3 pt-3' >
        <Col xs={12} className="rounded" style={{marginTop:100,width:750,border:"3px solid white"}}>
        <p className="couleur2"><i><b>{message}</b></i></p>
    
    
    <Formik
      validationSchema={testValidation}
      onSubmit={(values)=>{
       submitVol(values)
     // setModalShow3(true)
      }}
      initialValues={{
        dateInfo:''
      }}
    >
     {({handleSubmit, handleChange,handleBlur, values, touched, errors
         })=>(
    <Form noValidate onSubmit={handleSubmit}>
   

    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="dateInfo" value={values.dateInfo}  type="year" onBlur={handleBlur} onChange={handleChange} placeholder="Entrer l'année (yyyy)" required />
         </Form.Group>
         <p className='text-danger'>{touched.dateInfo && errors.dateInfo}</p>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>  
        <Button variant="warning" type="submit" >
        Valider 
        </Button>
        </Col>
    </Row>
</Form>
         )
}
</Formik>
</Col>
</Row>
</Container> }

{isMobileOrTablet &&  <Container className='justify-content-center text-center mb-5 text-light text-bold'  >
<Row className='mt-3'>
<Col xs={12} className="text-start text-light">
            <p><Link to='/menu_rapport_retrait_french' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Retourner</u>  </b></Link> </p>
        </Col>
    </Row>

<Row className=' justify-content-center mb-3 pt-3' >
        <Col xs={12} className="rounded" style={{marginTop:100,width:"auto",border:"3px solid white"}}>
        <p className="couleur2"><i><b>{message}</b></i></p>
    
    
    <Formik
      validationSchema={testValidation}
      onSubmit={(values)=>{
      submitVol(values)
      //setModalShow3(true)
      }}
      initialValues={{
        dateInfo:''
      }}
    >
     {({handleSubmit, handleChange,handleBlur, values, touched, errors
         })=>(
    <Form noValidate onSubmit={handleSubmit}>
   

    <Row className='justify-content-center'>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="dateInfo" value={values.dateInfo}  type="year" onBlur={handleBlur} onChange={handleChange} placeholder="Entrer l'année (yyyy)" required />
         </Form.Group>
         <p className='text-danger'>{touched.dateInfo && errors.dateInfo}</p>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>  
        <Button variant="warning" type="submit" >
        Valider 
        </Button>
        </Col>
    </Row>
</Form>
         )
}
</Formik>
</Col>
</Row>
</Container> }
<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
<MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
<MyVerticallyCenteredModal3 show={modalShow3} onHide={() => setModalShow3(false)} />
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
            Echec de Validation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <p className='text-danger'><b>Désolé pas de rapport d'envoi sur l'année sélectionnée !!!</b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>Fermer</Button>
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
            Veuillez Patienter...
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
          <p className='text-danger'><b> Désolé option disponible après paiement...</b></p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Cette option sera disponible après le paiement
        </Modal.Body>
        <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }


export default SelectYearFormRetraitFrench;