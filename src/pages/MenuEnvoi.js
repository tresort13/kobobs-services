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



function MenuEnvoi(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    return (
<>
<Header  langue={props.langue}/>
{isDesktop && <Container>
    
   
  
    <Row className="text-center justify-content-center">
            <Col md={4} className="my-auto text-center">
            <Link to="/form_envoie_client" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>nbamla liboso yako Tinda Mbongo</b></i>
            </Button>
            </Link>    
            </Col>

            <Col mdmd={4} className="my-auto text-center">
            <Link to="/form_envoie_abonne_id" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Esi na tindala mutu mbongo awa</b></i>
           </Button>
            </Link>            
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/form_envoie_abonne_id" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="text-secondary"><b>Landela transfer nayo</b></i>
            </Button>
             </Link>     
            </Col>

           </Row>


</Container>}

{isMobileOrTablet &&  <Container>
    
    <Row className="text-center justify-content-center">
            <Col md={12} className="my-auto text-center">
            <Link to="" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="warning" style={{width:350,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="couleur2"><b>MENU</b></i>
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

export default MenuEnvoi;