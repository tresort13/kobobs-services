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
import HeaderEnglish from './HeaderEnglish';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import ClipLoader from "react-spinners/ClipLoader";
import  './Header.css';



const useState = React.useState
function FormEnvoiAbonneIdEnglish(props)
{
   
    const[codeAbonne,setCodeAbonne] = useState({infoCodeAbonne :{
        code_abonne :"",
    }})
    const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);

    const [message,setMessage] = useState("Please enter your subscriber id")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    


      const submitcodeAbonne = (e)=>
      {
        e.preventDefault()
        setModalShow2(true)
          fetch('https://kobobsapi.herokuapp.com/api/getCodeAbonneInfo/'+codeAbonne.infoCodeAbonne.code_abonne+'/', {
                  method:'GET',
                  headers: {'Content-Type': 'application/json'},
                 // body: JSON.stringify(codeRetrait.infoCodeRetrait)
                })
                .then( res => res.json())
                .then(
                  res => {   
                      console.log(res)
                     props.dataAbonne(res)
                     navigate('/form_envoie_abonne_english')
                  }
                )
                .catch( (error) =>
                  {
                    setModalShow2(false)
                      setModalShow(true)
                      console.log(error)
                  } )
  
                  
  
                  setCodeAbonne({infoCodeAbonne:{code_abonne:""}})
      }
  
      const inputChanged = (event)=>
      {
          const cred = codeAbonne.infoCodeAbonne;
          cred[event.target.name] = event.target.value;
          setCodeAbonne({infoCodeAbonne:cred})
      }



   
    return (
        
        <>
        <HeaderEnglish />
{isDesktop &&<Container className='bg-light justify-content-center text-center mb-5' style={{marginTop:100,width:750}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>


    
<Form onSubmit={submitcodeAbonne}>
   

    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'>Subscriber Id</Form.Label>
        <Form.Control name="code_abonne" value={codeAbonne.infoCodeAbonne.code_abonne} onChange={e=>inputChanged(e)} type="text" placeholder='Kota  code abonné nayo' autoFocus  required/>
         </Form.Group>
        </Col>
    </Row>


   <Row className='pb-3'>
       <Col>
        <Button variant="warning" type="submit" >
        validate
        </Button>
        </Col>
    </Row>
  
    <Row className='pb-3'>
       <Col>
       <Link to="/form_code_abonne_english" style={{textDecoration:"none"}}>
       <p ><b className='couleur2'>I forgot my subscriber ID ?</b></p>
       </Link>
        </Col>
    </Row>

</Form>
</Container>
}

{isMobileOrTablet &&<Container className='bg-light justify-content-center text-center  mx-auto mt-5'>
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>


    
<Form onSubmit={submitcodeAbonne}>
   

    <Row className='justify-content-center'>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'>Subscriber Id</Form.Label>
        <Form.Control name="code_abonne" value={codeAbonne.infoCodeAbonne.code_abonne} onChange={e=>inputChanged(e)} type="text" placeholder='Kota  code abonné nayo' autoFocus  required/>
         </Form.Group>
        </Col>
    </Row>


   <Row className='pb-3'>
       <Col>
        <Button variant="warning" type="submit" >
        validate
        </Button>
        </Col>
    </Row>
  
    <Row className='pb-3'>
       <Col>
       <Link to="/form_code_abonne_english" style={{textDecoration:"none"}}>
       <p ><b className='couleur2'>I forgot my subscriber ID ?</b></p>
       </Link>
        </Col>
    </Row>


</Form>
</Container>}
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
            this code does not exist
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-danger'><b>Sorry the code entered is not valid!!!</b>   
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


export default FormEnvoiAbonneIdEnglish;