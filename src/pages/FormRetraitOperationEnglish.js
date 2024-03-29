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
import Modal from 'react-bootstrap/Modal';
import ClipLoader from "react-spinners/ClipLoader";
import  './Header.css';
import HeaderFrench from './HeaderFrench';
import HeaderEnglish from './HeaderEnglish';
import * as formik from 'formik';
import * as yup from 'yup';

// import SessionOut from './SessionOut';


const useState = React.useState
function FormRetraitOperationEnglish(props)
{

    const[codeRetrait,setCodeRetrait] = useState({infoCodeRetrait :{
        code_retrait :"",
    }})

    const { Formik } = formik;

    const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);


    const [message,setMessage] = useState("Please enter the withdrawal code")
    const [couleur,setCouleur] = useState("text-dark")

    const testValidation = yup.object().shape({
      codeRetrait: yup.string().min(9,"you must enter 9 digits numbers").max(9,"you must enter 9 digits numbers").required('field required')
    });

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  
    


    const submitcodeRetrait = (values)=>
    {
        
        setModalShow2(true)    
        fetch('https://kobobsapi.herokuapp.com/api/getRetraitInfo/'+values.codeRetrait+'/', {
                method:'GET',
                headers: {'Content-Type': 'application/json'},
               // body: JSON.stringify(codeRetrait.infoCodeRetrait)
              })
              .then( res => res.json())
              .then(
                res => {  
                  console.log(res) 
                   props.dataEnvoie2(res)
                   navigate('/retrait_info_operation_english')
                }
              )
              .catch( (error) =>
                {
                    setModalShow(true)
                    setModalShow2(false)
                    console.log(error)
                } )

                

                setCodeRetrait({infoCodeRetrait:{code_retrait:""}})
    }

    const inputChanged = (event)=>
    {
        const cred = codeRetrait.infoCodeRetrait;
        cred[event.target.name] = event.target.value;
        setCodeRetrait({infoCodeRetrait:cred})
    }



   
    return (
        
        <>
<HeaderEnglish dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/> 
{isDesktop && <Container className='justify-content-center text-center mb-5 text-light text-bold'  >
<Row className='mt-3'>
      <Col xs={12} className="text-start text-light">
      <p><Link to='/' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Back</u></b></Link> </p>
      </Col>
  </Row> 
<Row className=' justify-content-center mb-3 pt-3' >
        <Col xs={12} className="rounded" style={{marginTop:100,width:750,border:"3px solid white"}}>
        <p className="couleur2"><i><b>{message}</b></i></p>

   
    
    <Formik
      validationSchema={testValidation}
      onSubmit={(values)=>{
        submitcodeRetrait(values)
      }}
      initialValues={{
        codeRetrait : ''
      }}
    >
     {({handleSubmit, handleChange,handleBlur, values, touched, errors
         })=>(

    <Form noValidate onSubmit={handleSubmit}>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="codeRetrait" value={values.codeRetrait} onChange={handleChange} onBlur={handleBlur} type="text" placeholder='Please enter the tracking number' autoFocus/>
         </Form.Group>
         <p className='text-danger'>{touched.codeRetrait && errors.codeRetrait}</p>
        </Col>
    </Row>


   <Row className='pb-3'>
       <Col>
        <Button variant="warning" type="submit" >
        validate
        </Button>
        </Col>
    </Row>
  


</Form>
   )
  }
</Formik>
 </Col>
</Row> 
</Container>
}

{isMobileOrTablet && <Container className='justify-content-center text-center mb-5 text-light text-bold'  >
<Row className='mt-3'>
      <Col xs={12} className="text-start text-light">
      <p><Link to='/' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Back</u></b></Link> </p>
      </Col>
  </Row> 
<Row className=' justify-content-center mb-3 pt-3' >
        <Col xs={12} className="rounded" style={{marginTop:100,width:750,border:"3px solid white"}}>
        <p className="couleur2"><i><b>{message}</b></i></p>

   
    
        <Formik
      validationSchema={testValidation}
      onSubmit={(values)=>{
        submitcodeRetrait(values)
      }}
      initialValues={{
        codeRetrait : ''
      }}
    >
     {({handleSubmit, handleChange,handleBlur, values, touched, errors
         })=>(

    <Form noValidate onSubmit={handleSubmit}>
    <Row className='justify-content-center'>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Control name="codeRetrait" value={values.codeRetrait} onChange={handleChange} onBlur={handleBlur} type="text" placeholder='Please enter the tracking number' autoFocus/>
         </Form.Group>
         <p className='text-danger'>{touched.codeRetrait && errors.codeRetrait}</p>
        </Col>
    </Row>


   <Row className='pb-3'>
       <Col>
        <Button variant="warning" type="submit" >
        validate
        </Button>
        </Col>
    </Row>
  


</Form>
   )
  }
</Formik>
 </Col>
</Row> 
</Container>
}
<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
<MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
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
            Validation Failed
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-danger'><b>Sorry this withdrawal code does not exist !!!</b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>close</Button>
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
  

export default FormRetraitOperationEnglish;