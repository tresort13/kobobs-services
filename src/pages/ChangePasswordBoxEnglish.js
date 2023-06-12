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




function ChangePasswordBoxEnglish(props)
{
 // const [modalShow, setModalShow] = React.useState(props.modalShow);
  const [modalShowPasswordChange2, setModalShowPasswordChange2] = React.useState(false);
  const [modalShowPasswordChange3, setModalShowPasswordChange3] = React.useState(false);
  const [modalShowPasswordChange4, setModalShowPasswordChange4] = React.useState(false);
 
  

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

    return (
   <>
   {isDesktop && <div>
    <MyVerticallyCenteredModal show={props.modalShowPasswordChange} onHide={() => props.setModalShowPasswordChange(false)} setModalShowPasswordChange={props.setModalShowPasswordChange} setModalShowPasswordChange2={setModalShowPasswordChange2} setModalShowPasswordChange3={setModalShowPasswordChange3} setModalShowPasswordChange4={setModalShowPasswordChange4}  uniqueNumber={props.uniqueNumber} />
  <MyVerticallyCenteredModal2 show={modalShowPasswordChange2} onHide={() => setModalShowPasswordChange2(false)} />
  <MyVerticallyCenteredModal3 show={modalShowPasswordChange3} onHide={() => setModalShowPasswordChange3(false)} />
  <MyVerticallyCenteredModal4 show={modalShowPasswordChange4} onHide={() => setModalShowPasswordChange4(false)} setModalShowPasswordChange2={setModalShowPasswordChange2} setModalShowPasswordChange4={setModalShowPasswordChange4} />
  </div>
   } 

{isMobileOrTablet && <div>
    <MyVerticallyCenteredModal show={props.modalShowPasswordChange} onHide={() => props.setModalShowPasswordChange(false)} setModalShowPasswordChange={props.setModalShowPasswordChange} setModalShowPasswordChange2={setModalShowPasswordChange2} setModalShowPasswordChange3={setModalShowPasswordChange3} setModalShowPasswordChange4={setModalShowPasswordChange4} uniqueNumber={props.uniqueNumber}  />
  <MyVerticallyCenteredModal2 show={modalShowPasswordChange2} onHide={() => setModalShowPasswordChange2(false)} />
  <MyVerticallyCenteredModal3 show={modalShowPasswordChange3} onHide={() => setModalShowPasswordChange3(false)} />
  <MyVerticallyCenteredModal4 show={modalShowPasswordChange4} onHide={() => setModalShowPasswordChange4(false)} setModalShowPasswordChange2={setModalShowPasswordChange2} setModalShowPasswordChange4={setModalShowPasswordChange4} />
  
  </div>
   } 
  </>
  );
}

function MyVerticallyCenteredModal(props) {

    const [state,setState] = useState({
      credentials :{
          uniqueNumber : props.uniqueNumber,        
          old_password : '',
          new_password : '',
          confirm_password:''
      }})
  
    const [visible,setVisible] = useState(false)
    const [visible2,setVisible2] = useState(false)
    const [visible3,setVisible3] = useState(false)
  
      
  
       //login implimentation
       const navigate = useNavigate()
      
       const connection = (e)=>
       {
         console.log(state.credentials)
          props.setModalShowPasswordChange2(true)
           fetch('https://kobobsapi.herokuapp.com/api/changePassword/'+props.uniqueNumber+'/', {
               method: 'PUT',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify(state.credentials)
             })
             .then( data => data.json())
             .then(
               data => {
                console.log(data) 
                
                 props.setModalShowPasswordChange2(false)
                 props.setModalShowPasswordChange3(true)      
               }
             )
             .catch( (error) =>
               {
                 console.log(error)
                props.setModalShowPasswordChange2(false)
                props.setModalShowPasswordChange4(true)
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
           Change Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Row className='justify-content-start'>
         {visible===false ? <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Control type="password" placeholder="Old Password" name="old_password"
           value ={state.credentials.old_password} onChange={inputChanged} /> 
           </Form.Group>
          </Col> :
          <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Control type="text" placeholder="Old Password" name="old_password"
           value ={state.credentials.old_password} onChange={inputChanged} /> 
           </Form.Group>
          </Col>
          }
  
  
  
         { visible===false ? <Col xs={1} className='justify-content-start text-start' >
        <Link to=""><span onClick={()=>setVisible(true)}>
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-eye-slash-fill text-dark" viewBox="0 0 16 16">
          <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
          <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
          </svg>
         </span></Link> 
  
          </Col> :
          <Col xs={1} className='justify-content-start text-start' >
          <Link to=""><span onClick={()=>setVisible(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
          </svg>
          </span>
          </Link>
           </Col>
          }
      </Row>

      <Row className='justify-content-start'>
         {visible2===false ? <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Control type="password" placeholder="New Password" name="new_password"
           value ={state.credentials.new_password} onChange={inputChanged} /> 
           </Form.Group>
          </Col> :
          <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Control type="text" placeholder="New Password" name="new_password"
           value ={state.credentials.new_password} onChange={inputChanged} /> 
           </Form.Group>
          </Col>
          }
  
  
  
         { visible2===false ? <Col xs={1} className='justify-content-start text-start' >
         <Link to=""><span onClick={()=>setVisible2(true)}>
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-eye-slash-fill text-dark" viewBox="0 0 16 16">
          <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
          <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
          </svg>
         </span></Link>
  
          </Col> :
          <Col xs={1} className='justify-content-start text-start' >
          <Link to=""><span onClick={()=>setVisible2(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
          </svg>
          </span>
          </Link>
           </Col>
          }
      </Row>

      <Row className='justify-content-start'>
         {visible3===false ? <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Control type="password" placeholder="Confirm New Password" name="confirm_password"
           value ={state.credentials.confirm_password} onChange={inputChanged} /> 
           </Form.Group>
          </Col> :
          <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Control type="text" placeholder="Confirm New Password" name="confirm_password"
           value ={state.credentials.confirm_password} onChange={inputChanged} /> 
           </Form.Group>
          </Col>
          }
  
  
  
         { visible3===false ? <Col xs={1} className='justify-content-start text-start' >
        <Link to=""> <span onClick={()=>setVisible3(true)}>
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-eye-slash-fill text-dark" viewBox="0 0 16 16">
          <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
          <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
          </svg>
         </span>
         </Link>
          </Col> :
          <Col xs={1} className='justify-content-start text-start' >
          <Link to=""><span onClick={()=>setVisible3(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
          </svg>
          </span>
          </Link>
           </Col>
          }
      </Row> 
     
      <Row className='justify-content-start pb-3 pt-3'>
          <Col  xs={6}>    
          <Link to="" style={{color:'white',textDecorationLine:'none'}}>      
          <Button variant="outline-warning" type="submit" onClick={e=>connection(e)}>
          <b>Submit</b>
          </Button>
          </Link>
          </Col>
      </Row>
  </Form>
 
        </Modal.Body>
        <Modal.Footer>
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
           Your password has been changed successfully
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"  className="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </svg>
          
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
            changing password failed !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-danger'><b>sorry something went wrong,try again by entering all informations required properly !!</b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={props.onHide}>close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
 
export default ChangePasswordBoxEnglish;