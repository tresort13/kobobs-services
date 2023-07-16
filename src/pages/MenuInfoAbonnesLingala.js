import React,{ useEffect } from 'react';
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
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import ClipLoader from "react-spinners/ClipLoader";
import * as formik from 'formik';
import * as yup from 'yup';


//import SessionOut from './SessionOut';



const useState = React.useState
function MenuInfoAbonnesLingala(props)
{

    const [message,setMessage] = useState("Informations sur les abonnés")
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(true);
    const[abonneInfo,setAbonneInfo] = useState([])
    const[abonne,setAbonne] = useState([])
    const navigate = useNavigate()


    const [modalShow2, setModalShow2] = React.useState(false);

    const [message2,setMessage2] = useState("Veuillez entrer le numéro de l'expediteur")
    
    const { Formik } = formik;

  const testValidation = yup.object().shape({
    numero_expediteur : yup.string().required('required field'),
  });

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });

      const closeModal = ()=>{
        setModalShow(true)
      }

      const submit =()=>
      {       
          fetch('https://kobobsapi.herokuapp.com/api/getAbonnesInfo/', {
                  method:'GET',
                  headers: {'Content-Type': 'application/json'},
                 // body: JSON.stringify(codeRetrait.infoCodeRetrait)
                })
                .then( res => res.json())
                .then(
                  res => {   
                    setAbonneInfo(res)
                    props.setAbonneInfo2(res)
                     console.log(abonneInfo)
                  }
                )
                .catch( (error) =>
                  {
                      console.log(error)
                  } )
      }

      useEffect(()=>
      {
         const interval =  setInterval(()=>setModalShow3(false),3000);
          return () => clearInterval(interval)
      },[])

      useEffect(()=>
      {    
        submit()
      },[])


    
      

     
     const nombre_abonnes_total =  abonneInfo.reduce((total,value)=>
     {
        total = total + 1
        return total
     },0)


     const nombre_envoie_valide = props.dailyRapport.filter((value)=>
     {
       return value.status_retrait !== "code retrait en attente de validation"
     }).reduce((total,value)=>
     {
       total = total + 1
       return total
     },0)

     const nombre_envoie_nonvalide = props.dailyRapport.filter((value)=>
     {
       return value.status_retrait === "code retrait en attente de validation"
     }).reduce((total,value)=>
     {
       total = total + 1
       return total
     },0)

     
    

   

     const detailTotal =()=>
     {
      props.setAbonneInfo2(abonneInfo)
      navigate('/table_abonnes_lingala')
     }

     const detailValide =()=>
     {
      props.dataDetailEnvoieTotal(props.dailyRapport.filter((value)=>
      {
        return value.status_retrait !== "code retrait en attente de validation"
      }))
      navigate('/details_envois_info')
     }

     const detailNonValide =()=>
     {
      props.dataDetailEnvoieTotal(props.dailyRapport.filter((value)=>
      {
        return value.status_retrait === "code retrait en attente de validation"
      }))

      navigate('/details_envois_info')
       
     }

     const submitcodeAbonne = (values)=>
     {
      setAbonne([]) 
           console.log(values.numero_expediteur)
           setModalShow(false)
           setModalShow3(true)
           fetch('https://kobobsapi.herokuapp.com/api/getCodeAbonneInfo/'+values.numero_expediteur+'/', {
                 method:'get',
                 headers: {'Content-Type': 'application/json'},
                // body: JSON.stringify(codeRetrait.infoCodeRetrait)
               })
               .then( res => res.json())
               .then(
                 res => {  
                   
                  console.log(res)
                  if (res.length > 0)
                  {
                    setAbonne(res)
                    setModalShow3(false)
                  }
                  else{
                    setModalShow3(false)
                    setModalShow(true)
                    console.log(abonne)
                  }
                 
                 
                    
                 }
               )
               .catch( (error) =>
                 {
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
        <Header dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={6}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
 {/*   <Row className='justify-content-center pb-3' >
        <Col xs={12}>
        <p className='text-dark'>Type de Rapport: <b className='couleur2'>Journalier</b> </p>
        <p className='text-dark'>Date : <b className='couleur2'>{props.dateInfo}</b>  </p>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    */}
    <Row className='justify-content-center pb-3' >
        <Col xs={3}>
        <p className='text-dark py-2 text-center'><strong>Nombre ya ba abonnés :</strong> <b className='couleur2'>  {nombre_abonnes_total}</b>  </p>
         </Col>

         <Col xs={4}>
       {nombre_abonnes_total > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailTotal}>Tala ba abonnés nionso</p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded' type="submit"  onClick={closeModal}>Tala ba détails </p></a>}
       
    </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>

    <Row>
       <Col xs={12} className='justify-content-center '>
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
    <Row className='justify-content-center text-center mx-3 px-3 py-3' >
        <Col xs={8} className='justify-content-end text-start '>
        <Form.Label htmlFor="basic-url" className='text-start'><strong>Luka abonné</strong></Form.Label>
        <InputGroup className="mb-3" controlId="formBasicText" >  
        <Form.Control name="numero_expediteur" value={values.numero_expediteur} onChange={handleChange} onBlur={handleBlur} type="text" placeholder='Numéro ya Téléphone'  />
        <InputGroup.Text ><Button type="submit" variant='success'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="25" fill="currentColor" className="bi bi-search " viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
        </Button>
        </InputGroup.Text>
         </InputGroup>
         <p className='text-danger'>{touched.numero_expediteur && errors.numero_expediteur}</p>
        </Col>
    </Row>



</Form>
)
}
</Formik>
</Col>
</Row>

 {abonne.length > 0 ? abonne.map((value)=>
    {
    return <div className='bg-light justify-content-center text-center' style={{border:"2px solid black"}} >
<Row className='justify-content-start' >
        <Col xs={12}>
        <p className='couleur2'><i><b><u>Information ya abonné</u></b></i></p>
        </Col>
    </Row>
    <Row className='justify-content-start text-start pb-3 mb-3' >
      <Col xs={2}>
      </Col>
      <Col xs={5} className='justify-content-start'>
        <p className='text-dark'>kombo Mukristu: <b className='text-dark'>{value.prenom_expediteur}</b> </p>
        <p className='text-dark'>kombo ya Libota: <b className='text-dark'>{value.nom_expediteur} {value.postnom_expediteur}</b> </p>
        <p className='text-dark'>Email ya Abonné: <b className='text-dark '> {value.email_expediteur}</b></p>
        <p className='text-dark'>Mboka ya Abonné: <b className='text-dark '> {value.pays_expediteur}</b></p>
        <p className='text-dark'>Numéro ya Abonné: <b className='text-dark'> {value.numero_expediteur}</b></p>
        {value.adresse_expediteur != 'N/A' ? <p className='text-dark'>Adresse ya Abonné: <b className='text-dark'> {value.adresse_expediteur}</b></p> : <span></span>}
        <p className='text-dark'>Date et heure ya création ya abonné: <b className='text-dark'> {value.date_heure_operation}</b></p>

    </Col>

    </Row>
    </div> })
    :
    <span></span>

}

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/menu_gestion_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="danger" type="submit">
        Fermer
        </Button>
        </Link>
        </Col>
        
    </Row>
</Container>
}

{isMobileOrTablet && <Container className='bg-light justify-content-center text-center mx-auto my-auto'>
<Row className='justify-content-center mb-3 pt-3' >
        <Col xs={12}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
    <Row className='justify-content-start pb-3' >
        <Col xs={12}>
        <p className='text-dark'>Type of Rapport: <b className='couleur2'>Journalier</b> </p>
        <p className='text-dark'>Date : <b className='couleur2'>{props.dateInfo}</b>  </p>
        
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
      
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <p className='text-dark'>envoies effectué: <b className='couleur2'> </b>  </p>
         </Col>
    </Row>

      <Row>
        <Col>
        <p className='text-dark'>envoies validés: <b className='couleur2'> {nombre_envoie_valide}</b> </p>
        <p className='text-dark'>envoies non validés: <b className='couleur2'> {nombre_envoie_nonvalide}</b></p>
        </Col>

        <Col xs={6}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailTotal}>Voir Details </p></Link>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailValide}>Voir Details </p></Link>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailNonValide}>Voir Details </p></Link>
       
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        kokanga
        </Button>
        </Link>
        </Col>
        
    </Row>
    
    

</Container>}
<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>

      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
      <MyVerticallyCenteredModal3 show={modalShow3} onHide={() => setModalShow3(false)} />
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
          bolimbisi 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='couleur2'><b>abonné moko te na numéro oyo</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>kakanga</Button>
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

export default MenuInfoAbonnesLingala;