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


const useState = React.useState
function FormRetrait(props)
{

    const[codeRetrait,setCodeRetrait] = useState({infoCodeRetrait :{
        code_retrait :"",
    }})

    const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);

    const [message,setMessage] = useState("Kotisa Code retrait nayo Pona ko yeba status ya transfert nayo")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
  
    


    const submitcodeRetrait = (e)=>
    {
        e.preventDefault(e)  
        setModalShow2(true)    
        fetch('https://kobobsapi.herokuapp.com/api/getRetraitInfo/'+codeRetrait.infoCodeRetrait.code_retrait+'/', {
                method:'GET',
                headers: {'Content-Type': 'application/json'},
               // body: JSON.stringify(codeRetrait.infoCodeRetrait)
              })
              .then( res => res.json())
              .then(
                res => {   
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
        <Header />
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:100,width:750}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>

   
    
<Form onSubmit={submitcodeRetrait}>
   

    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'>Code Retrait</Form.Label>
        <Form.Control name="code_retrait" value={codeRetrait.infoCodeRetrait.code_retrait} onChange={e=>inputChanged(e)} type="text" placeholder='code retrait' autoFocus   required/>
         </Form.Group>
        </Col>
    </Row>


   <Row className='pb-3'>
       <Col>
        <Button variant="warning" type="submit" >
        Valider 
        </Button>
        </Col>
    </Row>

    <Row className='pb-3'>
       <Col>
       <Link to="/form_find_code_retrait_lingala" style={{textDecoration:"none"}}>
       <p ><b className='couleur2'>Na bosani code retrait na ngai ?</b></p>
       </Link>
        </Col>
    </Row>
  


</Form>
</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center  mx-auto mt-5' >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>

   
    
<Form onSubmit={submitcodeRetrait}>
   

    <Row className='justify-content-center'>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'>Code Retrait</Form.Label>
        <Form.Control name="code_retrait" value={codeRetrait.infoCodeRetrait.code_retrait} onChange={e=>inputChanged(e)} type="text" placeholder='Veuillez entrer code retrait' autoFocus   required/>
         </Form.Group>
        </Col>
    </Row>


   <Row className='pb-3'>
       <Col>
        <Button variant="warning" type="submit" >
        Valider 
        </Button>
        </Col>
    </Row>
  
    <Row className='pb-3'>
       <Col>
       <Link to="/form_find_code_retrait_lingala" style={{textDecoration:"none"}}>
       <p ><b className='couleur2'>Na bosani code retrait na ngai ?</b></p>
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