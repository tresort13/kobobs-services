import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {Link} from  'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Header.css'
import { useMediaQuery } from 'react-responsive';
import HeaderEnglish from './HeaderEnglish';



function HomeEnglish(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    return (
<>
<HeaderEnglish setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged}/> 
{isDesktop && <Container > 
  <Row className="text-center justify-content-center  mt-3">
    <Col md={1}>
    </Col>
    <Col md={6}>
    </Col>
    <Col md={5} className="my-auto text-start">
      <h1 className='display-6  couleur2' >
      
      <strong><b> With  KBSTrans  ,<br></br>
          your loved ones will always get your money  quickly
          </b></strong>
      </h1>

    </Col >

  </Row>
    <Row className="text-center justify-content-center mt-2 mb-5">
        {/*    <Col md={4} className="my-auto text-center">
          <Link to="/form_envoie_client_english" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="dark" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <b className="text-light">First time to send money</b>
            </Button>
          </Link>
            </Col>

            <Col mdmd={4} className="my-auto text-center">
            <Link to="/form_envoie_abonne_id_english" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="light"  style={{width:300,height:300}} className=" btn-lg rounded-pill zoom ">
            <b className="couleur2">I am already a subscriber </b>
           </Button>
            </Link>  
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/form_retrait_info_english" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="dark" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <b className="text-light">Track your transfer</b>
            </Button>
             </Link>
</Col>*/}
         <Col md={6} className="my-auto text-center">
          <Link to="/form_envoie_client_english" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="outline-light" style={{width:300,height:300,border:'4px solid white'}} className='btn-lg rounded-pill zoom'>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
           <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
            </svg><br></br>
            <b className=" display-6"><strong> Send Money</strong></b>
            </Button>
          </Link>
            </Col>

            <Col mdmd={6} className="my-auto text-center">
            <Link to="/form_envoie_abonne_id_english" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="outline-light" style={{width:300,height:300,border:'4px solid white'}}  className=" btn-lg rounded-pill zoom ">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg><br></br>
            <b className=" display-6"><strong>Track your transfer</strong></b>
           </Button>
            </Link>  
            </Col>

           </Row>


</Container>}

{isMobileOrTablet &&  <Container>
    

{/*
      <Row className='justify-content-center pb-3 pt-5 mt-5'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_client_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='dark'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-light'><pre>First time to send money</pre></b>
        </Button>
        </Link>
        </Col>
</Row> 
  


    <Row className='justify-content-center pb-3 pt-5 mt-5'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_abonne_id_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='light'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='couleur2'><pre>I am already a subscriber</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/form_retrait_info_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='dark'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-light'><pre>Track your transfer</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
    */}

<Row className="text-center justify-content-center  mt-2">
    
    <Col md={12} className="my-auto text-start">
      <h1 className='display-6  couleur2' >
      
      <strong><b> With  KBSTrans  ,<br></br>
          your loved ones will always <br></br>get your money  quickly
          </b></strong>
      </h1>

    </Col >

  </Row>

<Row className=' justify-content-center  mt-5'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_abonne_id_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='outline-light py-4 '  style={{width:300,height:300,border:'4px solid white'}} className='btn-lg rounded-pill zoom'>
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
           <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
            </svg><br></br>
        <b className=" display-6"><strong> Send Money</strong></b>
        </Button>
        </Link>
        </Col>
    </Row>

  </Container>
  }
<Footer />
</>
    )
}

export default HomeEnglish;