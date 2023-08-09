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
import HeaderFrench from './HeaderFrench';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import ClipLoader from "react-spinners/ClipLoader";
import  './Header.css';
import * as formik from 'formik';
import * as yup from 'yup';




const useState = React.useState
function FormEnvoiAbonneIdFrench(props)
{
   
    const[numeroExpediteur,setNumeroExpediteur] = useState({infoNumeroExpediteur :{
      numero_expediteur :"",
    }})

    const navigate = useNavigate()
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);

    const [message,setMessage] = useState("Veuillez entrer le numéro de l'expediteur")
    
    const { Formik } = formik;

  const testValidation = yup.object().shape({
    numero_expediteur : yup.string().required('champs requis'),
  });
 

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    


      const submitcodeAbonne = (values)=>
      {
        console.log(values.numero_expediteur)
            setModalShow2(true)
            fetch('https://kobobsapi.herokuapp.com/api/getCodeAbonneInfo/'+values.numero_expediteur+'/', {
                  method:'get',
                  headers: {'Content-Type': 'application/json'},
                 // body: JSON.stringify(codeRetrait.infoCodeRetrait)
                })
                .then( res => res.json())
                .then(
                  res => {   
                      console.log(res)
                   //  props.dataAbonne(res)

                   props.setAbonne({infoAbonne : {
                    agent_id : props.abonne.infoAbonne.agent_id,
                    nom_expediteur : res.abonne[0].nom_expediteur,
                    prenom_expediteur : res.abonne[0].prenom_expediteur,
                    email_expediteur : res.abonne[0].email_expediteur,
                    numero_expediteur: res.abonne[0].numero_expediteur,
                    pays_expediteur:res.abonne[0].pays_expediteur
                    }})
                    props.setReceiver(res.receiver)
                    console.log(props.abonne)
                     navigate('/form_envoie_abonne_french')
                  }
                )
                .catch( (error) =>
                  {
                    setModalShow2(false)
                    setModalShow(true)
                      console.log(error)
                  } )
  
              //    setCodeAbonne({infoCodeAbonne:{code_abonne:""}})
      }
  
    /*  const inputChanged = (event)=>
      {
          const cred = codeAbonne.infoCodeAbonne;
          cred[event.target.name] = event.target.value;
          setCodeAbonne({infoCodeAbonne:cred})
      } */



   
    return (
        
        <>
        <HeaderFrench dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
{isDesktop && <Container className='justify-content-center text-center mb-5 text-light text-bold'  >
<Row className='mt-3'>
        <Col xs={12} className="text-start text-light">
            <p><Link to='/menu_operation_envoi_french' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Retourner</u>  </b></Link> </p>
        </Col>
    </Row>

<Row className=' justify-content-center mb-3 pt-3' >
        <Col xs={12} className="rounded" style={{marginTop:100,width:750,border:"3px solid white"}}>
        <p className="text-light"><i><b>{message}</b></i></p>
         

    
    <Formik
      validationSchema={testValidation}
      onSubmit={(values)=>{
        submitcodeAbonne(values)
      }}
      initialValues={{
        numero_expediteur:''
      }}
    >
     {({handleSubmit, handleChange,handleBlur, values, touched, errors
         })=>(
    <Form noValidate onSubmit={handleSubmit}>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label ><span className="text-danger">*</span>Numéro de téléphone </Form.Label>
        <Form.Control name="numero_expediteur" value={values.numero_expediteur} onChange={handleChange} onBlur={handleBlur} type="text" placeholder='Numéro de Téléphone' autoFocus  />
        <p className='text-danger'>{touched.numero_expediteur && errors.numero_expediteur}</p>
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

  {  /*<Row className='pb-3'>
       <Col>
       <Link to="/form_code_abonne_french" style={{textDecoration:"none"}}>
       <p ><b className='couleur2'>J'ai oublié mon code abonné ?</b></p>
       </Link>
        </Col>
    </Row> */}
</Form>
)
}
</Formik>
</Col>
</Row>
</Container>
}

{isMobileOrTablet && <Container className='justify-content-center text-center mb-5 text-light text-bold'  >
<Row className='mt-3'>
        <Col xs={12} className="text-start text-light">
            <p><Link to='/menu_operation_envoi_french' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Retourner</u>  </b></Link> </p>
        </Col>
    </Row>

<Row className=' justify-content-center mb-3 pt-3' >
        <Col xs={12} className="rounded" style={{marginTop:100,width:750,border:"3px solid white"}}>
        <p className="text-light"><i><b>{message}</b></i></p>
         

    
    <Formik
      validationSchema={testValidation}
      onSubmit={(values)=>{
        submitcodeAbonne(values)
      }}
      initialValues={{
        numero_expediteur:''
      }}
    >
     {({handleSubmit, handleChange,handleBlur, values, touched, errors
         })=>(
    <Form noValidate onSubmit={handleSubmit}>
    <Row className='justify-content-center'>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label ><span className="text-danger">*</span>Numéro de téléphone </Form.Label>
        <Form.Control name="numero_expediteur" value={values.numero_expediteur} onChange={handleChange} onBlur={handleBlur} type="text" placeholder='Numéro de Téléphone' autoFocus  />
        <p className='text-danger'>{touched.numero_expediteur && errors.numero_expediteur}</p>
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

  {  /*<Row className='pb-3'>
       <Col>
       <Link to="/form_code_abonne_french" style={{textDecoration:"none"}}>
       <p ><b className='couleur2'>J'ai oublié mon code abonné ?</b></p>
       </Link>
        </Col>
    </Row> */}
</Form>
)
}
</Formik>
</Col>
</Row>
</Container>
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
            Echec de Validation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p className='text-danger'><b>Désolé ce code abonné ou téléphone n'existe pas !!!</b>   
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={props.onHide}>Fermer</Button>
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
  

export default FormEnvoiAbonneIdFrench;