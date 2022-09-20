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



const useState = React.useState
function FormEnvoiClientEnglish(props)
{

    const[envoie,setEnvoie] = useState({infoEnvoie :{
    nom_expediteur : props.envoie.infoEnvoie.nom_expediteur,
    postnom_expediteur : props.envoie.infoEnvoie.postnom_expediteur,
    prenom_expediteur : props.envoie.infoEnvoie.prenom_expediteur,
    adresse_expediteur : props.envoie.infoEnvoie.adresse_expediteur,
    email_expediteur : props.envoie.infoEnvoie.email_expediteur,
    numero_expediteur: props.envoie.infoEnvoie.numero_expediteur,
    pays_expediteur : props.envoie.infoEnvoie.pays_expediteur,
    nom_beneficiaire : props.envoie.infoEnvoie.nom_beneficiaire,
    postnom_beneficiaire : props.envoie.infoEnvoie.postnom_beneficiaire,
    prenom_beneficiaire : props.envoie.infoEnvoie.prenom_beneficiaire,
    adresse_beneficiaire : props.envoie.infoEnvoie.adresse_beneficiaire,
    numero_beneficiaire : props.envoie.infoEnvoie.numero_beneficiaire,
    pays_beneficiaire : props.envoie.infoEnvoie.pays_beneficiaire,
    montant_beneficiaire : props.envoie.infoEnvoie.montant_beneficiaire,
    type_service : 'By Cash (at the agency)',
    numero_transfer:props.envoie.infoEnvoie.numero_transfer
    }})

    const [validated, setValidated] = useState(false);
    const [message,setMessage] = useState("Fisrt Time client form")
    const [couleur,setCouleur] = useState("text-dark")

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
     

      const navigate = useNavigate()
    
      const tauxEchanger = ()=>
      {
        fetch('https://openexchangerates.org/api/latest.json?app_id=41351d88e53f4f0c89785fba9fc60ca0&symbols=GBP', {
                  method:'GET',
                  headers: {'Content-Type': 'application/json'},
                 
                })
                .then( res => res.json())
                .then(
                  res => {  
                    props.setTaux(res.rates.GBP) 
                     console.log(res.rates.GBP)
                  }
                )
                .catch( (error) =>
                  {
                      console.log(error)
                  } )
      }
    


    const submitFormulaire = (e)=>
    {   
    e.preventDefault()
      tauxEchanger()      
        props.dataEnvoie(envoie.infoEnvoie)
        setEnvoie({infoEnvoie:{}})
         navigate('/envoi_info_english')
      
    }

    

    const inputChanged = (event)=>
    {
      
        const cred = envoie.infoEnvoie;
        cred[event.target.name] = event.target.value;
        setEnvoie({infoEnvoie:cred})
    }

   
    return (
        
        <>
        <HeaderEnglish />
{isDesktop && <Container className='bg-light justify-content-center text-center mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='display-6 couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
<Form  onSubmit={submitFormulaire}>
    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Sender Informations</u></b> </p>
    </Row>

    <Row className='justify-content-center'>
        


        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> First Name </Form.Label>
        <Form.Control name="prenom_expediteur" value={envoie.infoEnvoie.prenom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='First Name'  required/>
       
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Middle Name</Form.Label>
        <Form.Control name="nom_expediteur" value={envoie.infoEnvoie.nom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Middle Name'    required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Last Name </Form.Label>  
        <Form.Control name="postnom_expediteur" value={envoie.infoEnvoie.postnom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Last Name' required/>
        
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
    
       <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Address</Form.Label>
        <Form.Control name="adresse_expediteur" value={envoie.infoEnvoie.adresse_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Address'  required/>

         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Label className='text-dark'><span className="text-danger">*</span> Email</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control name="email_expediteur" value={envoie.infoEnvoie.email_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Email' required/>

      </InputGroup>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Mobile Number</Form.Label>
        <Form.Control name="numero_expediteur" value={envoie.infoEnvoie.numero_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Numéro ya Tshombo' required/>
         </Form.Group>
        </Col>

        
    </Row>
    <Row className='justify-content-center'>
        
        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Country</Form.Label>
        <Form.Select name='pays_expediteur' value={envoie.infoEnvoie.pays_expediteur} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option value="England">England</option>
         <option value="RD Congo">RD Congo</option> 
         </Form.Select>
         </Form.Group>
        </Col>
       
    </Row>

    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Receiver Informations</u></b> </p>
    </Row>

    <Row className='justify-content-center'>

    <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> First Name</Form.Label>
        <Form.Control name="prenom_beneficiaire" value={envoie.infoEnvoie.prenom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='First Name'  required/>

         </Form.Group>
        </Col>

    <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Middle Name</Form.Label>
        <Form.Control name="nom_beneficiaire" value={envoie.infoEnvoie.nom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Middle Name'    required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Last Name</Form.Label>  
        <Form.Control name="postnom_beneficiaire" value={envoie.infoEnvoie.postnom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Last Name' required/>

         </Form.Group>
        </Col>

        
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Adresse</Form.Label>
        <Form.Control name="adresse_beneficiaire" value={envoie.infoEnvoie.adresse_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Address'  required/>
       
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Mobile Number </Form.Label>
        <Form.Control name="numero_beneficiaire" value={envoie.infoEnvoie.numero_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Mobile Number' required/>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Country</Form.Label>
        <Form.Select name='pays_beneficiaire' value={envoie.infoEnvoie.pays_beneficiaire} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option value="RD Congo">RD Congo</option>
         <option value="England">England</option>
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u> Money</u></b> </p>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> which Amount do you want the receiver to get</Form.Label>
        <Form.Control name="montant_beneficiaire" value={envoie.infoEnvoie.montant_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder="how much for the receiver to get"  required/>

         </Form.Group>
        </Col>

        

        <Col xs ={6}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Type of service  </Form.Label>
        <Form.Select name="type_service" value={envoie.infoEnvoie.type_service} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
        <option value="By Cash (at the agency)">By Cash (at the agency)</option>
         <option value="by mobile money tranfer(Mpesa,Orange Money,Airtel Money)">by mobile money tranfer(Mpesa,Orange Money,Airtel Money) </option> 
         </Form.Select>
         </Form.Group>
        </Col>

        {envoie.infoEnvoie.type_service == "by mobile money tranfer(Mpesa,Orange Money,Airtel Money)" ? <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Enter the mobile number for transfering the money  </Form.Label>
        <Form.Control name="numero_transfer"  onChange={e=>inputChanged(e)} type="text" placeholder='transfering mobile number'  required/>
       
         </Form.Group>
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
</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center  mx-auto my-auto' >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='display-6 couleur2'><i><b>{message}</b></i></p>
        </Col>
    </Row>
    
<Form  onSubmit={submitFormulaire}>
    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Sender Informations</u></b> </p>
    </Row>

    <Row className='justify-content-center'>
        


        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> First Name </Form.Label>
        <Form.Control name="prenom_expediteur" value={envoie.infoEnvoie.prenom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='First Name'  required/>
       
         </Form.Group>
        </Col>

        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Middle Name</Form.Label>
        <Form.Control name="nom_expediteur" value={envoie.infoEnvoie.nom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Middle Name'    required/>
         </Form.Group>
        </Col>

        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Last Name </Form.Label>  
        <Form.Control name="postnom_expediteur" value={envoie.infoEnvoie.postnom_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Last Name' required/>
        
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
    
       <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Address</Form.Label>
        <Form.Control name="adresse_expediteur" value={envoie.infoEnvoie.adresse_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Address'  required/>

         </Form.Group>
        </Col>

        <Col xs = {12}>
        <Form.Label className='text-dark'><span className="text-danger">*</span> Email</Form.Label>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control name="email_expediteur" value={envoie.infoEnvoie.email_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Email' required/>

      </InputGroup>
        </Col>

        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Mobile Number</Form.Label>
        <Form.Control name="numero_expediteur" value={envoie.infoEnvoie.numero_expediteur} onChange={e=>inputChanged(e)} type="text" placeholder='Numéro ya Tshombo' required/>
         </Form.Group>
        </Col>

        
    </Row>
    <Row className='justify-content-center'>
        
        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Country</Form.Label>
        <Form.Select name='pays_expediteur' value={envoie.infoEnvoie.pays_expediteur} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option value="England">England</option>
         <option value="RD Congo">RD Congo</option> 
         </Form.Select>
         </Form.Group>
        </Col>
       
    </Row>

    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Receiver Informations</u></b> </p>
    </Row>

    <Row className='justify-content-center'>

    <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> First Name</Form.Label>
        <Form.Control name="prenom_beneficiaire" value={envoie.infoEnvoie.prenom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='First Name'  required/>

         </Form.Group>
        </Col>

    <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Middle Name</Form.Label>
        <Form.Control name="nom_beneficiaire" value={envoie.infoEnvoie.nom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Middle Name'    required/>
         </Form.Group>
        </Col>

        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Last Name</Form.Label>  
        <Form.Control name="postnom_beneficiaire" value={envoie.infoEnvoie.postnom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Last Name' required/>

         </Form.Group>
        </Col>

        
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Adresse</Form.Label>
        <Form.Control name="adresse_beneficiaire" value={envoie.infoEnvoie.adresse_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Address'  required/>
       
         </Form.Group>
        </Col>

        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Mobile Number </Form.Label>
        <Form.Control name="numero_beneficiaire" value={envoie.infoEnvoie.numero_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Mobile Number' required/>
         </Form.Group>
        </Col>

        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Country</Form.Label>
        <Form.Select name='pays_beneficiaire' value={envoie.infoEnvoie.pays_beneficiaire} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option value="RD Congo">RD Congo</option>
         <option value="England">England</option>
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
        <Form.Label className='text-dark'><span className="text-danger">*</span> which Amount do you want the receiver to get</Form.Label>
        <Form.Control name="montant_beneficiaire" value={envoie.infoEnvoie.montant_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder="how much for the receiver to get"  required/>

         </Form.Group>
        </Col>

        

        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Type of service  </Form.Label>
        <Form.Select name="type_service" value={envoie.infoEnvoie.type_service} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
        <option value="By Cash (at the agency)">By Cash (at the agency)</option>
         <option value="by mobile money tranfer(Mpesa,Orange Money,Airtel Money)">by mobile money tranfer(Mpesa,Orange Money,Airtel Money) </option> 
         </Form.Select>
         </Form.Group>
        </Col>

        {envoie.infoEnvoie.type_service == "by mobile money tranfer(Mpesa,Orange Money,Airtel Money)" ? <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className="text-danger">*</span> Enter the mobile number for transfering the money  </Form.Label>
        <Form.Control name="numero_transfer"  onChange={e=>inputChanged(e)} type="text" placeholder='transfering mobile number'  required/>
       
         </Form.Group>
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
<Footer />
        </>
       
    )
}

export default FormEnvoiClientEnglish;