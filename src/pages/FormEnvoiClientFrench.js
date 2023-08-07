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
import InputGroup from 'react-bootstrap/InputGroup';
import ClipLoader from "react-spinners/ClipLoader";
import Modal from 'react-bootstrap/Modal';
import * as formik from 'formik';
import * as yup from 'yup';
import HeaderFrench from './HeaderFrench';



const useState = React.useState
function FormEnvoiClientFrench(props)
{

  const [modalShow, setModalShow] = useState(false);
  const[envoie,setEnvoie] = useState({infoEnvoie :{
    nom_expediteur : props.envoie.infoEnvoie.nom_expediteur,
    prenom_expediteur : props.envoie.infoEnvoie.prenom_expediteur,
    adresse_expediteur : props.envoie.infoEnvoie.adresse_expediteur,
    email_expediteur : props.envoie.infoEnvoie.email_expediteur,
    numero_expediteur: props.envoie.infoEnvoie.numero_expediteur,
    pays_expediteur : props.envoie.infoEnvoie.pays_expediteur,
    nom_beneficiaire : props.envoie.infoEnvoie.nom_beneficiaire,
    prenom_beneficiaire : props.envoie.infoEnvoie.prenom_beneficiaire,
    pays_beneficiaire : props.envoie.infoEnvoie.pays_beneficiaire,
    montant_beneficiaire : props.envoie.infoEnvoie.montant_beneficiaire,
    type_service : props.envoie.infoEnvoie.type_service,
    numero_transfer : props.envoie.infoEnvoie.numero_transfer
    }})

    const closePage = ()=>
    {
      props.setEnvoie({infoEnvoie :{
        agent_id:'',
        nom_expediteur : '',
        prenom_expediteur : '',
        adresse_expediteur : 'N/A',
        email_expediteur : 'N/A',
        numero_expediteur: '',
        pays_expediteur : 'UK',
        nom_beneficiaire : '',
        prenom_beneficiaire : '',
        pays_beneficiaire : '',
        montant_beneficiaire : '',
        montant_pour_payer :'',
        frais_envoie : '',
        frais_tva : '',
        type_service : '',
        numero_transfer :'',
        date_operation : '',
        date_heure_operation : '',
        month_year_operation :''
        }})

    
    navigate('/menu_operation_envoi_french')
    }
    const [message,setMessage] = useState("Formulaire nouveau client")
  const { Formik } = formik;

  const testValidation = yup.object().shape({
    nom_expediteur : yup.string().required('champs requis'),
    prenom_expediteur : yup.string().required('champs requis'),
    adresse_expediteur : yup.string().required('champs requis'),
   // email_expediteur : yup.string().required('champs requis'),
    numero_expediteur: yup.string().required('champs requis'),
    pays_expediteur : yup.string().required('champs requis'),
    nom_beneficiaire: yup.string().required('champs requis'),
    prenom_beneficiaire: yup.string().required('champs requis'),
    pays_beneficiaire: yup.string().required('champs requis'),
    montant_beneficiaire : yup.string().required('champs requis'),
    numero_transfer : yup.string().notRequired()
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
      if((values.type_service==='')||(values.type_service==="En espèces (à l'agence)"))
        {
          values.type_service="En espèces (à l'agence)"
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
                  if(values.montant_beneficiaire >= 100)
                  {
                    
                   props.setTaux(res.rates.GBP) 
                   props.setEnvoie({infoEnvoie :{
                    agent_id : props.abonne.infoAbonne.agent_id,
                    nom_expediteur : values.nom_expediteur,
                    prenom_expediteur : values.prenom_expediteur,
                    adresse_expediteur : values.adresse_expediteur,
                    email_expediteur : values.email_expediteur,
                    numero_expediteur: values.numero_expediteur,
                    pays_expediteur : values.pays_expediteur,
                     nom_beneficiaire : values.nom_beneficiaire,
                     prenom_beneficiaire : values.prenom_beneficiaire,
                     pays_beneficiaire : values.pays_beneficiaire,
                     montant_beneficiaire : values.montant_beneficiaire,
                     montant_pour_payer : Number((Number(values.montant_beneficiaire) * Number(res.rates.GBP + 0.03)) + ((Number(values.montant_beneficiaire) * Number(res.rates.GBP + 0.03)) * 5)/100 + ((Number(values.montant_beneficiaire) * Number(res.rates.GBP + 0.03)) * 1)/100 ).toFixed(2),
                     frais_envoie : Number(((Number(values.montant_beneficiaire).toFixed(2) * Number(res.rates.GBP + 0.03)) * 5)/100).toFixed(2),
                     frais_tva : Number(((Number(values.montant_beneficiaire).toFixed(2) * Number(res.rates.GBP + 0.03)) * 1)/100).toFixed(2),
                     type_service : values.type_service,
                     numero_transfer : values.numero_transfer,
                     date_operation : new Date().toLocaleString().slice(0,10),
                     date_heure_operation :new Date().toLocaleString(),
                     month_year_operation : new Date().toLocaleString().slice(3,10),
                     year_operation : new Date().toLocaleString().slice(6,10)
                     }})

                  }
                  else{
                    
                   props.setTaux(res.rates.GBP) 
                   props.setEnvoie({infoEnvoie :{
                    agent_id : props.abonne.infoAbonne.agent_id,
                    nom_expediteur : values.nom_expediteur,
                    prenom_expediteur : values.prenom_expediteur,
                    adresse_expediteur : values.adresse_expediteur,
                    email_expediteur : values.email_expediteur,
                    numero_expediteur: values.numero_expediteur,
                    pays_expediteur : values.pays_expediteur,
                     nom_beneficiaire : values.nom_beneficiaire,
                     prenom_beneficiaire : values.prenom_beneficiaire,
                     pays_beneficiaire : values.pays_beneficiaire,
                     montant_beneficiaire : values.montant_beneficiaire,
                     montant_pour_payer : Number((Number(values.montant_beneficiaire) * Number(res.rates.GBP + 0.03)) + (Number(5) * Number(res.rates.GBP + 0.03)) + (Number(1) * Number(res.rates.GBP + 0.03)) ).toFixed(),
                     frais_envoie : (Number(5) * Number(res.rates.GBP + 0.03)).toFixed(),
                     frais_tva : (Number(1) * Number(res.rates.GBP + 0.03)).toFixed(),
                     type_service : values.type_service,
                     numero_transfer : values.numero_transfer,
                     date_operation : new Date().toLocaleString().slice(0,10),
                     date_heure_operation :new Date().toLocaleString(),
                     month_year_operation : new Date().toLocaleString().slice(3,10),
                     year_operation : new Date().toLocaleString().slice(6,10)
                     }})
                  }
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
      setEnvoie({infoEnvoie:{}}) 
      goToEnvoiInfoPage()     
    }

    const goToEnvoiInfoPage = ()=>{  
       setModalShow(false)
       navigate('/envoi_info_french')
      }
    


    const inputChanged = (event)=>
    {
        const cred = envoie.infoEnvoie;
        cred[event.target.name] = event.target.value;
        setEnvoie({infoEnvoie:cred})
    }
   
  return (
      
      <>
<HeaderFrench dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/> 
{isDesktop && <Container className='justify-content-center text-center mb-5 text-light text-bold'  >
<Row className='mt-3'>
        <Col xs={12} className="text-start text-light">
            <p><Link to='/menu_operation_envoi_french' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Retourner</u>  </b></Link> </p>
        </Col>
    </Row>

<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
    <Formik
      validationSchema={testValidation}
      onSubmit={(values)=>{
        tauxEchanger(values)
      }}
      initialValues={{
        nom_expediteur : props.envoie.infoEnvoie.nom_expediteur,
        prenom_expediteur : props.envoie.infoEnvoie.prenom_expediteur,
        adresse_expediteur : props.envoie.infoEnvoie.adresse_expediteur,
        email_expediteur : props.envoie.infoEnvoie.email_expediteur,
        numero_expediteur: props.envoie.infoEnvoie.numero_expediteur,
        pays_expediteur : props.envoie.infoEnvoie.pays_expediteur,
        nom_beneficiaire : props.envoie.infoEnvoie.nom_beneficiaire,
        prenom_beneficiaire : props.envoie.infoEnvoie.prenom_beneficiaire,
        pays_beneficiaire : props.envoie.infoEnvoie.pays_beneficiaire,
        montant_beneficiaire : props.envoie.infoEnvoie.montant_beneficiaire,
        type_service :props.envoie.infoEnvoie.type_service,
        numero_transfer:props.envoie.infoEnvoie.numero_transfer,
    
      }}
    >
     {({handleSubmit, handleChange,handleBlur, values, touched, errors,setFieldValue
         })=>(
          <Form noValidate onSubmit={handleSubmit}>
    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Informations Expediteur</u></b> </p>
    </Row>

    <Row className='justify-content-center'>
        


        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label ><span className="text-danger">*</span> Prénom </Form.Label>
        <Form.Control name="prenom_expediteur" value={values.prenom_expediteur} onBlur={handleBlur} onChange={handleChange} type="text" placeholder='Prénom'  />
        <p className='text-danger'>{touched.prenom_expediteur && errors.prenom_expediteur}</p>
         </Form.Group>
        </Col>


        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label ><span className="text-danger">*</span> Nom de famille </Form.Label>  
        <Form.Control name="nom_expediteur" value={values.nom_expediteur} onBlur={handleBlur} onChange={handleChange} type="text" placeholder='Nom de famille' />
        <p className='text-danger'>{touched.nom_expediteur && errors.nom_expediteur}</p>
         </Form.Group>
        </Col>


    </Row>

    <Row className='justify-content-center'>
    
       <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label ><span className="text-danger"></span> Adresse (optionel)</Form.Label>
        <Form.Control name="adresse_expediteur"  onBlur={handleBlur} onChange={handleChange} type="text" placeholder='Adresse'  />

         </Form.Group>
        </Col>


        <Col xs = {4}>
        <Form.Label ><span className="text-danger"></span> Email (optionel)</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control name="email_expediteur"  onBlur={handleBlur} onChange={handleChange} type="text" placeholder='Email' /> 
      </InputGroup>
        </Col>

        <Col xs = {4}>
        <Form.Label ><span className="text-danger">*</span> Mobile Number</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">+44</InputGroup.Text>
        <Form.Control name="numero_expediteur" value={values.numero_expediteur} onBlur={handleBlur} onChange={handleChange} type="text" placeholder='Numéro de télélephone' />
        </InputGroup>
        <p className='text-danger'>{touched.numero_expediteur && errors.numero_expediteur}</p>
        </Col>

        
    </Row>
    <Row className='justify-content-center'>
        
        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label >Pays</Form.Label>
        <Form.Select name='pays_expediteur' value={values.pays_expediteur} aria-label="Default select example" onBlur={handleBlur} onChange={handleChange} >
         <option value="UK">UK</option>
         </Form.Select>
         </Form.Group>
        </Col>
       
    </Row>

    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Informations Bénéficiare</u></b> </p>
    </Row>

    <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label><span className='text-danger'>*</span>Prénom</Form.Label>
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
              <Form.Label><span className='text-danger'>*</span>Nom de famille</Form.Label>
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
           <Form.Label ><span className='text-danger'>*</span>pays </Form.Label>
           <Form.Select name='pays_beneficiaire'   value={values.pays_beneficiaire} aria-label="Default select example" onChange={handleChange} >
           <option >Selectionner le pays</option>
           <option value='RD Congo' >RD Congo</option> 
           <option value='Angola' >Angola</option> 
            </Form.Select>
            <p className='text-danger'>{touched.pays_beneficiaire && errors.pays_beneficiaire}</p>
             </Form.Group>
             </Col>
             </Row>

<Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u> Montant</u></b> </p>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="validationFormik04" >
        <Form.Label ><span className='text-danger'>*</span>combien voulez-vous que le destinataire reçoit en US($)</Form.Label>
        <Form.Control name="montant_beneficiaire"  value={values.montant_beneficiaire} onBlur={handleBlur} onChange={handleChange} type="text" placeholder="entrer le montant à récevoir"  />
        <p className='text-danger'>{touched.montant_beneficiaire && errors.montant_beneficiaire}</p>
         </Form.Group>
        </Col>

        

        <Col xs ={6}>
        <Form.Group className="mb-3" controlId="validationFormik05">
        <Form.Label >Type de service </Form.Label>
        <Form.Select name="type_service"  value={values.type_service} aria-label="Default select example" onChange={(e)=>{
             e.target.value ==="par transfert d'argent mobile (Mpesa, Orange Money, Airtel Money)" ? testValidation.fields.numero_transfer = yup.string().required('champs requis') :testValidation.fields.numero_transfer = yup.string().notRequired()
             setFieldValue("type_service",e.target.value)
        }} >
        <option value="En espèces (à l'agence)">En espèces (à l'agence)</option>
         <option value="par transfert d'argent mobile (Mpesa, Orange Money, Airtel Money)">par transfert d'argent mobile (Mpesa, Orange Money, Airtel Money) </option> 
         </Form.Select>
         </Form.Group>
        </Col>
      
        {values.type_service === "par transfert d'argent mobile (Mpesa, Orange Money, Airtel Money)" ? <Col xs = {12}>
        <Form.Label ><span className="text-danger">*</span> Entrez le numéro de téléphone portable pour transférer l'argent </Form.Label>
        <InputGroup className="mb-3" controlId="validationFormik06">
        <InputGroup.Text id="basic-addon1">+243</InputGroup.Text>
        <Form.Control name="numero_transfer" value={values.numero_transfer}   onBlur={handleBlur}  onChange={handleChange} type="text" placeholder='numéro portable de transfert '  />
        </InputGroup>
        <p className='text-danger'>{touched.numero_transfer && errors.numero_transfer}</p>
        </Col> : <span></span>}
         
    </Row>

          <Row className='justify-content-center pb-3'>
        <Col xs ={4}> 
        <Button variant="warning" type="submit" >
        Suivant
        </Button>
        </Col>

        <Col xs ={4}> 
        <Button variant="danger" onClick={closePage} >
        fermer
        </Button>
        </Col>
        </Row>
        
        </Form>
)
}
</Formik>
</Container>
}

{isMobileOrTablet &&<Container className='justify-content-center text-center mb-5 text-light text-bold'  >
<Row className='mt-3'>
        <Col xs={12} className="text-start text-light">
            <p><Link to='/menu_operation_envoi_french' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Retourner</u>  </b></Link> </p>
        </Col>
    </Row>

<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
    <Formik
      validationSchema={testValidation}
      onSubmit={(values)=>{
        tauxEchanger(values)
      }}
      initialValues={{
        nom_expediteur : props.envoie.infoEnvoie.nom_expediteur,
        prenom_expediteur : props.envoie.infoEnvoie.prenom_expediteur,
        adresse_expediteur : props.envoie.infoEnvoie.adresse_expediteur,
        email_expediteur : props.envoie.infoEnvoie.email_expediteur,
        numero_expediteur: props.envoie.infoEnvoie.numero_expediteur,
        pays_expediteur : props.envoie.infoEnvoie.pays_expediteur,
        nom_beneficiaire : props.envoie.infoEnvoie.nom_beneficiaire,
        prenom_beneficiaire : props.envoie.infoEnvoie.prenom_beneficiaire,
        pays_beneficiaire : props.envoie.infoEnvoie.pays_beneficiaire,
        montant_beneficiaire : props.envoie.infoEnvoie.montant_beneficiaire,
        type_service :props.envoie.infoEnvoie.type_service,
        numero_transfer:props.envoie.infoEnvoie.numero_transfer,
    
      }}
    >
     {({handleSubmit, handleChange,handleBlur, values, touched, errors,setFieldValue
         })=>(
          <Form noValidate onSubmit={handleSubmit}>
    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Informations Expediteur</u></b> </p>
    </Row>

    <Row className='justify-content-center'>
        


        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label ><span className="text-danger">*</span> Prénom </Form.Label>
        <Form.Control name="prenom_expediteur" value={values.prenom_expediteur} onBlur={handleBlur} onChange={handleChange} type="text" placeholder='Prénom'  />
        <p className='text-danger'>{touched.prenom_expediteur && errors.prenom_expediteur}</p>
         </Form.Group>
        </Col>


        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label ><span className="text-danger">*</span> Nom de famille </Form.Label>  
        <Form.Control name="nom_expediteur" value={values.nom_expediteur} onBlur={handleBlur} onChange={handleChange} type="text" placeholder='Nom de famille' />
        <p className='text-danger'>{touched.nom_expediteur && errors.nom_expediteur}</p>
         </Form.Group>
        </Col>


    </Row>

    <Row className='justify-content-center'>
    
       <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label ><span className="text-danger"></span> Adresse (optionel)</Form.Label>
        <Form.Control name="adresse_expediteur"  onBlur={handleBlur} onChange={handleChange} type="text" placeholder='Adresse'  />

         </Form.Group>
        </Col>


        <Col xs = {12}>
        <Form.Label ><span className="text-danger"></span> Email (optionel)</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control name="email_expediteur"  onBlur={handleBlur} onChange={handleChange} type="text" placeholder='Email' /> 
      </InputGroup>

        </Col>

        <Col xs = {12}>
        <Form.Label ><span className="text-danger">*</span> Mobile Number</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">+44</InputGroup.Text>
        <Form.Control name="numero_expediteur" value={values.numero_expediteur} onBlur={handleBlur} onChange={handleChange} type="text" placeholder='Numéro de télélephone' />
        </InputGroup>
        <p className='text-danger'>{touched.numero_expediteur && errors.numero_expediteur}</p>
        </Col>

        
    </Row>
    <Row className='justify-content-center'>
        
        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label >Pays</Form.Label>
        <Form.Select name='pays_expediteur' value={values.pays_expediteur} aria-label="Default select example" onBlur={handleBlur} onChange={handleChange} >
         <option value="UK">UK</option>
         </Form.Select>
         </Form.Group>
        </Col>
       
    </Row>

    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Informations Bénéficiare</u></b> </p>
    </Row>

    <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label><span className='text-danger'>*</span>Prénom</Form.Label>
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
              <Form.Label><span className='text-danger'>*</span>Nom de famille</Form.Label>
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
           <Form.Label ><span className='text-danger'>*</span>pays </Form.Label>
           <Form.Select name='pays_beneficiaire'   value={values.pays_beneficiaire} aria-label="Default select example" onChange={handleChange} >
           <option >Selectionner le pays</option>
           <option value='RD Congo' >RD Congo</option> 
           <option value='Angola' >Angola</option> 
            </Form.Select>
            <p className='text-danger'>{touched.pays_beneficiaire && errors.pays_beneficiaire}</p>
             </Form.Group>
             </Col>
             </Row>

<Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u> Montant</u></b> </p>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="validationFormik04" >
        <Form.Label ><span className='text-danger'>*</span>combien voulez-vous que le destinataire reçoit en US($)</Form.Label>
        <Form.Control name="montant_beneficiaire"  value={values.montant_beneficiaire} onBlur={handleBlur} onChange={handleChange} type="text" placeholder="entrer le montant à récevoir"  />
        <p className='text-danger'>{touched.montant_beneficiaire && errors.montant_beneficiaire}</p>
         </Form.Group>
        </Col>

        

        <Col xs ={12}>
        <Form.Group className="mb-3" controlId="validationFormik05">
        <Form.Label >Type de service </Form.Label>
        <Form.Select name="type_service"  value={values.type_service} aria-label="Default select example" onChange={(e)=>{
             e.target.value ==="par transfert d'argent mobile (Mpesa, Orange Money, Airtel Money)" ? testValidation.fields.numero_transfer = yup.string().required('champs requis') :testValidation.fields.numero_transfer = yup.string().notRequired()
             setFieldValue("type_service",e.target.value)
        }} >
        <option value="En espèces (à l'agence)">En espèces (à l'agence)</option>
         <option value="par transfert d'argent mobile (Mpesa, Orange Money, Airtel Money)">par transfert d'argent mobile (Mpesa, Orange Money, Airtel Money) </option> 
         </Form.Select>
         </Form.Group>
        </Col>
      
        {values.type_service === "par transfert d'argent mobile (Mpesa, Orange Money, Airtel Money)" ? <Col xs = {12}>
        <Form.Label ><span className="text-danger">*</span> Entrez le numéro de téléphone portable pour transférer l'argent </Form.Label>
        <InputGroup className="mb-3" controlId="validationFormik06">
        <InputGroup.Text id="basic-addon1">+243</InputGroup.Text>
        <Form.Control name="numero_transfer" value={values.numero_transfer}   onBlur={handleBlur}  onChange={handleChange} type="text" placeholder='numéro portable de transfert '  />
        </InputGroup>
        <p className='text-danger'>{touched.numero_transfer && errors.numero_transfer}</p>
        </Col> : <span></span>}
         
    </Row>

          <Row className='justify-content-center pb-3'>
        <Col xs ={4}> 
        <Button variant="warning" type="submit" >
        Suivant
        </Button>
        </Col>

        <Col xs ={4}> 
        <Button variant="danger" onClick={closePage} >
        fermer
        </Button>
        </Col>
        </Row>
        
        </Form>
)
}
</Formik>
</Container>
}

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

export default FormEnvoiClientFrench;