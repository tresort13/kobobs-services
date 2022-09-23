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
function FormEnvoiAbonneEnglish(props)
{

    const[envoieAbonne,setEnvoieAbonne] = useState({infoEnvoieAbonne :{
      nom_beneficiaire : props.envoie.infoEnvoie.nom_beneficiaire,
      prenom_beneficiaire : props.envoie.infoEnvoie.prenom_beneficiaire,
      pays_beneficiaire : props.envoie.infoEnvoie.pays_beneficiaire,
      montant_beneficiaire : props.envoie.infoEnvoie.montant_beneficiaire,
      type_service : 'By Cash (at the agency)',
      numero_transfer : props.envoie.infoEnvoie.numero_transfer
        }})
    

    const [message,setMessage] = useState("Form of member")
    const [couleur,setCouleur] = useState("text-dark")
    const navigate = useNavigate()

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
      
    
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
        props.dataEnvoieAbonne(props.abonne,envoieAbonne.infoEnvoieAbonne)   
        console.log(props.abonne) 
        setEnvoieAbonne({infoEnvoieAbonne:{}})
        navigate('/envoi_abonne_info_english')
      }
  
      const inputChanged = (event)=>
      {
          const cred = envoieAbonne.infoEnvoieAbonne;
          cred[event.target.name] = event.target.value;
          setEnvoieAbonne({infoEnvoieAbonne:cred})
      }
     
    return (
        
        <>
        <HeaderEnglish />
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
<Col xs={6}>
        <p ><i><b className='text-dark'>Subscriber ID : </b><b className='couleur2'>{props.abonne.infoAbonne.code_abonne}</b></i></p>
        </Col>
        <Col xs={6}>
        <p ><i><b className='text-dark'>Subscriber full name : </b><b className='couleur2'>{props.abonne.infoAbonne.prenom_expediteur} {props.abonne.infoAbonne.nom_expediteur} </b></i></p>
        </Col>
    </Row>

    
<Form onSubmit={submitFormulaire}>
      <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Receiver </u></b></p>
    </Row>
    <Row className='justify-content-center'>
    <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className='text-danger'>*</span> First Name </Form.Label>
        <Form.Control name="prenom_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.prenom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='First Name'  required/>
         </Form.Group>
        </Col>

        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className='text-danger'>*</span> Last Name </Form.Label>  
        <Form.Control name="nom_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.nom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Last Name' required/>
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
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='text-dark'><span className='text-danger'>*</span> which Amount do you want the receiver to get</Form.Label>
        <Form.Control name="montant_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.montant_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder="Amount to send for the receiver"  required/>
         </Form.Group>
        </Col>

        

        <Col xs ={6}>
        <Form.Group className="mb-3" >
        <Form.Label className='text-dark'>Type of service </Form.Label>
        <Form.Select name="type_service" value={envoieAbonne.infoEnvoieAbonne.type_service} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
        <option value='By Cash (at the agency)'>By Cash (at the agency)</option>
         <option value="by mobile money tranfer(Mpesa,Orange Money,Airtel Money)">by mobile money tranfer(Mpesa,Orange Money,Airtel Money) </option>
         
         </Form.Select>
         </Form.Group>
        </Col>

        {envoieAbonne.infoEnvoieAbonne.type_service == "by mobile money tranfer(Mpesa,Orange Money,Airtel Money)" ? <Col xs = {12}>
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
        <Form.Label className='text-dark'><span className='text-danger'>*</span> which Amount do you want the receiver to get</Form.Label>
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

        {envoieAbonne.infoEnvoieAbonne.type_service == "by mobile money tranfer(Mpesa,Orange Money,Airtel Money)" ? <Col xs = {12}>
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
<Footer />
        </>
       
    )
}

export default FormEnvoiAbonneEnglish;