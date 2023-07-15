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
import SessionOutLingala from './SessionOutLingala';

//import SessionOut from './SessionOut';

const useState = React.useState

function SelectDateFormRecetteLingala(props)
{
    const[dateEnvoie,setDateEnvoie] = useState({infodateEnvoie :{
        dateInfo:""
    }})

    const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);

    const { Formik } = formik;

  const testValidation = yup.object().shape({
    dateInfo : yup.string().required('required field'),
  });
 

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    

    const [message,setMessage] = useState("Pona date ")
    const [couleur,setCouleur] = useState("text-dark")

    const submitVol =(values)=>
    {
     const values_replace = values.dateInfo.replace(/-/g,'/')
     console.log(values_replace)
     const year = values_replace.slice(0,4)
     const mois = values_replace.slice(4,8)
     const day = values_replace.slice(8,10)
     const date = { "dateInfo": day.concat("",mois,year)}
    
      console.log(date)
      setModalShow2(true)
        fetch('https://kobobsapi.herokuapp.com/api/getDailyRapportRecetteInfo/', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(date)
          })
          .then( res => res.json())
          .then(
            res => {   
               console.log(res)
               props.setDailyRapport(res)
               props.setDate(date.dateInfo)
               navigate('/daily_rapport_recette_lingala')
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
    <Header dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>

{isDesktop && <Container className='bg-light justify-content-center text-center' style={{marginTop:100,width:750}} >
<Row className='justify-content-center mb-3 pt-5' >
        <Col xs={12}>
        <p className="text-dark"><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
    
    <Formik
      validationSchema={testValidation}
      onSubmit={(values)=>{
        submitVol(values)
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
        <Form.Control name="dateInfo" value={values.dateInfo}  type="date" onBlur={handleBlur} onChange={handleChange} required />
         </Form.Group>
         <p className='text-danger'>{touched.dateInfo && errors.dateInfo}</p>
        </Col>
    </Row>

    
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}>  
        <Button variant="warning" type="submit" >
        ko validé
        </Button>
        </Col>
    </Row>
</Form>
         )
}
</Formik>
</Container> }

{isMobileOrTablet &&  <Container className='bg-light justify-content-center text-center  mt-5 mx-auto'>
<Row className='justify-content-center mb-3 pt-5' >
        <Col xs={12}>
        <p className="text-dark"><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
    
<Form onSubmit={submitVol}>
   

    <Row className='justify-content-center'>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="dateInfo"  type="date" onChange={e=>inputChanged(e)}  />
         </Form.Group>
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
</Container>}
<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
<MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
<SessionOutLingala setIsadmin={props.setIsadmin}/>
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
          Validation esimbi te
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p className='text-danger'><b>Mawa rapport eza te na date oyo oponi !!!</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>kokanga</Button>
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


export default SelectDateFormRecetteLingala;