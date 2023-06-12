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
<Header modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} userID={props.userID} setUserId={props.setUserId} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username}/>
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
  
    <Row className="text-center justify-content-center mt-2 mb-5">
      {/*
            <Col md={4} className="my-auto text-center">
          <Link to="/form_envoie_client" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="dark" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <b className="text-light">Nbamla Liboso Na Tinda Mbongo</b>
            </Button>
          </Link>
            </Col>

            <Col mdmd={4} className="my-auto text-center">
            <Link to="/form_envoie_abonne_id" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="light" style={{width:300,height:300}} className='couleur2 btn-lg rounded-pill zoom '>
            <b  className="couleur2">Naza déjà Abonné </b>
           </Button>
            </Link>  
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/form_retrait_info" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="dark" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <b className="text-light">Landela transfert nayo</b>
            </Button>
             </Link>
            </Col>
*/}

         <Col md={6} className="my-auto text-center">
            <Button onClick={()=>establishedUserStatus()} variant="outline-light" style={{width:300,height:300,border:'4px solid white'}} className='btn-lg rounded-pill zoom'>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
           <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
            </svg><br></br>
            <b className=" display-6"><strong>Tinda Mbongo</strong></b>
            </Button>
            </Col>

            <Col mdmd={6} className="my-auto text-center">
            <Button onClick={()=>establishedUserStatus2()} variant="outline-light" style={{width:300,height:300,border:'4px solid white'}}  className=" btn-lg rounded-pill zoom ">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg><br></br>
            <b className=" display-6"><strong>Landela transfert nayo</strong></b>
           </Button>
            </Col>
           </Row>


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
        <Link to="/form_envoie_client" style={{color:'white',textDecorationLine:'none'}}>
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
   <LoginBoxLingala setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} modalShow={props.modalShow} modalShow4={props.modalShow4} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username}/>
<Footer />
</>
    )
}

export default HomeLingala;