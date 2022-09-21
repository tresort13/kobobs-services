import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from  'react-router-dom';
import Footer from './Footer';
import './Header.css'
import { useMediaQuery } from 'react-responsive';
import HeaderFrench from './HeaderFrench';



function HomeFrench()
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    return (
<>
<HeaderFrench />
{isDesktop && <Container>  
    <Row className="text-center justify-content-center pt-5 mt-5">
            <Col md={4} className="my-auto text-center">
          <Link to="/form_envoie_client_french" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="dark" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <b className="text-light">Nouveau client</b>
            </Button>
          </Link>
            </Col>

            <Col mdmd={4} className="my-auto text-center">
            <Link to="/form_envoie_abonne_id_french" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="dark" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <b className="text-light">Je suis déjà abonné</b>
           </Button>
            </Link>  
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/form_retrait_info_french" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="dark" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <b className="text-light">Suivre mon transfert</b>
            </Button>
             </Link>
            </Col>

           </Row>


</Container>}

{isMobileOrTablet &&  <Container>
    
    <Row className="text-center justify-content-center pt-5 mt-5">
            <Col md={12} className="my-auto text-center">
            <Link to="" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="dark" style={{width:350,height:300}} className='btn-lg rounded-pill zoom'>
            <b className="text-light">Envoyer l'argent</b>
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

export default HomeFrench;