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
function MyProfilEnglish(props)
{

    const [message,setMessage] = useState("My Historic ")
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const[abonneInfo,setAbonneInfo] = useState([])
    const[operation,setOperation] = useState([])
    const [localDate,setLocalDate] = useState('')
    const [operationType,setOperationType] = useState('')
    const navigate = useNavigate()


    
    const { Formik } = formik;

  const testValidation = yup.object().shape({
    dateInfo : yup.string().required('required field'),
    operationType : yup.string().required('required field')
  });

  const testValidation2 = yup.object().shape({
    dateInfo : yup.string().required('required field'),
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

     

     
     const nombre_sending_total =  operation.reduce((total,value)=>
     {
        total = total + 1
        return total
     },0)


     const nombre_envoie_valide = operation.filter((value)=>
     {
       return value.status_retrait !== "code retrait en attente de validation"
     }).reduce((total,value)=>
     {
       total = total + 1
       return total
     },0)

     const nombre_envoie_nonvalide = operation.filter((value)=>
     {
       return value.status_retrait === "code retrait en attente de validation"
     }).reduce((total,value)=>
     {
       total = total + 1
       return total
     },0)

     
     const nombre_retrait_paye = operation.filter((value)=>
     {
       return value.status_retrait === "Code Retrait Payé"
     }).reduce((total,value)=>
     {
       total = total + 1
       return total
     },0)

   

     

     const detailValide =()=>
     {
      props.dataDetailEnvoieTotal(operation.filter((value)=>
      {
        return value.status_retrait !== "code retrait en attente de validation"
      }))
      navigate('/details_envois_info')
     }

     const detailTotal =()=>
     {
      props.dataDetailEnvoieTotal(operation)
      navigate('/details_envois_info')
     }

     const detailPaye =()=>
     {
      props.dataDetailEnvoieTotal(operation.filter((value)=>
      {
        return value.status_retrait === "Code Retrait Payé"
      }))
      navigate('/details_envois_info')
     }

     const detailNonValide =()=>
     {
      props.dataDetailEnvoieTotal(operation.filter((value)=>
      {
        return value.status_retrait === "code retrait en attente de validation"
      }))

      navigate('/details_envois_info')
       
     }

     const submitDate = (values)=>
     {
      setLocalDate('')
      setOperationType('')
      setOperation([])
      setModalShow3(true)
      const values_replace = values.dateInfo.replace(/-/g,'/')
      console.log(values_replace)
      const year = values_replace.slice(0,4)
      const mois = values_replace.slice(4,8)
      const day = values_replace.slice(8,10)
      const date = { "dateInfo": day.concat("",mois,year),
                 "agent_id":props.abonne.infoAbonne.agent_id,
                "operationType":values.operationType}
     
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
                if (res.length > 0)
                {
                  setLocalDate(date.dateInfo)
                  setOperationType(date.operationType)
                  setOperation(res)
                  setModalShow3(false)
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
         setOperation([])
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
                  setOperation(res)
                  setModalShow3(false)
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


     
    return (
        
        <>
        <Header username={props.username} isAdmin={props.isAdmin}/>
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
        <p className='text-dark'>Full Name : <b className='text-dark'>{props.abonne.infoAbonne.prenom_expediteur} {props.abonne.infoAbonne.nom_expediteur} {props.abonne.infoAbonne.postnom_expediteur}</b> </p>
        <p className='text-dark'>Email : <b className='text-dark '> {props.abonne.infoAbonne.email_expediteur}</b></p>
        <p className='text-dark'>Mobile number: <b className='text-dark '> {props.abonne.infoAbonne.numero_expediteur}</b></p>
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
        operationType :''
      }}
    >
     {({handleSubmit, handleChange,handleBlur, values, touched, errors
         })=>(
    <Form noValidate onSubmit={handleSubmit}>
        <Row className='justify-content-center  py-2' >
       <Col xs={4}>
        <i><b className='text-dark text-center'>Select type of operation to check : </b></i>
        </Col>
        <Col xs={4} >
     <div ><Form.Select aria-label="Default select example" name='operationType'   value={values.operationType} onChange={handleChange}>
        <option value="">Select operation</option>
         <option value="sending">sending</option>
         <option value="validation">validation</option>
         <option value="withdrawal">withdrawal</option>
         </Form.Select>
         <p className='text-danger'>{touched.operationType && errors.operationType}</p>
       </div> 
      </Col>
      </Row> 
        
    <Row className='justify-content-center text-center mx-3 px-3 py-3' >
        <Col xs={8} className='justify-content-end text-start '>
        <Form.Label htmlFor="basic-url" className='text-start'><strong><i>Select the date you want to check on :</i></strong></Form.Label>
        <InputGroup className="mb-3" controlId="formBasicText" >  
        <Form.Control name="dateInfo" value={values.dateInfo} onChange={handleChange} onBlur={handleBlur} type="date" placeholder='Select  date'  />
        <InputGroup.Text ><Button type="submit" variant='dark'>
           <strong>check historic</strong>
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
        <Form.Label htmlFor="basic-url" className='text-start'><strong><i>Select the date you want to check on :</i></strong></Form.Label>
        <InputGroup className="mb-3" controlId="formBasicText" >  
        <Form.Control name="dateInfo" value={values.dateInfo} onChange={handleChange} onBlur={handleBlur} type="date" placeholder='Select  date'  />
        <InputGroup.Text ><Button type="submit" variant='dark'>
           <strong>check historic</strong>
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

 {operation.length > 0 ?  <div className='bg-light justify-content-start text-center' >
<Row className='justify-content-start ' >
  <Col xs={2}>
  </Col>
        <Col xs={10} className='text-start'>
       { props.isStaff === true ? <p ><i><b>Your historic on <span className='couleur2'>{localDate} :</span> </b></i></p> : 
       <p ><i><b>Your historic  on <span className='couleur2'>{localDate} :</span> </b></i></p>}
        </Col>
    </Row>
  { props.isStaff === true ?
    <Row className='justify-content-end pb-3'>
      <Col xs={2}>
      </Col>
       { operationType === "sending" ?  <Col xs={4}>
        {nombre_sending_total > 0 ? <p className='text-dark py-2 text-start'><strong>Number of sendings made :</strong> <b className='couleur2'>  {nombre_sending_total}</b>  </p> : <span></span>}
         </Col> :
         operationType === "validation" ? 
         <Col xs={4}>
        {nombre_envoie_valide > 0 ? <p className='text-dark py-2 text-start'><strong>Number of validations  made :</strong> <b className='couleur2'>  {nombre_envoie_valide}</b>  </p> : <span></span>}
         </Col> :
         <Col xs={4}>
         {nombre_retrait_paye > 0 ? <p className='text-dark py-2 text-center'><strong> number of withdrawals made :</strong> <b className='couleur2'>  {nombre_retrait_paye}</b>  </p> :<span></span> }
        
          </Col> 
         }



       { operationType === "sending" ?  <Col xs={4}>
       {nombre_sending_total > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailTotal}>Check details </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded' type="submit"  onClick={closeModal}>Voir Details </p></a>}
         </Col> :
         operationType === "validation" ? 
         <Col xs={4}>
         {nombre_envoie_valide > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailValide}>Check details </p></a> :<span></span>}
         </Col> :
         <Col xs={4}>
        {nombre_retrait_paye > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailPaye}>Check details </p></a> : <span></span>}
        
          </Col> 
         }
       <Col xs={2}>
      </Col>
         
</Row> :

<Row className='justify-content-center pb-3' >
<Col xs={4}>
{nombre_sending_total > 0 ? <p className='text-dark py-2 text-start'><strong>Number of sendings made :</strong> <b className='couleur2'>  {nombre_sending_total}</b>  </p> : <span></span>}
 </Col>

 <Col xs={4}>
{nombre_sending_total > 0 ? <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded py-2' type="submit" onClick={detailTotal}>Check details </p></a> : <a style={{color:'white',textDecorationLine:'none'}}><p className='btn--blue rounded' type="submit"  onClick={closeModal}>Voir Details </p></a>}

</Col>
</Row>
}
    </div>
    :
    <span></span>

}

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
    </Row>
    <Row className='justify-content-center pb-3' >
        <Col xs={6}>
        <Link to="/" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="danger" type="submit">
        close
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
        close
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
      {/* <SessionOut setIsadmin={props.setIsadmin}/>*/} 
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
          sorry 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='couleur2'><b>you have not carried out any action on this date !</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>close</Button>
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

export default MyProfilEnglish;