import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useNavigate} from  'react-router-dom';
import Header from './Header';
import { useMediaQuery } from 'react-responsive';
import Footer from './Footer';
import Table from 'react-bootstrap/Table';
import HeaderEnglish from './HeaderEnglish';
import  './Header.css';


//import SessionOut from './SessionOut';



function TableAbonnesLingala(props)
{
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
      const navigate = useNavigate()

            const message = ()=>
        {
            alert(" sorry the print page is not yet available")
        }

const operationDetailArray = []



    return (
        <>
            <Header dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
            <div className=' justify-content-center text-center mb-5 text-light text-bold rounded'>
            <Row className='mt-3 px-5'>
             <Col xs={12} className="text-start text-light">
            <p><Link to='/menu_info_abonne_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u>  </b></Link> </p>
           </Col>
             </Row>
{isDesktop && <Container fluid className='bg-light justify-content-center text-center borders mb-5' style={{marginTop:20}} >
    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h4 ><u><b><i className='couleur2'>Informations ya ba abonnés</i></b></u></h4>
        </div>
        <div>
        <Table striped bordered hover variant="light">
      <thead>
        <tr className='text-dark' style={{border:"2px solid white"}}>
          <th>Kombo ya Mukristu</th>
          <th>Kombo Ya Libota</th>
          <th>Numéro ya tshombo</th>
          <th>Détails ya abonné</th>
        </tr>
      </thead>
      <tbody>
        {props.abonneInfo2.map((value)=>
        {
          return  <tr  style={{border:"2px solid white"}} >
             <td><i><b className="text-dark">{value.prenom_expediteur} </b></i></td>
             <td><i><b className="text-dark">{value.nom_expediteur} {value.postnom_expediteur}</b></i></td>
             <td><i><b className="text-dark"> {value.numero_expediteur}</b></i></td>
             <td onClick={()=>{
               operationDetailArray.push(value)
               console.log(operationDetailArray)
               props.setAbonneInfoDetail(operationDetailArray)
               navigate('/details_abonnes_info_lingala')
             }} ><i className="text-primary btn" ><b><u>Tala ba détails</u></b></i></td>
            </tr> 
        }) 
        }
       
         
      </tbody>
    </Table>
        </div>
        </Col>
    </Row>



  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={4} >
        <Link to="/menu_info_abonne_lingala" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="danger" type="submit" >
        kokanga 
        </Button>
        </Link>

        </Col>
    </Row>
  


</div>


</Container>}

{isMobileOrTablet && <Container fluid className='bg-light justify-content-center text-center borders mb-5' style={{marginTop:20}} >
    
    <div>
    <Row className='justify-content-center '>
            <Col xs = {12} className='text-center borders pt-2'>
            <div>
            <h4 ><u><b><i className='couleur2'>Informations ya ba abonnés</i></b></u></h4>
            </div>
            <div>
            <Table striped bordered hover variant="light">
          <thead>
            <tr className='text-dark' style={{border:"2px solid white"}}>
              <th>Kombo ya Mukristu</th>
              <th>Kombo Ya Libota</th>
              <th>Numéro ya tshombo</th>
              <th>Détails ya abonné</th>
            </tr>
          </thead>
          <tbody>
            {props.abonneInfo2.map((value)=>
            {
              return  <tr  style={{border:"2px solid white"}} >
                 <td><i><b className="text-dark">{value.prenom_expediteur} </b></i></td>
                 <td><i><b className="text-dark">{value.nom_expediteur} {value.postnom_expediteur}</b></i></td>
                 <td><i><b className="text-dark"> {value.numero_expediteur}</b></i></td>
                 <td onClick={()=>{
                   operationDetailArray.push(value)
                   console.log(operationDetailArray)
                   props.setAbonneInfoDetail(operationDetailArray)
                   navigate('/details_abonnes_info_lingala')
                 }} ><i className="text-primary btn" ><b><u>Tala ba détails</u></b></i></td>
                </tr> 
            }) 
            }
           
             
          </tbody>
        </Table>
            </div>
            </Col>
        </Row>
    
    
    
      
        <Row className='justify-content-center pb-3 pt-3'>
            <Col xs ={4} >
            <Link to="/menu_info_abonne_lingala" style={{color:'white',textDecorationLine:'none'}}>
            <Button variant="danger" type="submit" >
            kokanga 
            </Button>
            </Link>
    
            </Col>
        </Row>
      
    
    
    </div>
    
    
    </Container>}
    


<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
</div>
<Footer />
        </>
    )
}

export default TableAbonnesLingala;