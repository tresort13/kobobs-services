import React,{ useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link,useNavigate} from  'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Header from './Header';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal';
import ClipLoader from "react-spinners/ClipLoader";



const useState = React.useState
function DetailsRetraitsInfoLingala(props)
{

   
     const navigate = useNavigate()  
    const [message,setMessage] = useState("Détails ya opération")
    const [couleur,setCouleur] = useState("text-dark")
    const [modalShow, setModalShow] = React.useState(true);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);
    const [modalShow5, setModalShow5] = React.useState(false);
    const [modalShow6, setModalShow6] = React.useState(false);
    const[envoie,setEnvoie] = useState({infoEnvoie :{
      agent_id :props.detailEnvoieTotal[0].agent_id,
      nom_expediteur : props.detailEnvoieTotal[0].nom_expediteur,
      prenom_expediteur : props.detailEnvoieTotal[0].prenom_expediteur,
      adresse_expediteur : props.detailEnvoieTotal[0].adresse_expediteur,
      email_expediteur : props.detailEnvoieTotal[0].email_expediteur,
      numero_expediteur: props.detailEnvoieTotal[0].numero_expediteur,
      pays_expediteur : props.detailEnvoieTotal[0].pays_expediteur,
      nom_beneficiaire : props.detailEnvoieTotal[0].nom_beneficiaire,
      prenom_beneficiaire : props.detailEnvoieTotal[0].prenom_beneficiaire,
      pays_beneficiaire : props.detailEnvoieTotal[0].pays_beneficiaire,
      montant_beneficiaire : props.detailEnvoieTotal[0].montant_beneficiaire,
      type_service :props.detailEnvoieTotal[0].type_service,
      numero_transfer : props.detailEnvoieTotal[0].numero_transfer,
      code_retrait : props.detailEnvoieTotal[0].code_retrait,  
      montant_pour_payer : props.detailEnvoieTotal[0].montant_total,
      frais_envoie : props.detailEnvoieTotal[0].frais_envoie,
      frais_tva : props.detailEnvoieTotal[0].frais_tva,
      date_operation : props.detailEnvoieTotal[0].date_operation,
      date_heure_operation :props.detailEnvoieTotal[0].date_heure_operation,
      month_year_operation : props.detailEnvoieTotal[0].month_year_operation,
      year_operation : props.detailEnvoieTotal[0].year_operation
      }})

    const recoverOperation = ()=>
    {
      setModalShow2(true)
        fetch('https://kobobsapi.herokuapp.com/api/recoverOperation/',{
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(envoie.infoEnvoie)
              })
              .then( res => res.json())
              .then(
                res => {  
                  if (res.recoverMessage == "success")
                  {
                    setModalShow2(false)
                    setModalShow4(true)
                    props.setMessage("Sending historic")
                   
                  }
                  else{
                    setModalShow2(false)
                    setModalShow3(true)
                  }
                  }
              )
              .catch( (error) =>
                {
                  setModalShow2(false)
                  setModalShow3(true)
                } )
    }

    const deleteOperation = ()=>
    {
      setModalShow2(true)
        fetch('https://kobobsapi.herokuapp.com/api/suprimerPermanently/',{
                method:'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(envoie.infoEnvoie)
              })
              .then( res => res.json())
              .then(
                res => {  
                  if (res.message == "success")
                  {
                    setModalShow2(false)
                    setModalShow5(true)
                    //props.setMessage("Sending historic")
                   
                  }
                  else{
                    setModalShow2(false)
                    setModalShow3(true)
                  }
                  }
              )
              .catch( (error) =>
                {
                  setModalShow2(false)
                  setModalShow3(true)
                } )
    }





    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
      });
      const isMobileOrTablet = useMediaQuery({
        query: "(max-width: 1224px)"
      });
    
    
    

      const closePage = ()=>{
        navigate('/menu_rapport_retrait_french')
      }
    
     /* useEffect(()=>
      {
         const interval =  setInterval((e)=>submit(e),1000);
          return () => clearInterval(interval)
      },[envoie4])

*/

     
console.log(props.detailEnvoieTotal)
   
   
    return (
        
        <>
        <Header dataAbonne={props.dataAbonne} isAdmin={props.isAdmin} language2={props.language2} setLanguage2={props.setLanguage2} modalShowPasswordChange={props.modalShowPasswordChange} setModalShowPasswordChange={props.setModalShowPasswordChange} modalShowContact={props.modalShowContact} setModalShowContact={props.setModalShowContact} modalShow={props.modalShow} modalShow4={props.modalShow4} setModalShow={props.setModalShow} setModalShow4={props.setModalShow4} setLanguage={props.setLanguage} uniqueNumber={props.uniqueNumber} setUniqueNumber={props.setUniqueNumber} setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} isLogged={props.isLogged} username={props.username} language={props.language}/>
{isDesktop && props.detailEnvoieTotal.length > 0 ? props.detailEnvoieTotal.map((value)=>
    {
    return <div className='justify-content-center text-center mb-5 text-light text-bold rounded'>
    <Row className='mt-3 px-5'>
            <Col xs={12} className="text-start text-light">
                {props.tableType === "dailyRapport" ? <p><Link to='/table_daily_rapport_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u></b></Link></p> : props.tableType === "monthlyRapport" ? <p><Link to='/table_monthly_rapport_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u></b></Link></p> : props.tableType === "dailyRapportRecette" ? <p><Link to='/daily_rapport_recette_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u></b></Link></p> : props.tableType === "monthlyRapportRecette" ? <p><Link to='/monthly_rapport_recette_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u></b></Link></p> : <p><Link to='/details_historic_info_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u></b></Link></p>}
            </Col>
        </Row>
        <Container className='bg-light justify-content-center text-center mb-5' style={{marginTop:50,width:1000}} >
    <Row className='justify-content-center mb-3 pt-3' >
            <Col xs={12}>
            <p className='couleur2'><i><b>{message}</b></i></p>
            </Col>
        </Row>
    
        <Row className='justify-content-center pb-3'>
          <hr style={{color:"darkorange"}}></hr>
         
        </Row>
    <Row className='justify-content-start text-start pb-3 mb-3' >
    <Col xs={6} className='justify-content-start'>
        <p className='text-dark'>Kombo Motindi: <b className='text-dark'>{value.nom_expediteur} {value.postnom_expediteur} {value.prenom_expediteur}</b> </p>
        <p className='text-dark'>Kombo Mozui: <b className='text-dark '>{value.nom_beneficiaire} {value.postnom_beneficiaire} {value.prenom_beneficiaire}</b> </p>
        <p className='text-dark'>Mboka ya Motindi: <b className='text-dark '> {value.pays_expediteur}</b></p>
        <p className='text-dark'>Numéro ya Motindi: <b className='text-dark'> {value.numero_expediteur}</b></p>
        <p className='text-dark'>Email ya Motindi: <b className='text-dark '> {value.email_expediteur}</b></p>
        <p className='text-dark'>Mboka Ya Mozui: <b className='text-dark '> {value.pays_beneficiaire}</b></p>
        <p className='text-dark'>Mosolo oyo esengeli kozwama: <b className='text-dark'>{Number(value.montant_beneficiaire).toFixed(2)} $</b> </p>
        
    </Col>

    <Col xs={6}>
       
        <p className='text-dark'>Mosolo oyo esengeli kofutama: <b className='text-dark'>{Number(value.montant_total).toFixed(2)} £</b> </p>
        <p className='text-dark'>Nzela yako zwa mbongo: <b className='text-dark'>{value.type_service}</b> </p>
        <p className='text-dark'>Numéro ya transfert: <b className='text-dark'>{value.numero_transfer}</b> </p>
        <p className='text-dark'>Code ya Retrait : <b className='text-dark'>{value.code_retrait}</b> </p>
        <p className='text-dark'>Status ya Retrait : <b className='text-dark'>{value.status_retrait}</b> </p>
        
    </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
     
    </Row>

    <Row className='justify-content-center pb-3 mb-3 text-start' >
    <Col xs={6}>
     {value.status_retrait === "Code Retrait Payé" ? <div><p className='text-dark'>Retrait oyo esalemi na : <b className='text-dark'>{value.retrait_executed_by_agent}</b> </p>
     <p className='text-dark'>Date na heure ya Retrait: <b className='text-dark'> {value.date_heure_operation_retrait}</b></p></div>  :
    <p></p>}        
    </Col>

    <Col xs={6}> 
        <p className='text-dark'>Etindamaki na : <b className='text-dark'>{value.envoi_executed_by_agent}</b> </p>
        <p className='text-dark'>Date na heure ya etindami: <b className='text-dark'> {value.date_heure_operation}</b></p> 
    </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
     
    </Row>

    <Row className='justify-content-center pb-3 mb-3' >
    <Col xs={12}>
     {value.status_retrait !== "code retrait en attente de validation" ? <div><p className='text-dark'>Code Retrait validé par : <b className='text-dark'>{value.validation_executed_by_owner}</b> </p>
     <p className='text-dark'>Date na heure ya validation: <b className='text-dark'> {value.date_heure_operation_validation}</b></p></div>  :
    <p></p>}        
    </Col>

    <Col xs={12}>
     {props.tableType==="historic" ? props.messageLingala === "Historique yaba suppression" ? <div><p className='text-dark'>operation supprimé epayi ya : <b className='text-dark'>{value.deletion_executed_by_owner}</b> </p>
     <p className='text-dark'>Date na heure  ya suppression: <b className='text-dark'> {value.date_heure_operation_deletion}</b></p><br></br>
      <Button onClick={recoverOperation}  className='mx-5' variant='success'>Kozongisa opération</Button>
      <Button  onClick={()=>setModalShow6(true)}className='mx-5' variant='danger'>Effacer na ndenge ya libela</Button></div> :
    <p></p> : <p></p>}        
    </Col>

    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr> 
    </Row>

    <Row className='justify-content-center pb-3'>
    <Col xs={6}>
    {props.tableType === "dailyRapport" ? <p><Link to='/table_daily_rapport_lingala' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>kokanga</Button></Link></p> : props.tableType === "monthlyRapport" ? <p><Link to='/table_monthly_rapport_lingala' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>kokanga</Button></Link></p> : props.tableType === "dailyRapportRecette" ? <p><Link to='/daily_rapport_recette_lingala' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>kokanga</Button></Link></p> : props.tableType === "monthlyRapportRecette" ? <p><Link to='/monthly_rapport_recette_lingala' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>kokanga</Button></Link></p> : <p><Link to='/details_historic_info_lingala' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>kokanga</Button></Link></p>}
     </Col>
    </Row>

   

    

</Container> 
</div>})
:
<MyVerticallyCenteredModal show={false} onHide={() => {
  setModalShow(false)
  closePage()
}} />
} 


{isMobileOrTablet && props.detailEnvoieTotal.length > 0 ? props.detailEnvoieTotal.map((value)=>
    {
    return <div className='justify-content-center text-center mb-5 text-light text-bold rounded'>
    <Row className='mt-3 px-5'>
            <Col xs={12} className="text-start text-light">
                {props.tableType === "dailyRapport" ? <p><Link to='/table_daily_rapport_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u></b></Link></p> : props.tableType === "monthlyRapport" ? <p><Link to='/table_monthly_rapport_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u></b></Link></p> : props.tableType === "dailyRapportRecette" ? <p><Link to='/daily_rapport_recette_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u></b></Link></p> : props.tableType === "monthlyRapportRecette" ? <p><Link to='/monthly_rapport_recette_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u></b></Link></p> : <p><Link to='/details_historic_info_lingala' style={{textDecoration:"none",fontSize:20}}><b className='couleur2'>&#8592; <u>Zonga</u></b></Link></p>}
            </Col>
        </Row>
        <Container className='bg-light justify-content-center text-center mb-5' style={{marginTop:50,width:"auto"}} >
    <Row className='justify-content-center mb-3 pt-3' >
            <Col xs={12}>
            <p className='couleur2'><i><b>{message}</b></i></p>
            </Col>
        </Row>
    
        <Row className='justify-content-center pb-3'>
          <hr style={{color:"darkorange"}}></hr>
         
        </Row>
    <Row className='justify-content-start text-start pb-3 mb-3' >
    <Col xs={12} className='justify-content-start'>
        <p className='text-dark'>Kombo Motindi: <b className='text-dark'>{value.nom_expediteur} {value.postnom_expediteur} {value.prenom_expediteur}</b> </p>
        <p className='text-dark'>Kombo Mozui: <b className='text-dark '>{value.nom_beneficiaire} {value.postnom_beneficiaire} {value.prenom_beneficiaire}</b> </p>
        <p className='text-dark'>Mboka ya Motindi: <b className='text-dark '> {value.pays_expediteur}</b></p>
        <p className='text-dark'>Numéro ya Motindi: <b className='text-dark'> {value.numero_expediteur}</b></p>
        <p className='text-dark'>Email ya Motindi: <b className='text-dark '> {value.email_expediteur}</b></p>
        <p className='text-dark'>Mboka Ya Mozui: <b className='text-dark '> {value.pays_beneficiaire}</b></p>
        <p className='text-dark'>Mosolo oyo esengeli kozwama: <b className='text-dark'>{Number(value.montant_beneficiaire).toFixed(2)} $</b> </p>
        
    </Col>

    <Col xs={12}>
       
        <p className='text-dark'>Mosolo oyo esengeli kofutama: <b className='text-dark'>{Number(value.montant_total).toFixed(2)} £</b> </p>
        <p className='text-dark'>Nzela yako zwa mbongo: <b className='text-dark'>{value.type_service}</b> </p>
        <p className='text-dark'>Numéro ya transfert: <b className='text-dark'>{value.numero_transfer}</b> </p>
        <p className='text-dark'>Code ya Retrait : <b className='text-dark'>{value.code_retrait}</b> </p>
        <p className='text-dark'>Status ya Retrait : <b className='text-dark'>{value.status_retrait}</b> </p>
        
    </Col>
    </Row>
    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
     
    </Row>

    <Row className='justify-content-center pb-3 mb-3 text-start' >
    <Col xs={12}>
     {value.status_retrait === "Code Retrait Payé" ? <div><p className='text-dark'>Retrait oyo esalemi na : <b className='text-dark'>{value.retrait_executed_by_agent}</b> </p>
     <p className='text-dark'>Date na heure ya Retrait: <b className='text-dark'> {value.date_heure_operation_retrait}</b></p></div>  :
    <p></p>}        
    </Col>

    <Col xs={12}> 
        <p className='text-dark'>Etindamaki na : <b className='text-dark'>{value.envoi_executed_by_agent}</b> </p>
        <p className='text-dark'>Date na heure ya etindami: <b className='text-dark'> {value.date_heure_operation}</b></p> 
    </Col>
    </Row>

    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr>
     
    </Row>

    <Row className='justify-content-center pb-3 mb-3' >
    <Col xs={12}>
     {value.status_retrait !== "code retrait en attente de validation" ? <div><p className='text-dark'>Code Retrait validé par : <b className='text-dark'>{value.validation_executed_by_owner}</b> </p>
     <p className='text-dark'>Date na heure ya validation: <b className='text-dark'> {value.date_heure_operation_validation}</b></p></div>  :
    <p></p>}        
    </Col>

    <Col xs={12}>
     {props.tableType==="historic" ? props.messageLingala === "Historique yaba suppression" ? <div><p className='text-dark'>operation supprimé epayi ya : <b className='text-dark'>{value.deletion_executed_by_owner}</b> </p>
     <p className='text-dark'>Date na heure  ya suppression: <b className='text-dark'> {value.date_heure_operation_deletion}</b></p><br></br>
      <Button onClick={recoverOperation}  className='mx-5' variant='success'>Kozongisa opération</Button>
      <Button  onClick={()=>setModalShow6(true)}className='mx-5' variant='danger'>Effacer na ndenge ya libela</Button></div> :
    <p></p> : <p></p>}        
    </Col>

    </Row>


    <Row className='justify-content-center pb-3'>
      <hr style={{color:"darkorange"}}></hr> 
    </Row>

    <Row className='justify-content-center pb-3'>
    <Col xs={6}>
    {props.tableType === "dailyRapport" ? <p><Link to='/table_daily_rapport_lingala' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>kokanga</Button></Link></p> : props.tableType === "monthlyRapport" ? <p><Link to='/table_monthly_rapport_lingala' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>kokanga</Button></Link></p> : props.tableType === "dailyRapportRecette" ? <p><Link to='/daily_rapport_recette_lingala' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>kokanga</Button></Link></p> : props.tableType === "monthlyRapportRecette" ? <p><Link to='/monthly_rapport_recette_lingala' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>kokanga</Button></Link></p> : <p><Link to='/details_historic_info_lingala' style={{textDecoration:"none",fontSize:20}}><Button variant='danger'>kokanga</Button></Link></p>}
     </Col>
    </Row>

   

    

</Container> 
</div>})
:
<MyVerticallyCenteredModal show={false} onHide={() => {
  setModalShow(false)
  closePage()
}} />
} 

<Row className="mt-5">
          <Col md={12}>
            <p></p>
          </Col>
        </Row>
{/*<SessionOut setIsadmin={props.setIsadmin}/>*/}
<MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
<MyVerticallyCenteredModal3 show={modalShow3} onHide={() => setModalShow3(false)} />
<MyVerticallyCenteredModal4 show={modalShow4} onHide={() => {
  setModalShow4(false)
  navigate('/my_profil_lingala')  
  
  }} />
  <MyVerticallyCenteredModal5 show={modalShow5} onHide={() => {
  setModalShow5(false)
 navigate('/my_profil_lingala')  
  }} />
  <MyVerticallyCenteredModal6 show={modalShow6} onHide={() => setModalShow6(false)}  deleteOperation={deleteOperation}/>
<Footer />
        </>
       
    )
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          opération moko te ezali
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='couleur2'><b>Opération moko te ezali na date oyo </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>kokanga</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          zela mukie...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ClipLoader color={"#ff8c00"} loading={true} size={150} /> 
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal3(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        pardon opération elongi te
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='couleur2'><b>Tosengi na bino bo contacter équipe technique! </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>kokanga</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal4(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        opération ya récupération oyo elongi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-success'><b>olongi kozongisa opération oyo malamu! </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>ok</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal5(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        opération elongolami mpo na libela
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-success'><b>olongoli libela opération oyo ya kotinda</b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>ok</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal6(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        olingi vraiment o supprimer permanentement opération oyo ya kotinda??
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-center'>
      <Button variant='dark' className='mx-2'  onClick={props.onHide}>Na boyi</Button> <Button variant='danger' className='mx-2' onClick={()=>{
         props.deleteOperation()}
      }>na ndimi</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>kokanga</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default DetailsRetraitsInfoLingala;