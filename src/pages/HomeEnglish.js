import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useNavigate} from  'react-router-dom';
import Footer from './Footer';
import './Header.css'
import { useMediaQuery } from 'react-responsive';
import HeaderEnglish from './HeaderEnglish';
import LoginBoxEnglish from './LoginBoxEnglish';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ClipLoader from "react-spinners/ClipLoader";
import Modal from 'react-bootstrap/Modal';




function HomeEnglish(props)
{
  
  const[montant,setMontant] = useState({infoMontant :{
    montantTopay:''
      }})
  const[load,setLoad] = useState(false)
  const[resultMontant,setResultMontant] = useState("")
const navigate = useNavigate()

const connection = ()=>{
  props.setModalShow(true)
}

const establishedUserStatusClient = ()=>
{
  if(props.isLogged)
  {
    navigate('/form_envoie_abonne_english')  
  }
  else{
    props.setModalShow(true)
  }
 }

const establishedUserStatus = ()=>
{
  if(props.isLogged)
  {
    navigate('/menu_operation_envoi_english')  
  }
  else{
    props.setModalShow(true)
  }
 }

 const establishedUserStatus2 = ()=>
{
  if(props.isLogged && props.isStaff)
  {
    navigate('/my_profil_english')  
  }
  else{
    props.setModalShow(true)
  }
 }

 const establishedUserStatus3 = ()=>
{
  if(props.isLogged && props.isStaff)
  {
    navigate('/menu_management_english')  
  }
  else{
    props.setModalShow(true)
  }
 }

 const establishedUserStatus4 = ()=>
{
  if(props.isLogged && props.isStaff)
  {
    navigate('/form_retrait_operation_english')  
  }
  else{
    props.setModalShow(true)
  }
 }

 const establishedUserStatus5 = ()=>
{
  if(props.isLogged)
  {
    navigate('/form_retrait_info_english')  
  }
  else{
    props.setModalShow(true)
  }
 }
 const tauxEchanger = (e)=>
      {
        e.preventDefault()
        setLoad(true)
        fetch('https://openexchangerates.org/api/latest.json?app_id=41351d88e53f4f0c89785fba9fc60ca0&symbols=GBP', {
                  method:'GET',
                  headers: {'Content-Type': 'application/json'},
                 
                })
                .then( res => res.json())
                .then(
                  res => {  
                    if(montant.infoMontant.montantTopay >= 100)
                    {
                      setResultMontant(Number((Number(montant.infoMontant.montantTopay) * Number(res.rates.GBP + 0.03)) + ((Number(montant.infoMontant.montantTopay) * Number(res.rates.GBP + 0.03)) * 5)/100 + ((Number(montant.infoMontant.montantTopay) * Number(res.rates.GBP + 0.03)) * 1)/100 ).toFixed(2))
                    }
                    else{
                      setResultMontant(Number((Number(montant.infoMontant.montantTopay) * Number(res.rates.GBP + 0.03)) + (Number(5) * Number(res.rates.GBP + 0.03)) + (Number(1) * Number(res.rates.GBP + 0.03)) ).toFixed())
                    }
                    
                    setLoad(false) 
                  }
                )
                .catch( (error) =>
                  {
                      console.log(error)
                  } )
      }

      const inputChanged = (event)=>
      {
          const cred = montant.infoMontant;
          cred[event.target.name] = event.target.value;
          setMontant({infoMontant:cred})
      }
    
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    return (
<>
<HeaderEnglish isStaff={props.isStaff} abonne={props.abonne} dataUser={props.dataUser}  setDataValidation={props.setDataValidation} dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/> 
{isDesktop &&   <Container className='mb-5'> 
{props.isLogged === true ? <div>
  <Row className="text-center justify-content-center  mt-3 mb-3">
    <col md={2}>
    </col>
    <Col md={5} className="" >
    <div className=" radius" style={{width:"350px",border:"3px solid white"}}>
    <Form onSubmit={(e)=>tauxEchanger(e)}>
   <Row className='justify-content-center'>
       <Col xs = {6}>
       <Form.Label htmlFor="basic-url" className='text-light'><strong>Incl. tax & sending fees</strong></Form.Label>

       <InputGroup className="mb-3 mt-1">     
        <Form.Control aria-label="Amount (to the nearest dollar)" name='montantTopay' value={montant.infoMontant.montantTopay} type="text" onChange={e=>inputChanged(e)} required/>
        <InputGroup.Text>$</InputGroup.Text>
      </InputGroup>
       </Col>
   </Row>
   <ClipLoader color={"#ff8c00"} loading={load} size={50} /> 
   {resultMontant !== "" ? <p className='text-center'><b className='couleur2   p-2 rounded' style={{border:"2px solid white",fontSize:20}}>{Number(resultMontant).toFixed(2)} £</b> </p>:
   <span></span>}
  <Row className='pb-3'>
      <Col>
       <Button variant="warning" type='submit'  >
          Estimate Amount (£)
       </Button>
       </Col>
   </Row>
 
  {/*  <Row className='pb-3'>
      <Col>
      <Link to="/form_code_abonne_english" style={{textDecoration:"none"}}>
      <p ><b className='couleur2'>I forgot my subscriber ID ?</b></p>
      </Link>
       </Col>
   </Row>*/}
</Form>
</div>
    </Col>
    <Col md={5} className="my-auto text-start">
      <h1 className='display-6  couleur2' >
      
      <strong><b> With  KBSTrans  ,<br></br>
          your loved ones will always get your money  quickly.
          </b></strong>
      </h1>

    </Col >

  </Row>
   {props.isStaff === true ? <Row className="text-center justify-content-center mt-2 mb-5">

         <Col md={4} className="my-auto text-center">
          
            <Button  onClick={establishedUserStatus} variant="outline-light" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
           <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
            </svg><br></br>
            <b className=" display-6"><h1><strong> Send Money</strong></h1></b>
            </Button>
          </Col>

          <Col mdmd={4} className="my-auto text-center">  
            <Button onClick={establishedUserStatus4}  variant="outline-light" style={{width:300,height:300}}  className=" btn-lg rounded-pill zoom ">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
           <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
           </svg><br></br>
            <b className=" display-6"><h1><strong>Make a Withdrawal</strong></h1></b>
           </Button>
            </Col>

          {/*<Col mdmd={4} className="my-auto text-center">  
            <Button onClick={establishedUserStatus2}  variant="outline-light" style={{width:300,height:300,border:'4px solid white'}}  className=" btn-lg rounded-pill zoom ">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg><br></br>
            <b className=" display-6"><strong>Track your transfer</strong></b>
           </Button>
        </Col>*/}
          
           {props.isAdmin===true ?  <Col mdmd={4} className="my-auto text-center">  
            <Button onClick={establishedUserStatus3}  variant="outline-light" style={{width:300,height:300}}  className=" btn-lg rounded-pill zoom ">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
           <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
             </svg><br></br>
            <b className=" display-6 "><h1><strong>operation management</strong></h1></b>
           </Button>
            </Col> :
            <Col mdmd={4} className="my-auto text-center">  
            <Button onClick={establishedUserStatus2}  variant="outline-light" style={{width:300,height:300}}  className=" btn-lg rounded-pill zoom ">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16">
  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
</svg><br></br>
            <b className=" display-6"><strong>Historic</strong></b>
           </Button>
            </Col>}
            <div className='mt-5 mb-5'>
            </div>
           </Row>
            :

<Row className="text-center justify-content-center mt-2 mb-5">

<Col md={6} className="my-auto text-center">
 
   <Button onClick={establishedUserStatusClient}  variant="outline-light" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
   <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
   </svg><br></br>
   <b className=" display-6"><strong> Send Money</strong></b>
   </Button>
 </Col>

   <Col md={6} className="my-auto text-center ">  
   <Button onClick={establishedUserStatus5}  variant="outline-light" style={{width:300,height:300}}  className=" btn-lg rounded-pill zoom ">
   <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
   </svg><br></br>
   <b className=" display-6"><strong>Track your transfer</strong></b>
  </Button>
   </Col>

<div className='mt-5 mb-5'>
            </div>
  </Row>
  
}
</div>
: 
<Container className='bg-dark justify-content-center text-center pt-2  rounded' style={{marginTop:"10%",backgroundColor:'grey',width:650}}>
  <Row className='justify-content-center   py-5' >
        <Col xs={12}>
        <h1 className='couleur2'>
          KOBO BUSINESS SERVICES
        </h1>
         </Col>
          <Col  xs={12}>    
          <Link to="" style={{color:'white',textDecorationLine:'none'}}> 
          
          <Button variant="light my-3" type="submit" onClick={e=>connection(e)}>
          <strong>Login</strong>
          </Button>
          </Link>
          </Col>

          <Col  xs={12}>    
          <Link to="/form_envoie_abonne_id_english" style={{color:'white',textDecorationLine:'none'}}> 
          <u className='text-light'><p><strong>Are you a subscriber ? click here </strong></p></u>
          </Link>
          </Col>
      </Row>
  </Container>
}
</Container> 
}

{isMobileOrTablet && <Container>
    
  {props.isLogged === true ?
  <div>
<Row className="text-center justify-content-center  mt-2">
    
    <Col md={12} className="my-auto text-start">
      <h1 className='display-6  couleur2' >
      
      <strong><b> With  KBSTrans  ,<br></br>
          your loved ones will always <br></br>get your money  quickly.
          </b></strong>
      </h1>

    </Col >

  </Row>

<Row className=' justify-content-center  mt-5'>
{props.isStaff === true ? <Col xs = {12} className=' text-center'>    
        <Button onClick={establishedUserStatus} variant='outline-light py-4 '  style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
           <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
            </svg><br></br>
        <b className=" display-6"><strong> Send Money</strong></b>
        </Button>
      
        </Col> : 
       <Col xs = {12} className=' text-center'>
       <Button onClick={establishedUserStatusClient} variant='outline-light py-4 '  style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
       <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
           </svg><br></br>
       <b className=" display-6"><strong> Send Money</strong></b>
       </Button>
       </Col> }
    </Row>
    </div> :
    <Container className='bg-dark justify-content-center text-center pt-2  rounded ' style={{backgroundColor:'grey',marginTop:130}}>
    <Row className='justify-content-center   py-5' >
          <Col xs={12}>
          <h1 className='couleur2'>
            KOBO BUSINESS SERVICES
          </h1>
           </Col>
            <Col  xs={12}>    
            <Link to="" style={{color:'white',textDecorationLine:'none'}}> 
            
            <Button variant="light my-3" type="submit" onClick={e=>connection(e)}>
            <strong>Login</strong>
            </Button>
            </Link>
            </Col>

            <Col  xs={12}>    
          <Link to="/form_envoie_abonne_id_english" style={{color:'white',textDecorationLine:'none'}}> 
          <u className='text-light'><p><strong>Are you a subscriber ? click here </strong></p></u>
          </Link>
          </Col>
        </Row>
    </Container>
    }
  </Container>
  }
    <MyVerticallyCenteredModal2 show={props.modalShowRetrait} onHide={() => props.setModalShowRetrait(false)} />
   <MyVerticallyCenteredModal envoie3={props.envoie3} show={props.modalShowEnvoi} onHide={() => props.setModalShowEnvoi(false)} />
 <LoginBoxEnglish dataUser={props.dataUser} dataAbonne={props.dataAbonne} language2={props.language2} setLanguage2={props.setLanguage2} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} modalShow={props.modalShow} modalShow4={props.modalShow4} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
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
        Thank you for using KBStrans
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <b className='text-success'>Your sending operation has been successful </b>   
      </Modal.Body>
      <Modal.Footer>
      <p >code : <b className='text-success  p-2' style={{border:"2px solid black"}}>{props.envoie3.infoEnvoie.code_retrait}</b>   
        </p>
        <Button variant='warning' onClick={props.onHide}>Ok</Button>

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
        Payment Successful
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-success'><b>the withdrawal code has been paid successfully</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        
        <Button variant='warning' onClick={props.onHide}>close</Button>

      </Modal.Footer>
    </Modal>
  );
}



export default HomeEnglish;