import React,{useState} from 'react';
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
import Form from 'react-bootstrap/Form';
import { read, utils, writeFile } from 'xlsx';

//import SessionOut from './SessionOut';



function TableMonthlyRapportEnglish(props)
{
  const [rapportLocation, setRapportLocation] = useState("Rapport Angola et RD Congo");
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
      const navigate = useNavigate()

            const message = ()=>
        {
            alert("available after payment")
        }
      const changeRapportLocation = (e)=>{
        setRapportLocation(e.target.value)
        console.log(e.target.value)
      }

const operationDetailArray = []
var dailyRecettes =[]
var title=""

const total_montant_beneficiaire = props.detailEnvoieTotalTableau.reduce((total,value)=>
{
  
  total = total + parseFloat(value.montant_beneficiaire)
  return total
},0)

const total_montant_beneficiaire_rdcongo = props.detailEnvoieTotalTableau.filter((value)=>{
return value.pays_beneficiaire ==="RD Congo"
}).reduce((total,value)=>
{
  
  total = total + parseFloat(value.montant_beneficiaire)
  return total
},0)

const total_montant_beneficiaire_angola = props.detailEnvoieTotalTableau.filter((value)=>{
  return value.pays_beneficiaire ==="Angola"
  }).reduce((total,value)=>
{
  
  total = total + parseFloat(value.montant_beneficiaire)
  return total
},0)

const total_frais_envoie = props.dailyRapport.reduce((total,value)=>
{
  total=total + parseFloat(value.frais_envoie)
  return total
},0)

const total_frais_tva = props.dailyRapport.reduce((total,value)=>
{
  total=total + parseFloat(value.frais_tva)
  return total
},0)

const total_montant = props.detailEnvoieTotalTableau.reduce((total,value)=>
{
  total=total + parseFloat(value.montant_total)
  return total
},0)

console.log(rapportLocation)

const export_excel = ()=>{
  
  if(rapportLocation === "Rapport Angola et RD Congo")
  {
    dailyRecettes = props.detailEnvoieTotalTableau.map((value)=>{
      return {
        date : props.moisInfo,
        withdrawal_code : value.code_retrait,
        sender_name : value.prenom_expediteur+" "+value.nom_expediteur,
        sender_mobile : value.numero_expediteur,
        receiver_name : value.prenom_beneficiaire+" "+value.nom_beneficiaire,
        receiver_country : value.pays_beneficiaire,
        receiver_amount : value.montant_beneficiaire,
       }
     })
     title = "Angola and DR Congo "+props.moisInfo.replaceAll('/','_')+""
 console.log(title)

 dailyRecettes.push({
  date : "TOTAL",
  withdrawal_code : "",
  sender_name : "",
  sender_mobile : "",
  receiver_name : "",
  receiver_country : "",
  receiver_amount : Number(total_montant_beneficiaire).toFixed(2),
})
  }

  else if(rapportLocation === "Rapport RD Congo")
  {
    dailyRecettes = props.detailEnvoieTotalTableau.filter((value)=>{
      return value.pays_beneficiaire ==="RD Congo"
     }).map((value)=>{
      return {
        date : props.moisInfo,
        withdrawal_code : value.code_retrait,
        sender_name : value.prenom_expediteur+" "+value.nom_expediteur,
        sender_mobile : value.numero_expediteur,
        receiver_name : value.prenom_beneficiaire+" "+value.nom_beneficiaire,
        receiver_country : value.pays_beneficiaire,
        receiver_amount : value.montant_beneficiaire,
       }
     })
     title = "DR Congo "+props.moisInfo.replaceAll('/','_')+""
 console.log(title)

 dailyRecettes.push({
  date : "TOTAL",
  withdrawal_code : "",
  sender_name : "",
  sender_mobile : "",
  receiver_name : "",
  receiver_country : "",
  receiver_amount : Number(total_montant_beneficiaire_rdcongo).toFixed(2),
})
  }

  else{

    dailyRecettes = props.detailEnvoieTotalTableau.filter((value)=>{
      return value.pays_beneficiaire ==="Angola"
     }).map((value)=>{
      return {
        date : props.moisInfo,
        withdrawal_code : value.code_retrait,
        sender_name : value.prenom_expediteur+" "+value.nom_expediteur,
        sender_mobile : value.numero_expediteur,
        receiver_name : value.prenom_beneficiaire+" "+value.nom_beneficiaire,
        receiver_country : value.pays_beneficiaire,
        receiver_amount : value.montant_beneficiaire,
       }
     })
     title = "Angola "+props.moisInfo.replaceAll('/','_')+""
 console.log(title)

 dailyRecettes.push({
  date : "TOTAL",
  withdrawal_code : "",
  sender_name : "",
  sender_mobile : "",
  receiver_name : "",
  receiver_country : "",
  receiver_amount : Number(total_montant_beneficiaire_angola).toFixed(2),
})
  }

 
 
 
 
  /* generate worksheet and workbook */
 const worksheet = utils.json_to_sheet(dailyRecettes);
 const max_width = dailyRecettes.reduce((w, r) => Math.max(w, r.sender_name.length), 10);
 worksheet["!cols"] = [ { wch: max_width },{ wch: max_width },{ wch: max_width },{ wch: max_width },{ wch: max_width },{ wch: max_width },{ wch: max_width },{ wch: max_width },{ wch: max_width },{ wch: max_width }];
 
 console.log(worksheet)
 const workbook = utils.book_new();
 utils.book_append_sheet(workbook, worksheet,title);
 
 /* fix headers */
 utils.sheet_add_aoa(worksheet, [["Month","Code", "Sender Name","Sender Phone","Recipient Name","Recipient Country","Recipient Amount($)"]], { origin: "A1" });
 
 /* create an XLSX file and try to save to Presidents.xlsx */
 writeFile(workbook, ""+title+".xlsx", { compression: true });
 
 }
    return (
        <>
            <HeaderEnglish dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
            <div className=' justify-content-center text-center mb-5 text-light text-bold rounded'>
            <Row className='mt-3 px-5'>
              <Col xs={12} className="text-start text-light">
              {props.rapportType === "dailyRapportRetrait" ? <p><Link to='/daily_rapport_retrait_english' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Back</u></b></Link></p> : props.rapportType === "monthlyRapportRetrait" ? <p><Link to='/monthly_rapport_retrait_english' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Back</u></b></Link></p> : props.rapportType === "yearlyRapportRetrait" ? <p><Link to='/yearly_rapport_retrait_english' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Back</u></b></Link></p>:  props.rapportType === "dailyRapportEnvoi" ? <p><Link to='/daily_rapport_envoi_english' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Back</u></b></Link></p> : props.rapportType === "monthlyRapportEnvoi" ? <p><Link to='/monthly_rapport_envoi_english' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Back</u></b></Link></p>: <p><Link to='/yearly_rapport_envoi_english' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Back</u></b></Link></p>}
              </Col>
            </Row>
{isDesktop && <Container fluid className='bg-light justify-content-center text-center borders mb-5' style={{marginTop:20}} >
    
<div>
<Row className='justify-content-center '>
        <Col xs = {12} className='text-center borders pt-2'>
        <div>
        <h4 ><u><b><i className='couleur2'>{props.titleEnglish} {props.moisInfo}</i></b></u></h4>
        </div>
        <div>

  {props.message2 === "Rapport of withdrawals" ? <div>
    <Form>
    <Form.Select aria-label="Default select example" onChange={(e)=>changeRapportLocation(e)}>
      <option value="Rapport Angola et RD Congo" ><b>Angola and DR Congo Rapport</b></option>
      <option value="Rapport RD Congo"><b>DR Congo Rapport</b></option>
      <option value="Rapport Angola"><b>Angola Rapport</b></option>
    </Form.Select>
    </Form>
    </div> : <di></di>}

        <Table striped bordered hover variant="light">
      <thead>
        <tr className='text-dark' style={{border:"2px solid white"}}>
          <th>Month</th>
          <th>Sender Name</th>
          <th>Receiver Name</th>
          <th>Receiver Country</th>
          <th>Recipient Amount  ($)</th>
          <th>Total Amount  (£)</th>
          <th>Operation details</th>
        </tr>
      </thead>
      <tbody>
        {rapportLocation === "Rapport Angola et RD Congo" ? props.detailEnvoieTotalTableau.map((value)=>
        {
          return  <tr  style={{border:"2px solid white"}} >
             <td><i ><b>{props.moisInfo}</b></i></td>
             <td><i><b className="text-dark">{value.prenom_expediteur} {value.nom_expediteur} {value.postnom_expediteur} </b></i></td>
             <td><i><b className="text-dark"> {value.prenom_beneficiaire} {value.nom_beneficiaire} {value.postnom_beneficiaire}</b></i></td>
             <td><i><b className="text-dark"> {value.pays_beneficiaire}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_beneficiaire).toFixed(2))}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_total).toFixed(2))}</b></i></td>
             <td onClick={()=>{
               operationDetailArray.push(value)
               props.setTableType("monthlyRapport")
               console.log(operationDetailArray)
               props.dataDetailEnvoieTotal(operationDetailArray)
               navigate('/details_retraits_info_english')
             }} ><i className="text-primary btn" ><b><u>More Details</u></b></i></td>
            </tr> 
        }) 
        
        :rapportLocation === "Rapport RD Congo" ? props.detailEnvoieTotalTableau.filter((value)=>{
         return value.pays_beneficiaire ==="RD Congo"
        }).map((value)=>
        {
          return  <tr  style={{border:"2px solid white"}} >
             <td><i ><b>{props.moisInfo}</b></i></td>
             <td><i><b className="text-dark">{value.prenom_expediteur} {value.nom_expediteur} {value.postnom_expediteur} </b></i></td>
             <td><i><b className="text-dark"> {value.prenom_beneficiaire} {value.nom_beneficiaire} {value.postnom_beneficiaire}</b></i></td>
             <td><i><b className="text-dark"> {value.pays_beneficiaire}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_beneficiaire).toFixed(2))}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_total).toFixed(2))}</b></i></td>
             <td onClick={()=>{
               operationDetailArray.push(value)
               props.setTableType("monthlyRapport")
               console.log(operationDetailArray)
               props.dataDetailEnvoieTotal(operationDetailArray)
               navigate('/details_retraits_info_english')
             }} ><i className="text-primary btn" ><b><u>More Details</u></b></i></td>
            </tr> 
        }) 
        :props.detailEnvoieTotalTableau.filter((value)=>{
          return value.pays_beneficiaire ==="Angola"
         }).map((value)=>
        {
          return  <tr  style={{border:"2px solid white"}} >
             <td><i ><b>{props.moisInfo}</b></i></td>
             <td><i><b className="text-dark">{value.prenom_expediteur} {value.nom_expediteur} {value.postnom_expediteur} </b></i></td>
             <td><i><b className="text-dark"> {value.prenom_beneficiaire} {value.nom_beneficiaire} {value.postnom_beneficiaire}</b></i></td>
             <td><i><b className="text-dark"> {value.pays_beneficiaire}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_beneficiaire).toFixed(2))}</b></i></td>
             <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_total).toFixed(2))}</b></i></td>
             <td onClick={()=>{
               operationDetailArray.push(value)
               props.setTableType("monthlyRapport")
               console.log(operationDetailArray)
               props.dataDetailEnvoieTotal(operationDetailArray)
               navigate('/details_retraits_info_english')
             }} ><i className="text-primary btn" ><b><u>More Details</u></b></i></td>
            </tr> 
        }) }

{props.message2 === "Rapport of withdrawals" ? <tr style={{border:"2px solid white"}}>
         <td><i><b>TOTAL</b></i></td>
         <td><i className='couleur2'><b></b></i></td>
         <td><i className='couleur2'><b></b></i></td>
         <td><i className='couleur2'><b></b></i></td>
         {rapportLocation === "Rapport Angola et RD Congo" ? <td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_montant_beneficiaire).toFixed(2))} $</b></i></td> : rapportLocation === "Rapport RD Congo" ? <td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_montant_beneficiaire_rdcongo).toFixed(2))} $</b></i></td> :<td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_montant_beneficiaire_angola).toFixed(2))} $</b></i></td>}
       </tr>: props.message2 === "Rapport of validated sendings" ? <tr style={{border:"2px solid white"}}>
         <td><i><b>TOTAL</b></i></td>
         <td><i className='couleur2'><b></b></i></td>
         <td><i className='couleur2'><b></b></i></td>
         <td><i className='couleur2'><b></b></i></td>
         <td><i className='couleur2'><b></b></i></td>
         <td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_montant).toFixed(2))} £</b></i></td>
       </tr>: <tr></tr>}
       
         
      </tbody>
    </Table>
        </div>
        </Col>
    </Row>



  
    <Row className='justify-content-center pb-3 pt-3'>

        <Col xs ={4} >
        {props.rapportType === "dailyRapportRetrait" ? <p><Link to='/daily_rapport_retrait_english' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>close</Button></Link></p> : props.rapportType === "monthlyRapportRetrait" ? <p><Link to='/monthly_rapport_retrait_english' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>close</Button></Link></p> : props.rapportType === "yearlyRapportRetrait" ? <p><Link to='/yearly_rapport_retrait_english' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>close</Button></Link></p>:  props.rapportType === "dailyRapportEnvoi" ? <p><Link to='/daily_rapport_envoi_english' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>close</Button></Link></p> : props.rapportType === "monthlyRapportEnvoi" ? <p><Link to='/monthly_rapport_envoi_english' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>close</Button></Link></p>: <p><Link to='/yearly_rapport_envoi_english' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>close</Button></Link></p>}
        </Col>

        {props.message2 === "Rapport of withdrawals" ? <Col xs ={4} >
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button onClick={export_excel} variant="success" >
       <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-excel-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM5.884 6.68 8 9.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 10l2.233 2.68a.5.5 0 0 1-.768.64L8 10.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 10 5.116 7.32a.5.5 0 1 1 .768-.64z"/>
</svg></span> export to Excel 
        </Button>
        </Link>
        </Col>:<span></span>}
    </Row>
  


</div>


</Container>}

{isMobileOrTablet && <Container fluid className='bg-light justify-content-center text-center borders mb-5' style={{marginTop:20}} >
    
    <div>
    <Row className='justify-content-center '>
            <Col xs = {12} className='text-center borders pt-2'>
            <div>
            <h4 ><u><b><i className='couleur2'>{props.titleEnglish} {props.moisInfo}</i></b></u></h4>
            </div>
            <div>
    
      {props.message2 === "Rapport of withdrawals" ? <div>
        <Form>
        <Form.Select aria-label="Default select example" onChange={(e)=>changeRapportLocation(e)}>
          <option value="Rapport Angola et RD Congo" ><b>Angola and DR Congo Rapport</b></option>
          <option value="Rapport RD Congo"><b>DR Congo Rapport</b></option>
          <option value="Rapport Angola"><b>Angola Rapport</b></option>
        </Form.Select>
        </Form>
        </div> : <di></di>}
    
            <Table striped bordered hover variant="light">
          <thead>
            <tr className='text-dark' style={{border:"2px solid white"}}>
              <th>Month</th>
              <th>Sender Name</th>
              <th>Receiver Name</th>
              <th>Receiver Country</th>
              <th>Recipient Amount  ($)</th>
              <th>Total Amount  (£)</th>
              <th>Operation details</th>
            </tr>
          </thead>
          <tbody>
            {rapportLocation === "Rapport Angola et RD Congo" ? props.detailEnvoieTotalTableau.map((value)=>
            {
              return  <tr  style={{border:"2px solid white"}} >
                 <td><i ><b>{props.moisInfo}</b></i></td>
                 <td><i><b className="text-dark">{value.prenom_expediteur} {value.nom_expediteur} {value.postnom_expediteur} </b></i></td>
                 <td><i><b className="text-dark"> {value.prenom_beneficiaire} {value.nom_beneficiaire} {value.postnom_beneficiaire}</b></i></td>
                 <td><i><b className="text-dark"> {value.pays_beneficiaire}</b></i></td>
                 <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_beneficiaire).toFixed(2))}</b></i></td>
                 <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_total).toFixed(2))}</b></i></td>
                 <td onClick={()=>{
                   operationDetailArray.push(value)
                   props.setTableType("monthlyRapport")
                   console.log(operationDetailArray)
                   props.dataDetailEnvoieTotal(operationDetailArray)
                   navigate('/details_retraits_info_english')
                 }} ><i className="text-primary btn" ><b><u>More Details</u></b></i></td>
                </tr> 
            }) 
            
            :rapportLocation === "Rapport RD Congo" ? props.detailEnvoieTotalTableau.filter((value)=>{
             return value.pays_beneficiaire ==="RD Congo"
            }).map((value)=>
            {
              return  <tr  style={{border:"2px solid white"}} >
                 <td><i ><b>{props.moisInfo}</b></i></td>
                 <td><i><b className="text-dark">{value.prenom_expediteur} {value.nom_expediteur} {value.postnom_expediteur} </b></i></td>
                 <td><i><b className="text-dark"> {value.prenom_beneficiaire} {value.nom_beneficiaire} {value.postnom_beneficiaire}</b></i></td>
                 <td><i><b className="text-dark"> {value.pays_beneficiaire}</b></i></td>
                 <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_beneficiaire).toFixed(2))}</b></i></td>
                 <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_total).toFixed(2))}</b></i></td>
                 <td onClick={()=>{
                   operationDetailArray.push(value)
                   props.setTableType("monthlyRapport")
                   console.log(operationDetailArray)
                   props.dataDetailEnvoieTotal(operationDetailArray)
                   navigate('/details_retraits_info_english')
                 }} ><i className="text-primary btn" ><b><u>More Details</u></b></i></td>
                </tr> 
            }) 
            :props.detailEnvoieTotalTableau.filter((value)=>{
              return value.pays_beneficiaire ==="Angola"
             }).map((value)=>
            {
              return  <tr  style={{border:"2px solid white"}} >
                 <td><i ><b>{props.moisInfo}</b></i></td>
                 <td><i><b className="text-dark">{value.prenom_expediteur} {value.nom_expediteur} {value.postnom_expediteur} </b></i></td>
                 <td><i><b className="text-dark"> {value.prenom_beneficiaire} {value.nom_beneficiaire} {value.postnom_beneficiaire}</b></i></td>
                 <td><i><b className="text-dark"> {value.pays_beneficiaire}</b></i></td>
                 <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_beneficiaire).toFixed(2))}</b></i></td>
                 <td><i><b className="text-dark">{new Intl.NumberFormat().format(Number(value.montant_total).toFixed(2))}</b></i></td>
                 <td onClick={()=>{
                   operationDetailArray.push(value)
                   props.setTableType("monthlyRapport")
                   console.log(operationDetailArray)
                   props.dataDetailEnvoieTotal(operationDetailArray)
                   navigate('/details_retraits_info_english')
                 }} ><i className="text-primary btn" ><b><u>More Details</u></b></i></td>
                </tr> 
            }) }
    
    {props.message2 === "Rapport of withdrawals" ? <tr style={{border:"2px solid white"}}>
             <td><i><b>TOTAL</b></i></td>
             <td><i className='couleur2'><b></b></i></td>
             <td><i className='couleur2'><b></b></i></td>
             <td><i className='couleur2'><b></b></i></td>
             {rapportLocation === "Rapport Angola et RD Congo" ? <td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_montant_beneficiaire).toFixed(2))} $</b></i></td> : rapportLocation === "Rapport RD Congo" ? <td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_montant_beneficiaire_rdcongo).toFixed(2))} $</b></i></td> :<td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_montant_beneficiaire_angola).toFixed(2))} $</b></i></td>}
           </tr>: props.message2 === "Rapport of validated sendings" ? <tr style={{border:"2px solid white"}}>
             <td><i><b>TOTAL</b></i></td>
             <td><i className='couleur2'><b></b></i></td>
             <td><i className='couleur2'><b></b></i></td>
             <td><i className='couleur2'><b></b></i></td>
             <td><i className='couleur2'><b></b></i></td>
             <td><i className='couleur2'><b>{new Intl.NumberFormat().format(Number(total_montant).toFixed(2))} £</b></i></td>
           </tr>: <tr></tr>}
           
             
          </tbody>
        </Table>
            </div>
            </Col>
        </Row>
    
    
    
      
        <Row className='justify-content-center pb-3 pt-3'>
    
            <Col xs ={6} >
            {props.rapportType === "dailyRapportRetrait" ? <p><Link to='/daily_rapport_retrait_english' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>close</Button></Link></p> : props.rapportType === "monthlyRapportRetrait" ? <p><Link to='/monthly_rapport_retrait_english' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>close</Button></Link></p> : props.rapportType === "yearlyRapportRetrait" ? <p><Link to='/yearly_rapport_retrait_english' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>close</Button></Link></p>:  props.rapportType === "dailyRapportEnvoi" ? <p><Link to='/daily_rapport_envoi_english' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>close</Button></Link></p> : props.rapportType === "monthlyRapportEnvoi" ? <p><Link to='/monthly_rapport_envoi_english' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>close</Button></Link></p>: <p><Link to='/yearly_rapport_envoi_english' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>close</Button></Link></p>}
            </Col>
    
            {props.message2 === "Rapport of withdrawals" ? <Col xs ={6} >
        <Link to="" style={{color:'white',textDecorationLine:'none'}}>
        <Button onClick={export_excel} variant="success" >
       <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-excel-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM5.884 6.68 8 9.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 10l2.233 2.68a.5.5 0 0 1-.768.64L8 10.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 10 5.116 7.32a.5.5 0 1 1 .768-.64z"/>
</svg></span> export to Excel 
        </Button>
        </Link>
        </Col>:<span></span>}
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

export default TableMonthlyRapportEnglish;