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



function HomeEnglish()
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    return (
<>
<HeaderEnglish />
{isDesktop && <Container>  
    <Row className="text-center justify-content-center pt-5 mt-5">
            <Col md={4} className="my-auto text-center">
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
            </Col>

           </Row>


</Container>}

{isMobileOrTablet &&  <Container>
    


      <Row className='justify-content-center pb-3 pt-5 mt-5'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_client_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='dark'  style={{width:400,height:80}} className='btn-lg rounded-pill zoom'>
        <b className='text-light'><pre>First time to send money</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3'>
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

  </Container>
  }
<Footer />
</>
    )
}

export default HomeEnglish;