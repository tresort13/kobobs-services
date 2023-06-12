import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useNavigate} from  'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Header.css'
import { useMediaQuery } from 'react-responsive';
import LoginBoxLingala from './LoginBoxLingala';



function HomeLingala(props)
{
  const navigate = useNavigate()

  const establishedUserStatus = ()=>
  {
    if(props.isLogged)
    {
      navigate('/form_envoie_client')  
    }
    else{
      props.setModalShow(true)
    }
   }
  
   const establishedUserStatus2 = ()=>
  {
    if(props.isLogged)
    {
      navigate('/form_retrait_info')  
    }
    else{
      props.setModalShow(true)
    }
   }

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    return (
<>
<Header isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
{isDesktop && <Container>  
  <Row className="text-center justify-content-center  mt-3">
    <Col md={1}>
    </Col>
    <Col md={6}>
    </Col>
    <Col md={5} className="my-auto text-start">
      <h1 className='display-6  couleur2' >
      
      <strong><b>Na KBSTrans  ,<br></br>
      ba oyo yayo bako zwaka kaka mbongo okotinda na lobango.
          </b></strong>
      </h1>

    </Col >

  </Row>
  
  {props.setIsStaff ? <Row className="text-center justify-content-center mt-2 mb-5">

         <Col md={4} className="my-auto text-center">
            <Button  variant="outline-light" style={{width:300,height:300,border:'4px solid white'}} className='btn-lg rounded-pill zoom'>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
           <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
            </svg><br></br>
            <b className=" display-6"><strong>Tinda Mbongo</strong></b>
            </Button>
            </Col>

            <Col mdmd={4} className="my-auto text-center">
            <Button  variant="outline-light" style={{width:300,height:300,border:'4px solid white'}}  className=" btn-lg rounded-pill zoom ">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg><br></br>
            <b className=" display-6"><strong>Landela transfert nayo</strong></b>
           </Button>
            </Col>

            <Col mdmd={4} className="my-auto text-center">
            <Button  variant="outline-light" style={{width:300,height:300,border:'4px solid white'}}  className=" btn-lg rounded-pill zoom ">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
            </svg><br></br>
            <b className=" display-6"><strong>gestion ya ba opérations</strong></b>
           </Button>
            </Col>
           </Row> :

<Row className="text-center justify-content-center mt-2 mb-5">

<Col md={6} className="my-auto text-center">
   <Button  variant="outline-light" style={{width:300,height:300,border:'4px solid white'}} className='btn-lg rounded-pill zoom'>
   <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
   </svg><br></br>
   <b className=" display-6"><strong>Tinda Mbongo</strong></b>
   </Button>
   </Col>

   <Col md={6} className="my-auto text-center">
   <Button  variant="outline-light" style={{width:300,height:300,border:'4px solid white'}}  className=" btn-lg rounded-pill zoom ">
   <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
   </svg><br></br>
   <b className=" display-6"><strong>Landela transfert nayo</strong></b>
  </Button>
   </Col>
  </Row>
}


</Container>}

{isMobileOrTablet &&  <Container>
   {/* 
  <Row className='justify-content-center pb-3 pt-5 mt-5'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_client_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='dark'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-light'><pre>Nbamla Liboso Na Tinda Mbongo</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_abonne_id_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='light'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='couleur2'><pre>Naza déjà Abonné</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/form_retrait_info_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='dark'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-light'><pre>Landela transfert nayo</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
*/} 

<Row className="text-center justify-content-center  mt-2">
    
    <Col md={12} className="my-auto text-start">
      <h1 className='display-6  couleur2' >
      
      <strong><b> Na KBSTrans,<br></br>
          ba oyo yayo bako zwaka kaka <br></br> mbongo okotinda na lobango.
          </b></strong>
      </h1>

    </Col >

  </Row>

<Row className=' justify-content-center  mt-5'>
        <Col xs = {"auto"}>
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='outline-light py-4 '  style={{width:300,height:300,border:'4px solid white'}} className='btn-lg rounded-pill zoom'>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
           <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
            </svg><br></br>
        <b className=" display-6"><strong> Tinda Mbongo</strong></b>
        </Button>
        </Link>
        </Col>
    </Row>
  </Container>
  }
   <LoginBoxLingala language2={props.language2} setLanguage2={props.setLanguage2} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} modalShow={props.modalShow} modalShow4={props.modalShow4} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} setLanguage={props.setLanguage}/>
<Footer />
</>
    )
}

export default HomeLingala;