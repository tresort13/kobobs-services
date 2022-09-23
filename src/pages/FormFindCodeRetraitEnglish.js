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
function FormFindCodeRetraitEnglish(props)
{

    const [retrait,setRetrait] = useState({infoRetrait :{
        codeAbonne :"",
        beneficiaire :"",
        dateInfo :""
    }})

    const [codeRetrait,setCodeRetrait] = useState("")

    const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);

    const [message,setMessage] = useState("Please enter the informations below")

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
        fetch('https://kobobsapi.herokuapp.com/api/getCodeRetraitInfo/'+retrait.infoRetrait.codeAbonne+'/'+retrait.infoRetrait.beneficiaire+'/'+retrait.infoRetrait.dateInfo+'/', {
                method:'GET',
                headers: {'Content-Type': 'application/json'},
               // body: JSON.stringify(codeRetrait.infoCodeRetrait)
              })
              .then( res => res.json())
              .then(
                res => {   
                  setModalShow2(false)
                    console.log(res)
                   setCodeRetrait(res[0].code_retrait)
                   setModalShow3(true)
                   
                }
              )
              .catch( (error) =>
                {
                    setModalShow2(false)
                    setModalShow(true)
                    console.log(error)
                } )

                

                setRetrait({infoRetrait:{codeAbonne:"",beneficiaire:"",dateInfo:""}})
    }

    const inputChanged = (event)=>
    {
        const cred = retrait.infoRetrait;
        cred[event.target.name] = event.target.value;
        setRetrait({infoRetrait:cred})
    }



   
    return (
        
        <>
        <Header  />
{isDesktop && <Container className='bg-light justify-content-center text-center mb-5' style={{marginTop:100,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>

    <hr style={{color:"darkorange"}}></hr>
    
<Form onSubmit={submitNumero}>
    <Row className='justify-content-center'>
        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'>Subscriber ID</Form.Label>
        <Form.Control name="codeAbonne" value={retrait.infoRetrait.codeAbonne} onChange={e=>inputChanged(e)} type="text" placeholder="Subscriber ID" autoFocus   required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'>Receiver last name</Form.Label>
        <Form.Control name="beneficiaire" value={retrait.infoRetrait.beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder="Receiver last name" autoFocus   required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'>date of your transfer</Form.Label>
        <Form.Control name="dateInfo" type="date" value={retrait.infoRetrait.dateInfo} onChange={e=>inputChanged(e)}  placeholder="date of your transfer" autoFocus   required/>
         </Form.Group>
        </Col>
    </Row>

    <hr style={{color:"darkorange"}}></hr>
   <Row className='pb-3'>
       <Col>
        <Button variant="warning" type="submit">
        Validate
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
    <hr style={{color:"darkorange"}}></hr>
    
<Form onSubmit={submitNumero}>
<Row className='justify-content-center'>
       <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'>Subscriber ID</Form.Label>
        <Form.Control name="codeAbonne" value={retrait.infoRetrait.codeAbonne} onChange={e=>inputChanged(e)} type="text" placeholder="Subscriber ID" autoFocus   required/>
         </Form.Group>
        </Col>

        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'>Receiver last name</Form.Label>
        <Form.Control name="beneficiaire" value={retrait.infoRetrait.beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder="Receiver last name" autoFocus   required/>
         </Form.Group>
        </Col>

        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'>date of your transfer</Form.Label>
        <Form.Control name="dateInfo" type="date" value={retrait.infoRetrait.dateInfo} onChange={e=>inputChanged(e)}  placeholder="date of your transfer" autoFocus   required/>
         </Form.Group>
        </Col>
    </Row>
    <hr style={{color:"darkorange"}}></hr>
   <Row className='pb-3'>
       <Col>
        <Button variant="warning" type="submit">
        Validate 
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
<MyVerticallyCenteredModal3 codeRetrait={codeRetrait} show={modalShow3} onHide={() => setModalShow3(false)} />
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
            Validation failed
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p className='text-danger'><b>Sorry we did not find a tracking number with your entered informations</b>   
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
          <p ><b className='text-dark'>Your Tracking Number</b></p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p ><b className='text-success'>{props.codeRetrait}</b></p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/form_envoie_abonne_id_english"><Button variant='warning' onClick={props.onHide}>ok i got it</Button></Link>
        </Modal.Footer>
      </Modal>
    );
  }
  

export default FormFindCodeRetraitEnglish;