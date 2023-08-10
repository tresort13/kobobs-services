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




function LoginBoxLingala(props)
{
 // const [modalShow, setModalShow] = React.useState(props.modalShow);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
//  const [modalShow4, setModalShow4] = React.useState(props.modalShow4);
  const [modalShow5, setModalShow5] = React.useState(false);
  const [modalShow6, setModalShow6] = React.useState(false);

  

  const openRegister = ()=>{
    props.setModalShow(false)
    props.setModalShow4(true)
  }

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

    return (
   <>
 {isDesktop && <div>
  <MyVerticallyCenteredModal show={props.modalShow} onHide={() => props.setModalShow(false)} dataUser={props.dataUser} dataAbonne={props.dataAbonne} setModalShow={props.setModalShow} setModalShow2={setModalShow2} setModalShow3={setModalShow3} setModalShow4={props.setModalShow4} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber}  setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} openRegister={openRegister} language={props.language}/>
  <MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
  <MyVerticallyCenteredModal3 show={modalShow3} onHide={() => setModalShow3(false)} />
  <MyVerticallyCenteredModal4 show={props.modalShow4} onHide={() => props.setModalShow4(false)} language2={props.language2} setLanguage2={props.setLanguage2} setModalShow2={setModalShow2} setModalShow4={props.setModalShow4} setModalShow5={setModalShow5} setModalShow6={setModalShow6} language={props.language}/>
  <MyVerticallyCenteredModal5 show={modalShow5} onHide={() => setModalShow5(false)} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setModalShow5={setModalShow5}/>
  <MyVerticallyCenteredModal6 show={modalShow6} onHide={() => setModalShow6(false)} />
  </div>
   } 

{isMobileOrTablet && <div>
   <MyVerticallyCenteredModal show={props.modalShow} onHide={() => props.setModalShow(false)} dataUser={props.dataUser} dataAbonne={props.dataAbonne} setModalShow={props.setModalShow} setModalShow2={setModalShow2} setModalShow3={setModalShow3} setModalShow4={props.setModalShow4} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber}  setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} openRegister={openRegister} language={props.language}/>
  <MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
  <MyVerticallyCenteredModal3 show={modalShow3} onHide={() => setModalShow3(false)} />
  <MyVerticallyCenteredModal4 show={props.modalShow4} onHide={() => props.setModalShow4(false)} language2={props.language2} setLanguage2={props.setLanguage2} setModalShow2={setModalShow2} setModalShow4={props.setModalShow4} setModalShow5={setModalShow5} setModalShow6={setModalShow6} language={props.language}/>
  <MyVerticallyCenteredModal5 show={modalShow5} onHide={() => setModalShow5(false)} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setModalShow5={setModalShow5}/>
  <MyVerticallyCenteredModal6 show={modalShow6} onHide={() => setModalShow6(false)} />
  </div>
   } 
  </>
  );
}

function MyVerticallyCenteredModal(props) {

    const [state,setState] = useState({
      credentials :{
          username : '',
          password : ''
      }})
  
    const [visible,setVisible] = useState(false)
  
      
  
       //login implimentation
       const navigate = useNavigate()
      
       const connection = (e)=>
       {
         console.log(state.credentials)
          props.setModalShow2(true)
           fetch('https://kobobsapi.herokuapp.com/api/login/', {
               method: 'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify(state.credentials)
             })
             .then( data => data.json())
             .then(
               data => {
                console.log(data) 
                props.setModalShow(false)
                 props.setModalShow2(false)
                 props.setModalShow3(false)
                console.log('you are connected') 
                props.setModalShow4(false)
                 
                 if (data.username === state.credentials.username)
                 {
                   console.log(props.uniqueNumber)
                   props.dataAbonne(data)
                   props.dataUser(data)
                  props.setUniqueNumber(data.user_id)
                   props.setUsername(data.first_name)
                   props.setIsadmin(data.is_superuser)
                   props.setIsStaff(data.is_staff)
                   props.setIsLogged(true)
                   console.log(data.is_superuser)
                   props.setModalShow4(false)
                   setState({credentials:{username :data.username}})
                    
                   navigate('/')
                   console.log('you are connected')
                 } 
                 else
                 {
                  props.setModalShow(true)
                  props.setModalShow2(false)
                  props.setModalShow3(true)
                  navigate('/')
                 }
                 
                 
                 
               }
             )
             .catch( (error) =>
               {
                 console.log(error)
                props.setModalShow2(false)
                props.setModalShow3(true)
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
            Mikonecter
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Row className='justify-content-start'>
          <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email nayo"  name="username"
          value ={state.credentials.username} onChange={inputChanged} autoFocus/>
          
           </Form.Group>
          </Col>
      </Row>
    
      <Row className='justify-content-start'>
         {visible===false ? <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Control type="password" placeholder="Mot de passe nayo" name="password"
           value ={state.credentials.password} onChange={inputChanged} /> 
           </Form.Group>
          </Col> :
          <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Control type="text" placeholder="Mot de passe nayo" name="password"
           value ={state.credentials.password} onChange={inputChanged} /> 
           </Form.Group>
          </Col>
          }
  
  
  
         { visible===false ? <Col xs={1} className='justify-content-start text-start' >
         <span onClick={()=>setVisible(true)}>
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-eye-slash-fill text-dark" viewBox="0 0 16 16">
          <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
          <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
          </svg>
         </span>
  
          </Col> :
          <Col xs={1} className='justify-content-start text-start' >
          <span onClick={()=>setVisible(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
          </svg>
          </span>
   
           </Col>
          }
      </Row>
    
      <Row className='justify-content-start pb-3'>
          <Col  xs={6}>    
          <Link to="" style={{color:'white',textDecorationLine:'none'}}> 
          
          <Button variant="outline-warning" type="submit" onClick={e=>connection(e)}>
          <b>mikonecter</b>
          </Button>
          </Link>
          </Col>
      </Row>
  </Form>
  <a href='https://kobobsapi.herokuapp.com/api/reset_password_lingala/'  className='text-primary'><strong> Obosani mot de passe na yo ?</strong></a>
 {/* <p className='text-dark mt-3'>ozali na compte te ? <span> <Link to='' onClick={()=>props.openRegister()}><strong> kokomisa</strong></Link> </span></p>*/}
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
          Svp zela...
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
          Connexion elongi te
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-danger'><b>pardon mot de passe to email ya mabe !! </b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={props.onHide}>ok</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function MyVerticallyCenteredModal4(props) {
  
    const [state,setState] = useState({
      registrationInfo :{
          first_name:'',
          last_name:'',
          email:'',
          phone:'',
          password : '',
          language2 : props.language2
      }})
  
    const [visible,setVisible] = useState(false)
  
      
  
       //login implimentation
       const navigate = useNavigate()
      
       const registration = (e)=>
       {
         console.log(state.registrationInfo)
          props.setModalShow2(true)
           fetch('https://kobobsapi.herokuapp.com/api/register/', {
               method: 'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify(state.registrationInfo)
             })
             .then( data => data.json())
             .then(
               data => {
                 if(data.confirmMessage ==="registered")
                 {
                  console.log(data) 
                  props.setModalShow2(false)
                   props.setModalShow4(false)
                   props.setModalShow5(true)
                  console.log('you are registered sucessfully !!')   
  
                 }
                 else{
                  props.setModalShow2(false)
                  props.setModalShow6(true)
                 }
                
               }
             )
             .catch( (error) =>
               {
                 console.log(error)
                props.setModalShow2(false)
                props.setModalShow6(true)
                 //setMessage("accès réfusé")
               //  navigate('/')
               } )
       }
   
       const inputChanged = (event)=>
       {
            const cred = state.registrationInfo;
            cred[event.target.name] = event.target.value;
            setState({registrationInfo:cred})
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
          kokomisa ya Compte
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Row className='justify-content-start'>
          <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Svp kotisa Email na yo"  name="email"
          value ={state.registrationInfo.email} onChange={inputChanged} autoFocus/>
          
           </Form.Group>
          </Col>
      </Row>
  
      <Row className='justify-content-start'>
          <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Svp kotia kombo na yo ya liboso (prénom)"  name="first_name"
          value ={state.registrationInfo.first_name} onChange={inputChanged} />    
           </Form.Group>
          </Col>
      </Row>
  
      <Row className='justify-content-start'>
          <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Svp kotisa kombo na yo ya libota (nom)"  name="last_name"
          value ={state.registrationInfo.last_name} onChange={inputChanged} />    
           </Form.Group>
          </Col>
      </Row>
  
      <Row className='justify-content-start'>
          <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Svp kotisa téléphone na yo"  name="phone"
          value ={state.registrationInfo.phone} onChange={inputChanged} />    
           </Form.Group>
          </Col>
      </Row>
    
      <Row className='justify-content-start'>
         {visible===false ? <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Control type="password" placeholder="kotisa Mot de passe nayo" name="password"
           value ={state.registrationInfo.password} onChange={inputChanged} /> 
           </Form.Group>
          </Col> :
          <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Control type="text" placeholder="kotisa Mot de passe nayo" name="password"
           value ={state.registrationInfo.password} onChange={inputChanged} /> 
           </Form.Group>
          </Col>
          }
  
  
  
         { visible===false ? <Col xs={1} className='justify-content-start text-start' >
         <span onClick={()=>setVisible(true)}>
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-eye-slash-fill text-dark" viewBox="0 0 16 16">
          <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
          <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
          </svg>
         </span>
  
          </Col> :
          <Col xs={1} className='justify-content-start text-start' >
          <span onClick={()=>setVisible(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
          </svg>
          </span>
   
           </Col>
          }
      </Row>
    
      <Row className='justify-content-start pb-3'>
          <Col  xs={6}>    
          <Link to="" style={{color:'white',textDecorationLine:'none'}}> 
          
          <Button variant="warning" type="submit" onClick={e=>registration(e)}>
          <b>kotinda</b>
          </Button>
          </Link>
          </Col>
      </Row>
  </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>kokanga</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function MyVerticallyCenteredModal5(props) {
  
    const showLogin2 = ()=>{
      props.setModalShow5(false)
      props.setModalShow(true)
    }
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          enregistrement ya compte na yo elongi
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"  className="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </svg>
          <p className='text-success mt-3'><b>Matondo mingi mpo na kopona biso</b>   
          </p>
          <Link to=''><strong onClick={()=>showLogin2()}>mikonecter</strong></Link>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={props.onHide}>kokanga</Button>
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
          kokomisa nkombo elongami te
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-danger'><b>pardon inscription na yo elongi te Svp meka lisusu na kotondisa malamu !! </b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={props.onHide}>fermer</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  
  

export default LoginBoxLingala;