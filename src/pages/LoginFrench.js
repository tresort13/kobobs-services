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
import HeaderHome from './HeaderHome';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import ClipLoader from "react-spinners/ClipLoader";
import Header from './Header';
import HeaderEnglish from './HeaderEnglish';



const useState = React.useState


function LoginFrench(props)
{
  
   const [state,setState] = useState({
        credentials :{
            username : '',
            password : ''
        }})
        const [visible,setVisible] = useState(false)
    const [message,setMessage] = useState("")
 
      const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
      /*const isMobile = useMediaQuery({
        query: "(max-width: 786px)"
      });
yn
      const isRetina = useMediaQuery({
        query: "(min-resolution: 2dppx)"
      });*/
    
       
          
   const navigate = useNavigate()
   const [modalShow, setModalShow] = React.useState(false);
   const [modalShow2, setModalShow2] = React.useState(false);
   

    const connection = (e)=>
    {
      setModalShow2(true)
        fetch('https://kobobsapi.herokuapp.com/api/login/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(state.credentials)
          })
          .then( data => data.json())
          .then(
            data => {  
              if (data.username == state.credentials.username)
              {

                props.setUsername(data.username)
                props.setIsadmin(data.is_superuser)
                console.log(data.is_superuser)
                setState({credentials:{username :data.username}})
                 
                navigate('/home')
              } 
              else
              {
                setModalShow2(false)
                setModalShow(true)
               navigate('/')
              }
              
              
              
            }
          )
          .catch( (error) =>
            {
              setMessage("accès réfusé")
              navigate('/')
            } )
    }

    const inputChanged = (event)=>
    {
         const cred = state.credentials;
         cred[event.target.name] = event.target.value;
         setState({credentials:cred})
    }

   

    return (


<>
<HeaderEnglish />
{isDesktop && <Container className='bg-dark justify-content-center text-center pt-2 bordure' style={{marginTop:50,backgroundColor:'grey',width:650}} >

    <Row className='justify-content-center mb-5 pt-3' >
        <Col>
        <Image src={require('./kobo_logo.JPG')}  className='rounded ' style={{width:300}}></Image>
        </Col>
    </Row>
      
    <Form>
      <Row className='justify-content-start'>
          <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email"  name="username"
          value ={state.credentials.username} onChange={inputChanged} autoFocus/>
          
           </Form.Group>
          </Col>
      </Row>
    
      <Row className='justify-content-start'>
         {visible===false ? <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Control type="password" placeholder="Mot de passe" name="password"
           value ={state.credentials.password} onChange={inputChanged} /> 
           </Form.Group>
          </Col> :
          <Col xs={7} >
          <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Control type="text" placeholder="Mot de passe" name="password"
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
          <b>connexion</b>
          </Button>
          </Link>
          </Col>
      </Row>
  </Form>
</Container> }

{isMobileOrTablet && <Container className='bg-dark justify-content-center text-center pt-2 bordure mx-auto' style={{backgroundColor:'grey',height:450}} >

<Row className='justify-content-center mb-5 pt-3' >
    <Col>
    <Image src={require('./kobo_logo.JPG')}  className='rounded ' style={{width:300}}></Image>
    </Col>
</Row>
  
<Form>
<Row className='justify-content-center'>
    <Col xs={12} >
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="nom d'utilisateur"  name="username"
    value ={state.credentials.username} onChange={inputChanged} autoFocus/>
    
     </Form.Group>
    </Col>
</Row>

<Row className='justify-content-center'>
    <Col xs={12}>
    <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Control type="password" placeholder="mot de passe" name="password"
     value ={state.credentials.password} onChange={inputChanged} />

     </Form.Group>
    </Col>
</Row>

<Row className='justify-content-center pb-3'>
    <Col  xs={12}>    
    <Link to="" style={{color:'white',textDecorationLine:'none'}}> 
    
    <Button variant="outline-warning" type="submit" onClick={e=>connection(e)}>
    <b>connexion</b>
    </Button>
    </Link>
    </Col>
</Row>



</Form>
</Container> }
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
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Echec connexion
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Message : </h4>
        <p className='text-danger'><b>Désolé le mot de passe ou nom d'utilisateur est incorrect!!!</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>ok</Button>
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

export default LoginFrench;