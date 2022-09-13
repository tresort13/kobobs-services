import Container from "react-bootstrap/esm/Container";
import { Link,useNavigate} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.css';
import  './Header.css';
import {useEffect,useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import { useMediaQuery } from 'react-responsive';
import Button from "react-bootstrap/Button";




function Header(props)
{
    const [theTime, setTheTime] = useState(new Date().toLocaleString())
    const isDesktop = useMediaQuery({
      query: "(min-width: 1224px)"
    });
    const isMobileOrTablet = useMediaQuery({
      query: "(max-width: 1224px)"
    });

    const navigate = useNavigate()


    useEffect(() => {
        const interval = setInterval(() => setTheTime(new Date().toLocaleString()), 1000)
        
        return () => clearInterval(interval)
      }, [])

      const logout = ()=>
      {
        window.localStorage.setItem("langue", JSON.stringify(""))
        navigate('/')
      }
    return (
     <div>
    {isDesktop && <Container fluid className="bg-dark mx-auto">
    <Row>
        <Col xs={3} className="my-auto mx-auto text-start">
          <a href="/home" style={{textDecoration:"none"}}>
          <Image  src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:130}}></Image>
          </a>
        </Col>
        <Col xs={5} className="my-auto mx-auto my-auto text-end">
        <Link to="/menu_envoie" style={{textDecoration:"none"}}>
          <p className="display-6 text-secondary">KOBO BUSINESS SERVICES</p>
          </Link>
        </Col>
        <Col xs={4} className="my-auto mx-auto text-end ">
         <div>
           <pre className="text-dark display-6" style={{fontSize: 20}}><Image className="navbar-brand rounded-circle" src={require('./login.jpeg')} type="button" alt="profil" style={{width:40}} ></Image><span ><i className="text-white"> Mbote Na Yo</i> </span><span className="separateur text-secondary"></span> <a href="" style={{textDecoration:"none"}}><span className="couleur2"><i onClick={logout}>{props.langue}</i></span></a></pre>
           <i><pre className="couleur2 display-6 timing text-center" style={{fontSize: 15}}>{theTime}</pre></i>
        </div>  
        </Col>
    </Row>
   
  
   </Container>}


   {isMobileOrTablet && <Container className="pt-2 bg-dark" fluid >
    <Row>
        
        <Col xs={"auto"} className="mx-auto my-auto text-start">
        <a href="#" style={{textDecoration:"none"}}>
          <Image  src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:200}}></Image>
          </a>
        </Col>
        <Col xs={"auto"} className=" mx-auto my-auto text-end ">
         <div>
           <pre className="text-dark display-6 text-end" style={{fontSize: 20}}><span ><i className="couleur2">Bienvenu(e)</i> </span><span className="separateur text-secondary"></span></pre>
           <i><pre className="text-dark display-6 timing text-end" style={{fontSize: 15}}>{theTime}</pre></i>
        </div>  
        </Col>
    </Row>
   
    
   </Container>}
   </div>

    )
}

export default Header;