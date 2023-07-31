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
//import SessionOut from './SessionOut';
import HeaderFrench from './HeaderFrench';
import HeaderEnglish from './HeaderEnglish';


function MenuGestionOperationsRetraitEnglish(props)
{

    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });    
    return (
<>
<HeaderEnglish dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/> 
{isDesktop && <Container >
    <Row className='mt-3'>
        <Col xs={12} className="text-start text-light">
            <p><Link to='/menu_management_english' style={{textDecoration:"none"}}><b className='text-light'>Operation Management &gt;&gt;</b></Link> <Link to='/menu_operation_retrait_english' style={{textDecoration:"none"}}><b className='text-warning'>Withdrawals Operations </b></Link></p>
        </Col>
    </Row>
   
    <Row className='justify-content-center pb-3 pt-5 mt-5'>
        <Col xs = {"auto"}>
        <Link to="/form_retrait_operation_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='btn--blue'  style={{width:400,height:80,border:"2px solid white"}} className='btn-lg btn--blue rounded-pill zoom py-4'>
        <b className='text-light'><pre>Make a withdrawal</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/menu_rapport_retrait_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='btn--blue'  style={{width:400,height:80,border:"2px solid white"}} className='btn-lg btn--blue rounded-pill zoom py-4'>
        <b className='text-light'><pre>Operation Report Withdrawals</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  

</Container> }

{isMobileOrTablet &&  <Container >
    <Row className='mt-3'>
        <Col xs={"auto"} className="text-start text-light">
            <p><Link to='/menu_management_english' style={{textDecoration:"none"}}><b className='text-light'>Operation Management &gt;&gt;</b></Link> <Link to='/menu_operation_retrait_english' style={{textDecoration:"none"}}><b className='text-warning'>Withdrawals Operations </b></Link></p>
        </Col>
    </Row>
   
    <Row className='justify-content-center pb-3 pt-5 mt-5'>
        <Col xs = {"auto"}>
        <Link to="/form_retrait_operation_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='btn--blue'  style={{width:400,height:80,border:"2px solid white"}} className='btn-lg btn--blue rounded-pill zoom py-4'>
        <b className='text-light'><pre>Make a withdrawal</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  


    <Row className='justify-content-center pb-3'>
        <Col xs = {"auto"}>
        <Link to="/menu_rapport_retrait_english" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant='btn--blue'  style={{width:400,height:80,border:"2px solid white"}} className='btn-lg btn--blue rounded-pill zoom py-4'>
        <b className='text-light'><pre>Operation Report Withdrawals</pre></b>
        </Button>
        </Link>
        </Col>
    </Row>
  

</Container> }

<Footer />
</>
    )
}

export default MenuGestionOperationsRetraitEnglish;