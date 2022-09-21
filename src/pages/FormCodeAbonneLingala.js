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




const useState = React.useState
function FormCodeAbonneLingala(props)
{

    const[numeroAbonne,setNumeroAbonne] = useState({infoNumeroAbonne :{
        numero :"",
    }})

    const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);

    const [message,setMessage] = useState("Kotisa  téléphone ou email nayo")
    const [codeAbonne,setCodeAbonne] = useState("")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  
    


    const submitNumero = (e)=>
    {
          e.preventDefault()
          setModalShow2(true)
        fetch('https://kobobsapi.herokuapp.com/api/getAbonneInfo/'+numeroAbonne.infoNumeroAbonne.numero+'/', {
                method:'GET',
                headers: {'Content-Type': 'application/json'},
               // body: JSON.stringify(codeRetrait.infoCodeRetrait)
              })
              .then( res => res.json())
              .then(
                res => {   
                  setModalShow2(false)
                    console.log(res)
                   setCodeAbonne(res[0].code_abonne)
                   setModalShow3(true)
                   
                }
              )
              .catch( (error) =>
                {
                    setModalShow2(false)
                    setModalShow(true)
                    console.log(error)
                } )

                

                setNumeroAbonne({infoNumeroAbonne:{numero:""}})
    }

    const inputChanged = (event)=>
    {
        const cred = numeroAbonne.infoNumeroAbonne;
        cred[event.target.name] = event.target.value;
        setNumeroAbonne({infoNumeroAbonne:cred})
    }



   
    return (
        
        <>
        <Header username={props.username} />
{isDesktop && <Container className='bg-light justify-content-center text-center mb-5' style={{marginTop:100,width:750}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    
<Form onSubmit={submitNumero}>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'>Téléphone ou email nayo</Form.Label>
        <Form.Control name="numero" value={numeroAbonne.infoNumeroAbonne.numero} onChange={e=>inputChanged(e)} type="text" placeholder="Téléphone ou email nayo" autoFocus   required/>
         </Form.Group>
        </Col>
    </Row>


   <Row className='pb-3'>
       <Col>
        <Button variant="warning" type="submit">
        Valider 
        </Button>
        </Col>
    </Row>
  


</Form>
</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center mx-auto mt-5'  >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    
<Form onSubmit={submitNumero}>
    <Row className='justify-content-center'>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'>Téléphone ou email nayo</Form.Label>
        <Form.Control name="numero" value={numeroAbonne.infoNumeroAbonne.numero} onChange={e=>inputChanged(e)} type="text" placeholder="Téléphone ou email nayo" autoFocus   required/>
         </Form.Group>
        </Col>
    </Row>


   <Row className='pb-3'>
       <Col>
        <Button variant="warning" type="submit">
        Valider 
        </Button>
        </Col>
    </Row>
  


</Form>
</Container> }
<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
<MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
<MyVerticallyCenteredModal3 codeAbonne={codeAbonne} show={modalShow3} onHide={() => setModalShow3(false)} />
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

          <p className='text-danger'><b>Bolimbisi numéro ya téléphone nayo ou email eza valid te</b>   
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
            Zela mukie...
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
          <p ><b className='text-dark'>Code Na Yo Abonné</b></p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p ><b className='text-success'>{props.codeAbonne}</b></p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/form_envoie_abonne_id"><Button variant='warning' onClick={props.onHide}>ok nazwi yango</Button></Link>
        </Modal.Footer>
      </Modal>
    );
  }
  

export default FormCodeAbonneLingala;