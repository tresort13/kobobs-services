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



function Home(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    return (
<>
<Header version={props.version} changeVersion={props.changeVersion}/>
{isDesktop && <Container>  
    <Row className="text-center justify-content-center pt-5 mt-5">
            <Col md={4} className="my-auto text-center">
          { props.version === "Lingala" ? <Link to="/form_envoie_client" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="outline-light" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="couleur2"><b>Nbamla liboso Na Tinda Mbongo</b></i>
            </Button>
            </Link> :  
            <Link to="/form_envoie_client_english" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="outline-light" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="couleur2"><b>First time to send money</b></i>
            </Button></Link>
           }  
            </Col>

            <Col mdmd={4} className="my-auto text-center">
            {props.version === "Lingala" ? <Link to="/form_envoie_abonne_id" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="outline-light" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="couleur2"><b>Esi na tindala mutu mbongo </b></i>
           </Button>
            </Link> :
            <Link to="/form_envoie_abonne_id_english" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="outline-light" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="couleur2"><b>I have already sent money</b></i>
           </Button>
            </Link>
             }           
            </Col>

            <Col md={4} className="my-auto text-center">
            {props.version === "Lingala" ? <Link to="/form_envoie_abonne_id" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="outline-light" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="couleur2"><b>Landela transfer nayo</b></i>
            </Button>
             </Link> :
              <Link to="/form_envoie_abonne_id" style={{color:'white',textDecorationLine:'none'}}>
              <Button variant="outline-light" style={{width:300,height:300}} className='btn-lg rounded-pill zoom'>
              <i className="couleur2"><b>Track your transfer</b></i>
              </Button>
               </Link>}    
            </Col>

           </Row>


</Container>}

{isMobileOrTablet &&  <Container>
    
    <Row className="text-center justify-content-center pt-5 mt-5">
            <Col md={12} className="my-auto text-center">
            <Link to="" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="outline-light" style={{width:350,height:300}} className='btn-lg rounded-pill zoom'>
            <i className="couleur2"><b>Tinda Mbongo</b></i>
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