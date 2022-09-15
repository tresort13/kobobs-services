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




const useState = React.useState
function FormEnvoiAbonne(props)
{

    const[envoieAbonne,setEnvoieAbonne] = useState({infoEnvoieAbonne :{
        nom_beneficiaire : '',
        postnom_beneficiaire : '',
        prenom_beneficiaire : '',
        adresse_beneficiaire : '',
        numero_beneficiaire : '',
        pays_beneficiaire : 'RD Congo',
        montant_beneficiaire : '',
        type_service : 'Kozua na maboko (kozua na nzela ya agence)',
        numero_transfer :'Kozua na maboko (kozua na nzela ya agence)'
        }})
    

    const [message,setMessage] = useState("Formulaire Ya Kotinda Pona Abonné")
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
        <Header langue={props.langue} />
{isDesktop && <Container className='bg-dark justify-content-center text-center bordure mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
<Col xs={6}>
        <p ><i><b className='text-light'>Code Ya Abonné : </b><b className='couleur2'>{props.abonne.infoAbonne.code_abonne}</b></i></p>
        </Col>
        <Col xs={6}>
        <p ><i><b className='text-light'>Kombo Ya Abonné : </b><b className='couleur2'>{props.abonne.infoAbonne.prenom_expediteur} {props.abonne.infoAbonne.nom_expediteur} {props.abonne.infoAbonne.postnom_expediteur}</b></i></p>
        </Col>
    </Row>

    
<Form onSubmit={submitFormulaire}>
      <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mozui </u></b></p>
    </Row>
    <Row className='justify-content-center'>
    <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>* Kombo Ya Libota</Form.Label>
        <Form.Control name="nom_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.nom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya Libota'  required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>* Kombo ya authenticité </Form.Label>  
        <Form.Control name="postnom_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.postnom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya authenticité' required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>* Kombo ya Mukristu </Form.Label>
        <Form.Control name="prenom_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.prenom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya Mukristu'  required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>* Adresse</Form.Label>
        <Form.Control name="adresse_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.adresse_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya Mukristu'  required/>
         </Form.Group>
        </Col>

        <Col xs = {4}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>* Numéro ya Tshombo</Form.Label>
        <Form.Control name="numero_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.numero_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Numéro ya Tshombo' required/>
         </Form.Group>
        </Col>

        <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Ekolo </Form.Label>
        <Form.Select name='pays_beneficiaire' value={envoieAbonne.infoEnvoieAbonne.pays_beneficiaire} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option value='RD Congo'>RD Congo</option>
         <option value="Angleterre">RD Congo</option>
         <option value="RD Congo">Angleterre</option>
         
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mbongo</u></b> </p>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {6}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>* Mbongo Mozui akozwa</Form.Label>
        <Form.Control name="montant_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.montant_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder="Mbongo"  required/>
         </Form.Group>
        </Col>

        

        <Col xs ={6}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Nzela yako zwa Mbongo </Form.Label>
        <Form.Select name="type_service" value={envoieAbonne.infoEnvoieAbonne.type_service} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
        <option value='Kozua na maboko (kozua na nzela ya agence)'>Kozua na maboko (kozua na nzela ya agence)</option>
         <option value="Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money)">Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money) </option>
         
         </Form.Select>
         </Form.Group>
        </Col>

        {envoieAbonne.infoEnvoieAbonne.type_service == "Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money)" ? <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>* Kotisa Numero yako tinda mbongo </Form.Label>
        <Form.Control name="numero_transfer"   onChange={e=>inputChanged(e)} type="text" placeholder='numero ya transfer'  required/>
       
         </Form.Group>
        </Col> : <span></span>}
    </Row>
    <Row>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}> 
        <Button variant="outline-warning" type="submit">
        Valider makomi
        </Button>
        </Col>
    </Row>
  
  


</Form>
</Container>
}

{isMobileOrTablet &&<Container className='bg-dark justify-content-center text-center bordure mx-auto my-auto'>
<Row className='justify-content-center mb-3 pt-3' >
<Col xs={12}>
        <p ><i><b className='text-light'>Code Ya Abonné : </b><b className='couleur2'>{props.abonne.infoAbonne.code_abonne}</b></i></p>
        </Col>
        <Col xs={12}>
        <p ><i><b className='text-light'>Kombo Ya Abonné : </b><b className='couleur2'>{props.abonne.infoAbonne.prenom_expediteur} {props.abonne.infoAbonne.nom_expediteur} {props.abonne.infoAbonne.postnom_expediteur}</b></i></p>
        </Col>
    </Row>

    
<Form onSubmit={submitFormulaire}>
      <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mozui </u></b></p>
    </Row>
    <Row className='justify-content-center'>
    <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>* Kombo Ya Libota</Form.Label>
        <Form.Control name="nom_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.nom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya Libota'  required/>
         </Form.Group>
        </Col>

        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>* Kombo ya authenticité </Form.Label>  
        <Form.Control name="postnom_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.postnom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya authenticité' required/>
         </Form.Group>
        </Col>

        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>* Kombo ya Mukristu </Form.Label>
        <Form.Control name="prenom_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.prenom_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya Mukristu'  required/>
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-center'>
    <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>* Adresse</Form.Label>
        <Form.Control name="adresse_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.adresse_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Kombo ya Mukristu'  required/>
         </Form.Group>
        </Col>

        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>* Numéro ya Tshombo</Form.Label>
        <Form.Control name="numero_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.numero_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder='Numéro ya Tshombo' required/>
         </Form.Group>
        </Col>

        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Ekolo </Form.Label>
        <Form.Select name='pays_beneficiaire' value={envoieAbonne.infoEnvoieAbonne.pays_beneficiaire} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
         <option value='RD Congo'>RD Congo</option>
         <option value="Angleterre">RD Congo</option>
         <option value="RD Congo">Angleterre</option>
         
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  
    <Row>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u>Mbongo</u></b> </p>
    </Row>
    <Row className='justify-content-center'>
        <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>* Mbongo Mozui akozwa</Form.Label>
        <Form.Control name="montant_beneficiaire" value={envoieAbonne.infoEnvoieAbonne.montant_beneficiaire} onChange={e=>inputChanged(e)} type="text" placeholder="Mbongo"  required/>
         </Form.Group>
        </Col>

        

        <Col xs ={12}>
        <Form.Group className="mb-3" >
        <Form.Label className='couleur2'>Nzela yako zwa Mbongo </Form.Label>
        <Form.Select name="type_service" value={envoieAbonne.infoEnvoieAbonne.type_service} aria-label="Default select example" onChange={e=>inputChanged(e)} required>
        <option value='Kozua na maboko (kozua na nzela ya agence)'>Kozua na maboko (kozua na nzela ya agence)</option>
         <option value="Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money)">Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money) </option>
         
         </Form.Select>
         </Form.Group>
        </Col>

        {envoieAbonne.infoEnvoieAbonne.type_service == "Kozua na nzela ya tshombo(Mpesa,Orange Money,Airtel Money)" ? <Col xs = {12}>
        <Form.Group className="mb-3" controlId="formBasicText" >
        <Form.Label className='couleur2'>* Kotisa Numero yako tinda mbongo </Form.Label>
        <Form.Control name="numero_transfer"   onChange={e=>inputChanged(e)} type="text" placeholder='numero ya transfer'  required/>
       
         </Form.Group>
        </Col> : <span></span>}
    </Row>
    <Row>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
  
    <Row className='justify-content-center pb-3'>
        <Col xs ={4}> 
        <Button variant="outline-warning" type="submit">
        Valider makomi
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

export default FormEnvoiAbonne;