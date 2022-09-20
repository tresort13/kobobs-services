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



function Home()
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    return (
<>
<Header />
{isDesktop && <Container>  
    <Row className="text-center justify-content-center pt-5 mt-5">
            <Col md={4} className="my-auto text-center">
          <Link to="/form_envoie_client" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="outline-dark" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <b className="text-light">Nbamla liboso Na Tinda Mbongo</b>
            </Button>
          </Link>
            </Col>

            <Col mdmd={4} className="my-auto text-center">
            <Link to="/form_envoie_abonne_id" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="outline-dark" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <b className="text-light">Esi na tindala mutu mbongo </b>
           </Button>
            </Link>  
            </Col>

            <Col md={4} className="my-auto text-center">
            <Link to="/form_envoie_abonne_id" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="outline-dark" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <b className="text-light">Landela transfer nayo</b>
            </Button>
             </Link>
            </Col>

           </Row>


</Container>}

{isMobileOrTablet &&  <Container>
    
    <Row className="text-center justify-content-center pt-5 mt-5">
            <Col md={12} className="my-auto text-center">
            <Link to="" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="outline-dark" style={{width:350,height:300}} className='btn-lg rounded-pill zoom'>
            <b className="text-light">Tinda Mbongo</b>
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

export default Home;