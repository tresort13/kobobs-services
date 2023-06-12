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




function ContactBoxLingala(props)
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
    <MyVerticallyCenteredModal show={props.modalShowContact} onHide={() => props.setModalShowContact(false)} setModalShowContact={props.setModalShowContact} setModalShowContact2={setModalShowContact2} setModalShowContact3={setModalShowContact3} setModalShowContact4={setModalShowContact4} language={props.language} />
  <MyVerticallyCenteredModal2 show={modalShowContact2} onHide={() => setModalShowContact2(false)} />
  <MyVerticallyCenteredModal3 show={modalShowContact3} onHide={() => setModalShowContact3(false)} />
  <MyVerticallyCenteredModal4 show={modalShowContact4} onHide={() => setModalShowContact4(false)} setModalShowContact2={setModalShowContact2} setModalShowContact4={setModalShowContact4} />
  </div>
   } 

{isMobileOrTablet && <div>
    <MyVerticallyCenteredModal show={props.modalShowContact} onHide={() => props.setModalShowContact(false)} setModalShowContact={props.setModalShowContact} setModalShowContact2={setModalShowContact2} setModalShowContact3={setModalShowContact3} setModalShowContact4={setModalShowContact4}  language={props.language}/>
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
          language:props.language
      }})
  
      
  
       //login implimentation
       const navigate = useNavigate()
      
       const connection = (e)=>
       {
         console.log(state.credentials)
          props.setModalShowContact2(true)
           fetch('https://kobobsapi.herokuapp.com/api/contact/', {
               method: 'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify(state.credentials)
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
          contacter biso 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Row className='justify-content-start'>
          <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Kombo nayo"  name="firstname"
          value ={state.credentials.firstname} onChange={inputChanged} autoFocus/>
          
           </Form.Group>
          </Col>
      </Row>

      <Row className='justify-content-start'>
          <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email nayo"  name="email"
          value ={state.credentials.email} onChange={inputChanged} />
          
           </Form.Group>
          </Col>
      </Row>

      <Row className='justify-content-start'>
          <Col xs={7} >
          <label for="exampleFormControlTextarea1" class="form-label">Nsango</label>
          <textarea  value ={state.credentials.message} onChange={inputChanged} name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>   
          </Col>
      </Row>
    
     
    
      <Row className='justify-content-start pb-3 pt-3'>
          <Col  xs={6}>    
          <Link to="" style={{color:'white',textDecorationLine:'none'}}>      
          <Button variant="outline-warning" type="submit" onClick={e=>connection(e)}>
          <b>Tinda</b>
          </Button>
          </Link>
          </Col>
      </Row>
  </Form>
 
        </Modal.Body>
        <Modal.Footer>
        <span class="mx-5 px-5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg> <b>+447417588363</b></span> 
          <Button variant='warning' onClick={props.onHide}>Kokanga</Button>
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
          Svp zela mukie...
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
          Nsango na yo etindami malamu
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"  className="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </svg>
          <p className='text-success mt-3'><b>Merci pona ko contacter biso</b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={props.onHide}>kokanga</Button>
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
          kotinda elongi te !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-danger'><b>pardon eloko moko esali mabe, meka lisusu to contacter ba services ya clients directement na 00447417588363 !! </b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={props.onHide}>Kokanga</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
 
export default ContactBoxLingala;