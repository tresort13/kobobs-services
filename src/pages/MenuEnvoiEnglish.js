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
{isDesktop && <Container className='bg-dark justify-content-center text-center bordure' style={{marginTop:100,width:750}} >
    
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

{isMobileOrTablet && <Container className='bg-dark my-auto justify-content-center text-center bordure mb-5' style={{marginTop:30}} >
    <Row className='justify-content-center mb-5 pt-3' >
        <Col xs={"auto"}>
            <Link to="/home">
            <Image src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:130}}></Image>
            </Link>
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_client_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='light'  style={{width:550,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='couleur2'><pre>nbamla na ngai ya liboso yako Tinda Mbongo awa</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_abonne_id_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='light'  style={{width:550,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='couleur2'><pre>Esi na tindala mutu mbongo awa</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/form_retrait_info_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='light'  style={{width:550,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='couleur2'><pre>Na Lingi na yeba status ya code retrait na ngai</pre></b>
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