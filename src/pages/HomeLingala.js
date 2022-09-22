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
import {useEffect,useState} from 'react';



function HomeLingala()
{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

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

           </Row>


</Container>}

{isMobileOrTablet &&  <Container>
    
  <Row className='justify-content-center pb-3 pt-5 mt-5'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_client_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='dark'  style={{width:400,height:40}} className='btn-lg rounded-pill zoom'>
        <b className='text-light'><pre>Nbamla Liboso Na Tinda Mbongo</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/form_envoie_abonne_id_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='light'  style={{width:400,height:40}} className='btn-lg rounded-pill zoom'>
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

  </Container>
  }
<Footer />
</>
    )
}

export default HomeLingala;