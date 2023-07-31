import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useNavigate} from  'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from './Header';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import ClipLoader from "react-spinners/ClipLoader";
import  './Header.css';
import * as formik from 'formik';
import * as yup from 'yup';


const useState = React.useState
function FormRetrait(props)
{
  const { Formik } = formik;

    const[codeRetrait,setCodeRetrait] = useState({infoCodeRetrait :{
        code_retrait :"",
    }})

    const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);

    const [message,setMessage] = useState("Kotisa Code ya retrait  ")
    const [couleur,setCouleur] = useState("text-dark")

    const testValidation = yup.object().shape({
      codeRetrait: yup.string().required('esengeli okotisa makomi')
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
                     navigate('/retrait_info')
                  }
                )
                .catch( (error) =>
                  {
                    setModalShow2(false)  
                      setModalShow(true)
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
        <Header dataEnvoie2={props.dataEnvoie2} envoie3={props.envoie3} dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} isStaff={props.isStaff} language2={props.language2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} setLanguage2={props.setLanguage2} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
{isDesktop && <div className=' justify-content-center text-center mb-5 text-light text-bold rounded'>
  <Row className='mt-3 px-5'>
        <Col xs={12} className="text-start text-light">
            <p><Link to='/home_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u>  </b></Link> </p>
        </Col>
    </Row>
 <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:100,width:750}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>

   
    
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
        <Form.Label className='text-dark'>Code ya rétrait</Form.Label>
        <Form.Control name="codeRetrait" value={values.codeRetrait} onChange={handleChange} onBlur={handleBlur} type="text" placeholder='kotisa code ya rétrait' autoFocus/>
         </Form.Group>
         <p className='text-danger'>{touched.codeRetrait && errors.codeRetrait}</p>
        </Col>
    </Row>


   <Row className='pb-3'>
       <Col>
        <Button variant="warning" type="submit" >
        ko validé
        </Button>
        </Col>
    </Row>
  
    <Row className='pb-3'>
       <Col>
       
       <p ><b className='couleur2'>au cas où obosani code, <Link to="/my_profil_lingala" >Tala yango na historique nayo</Link></b></p>

        </Col>
    </Row>

</Form>
         )
  }
</Formik>
</Container>
</div>
}

{isMobileOrTablet && <div className=' justify-content-center text-center mb-5 text-light text-bold rounded'>
  <Row className='mt-3 px-5'>
        <Col xs={12} className="text-start text-light">
            <p><Link to='/home_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u>  </b></Link> </p>
        </Col>
    </Row>
 <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:20,width:"auto"}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>

   
    
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
        <Form.Label className='text-dark'>Code ya rétrait</Form.Label>
        <Form.Control name="codeRetrait" value={values.codeRetrait} onChange={handleChange} onBlur={handleBlur} type="text" placeholder='kotisa code ya rétrait' autoFocus/>
         </Form.Group>
         <p className='text-danger'>{touched.codeRetrait && errors.codeRetrait}</p>
        </Col>
    </Row>


   <Row className='pb-3'>
       <Col>
        <Button variant="warning" type="submit" >
        ko validé
        </Button>
        </Col>
    </Row>
  
    <Row className='pb-3'>
       <Col>
       
       <p ><b className='couleur2'>au cas où obosani code, <Link to="/my_profil_lingala" >Tala yango na historique nayo</Link></b></p>

        </Col>
    </Row>

</Form>
         )
  }
</Formik>
</Container>
</div>
}
<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
<MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
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
            Code Eza Valide te
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-danger'><b>Limbisa Code Okotisi eza Valide te !!!</b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>kanga page</Button>
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
            Zela Mukie...
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
  

export default FormRetrait;