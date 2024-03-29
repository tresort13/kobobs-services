import React from 'react';
import {Link,useNavigate} from  'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import {useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ClipLoader from "react-spinners/ClipLoader";
import * as formik from 'formik';
import * as yup from 'yup';




function ContactBoxEnglish(props)
{
 // const [modalShow, setModalShow] = React.useState(props.modalShow);
  const [modalShowContact2, setModalShowContact2] = React.useState(false);
  const [modalShowContact3, setModalShowContact3] = React.useState(false);
  const [modalShowContact4, setModalShowContact4] = React.useState(false);
 
  

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

    return (
   <>
   {isDesktop && <div>
    <MyVerticallyCenteredModal show={props.modalShowContact} onHide={() => props.setModalShowContact(false)} setModalShowContact={props.setModalShowContact} setModalShowContact2={setModalShowContact2} setModalShowContact3={setModalShowContact3} setModalShowContact4={setModalShowContact4} language2={props.language2} />
  <MyVerticallyCenteredModal2 show={modalShowContact2} onHide={() => setModalShowContact2(false)} />
  <MyVerticallyCenteredModal3 show={modalShowContact3} onHide={() => setModalShowContact3(false)} />
  <MyVerticallyCenteredModal4 show={modalShowContact4} onHide={() => setModalShowContact4(false)} setModalShowContact2={setModalShowContact2} setModalShowContact4={setModalShowContact4} />
  </div>
   } 

{isMobileOrTablet && <div>
    <MyVerticallyCenteredModal show={props.modalShowContact} onHide={() => props.setModalShowContact(false)} setModalShowContact={props.setModalShowContact} setModalShowContact2={setModalShowContact2} setModalShowContact3={setModalShowContact3} setModalShowContact4={setModalShowContact4}  language2={props.language2}/>
  <MyVerticallyCenteredModal2 show={modalShowContact2} onHide={() => setModalShowContact2(false)} />
  <MyVerticallyCenteredModal3 show={modalShowContact3} onHide={() => setModalShowContact3(false)} />
  <MyVerticallyCenteredModal4 show={modalShowContact4} onHide={() => setModalShowContact4(false)} setModalShowContact2={setModalShowContact2} setModalShowContact4={setModalShowContact4} />
  
  </div>
   } 
  </>
  );
}

function MyVerticallyCenteredModal(props) {

    const [state,setState] = useState({
      credentials :{
          firstname : '',
          email : '',
          message : '',
          language:props.language2
      }})

      const { Formik } = formik;

      const testValidation = yup.object().shape({
        firstname: yup.string().required('required field'),
        email: yup.string().required('required field'),
        message : yup.string().required('required field'),
      });
  
      
  
       //login implimentation
       const navigate = useNavigate()
      
       const connection = (values)=>
       {
         console.log(values)
          props.setModalShowContact2(true)
           fetch('https://kobobsapi.herokuapp.com/api/contact/', {
               method: 'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify(values)
             })
             .then( data => data.json())
             .then(
               data => {
                console.log(data) 
                
                 
                 
                 if (data.message ==="success")
                 {
                  props.setModalShowContact(false)
                  props.setModalShowContact2(false)
                    props.setModalShowContact3(true)
                 } 
                 else
                 {
                  props.setModalShowContact(false)
                  props.setModalShowContact2(false)
                    props.setModalShowContact3(false)
                    props.setModalShowContact4(true)
                 }
                 
                 
                 
               }
             )
             .catch( (error) =>
               {
                 console.log(error)
                props.setModalShowContact(false)
                props.setModalShowContact2(false)
                  props.setModalShowContact3(false)
                  props.setModalShowContact4(true)
                 //setMessage("accès réfusé")
               //  navigate('/')
               } )
       }
   
       const inputChanged = (event)=>
       {
            const cred = state.credentials;
            cred[event.target.name] = event.target.value;
            setState({credentials:cred})
       }
   
      
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
  
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           contact us 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formik
      validationSchema={testValidation}
      onSubmit={(values)=>{
        connection(values)
      }}
      initialValues={{
        firstname : '',
          email : '',
          message : '',
          language:props.language2
    
      }}
    >
     {({handleSubmit, handleChange,handleBlur, values, touched, errors
         })=>(
          <Form noValidate onSubmit={handleSubmit}>
        <Row className='justify-content-start'>
          <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Firstname"  name="firstname"
          value ={values.firstname} onChange={handleChange}
          onBlur={handleBlur} autoFocus/>
          
           </Form.Group>
           <p className='text-danger'>{touched.firstname && errors.firstname}</p>
          </Col>
      </Row>

      <Row className='justify-content-start'>
          <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email"  name="email"
          value ={values.email} onChange={handleChange}
          onBlur={handleBlur} />
 
         </Form.Group>
        <p className='text-danger'>{touched.email && errors.email}</p>
          </Col>
      </Row>

      <Row className='justify-content-start'>
          <Col xs={7} >
          <label for="exampleFormControlTextarea1" class="form-label">Message</label>
          <textarea  value ={values.message} onChange={handleChange} onBlur={handleBlur} name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>   
          </Col>
          <p className='text-danger'>{touched.message && errors.message}</p>
      </Row>
    
     
    
      <Row className='justify-content-start pb-3 pt-3'>
          <Col  xs={6}>    

          <Button variant="outline-warning" type="submit" >
          <b>Send</b>
          </Button>
          </Col>
      </Row>
  </Form>
 )
}
</Formik>
        </Modal.Body>
        <Modal.Footer>
        <span class="mx-5 px-5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg> <b>+447417588363</b></span> 
          <Button variant='warning' onClick={props.onHide}>Close</Button>
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
            Please wait...
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
           your message has been sent successfully
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"  className="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </svg>
          <p className='text-success mt-3'><b>Thank for contacting us</b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={props.onHide}>close</Button>
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
            sending failed !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-danger'><b>sorry something went wrong, try again or contact the customers services directly on 00447417588363 !! </b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={props.onHide}>close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
 
export default ContactBoxEnglish;