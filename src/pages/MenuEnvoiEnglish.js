import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {Link} from  'react-router-dom';
import HeaderEnglish from './HeaderEnglish';
import Footer from './Footer';
import './Header.css'
import { useMediaQuery } from 'react-responsive';



function MenuEnvoiEnglish(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    return (
<>
<HeaderEnglish  langue={props.langue}/>
{isDesktop && <Container className='bg-dark justify-content-center text-center bordure mt-5' >
    
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_client_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  style={{width:550,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-dark'><pre>First Time to Use this app to send money</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_abonne_id_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  style={{width:550,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-dark'><pre>I have already used this app to send money</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/form_retrait_info_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  style={{width:550,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-dark'><pre>Check the status of your unique tracking number</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  
  

</Container>}

{isMobileOrTablet && <Container className='bg-dark justify-content-center text-center bordure' style={{marginTop:100,width:750}} >
    
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_client_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-dark'><pre>First Time to send money</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_abonne_id_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-dark'><pre>I have already sent money </pre></b>
        </Button>
        </Link>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/form_retrait_info_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='warning'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-dark'><pre>Track your transfer</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  
  

</Container>}
<Footer />
</>
    )
}

export default MenuEnvoiEnglish;