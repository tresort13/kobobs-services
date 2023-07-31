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
import HeaderFrench from './HeaderFrench';



function MonthlyRecettesFrench(props)
{
  const operationDetailArray = []

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

const total_montant_beneficiaire = props.monthlyRapport.reduce((total,value)=>
{

total = total + parseFloat(value.montant_beneficiaire)
return total
},0)

const total_frais_envoie = props.monthlyRapport.reduce((total,value)=>
{
total=total + parseFloat(value.frais_envoie)
return total
},0)

const total_frais_tva = props.monthlyRapport.reduce((total,value)=>
{
total=total + parseFloat(value.frais_tva)
return total
},0)

const total_montant = props.monthlyRapport.reduce((total,value)=>
{
total=total + parseFloat(value.montant_total)
return total
},0)
  
    return (
        <>
            <HeaderFrench dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
            <div className=' justify-content-center text-center mb-5 text-light text-bold rounded'>
            <Row className='mt-3 px-5'>
             <Col xs={12} className="text-start text-light">
            <p><Link to='/select_mois_rapport_recette' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Retourner</u>  </b></Link> </p>
           </Col>
             </Row>
{isDesktop && <Container fluid className='bg-light justify-content-center text-center borders mb-5' style={{marginTop:20}} >


    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h4 ><u><b><i className='couleur2'>Table des Recettes Mensuelles</i></b></u></h4>
        </div>
        <div>
        <Table striped bordered hover variant="light">
      <thead>
        <tr className='text-dark' style={{border:"2px solid white"}}>
          <th>Periode</th>
          <th>Montant Beneficiaire ($)</th>
          <th>Frais Envoie (£)</th>
          <th>Frais TVA (£)</th>
          <th>Montant Total Payé (£)</th>
          <th>Détails des Opérations</th>
        </tr>
      </thead>
      <tbody>
      {props.monthlyRapport.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}} >
             <td><i ><b>{value.date_operation}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_beneficiaire).toFixed(2)) }</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.frais_envoie).toFixed(2))}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.frais_tva).toFixed(2))}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_total).toFixed(2))}</b></i></td>
             <td onClick={()=>{
               operationDetailArray.push(value)
               props.setTableType("monthlyRapportRecette")
               console.log(operationDetailArray)
               props.dataDetailEnvoieTotal(operationDetailArray)
               navigate('/details_retraits_info_french')
             }} ><i className="text-primary btn" ><b><u>plus de détails</u></b></i></td>
            </tr>     
        }) 
        }
       <tr style={{border:"2px solid white"}}>
         <td><i><b>TOTAL</b></i></td>
         <td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_montant_beneficiaire).toFixed(2))}</b></i></td>
         <td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_frais_envoie).toFixed(2))}</b></i></td>
         <td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_frais_tva).toFixed(2))}</b></i></td>
         <td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_montant).toFixed(2))}</b></i></td>
       </tr>
         
      </tbody>
    </Table>
        </div>
        </Col>
    </Row>



  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={4} >
        <Link to="/menu_rapport_recette_french" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="danger" type="submit" >
        fermer 
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
        <h4 ><u><b><i className='couleur2'>Table des Recettes Mensuelles</i></b></u></h4>
        </div>
        <div>
        <Table striped bordered hover variant="light">
      <thead>
        <tr className='text-dark' style={{border:"2px solid white"}}>
          <th>Periode</th>
          <th>Montant Beneficiaire ($)</th>
          <th>Frais Envoie (£)</th>
          <th>Frais TVA (£)</th>
          <th>Montant Total Payé (£)</th>
          <th>Détails des Opérations</th>
        </tr>
      </thead>
      <tbody>
      {props.monthlyRapport.map((value)=>
        {
          return  <tr style={{border:"2px solid white"}} >
             <td><i ><b>{value.date_operation}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_beneficiaire).toFixed(2)) }</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.frais_envoie).toFixed(2))}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.frais_tva).toFixed(2))}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_total).toFixed(2))}</b></i></td>
             <td onClick={()=>{
               operationDetailArray.push(value)
               props.setTableType("monthlyRapportRecette")
               console.log(operationDetailArray)
               props.dataDetailEnvoieTotal(operationDetailArray)
               navigate('/details_retraits_info_french')
             }} ><i className="text-primary btn" ><b><u>plus de détails</u></b></i></td>
            </tr>     
        }) 
        }
       <tr style={{border:"2px solid white"}}>
         <td><i><b>TOTAL</b></i></td>
         <td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_montant_beneficiaire).toFixed(2))}</b></i></td>
         <td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_frais_envoie).toFixed(2))}</b></i></td>
         <td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_frais_tva).toFixed(2))}</b></i></td>
         <td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_montant).toFixed(2))}</b></i></td>
       </tr>
         
      </tbody>
    </Table>
        </div>
        </Col>
    </Row>



  
    <Row className='justify-content-center pb-3 pt-3'>
        <Col xs ={4} >
        <Link to="/menu_rapport_recette_french" style={{color:'white',textDecorationLine:'none'}}>
        <Button variant="danger" type="submit" >
        fermer 
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

export default MonthlyRecettesFrench;