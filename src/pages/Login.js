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







const useState = React.useState


function Login(props)
{
  
   const [state,setState] = useState({
        credentials :{
            username : '',
            password : ''
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
               
                setMessage("accès réfusé")
               navigate('/')
              }
              
              
              
            }
          )
          .catch( (error) =>
            {
              setMessage("accès réfusé")
              navigate('/')
            } )
    }*/

   

    return (


<>

{isDesktop && <Container className='bg-dark justify-content-center text-center pt-2 bordure' style={{marginTop:100,backgroundColor:'grey',width:650}} >

    <Row className='justify-content-center mb-5 pt-3' >
        <Col>
        <Image src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:300}}></Image>
        </Col>
    </Row>
      
<Form>
    <Row className='justify-content-center'>
    <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Label  className='couleur2'>Langue</Form.Label>
        <Form.Select name='pays_beneficiaire'  aria-label="Default select example" >
         <option value="Lingala">Lingala</option>
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
    
  
  
    <Row className='justify-content-center pb-3'>
        <Col  xs={12}>    
        <Link to="/menu_envoie" style={{color:'white',textDecorationLine:'none'}}> 
        <Button variant="outline-warning" >
        <b>Banda Opération</b>
        </Button>
        </Link>
        </Col>
    </Row>


</Form>
</Container> }

{isMobileOrTablet && <Container className='bg-dark my-auto mx-auto text-start bordure' style={{backgroundColor:'grey'}} >
    


    <Row className='justify-content-center text-center mb-5 pt-3' >
        <Col xs={"12"}>
        <Image src={require('./kobo_logo.JPG')}  className='rounded-pill ' style={{width:300}}></Image>
        </Col>
    </Row>
      
<Form>
    <Row className='justify-content-center'>
    <Col xs ={4}>
        <Form.Group className="mb-3" >
        <Form.Label value="Lingala" className='couleur2'>Lingala</Form.Label>
        <Form.Select name='pays_beneficiaire'  aria-label="Default select example">
         <option value="Lingala">Lingala</option>
         </Form.Select>
         </Form.Group>
        </Col>
    </Row>
  

  
    <Row className='justify-content-center pb-3'>
    <Col  xs={"auto"}>    
        <Link to="menu_envoie" style={{color:'white',textDecorationLine:'none'}}> 
        
        <Button variant="outline-warning" type="submit" >
        <b>Banda Opération</b>
        </Button>
        </Link>
        </Col>
    </Row>
  

</Form>
</Container> }
</>

)
}

export default Login;