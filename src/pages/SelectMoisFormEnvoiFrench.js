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
import SessionOutFrench from './SessionOutFrench';
//import SessionOut from './SessionOut';


const useState = React.useState

function SelectMoisFormEnvoiFrench(props)
{
    const[moisEnvoie,setMoisEnvoie] = useState({infomoisEnvoie :{
        moisInfo:""
    }})

    const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);

    const { Formik } = formik;

  const testValidation = yup.object().shape({
    moisInfo : yup.string().required('required field'),
  });
 

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    

    const [message,setMessage] = useState("Veuillez selectionner le mois ")
    const [couleur,setCouleur] = useState("text-dark")

    const submitVol =(values)=>
    {
     const values_replace = values.moisInfo.replace(/-/g,'/')
     console.log(values_replace)
     const year = values_replace.slice(0,4)
     const mois = values_replace.slice(5,7)
     const date = { "moisInfo": mois.concat("/",year)}
    
      console.log(date)
      setModalShow2(true)
        fetch('https://kobobsapi.herokuapp.com/api/getMonthlyRapportInfo/', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
             body: JSON.stringify(date)
          })
          .then( res => res.json())
          .then(
            res => {   
            console.log(res)
            props.dataMonthlyRapport(res)
            props.setMois(date.moisInfo)
            navigate('/monthly_rapport_envoi_french')
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
         const cred = moisEnvoie.infomoisEnvoie ;
         cred[event.target.name] = event.target.value;
         setMoisEnvoie({infomoisEnvoie:cred})
    }

return (
    <>
    <HeaderFrench dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>

{isDesktop && <Container className='bg-light justify-content-center text-center ' style={{marginTop:100,width:750}} >
<Row className='justify-content-center mb-3 pt-5' >
        <Col xs={6}>
        <p className="text-dark"><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
    
    <Formik
      validationSchema={testValidation}
      onSubmit={(values)=>{
        submitVol(values)
      }}
      initialValues={{
        moisInfo:''
      }}
    >
     {({handleSubmit, handleChange,handleBlur, values, touched, errors
         })=>(
    <Form noValidate onSubmit={handleSubmit}>
   

    <Row className='justify-content-center'>
    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="moisInfo" value={values.moisInfo}  type="month" onBlur={handleBlur} onChange={handleChange} required />
         </Form.Group>
         <p className='text-danger'>{touched.moisInfo && errors.moisInfo}</p>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Button variant="warning" type="submit">
        Valider 
        </Button>

        </Col>
    </Row>
</Form>
         )
        }
        </Formik>
</Container>}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center mt-5 mx-auto'  >
<Row className='justify-content-center mb-3 pt-5' >
        <Col xs={12}>
        <p className="text-dark"><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
    
<Form onSubmit={submitVol}>
   

    <Row className='justify-content-center'>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="moisInfo"  type="month" onChange={e=>inputChanged(e)} required />
         </Form.Group>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>
        
        <Button variant="warning" type="submit">
        Valider 
        </Button>

        </Col>
    </Row>
</Form>
</Container>} 
<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
<MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
<SessionOutFrench setIsadmin={props.setIsadmin}/>
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
          
          <p className='text-danger'><b>Désolé veuillez selectionner le mois  !!!</b>   
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


export default SelectMoisFormEnvoiFrench;