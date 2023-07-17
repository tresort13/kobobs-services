import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate} from  'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HeaderEnglish from './HeaderEnglish';
import Header from './Header';
import Footer from './Footer';
import InputGroup from 'react-bootstrap/InputGroup';
import ClipLoader from "react-spinners/ClipLoader";
import Modal from 'react-bootstrap/Modal';
import * as formik from 'formik';
import * as yup from 'yup';






function FormEnvoiAbonne(props)
{
  
  const [modalShow, setModalShow] = useState(false);
    const[envoieAbonne,setEnvoieAbonne] = useState({infoEnvoieAbonne :{
      nom_beneficiaire : props.envoie.infoEnvoie.nom_beneficiaire,
      prenom_beneficiaire : props.envoie.infoEnvoie.prenom_beneficiaire,
      pays_beneficiaire : props.envoie.infoEnvoie.pays_beneficiaire,
      montant_beneficiaire : props.envoie.infoEnvoie.montant_beneficiaire,
      type_service : 'kozwa na maboko (na agence)',
      numero_transfer : props.envoie.infoEnvoie.numero_transfer 
        }})
    const { Formik } = formik;

    const testValidation = yup.object().shape({
      nom_beneficiaire: yup.string().required('esengeli ko kotisa makomi'),
      prenom_beneficiaire: yup.string().required('esengeli ko kotisa makomi'),
      pays_beneficiaire: yup.string().required('esengeli ko kotisa makomi'),
      montant_beneficiaire : yup.string().required('esengeli ko kotisa makomi'),
      numero_transfer : yup.string().notRequired(),
    });
   
    const navigate = useNavigate()

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
      
    
      const tauxEchanger = (values)=>
      {
        if((values.type_service==='')||(values.type_service==='kozwa na maboko (na agence)'))
        {
          values.type_service='kozwa na maboko (na agence)'
          values.numero_transfer=''
          
        }
        console.log(values)
        setModalShow(true)
        fetch('https://openexchangerates.org/api/latest.json?app_id=41351d88e53f4f0c89785fba9fc60ca0&symbols=GBP', {
                  method:'GET',
                  headers: {'Content-Type': 'application/json'},
                 
                })
                .then( res => res.json())
                .then(
                  res => {  
            
                    props.setTaux(res.rates.GBP) 
                    props.setEnvoie({infoEnvoie :{
                      agent_id : props.abonne.infoAbonne.agent_id,
                      nom_expediteur : props.abonne.infoAbonne.nom_expediteur,
                      prenom_expediteur : props.abonne.infoAbonne.prenom_expediteur,
                      email_expediteur : props.abonne.infoAbonne.email_expediteur,
                      numero_expediteur: props.abonne.infoAbonne.numero_expediteur,
                      pays_expediteur : props.abonne.infoAbonne.pays_expediteur,
                      nom_beneficiaire : values.nom_beneficiaire,
                      prenom_beneficiaire : values.prenom_beneficiaire,
                      pays_beneficiaire : values.pays_beneficiaire,
                      montant_beneficiaire : values.montant_beneficiaire,
                      montant_pour_payer : Number((Number(values.montant_beneficiaire).toFixed(2) * Number(res.rates.GBP).toFixed(2)) + ((Number(values.montant_beneficiaire).toFixed(2) * Number(res.rates.GBP).toFixed(2)) * 5)/100 + ((Number(values.montant_beneficiaire).toFixed(2) * Number(res.rates.GBP).toFixed(2)) * 1)/100).toFixed(2),
                      frais_envoie : Number(((Number(values.montant_beneficiaire).toFixed(2) * Number(res.rates.GBP).toFixed(2)) * 5)/100).toFixed(2),
                      frais_tva : Number(((Number(values.montant_beneficiaire).toFixed(2) * Number(res.rates.GBP).toFixed(2)) * 1)/100).toFixed(2),
                      type_service : values.type_service,
                      numero_transfer : values.numero_transfer,
                      date_operation : new Date().toLocaleString().slice(0,10),
                      date_heure_operation :new Date().toLocaleString(),
                      month_year_operation : new Date().toLocaleString().slice(3,10)
                      }})
                  }
                ).then(
                  submitFormulaire()
                )
                .catch( (error) =>
                  {
                      console.log(error)
                  } )
      }
    
  

      const submitFormulaire = ()=>
      {  
        setEnvoieAbonne({infoEnvoieAbonne:{}}) 
        goToEnvoiInfoPage()     
      }

      const goToEnvoiInfoPage = ()=>{  
         setModalShow(false)
         navigate('/envoi_abonne_info')
        }
      


      const inputChanged = (event)=>
      {
          const cred = envoieAbonne.infoEnvoieAbonne;
          cred[event.target.name] = event.target.value;
          setEnvoieAbonne({infoEnvoieAbonne:cred})
      }
     
    return (
        
        <>
<Header dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/> 
{isDesktop && <Container className='justify-content-center text-center mb-5 text-light text-bold' style={{width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
<Col xs={6}>
        <p ><i><b >Numéro ya Abonné : </b><b className='couleur2'>{props.abonne.infoAbonne.numero_expediteur}</b></i></p>
        </Col>
        <Col xs={6}>
        <p ><i><b >Noms ya Abonné : </b><b className='couleur2'>{props.abonne.infoAbonne.prenom_expediteur} {props.abonne.infoAbonne.nom_expediteur}</b></i></p>
        </Col>
    </Row>
<Row className='justify-content-start py-2' >
<Col xs={3}>
        <i><b >Liste ya ba mozui nayo : </b></i>
  </Col>
  <Col xs={6} >
  <div><Form.Select aria-label="Default select example">
      <option>pona mozui</option>
      <option value="1">felly ngoy</option>
      <option value="2">shaloom bowa</option>
      <option value="3">lionel mbunga</option>
    </Form.Select>
    </div> 
    </Col>
    </Row>

<Formik
      validationSchema={testValidation}
      onSubmit={(values)=>{
        tauxEchanger(values)
      }}
      initialValues={{
        nom_beneficiaire : props.envoie.infoEnvoie.nom_beneficiaire,
        prenom_beneficiaire : props.envoie.infoEnvoie.prenom_beneficiaire,
        pays_beneficiaire : props.envoie.infoEnvoie.pays_beneficiaire,
        montant_beneficiaire : props.envoie.infoEnvoie.montant_beneficiaire,
        type_service : props.envoie.infoEnvoie.type_service,
        numero_transfer:props.envoie.infoEnvoie.numero_transfer,
    
      }}
    >
     {({handleSubmit, handleChange,handleBlur, values, touched, errors,setFieldValue
         })=>(
          <Form noValidate onSubmit={handleSubmit}>
             <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mozui ya sika </u></b></p>
    </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label><span className='text-danger'>*</span>Kombo ya Mukristu</Form.Label>
              <Form.Control
                type="text"
                name="prenom_beneficiaire"
                value={values.prenom_beneficiaire}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p className='text-danger'>{touched.prenom_beneficiaire && errors.prenom_beneficiaire}</p>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik02">
              <Form.Label><span className='text-danger'>*</span>Kombo Ya Libota</Form.Label>
              <Form.Control
                type="text"
                name="nom_beneficiaire"
                value={values.nom_beneficiaire}
                onChange={handleChange}
                onBlur={handleBlur}
              />
                       <p className='text-danger'>{touched.nom_beneficiaire && errors.nom_beneficiaire}</p>
            </Form.Group>
             </Row>

             <Row className='justify-content-center'>
   
   <Col xs ={12}>
   <Form.Group className="mb-3" controlId="validationFormik03">
   <Form.Label ><span className='text-danger'>*</span>Ekolo </Form.Label>
   <Form.Select name='pays_beneficiaire'   value={values.pays_beneficiaire} aria-label="Default select example" onChange={handleChange} >
   <option >Pona Ekolo</option>
    <option value='RD Congo' >RD Congo</option> 
    <option value='Angola' >Angola</option> 
    </Form.Select>
    <p className='text-danger'>{touched.pays_beneficiaire && errors.pays_beneficiaire}</p>
    </Form.Group>
   </Col>
</Row>

<Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u> Mbongo</u></b> </p>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="validationFormik04" >
        <Form.Label ><span className='text-danger'>*</span> Mbongo oyo olingi Mozui azwa na dollars ($)</Form.Label>
        <Form.Control name="montant_beneficiaire"  value={values.montant_beneficiaire} onBlur={handleBlur} onChange={handleChange} type="text" placeholder="Kota montant olingi kotinda"  />
        <p className='text-danger'>{touched.montant_beneficiaire && errors.montant_beneficiaire}</p>
         </Form.Group>
        </Col>

        

        <Col xs ={6}>
        <Form.Group className="mb-3" controlId="validationFormik05">
        <Form.Label >Nzela yako zwa Mbongo </Form.Label>
        <Form.Select name="type_service"  value={values.type_service} aria-label="Default select example" onChange={(e)=>{
             e.target.value ==="Kozwa na nzela ya tshombo(Mpesa,Orange money,Airtel Money)" ? testValidation.fields.numero_transfer = yup.string().required('esengeli ko kotisa makomi') :testValidation.fields.numero_transfer = yup.string().notRequired()
             setFieldValue("type_service",e.target.value)
        }} >
        <option  value='kozwa na maboko (na agence)'>kozwa na maboko (na agence)</option>
         <option  value="Kozwa na nzela ya tshombo(Mpesa,Orange money,Airtel Money)">Kozwa na nzela ya tshombo(Mpesa,Orange money,Airtel Money) </option> 
         </Form.Select>
         </Form.Group>
        </Col>
      
        {values.type_service === "Kozwa na nzela ya tshombo(Mpesa,Orange money,Airtel Money)" ? <Col xs = {12}>
        <Form.Label ><span className="text-danger">*</span> Kotisa Numéro yako tinda mbongo  </Form.Label>
        <InputGroup className="mb-3" controlId="validationFormik06">
        <InputGroup.Text id="basic-addon1">+243</InputGroup.Text>
        <Form.Control name="numero_transfer" value={values.numero_transfer}  onBlur={handleBlur}  onChange={handleChange} type="text" placeholder='numéro ya tshombo pona transfer'  />
        </InputGroup>
        <p className='text-danger'>{touched.numero_transfer && errors.numero_transfer}</p>
        </Col> : <span></span>}
         
    </Row>

          <Row className='justify-content-center pb-3'>
        <Col xs ={4}> 
        <Button variant="warning" type="submit" >
        ko validé
        </Button>
        </Col>
        </Row>
        
        </Form>
)
}
</Formik>
</Container>
}

{isMobileOrTablet &&   <Container className='bg-light justify-content-center text-center  mb-auto my-auto' >
<Row className='justify-content-center mb-3 pt-3' >
<Col xs={12}>
        <p ><i><b className='text-dark'>Subscriber ID : </b><b className='couleur2'>{props.abonne.infoAbonne.code_abonne}</b></i></p>
        </Col>
        <Col xs={12}>
        <p ><i><b className='text-dark'>Subscriber full name : </b><b className='couleur2'>{props.abonne.infoAbonne.prenom_expediteur} {props.abonne.infoAbonne.nom_expediteur} {props.abonne.infoAbonne.postnom_expediteur}</b></i></p>
        </Col>
    </Row>

    
<Form onSubmit={submitFormulaire}>
      <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Receiver </u></b></p>
    </Row>
    <Row className='justify-content-center'>
    <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className='text-danger'>*</span> First Name </Form.Label>
        <Form.Control name="prenom_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.prenom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='First Name'  required/>
         </Form.Group>
        </Col>

    <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className='text-danger'>*</span>Last Name </Form.Label>
        <Form.Control name="nom_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.nom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Middle Name'  required/>
         </Form.Group>
        </Col>

        

        
    </Row>

    <Row className='justify-content-center'>
   

        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Country </Form.Label>
        <Form.Select name='pays_beneficiaire' value={envoieAbonne.infoEnvoieAbonne.pays_beneficiaire} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option value='RD Congo'>RD Congo</option>
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u> Money</u></b> </p>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className='text-danger'>*</span> which Amount do you want the receiver to get in US dollars ($) </Form.Label>
        <Form.Control name="montant_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.montant_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder="Amount to send for the receiver"  required/>
         </Form.Group>
        </Col>

        

        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Type of service </Form.Label>
        <Form.Select name="type_service" value={envoieAbonne.infoEnvoieAbonne.type_service} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
        <option value='By Cash (at the agency)'>By Cash (at the agency)</option>
         <option value="by mobile money tranfer(Mpesa,Orange Money,Airtel Money)">by mobile money tranfer(Mpesa,Orange Money,Airtel Money) </option>
         
         </Form.Select>
         </Form.Group>
        </Col>

        {envoieAbonne.infoEnvoieAbonne.type_service === "by mobile money tranfer(Mpesa,Orange Money,Airtel Money)" ? <Col xs = {12}>
        <Form.Label className='text-dark'><span className="text-danger">*</span> Enter the mobile number for transfering the money  </Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">+243</InputGroup.Text>
        <Form.Control name="numero_transfer"  onChange={e=>inputChanged(e)} type="text" placeholder='transfering mobile number'  required/>
        </InputGroup>
        </Col> : <span></span>}
    </Row>
    <Row>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}> 
        <Button variant="warning" type="submit">
        Validate
        </Button>
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
          zela mukie...
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


export default FormEnvoiAbonne;