import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import {Link,useNavigate} from  'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HeaderHome from './HeaderHome';
import Footer from './Footer';







const useState = React.useState


function Login(props)
{
  
   const [langue,setLangue] = useState({
        infoLangue :{
            language : 'Lingala'
        }})

    const [message,setMessage] = useState("")
 
      const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
      /*const isMobile = useMediaQuery({
        query: "(max-width: 786px)"
      });
yn
      const isRetina = useMediaQuery({
        query: "(min-resolution: 2dppx)"
      });*/
    
       
          
   const navigate = useNavigate()

   const connect = (e)=>
   {
     e.preventDefault()
     console.log(langue.infoLangue.language)
     props.setLangue(langue.infoLangue.language)
     navigate('/menu_envoie')
   }

   const inputChanged = (event)=>
   {
       const cred = langue.infoLangue;
       cred[event.target.name] = event.target.value;
       setLangue({infoLangue:cred})
   }

   
/*
    const connection = (e)=>
    {
        fetch('https://kobobsapi.herokuapp.com/api/login/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(state.credentials)
          })
          .then( data => data.json())
          .then(
            data => {  
              if (data.username == state.credentials.username)
              {

                props.setUsername(data.username)
                setState({credentials:{username :data.username}})
                 
                navigate('/home')
              } 
              else
              {
               
                setMessage("acc??s r??fus??")
               navigate('/')
              }
              
              
              
            }
          )
          .catch( (error) =>
            {
              setMessage("acc??s r??fus??")
              navigate('/')
            } )
    }*/
   
return (
<>
<HeaderHome />
{isDesktop && <Container className='bg-dark justify-content-center text-center pt-2 bordure' style={{marginTop:100,backgroundColor:'grey',width:650}} >

    <Row className='justify-content-center mb-5 pt-3' >
        <Col>
        <Image src={require('./kobo_logo.JPG')}  className='rounded ' style={{width:300}}></Image>
        </Col>
    </Row>
      
  <Form>
    <Row className='justify-content-center'>
    <Col xs ={4}>
    <Form.Group className="mb-3" >
    {langue.infoLangue.language == "Lingala" ? <Form.Label  className='couleur2 text-center'>Munoko Yako salela</Form.Label> : <Form.Label  className='couleur2 text-center'>Language to use</Form.Label>}
    <Form.Select name='language' value={langue.infoLangue.language} onChange={e=>inputChanged(e)}  aria-label="Default select example"  required>
     <option value="Lingala">Lingala</option>
     <option value="English">English</option>
     </Form.Select>
     </Form.Group>
    </Col>
    </Row>

    
  
<Row className='justify-content-center text-center pb-3 mt-3'>
    <Col  xs={12}>    
    {langue.infoLangue.language == "Lingala" ? <Button variant="outline-warning" onClick={e=>connect(e)}><b>Banda Op??ration</b></Button> : <Button variant="outline-warning" onClick={e=>connect(e)}><b>Start Operation</b></Button>}
    </Col>
</Row>


</Form>
</Container> }

{isMobileOrTablet &&  <Container className='bg-dark my-center mx-auto text-start bordure' style={{backgroundColor:'grey',height:450}} >

<Row className='justify-content-center text-center mb-5 pt-5' >
    <Col>
    <Image src={require('./kobo_logo.JPG')}  className='rounded ' style={{width:200}}></Image>
    </Col>
</Row>
  
<Form>
<Row className='justify-content-center mt-5'>
<Col xs ={4}>
    <Form.Group className="mb-3" >
    {langue.infoLangue.language == "Lingala" ? <Form.Label  className='couleur2 text-center'>Munoko Yako solola</Form.Label> : <Form.Label  className='couleur2 text-center'>Language</Form.Label>}
    <Form.Select name='language' value={langue.infoLangue.language} onChange={e=>inputChanged(e)}  aria-label="Default select example"  required>
     <option value="Lingala">Lingala</option>
     <option value="English">English</option>
     </Form.Select>
     </Form.Group>
    </Col>
</Row>



<Row className='justify-content-center text-center pb-3 mt-3'>
    <Col  xs={12}>    
    {langue.infoLangue.language == "Lingala" ? <Button variant="outline-warning" onClick={e=>connect(e)}><b>Banda Op??ration</b></Button> : <Button variant="outline-warning" onClick={e=>connect(e)}><b>Start Operation</b></Button>}
    </Col>
</Row>


</Form>
</Container> }
<Footer />
</>

)
}

export default Login;