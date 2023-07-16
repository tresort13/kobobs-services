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
import HeaderFrench from './HeaderFrench';


//import SessionOut from './SessionOut';



const useState = React.useState
function MyProfilLingala(props)
{

    const [message,setMessage] = useState("Historique Na yo")
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const[abonneInfo,setAbonneInfo] = useState([])
    const[operationSending,setOperationSending] = useState([])
    const[operationValidation,setOperationValidation] = useState([])
    const[operationRetrait,setOperationRetrait] = useState([])
    const[operationDeletion,setOperationDeletion] = useState([])
    const [localDate,setLocalDate] = useState('')
    const [operationType,setOperationType] = useState('')
    const navigate = useNavigate()
    const [isTodayHistory,setIsTodayHistoric] = useState(true)


    const { Formik } = formik;

    const testValidation = yup.object().shape({
      dateInfo : yup.string().required('esengeli ko kota makomi'),
      
    });
  
    const testValidation2 = yup.object().shape({
      dateInfo : yup.string().required('esengeli ko kota makomi'),
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
  
    
    const nombre_sending_total =  operationSending.reduce((total,value)=>
    {
       total = total + 1
       return total
    },0)


    const nombre_envoie_valide = operationValidation.reduce((total,value)=>
    {
       total = total + 1
       return total
    },0)


    


    
    const nombre_retrait_paye = operationRetrait.reduce((total,value)=>
    {
       total = total + 1
       return total
    },0)

    const nombre_operation_deleted = operationDeletion.reduce((total,value)=>
    {
       total = total + 1
       return total
    },0)


  

    

    const detailValide =()=>
    {
     props.setDateHistoric(localDate)
     props.setMessage("Historique ya ba Validation")
     props.setDetailHistoric(operationValidation)
     navigate('/details_historic_info_lingala')
    }

    const detailTotal =()=>
    {
     props.setDateHistoric(localDate)
      props.setMessage("Historique ya ba envoi")
     props.setDetailHistoric(operationSending)
     navigate('/details_historic_info_lingala')
    }

    const detailPaye =()=>
    {
     props.setDateHistoric(localDate)
     props.setMessage("Historique yaba rétrait")
     props.setDetailHistoric(operationRetrait)
     navigate('/details_historic_info_lingala')
    
    }

    const detailDeletion =()=>
    {
     props.setDateHistoric(localDate)
     props.setMessage("Historique yaba suppression")
     props.setDetailHistoric(operationDeletion)
     navigate('/details_historic_info_lingala')
     
    }



    const submitDate = (values)=>
    {
     setLocalDate('')
     setOperationSending([])
     setOperationValidation([])
     setOperationRetrait([])
     setOperationDeletion([])
     setModalShow3(true)
     const values_replace = values.dateInfo.replace(/-/g,'/')
     console.log(values_replace)
     const year = values_replace.slice(0,4)
     const mois = values_replace.slice(4,8)
     const day = values_replace.slice(8,10)
     const date = { "dateInfo": day.concat("",mois,year),
                "agent_id":props.abonne.infoAbonne.agent_id,
               }
    
      console.log(date)
      
        fetch('https://kobobsapi.herokuapp.com/api/getDailyRapportInfoUserStaff/', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(date)
          })
          .then( res => res.json())
          .then(
            res => {   
               
                console.log(res)
               if ((res.dataDeletion.length > 0) ||  (res.dataRetrait.length > 0) || (res.dataSending.length > 0) || (res.dataValidation > 0))
               {
                 setLocalDate(date.dateInfo)
                // setOperationType(date.operationType)
                 setOperationSending(res.dataSending)
                 setOperationValidation(res.dataValidation)
                 setOperationRetrait(res.dataRetrait)
                 setOperationDeletion(res.dataDeletion)
                 setModalShow3(false)
                 setIsTodayHistoric(false)
               }
               else{
                 setModalShow3(false)
                 setModalShow(true)
                 setIsTodayHistoric(false)
               }
            }
          )
          .catch( (error) =>
            {
                setModalShow(true)
                setModalShow3(false)
                console.log(error)
                setIsTodayHistoric(false)
            } )
       
                
    }

    const submitDateAuto = ()=>
    {
     const today = new Date().toLocaleString()
     console.log(today)
     setLocalDate('')
     setOperationSending([])
     setOperationValidation([])
     setOperationRetrait([])
     setOperationDeletion([])
     setModalShow3(true)
    // const values_replace = today.replace(/-/g,'/')
     
     
     const date = { "dateInfo": today.slice(0,10),
                "agent_id":props.abonne.infoAbonne.agent_id,
               }
    
      console.log(date)
      
        fetch('https://kobobsapi.herokuapp.com/api/getDailyRapportInfoUserStaff/', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(date)
          })
          .then( res => res.json())
          .then(
            res => {   
               
                console.log(res)
               if ((res.dataDeletion.length > 0) ||  (res.dataRetrait.length > 0) || (res.dataSending.length > 0) || (res.dataValidation.length > 0))
               {
                 setLocalDate(date.dateInfo)
                // setOperationType(date.operationType)
                 setOperationSending(res.dataSending)
                 setOperationValidation(res.dataValidation)
                 setOperationRetrait(res.dataRetrait)
                 setOperationDeletion(res.dataDeletion)
                 setModalShow3(false)
                 setIsTodayHistoric(true)
               }
               else{
                 setModalShow3(false)
                 setModalShow(true)
               }
            }
          )
          .catch( (error) =>
            {
                setModalShow(true)
                setModalShow3(false)
                console.log(error)
            } )
       
                
    }


    const submitDate2 = (values)=>
    {
      setLocalDate('')
        setOperationSending([])
     setModalShow3(true)
     const values_replace = values.dateInfo.replace(/-/g,'/')
     console.log(values_replace)
     const year = values_replace.slice(0,4)
     const mois = values_replace.slice(4,8)
     const day = values_replace.slice(8,10)
     const date = { "dateInfo": day.concat("",mois,year),
                "agent_id":props.abonne.infoAbonne.agent_id}
    
      console.log(date)
      
        fetch('https://kobobsapi.herokuapp.com/api/getDailyRapportInfoUser/', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(date)
          })
          .then( res => res.json())
          .then(
            res => {   
               
                console.log(res)
               if (res.length > 0)
               {
                 setLocalDate(date.dateInfo)
                 setOperationSending(res)
                 setModalShow3(false)
                 setIsTodayHistoric(false)
               }
               else{
                 setModalShow3(false)
                 setModalShow(true)
                 setIsTodayHistoric(false)
               }
            }
          )
          .catch( (error) =>
            {
                setModalShow(true)
                setModalShow3(false)
                console.log(error)
                setIsTodayHistoric(false)
            } )
       
                
    }

    const submitDate2Auto = (values)=>
    {
     const today = new Date().toLocaleString()
     console.log(today)
      setLocalDate('')
        setOperationSending([])
     setModalShow3(true)
     const date = { "dateInfo": today.slice(0,10),
                "agent_id":props.abonne.infoAbonne.agent_id}
    
      console.log(date)
      
        fetch('https://kobobsapi.herokuapp.com/api/getDailyRapportInfoUser/', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(date)
          })
          .then( res => res.json())
          .then(
            res => {   
               
                console.log(res)
               if (res.length > 0)
               {
                 setLocalDate(date.dateInfo)
                 setOperationSending(res)
                 setModalShow3(false)
                 setIsTodayHistoric(true)
               }
               else{
                 setModalShow3(false)
                 setModalShow(true)
               }
            }
          )
          .catch( (error) =>
            {
                setModalShow(true)
                setModalShow3(false)
                console.log(error)
            } )
       
                
    }

    useEffect(()=>
    {
       const interval =  setInterval(()=>setModalShow3(false),4000);
        return () => clearInterval(interval)
    },[])



     useEffect(()=>
    {  
      if((props.isAdmin)||(props.isStaff)) 
      {
       submitDateAuto()
      }
      
      else
      {
        submitDate2Auto()
      }
    },[])




     
    return (
        
        <>
        <Header dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
{isDesktop && <Container className='bg-light justify-content-center text-center  mb-5' style={{marginTop:50,width:1000}} >
<Row className='justify-content-center  pt-3' >
        <Col xs={6}>
        <p className='text-dark'><i><b>{message}</b></i></p>
        </Col>
    </Row>


    <Row className='justify-content-center'>
      <hr style={{color:"darkorange"}}></hr>
      <p className='couleur2'><b><u></u></b> </p>
    </Row>
 
     <Row className='justify-content-start text-start ' >
      <Col xs={4}>
      </Col>
    <Col xs={8} className='justify-content-start'>
        <p className='text-dark'>Kombo complets : <b className='text-dark'>{props.abonne.infoAbonne.prenom_expediteur} {props.abonne.infoAbonne.nom_expediteur} {props.abonne.infoAbonne.postnom_expediteur}</b> </p>
        <p className='text-dark'>Email nayo : <b className='text-dark '> {props.abonne.infoAbonne.email_expediteur}</b></p>
        <p className='text-dark'>Téléphone na yo: <b className='text-dark '> {props.abonne.infoAbonne.numero_expediteur}</b></p>
    </Col>

    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    {props.isStaff === true ?
    <Row>
       <Col xs={12} className='justify-content-center '>
       <Formik
      validationSchema={testValidation}
      onSubmit={(values)=>{
        submitDate(values)
      }}
      initialValues={{
        dateInfo:'',
      }}
    >
     {({handleSubmit, handleChange,handleBlur, values, touched, errors
         })=>(
    <Form noValidate onSubmit={handleSubmit}>
       
    <Row className='justify-content-center text-center mx-3 px-3 py-3' >
        <Col xs={8} className='justify-content-end text-start '>
        <Form.Label htmlFor="basic-url" className='text-start'><strong><i>Pona dati  oyo olingi kotala histoirique na yo :</i></strong></Form.Label>
        <InputGroup className="mb-3" controlId="formBasicText" >  
        <Form.Control name="dateInfo" value={values.dateInfo} onChange={handleChange} onBlur={handleBlur} type="date" placeholder='pona date'  />
        <InputGroup.Text ><Button type="submit" variant='dark'>
           <strong>Tala historique</strong>
        </Button>
        </InputGroup.Text>
         </InputGroup>
         <p className='text-danger'>{touched.dateInfo && errors.dateInfo}</p>
        </Col>
    </Row>



</Form>
)
}
</Formik>
</Col>
</Row> :
<Row>
       <Col xs={12} className='justify-content-center '>
       <Formik
      validationSchema={testValidation2}
      onSubmit={(values)=>{
        submitDate2(values)
      }}
      initialValues={{
        dateInfo:''
      }}
    >
     {({handleSubmit, handleChange,handleBlur, values, touched, errors
         })=>(
    <Form noValidate onSubmit={handleSubmit}>
    <Row className='justify-content-center text-center mx-3 px-3 py-3' >
        <Col xs={8} className='justify-content-end text-start '>
        <Form.Label htmlFor="basic-url" className='text-start'><strong><i>Pona dati moko boye oyo olingi kotala histoirique na yo :</i></strong></Form.Label>
        <InputGroup className="mb-3" controlId="formBasicText" >  
        <Form.Control name="dateInfo" value={values.dateInfo} onChange={handleChange} onBlur={handleBlur} type="date" placeholder='Selectionner la date'  />
        <InputGroup.Text ><Button type="submit" variant='dark'>
           <strong>tala histoirique</strong>
        </Button>
        </InputGroup.Text>
         </InputGroup>
         <p className='text-danger'>{touched.dateInfo && errors.dateInfo}</p>
        </Col>
    </Row>



</Form>
)
}
</Formik>
</Col>
</Row>
}

{localDate !=='' ? <div className='bg-light justify-content-start text-center' >
<Row className='justify-content-start ' >
  <Col xs={2}>
  </Col>
        {props.isTodayHistory===false ? <Col xs={10} className='text-start'>
       { props.isStaff === true ? <p ><i><b>historique nayo na date ya <span className='couleur2'>{localDate} :</span> </b></i></p> : 
       <p ><i><b>historique nayo na date ya <span className='couleur2'>{localDate} :</span> </b></i></p>}
        </Col> :
         <Col xs={10} className='text-start'>
         { props.isStaff === true ? <p ><i><b>historique nayo pona na date ya lelo le <span className='couleur2'>{localDate} :</span> </b></i></p> : 
         <p ><i><b>historique nayo ya lelo le <span className='couleur2'>{localDate} :</span> </b></i></p>}
          </Col>}
  </Row>
  { props.isAdmin === true ?
    <Row className='justify-content-end pb-3'>
      <Col xs={2}>
      </Col>
      <Col xs={4} >
        {nombre_sending_total > 0 ? <p className='text-dark py-2 text-start'><strong>Nombre yaba envois osali :</strong> <b className='couleur2'>  {nombre_sending_total}</b>  </p> : <span></span>}
        
        {nombre_envoie_valide > 0 ? <p className='text-dark py-2 text-start'><strong>Nombre yaba validations osali :</strong> <b className='couleur2'>  {nombre_envoie_valide}</b>  </p> : <span></span>}
         
         {nombre_retrait_paye > 0 ? <p className='text-dark py-2 text-start'><strong>nombre yaba retraits osali :</strong> <b className='couleur2'>  {nombre_retrait_paye}</b>  </p> :<span></span> }

         {nombre_operation_deleted > 0 ? <p className='text-dark py-2 text-start'><strong> nombre yaba opérations oyo o supprimées :</strong> <b className='couleur2'>  {nombre_operation_deleted}</b>  </p> :<span></span> }   
        </Col> 
         



       <Col xs={4}>
       {nombre_sending_total > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailTotal}>Tala ba détails </p></a> : <span></span>}
       
         {nombre_envoie_valide > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailValide}>Tala ba détails </p></a> :<span></span>}
       
        {nombre_retrait_paye > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailPaye}>Tala ba détails </p></a> : <span></span>}

        {nombre_operation_deleted > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailDeletion}>Tala ba détails </p></a> : <span></span>}  
        </Col> 

       <Col xs={2}>
      </Col>        
</Row> :

props.isStaff === true ?
    <Row className='justify-content-end pb-3'>
      <Col xs={2}>
      </Col>
      <Col xs={4}>
      {nombre_sending_total > 0 ? <p className='text-dark py-2 text-start'><strong>Nombre yaba envois osali :</strong> <b className='couleur2'>  {nombre_sending_total}</b>  </p> : <span></span>}
         </Col> 

         <Col xs={4}>
         {nombre_retrait_paye > 0 ? <p className='text-dark py-2 text-start'><strong>nombre yaba retraits osali :</strong> <b className='couleur2'>  {nombre_retrait_paye}</b>  </p> :<span></span> }
          </Col> 
         



       <Col xs={4}>
       {nombre_sending_total > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailTotal}>Tala ba détails </p></a> : <span></span>}
        </Col>
         
         <Col xs={4}>
         {nombre_retrait_paye > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailPaye}>Tala ba détails </p></a> : <span></span>}
          </Col> 
       <Col xs={2}>
      </Col>        
</Row> :

<Row className='justify-content-center pb-3' >
<Col xs={4}>
{nombre_sending_total > 0 ? <p className='text-dark py-2 text-start'><strong>Nombre yaba envois esalemi :</strong> <b className='couleur2'>  {nombre_sending_total}</b>  </p> : <span></span>}
         </Col>

 <Col xs={4}>
{nombre_sending_total > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailTotal}>Tala ba détails </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded' type="submit"  onClick={closeModal}>Voir Details </p></a>}

</Col>
</Row>
}
    </div>
    :
    <Row></Row>
}

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/home_lingala" style={{color:'white',textDecorationLine:'none'}}>
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
        <p className='text-dark'>Type de Rapport: <b className='couleur2'>Journalier</b> </p>
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

        </Col>

        <Col xs={6}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailTotal}>Voir Details </p></Link>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}><p className='btn-warning rounded-pill' type="submit" onClick={detailValide}>Voir Details </p></Link>

       
        </Col>
    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/home" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="warning" type="submit">
        Fermer
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
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} isTodayHistory = {isTodayHistory}/>
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
          bolibimsi 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.isTodayHistory === true ? <p className='couleur2'><b>historique eza te lelo le {new Date().toLocaleString().slice(0,10)}!</b> <br></br><span className='text-dark'>pona nanu osali opération ata moko te lelo</span>   
        </p>: <p className='couleur2'><b>historique eza te pona osali opération ata moko te na date oponi! </b> 
        </p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>kokanga</Button>
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

export default MyProfilLingala;