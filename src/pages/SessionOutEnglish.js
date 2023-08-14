import React , {useRef} from 'react';
import { useNavigate} from "react-router-dom";
import {useIdleTimer} from 'react-idle-timer';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";


function SessionOutEnglish(props)
{
 const navigate = useNavigate()
 const [modalShow, setModalShow] = React.useState(false);

 const open = ()=>
 {
  setModalShow(true)
 }

 const close = ()=>
 {
   idleTimer.reset()
  setModalShow(false)
 }

 const logout = ()=>
 {
   window.localStorage.setItem("username", JSON.stringify(""))
   window.localStorage.setItem("isAdmin", false)
   window.localStorage.setItem("isLogged", false)
   window.localStorage.setItem("isStaff", false)
   window.localStorage.setItem("abonne",JSON.stringify({infoAbonne :{
     agent_id:'',
     nom_expediteur : '',
     prenom_expediteur : '',
     email_expediteur : '',
     numero_expediteur: '',
     pays_expediteur : 'UK',
     }}))
     window.localStorage.setItem("envoie",JSON.stringify({infoEnvoie :{
       agent_id:'',
       nom_expediteur : '',
       prenom_expediteur : '',
       adresse_expediteur : 'N/A',
       email_expediteur : '',
       numero_expediteur: '',
       pays_expediteur : 'UK',
       nom_beneficiaire : '',
       prenom_beneficiaire : '',
       pays_beneficiaire : '',
       montant_beneficiaire : '',
       montant_pour_payer :'',
       frais_envoie : '',
       frais_tva : '',
       type_service : '',
       numero_transfer :'',
       date_operation : '',
       date_heure_operation : '',
       month_year_operation :''
       }}))

       window.localStorage.setItem("envoie2",JSON.stringify({infoEnvoie :{
         nom_expediteur : '',
   prenom_expediteur : '',
   adresse_expediteur : 'N/A',
   email_expediteur : '',
   numero_expediteur: '',
   pays_expediteur : 'UK',
   nom_beneficiaire : '',
   prenom_beneficiaire : '',
   pays_beneficiaire : '',
   montant_beneficiaire : '',
   type_service : '',
   frais_envoie : '',
   montant_total : '',
   code_retrait : '',
   data_operation : '',
   date_heure_operation : '',
   code_abonne : '',
   status_retrait : '',
   numero_transfer :''
             }}))
             window.localStorage.setItem("envoie3",JSON.stringify({infoEnvoie :{
               nom_expediteur : '',
   prenom_expediteur : '',
   adresse_expediteur : 'N/A',
   email_expediteur : '',
   numero_expediteur: '',
   pays_expediteur : 'UK',
   nom_beneficiaire : '',
   prenom_beneficiaire : '',
   pays_beneficiaire : '',
   montant_envoie_sans_frais : '',
   montant_beneficiaire : '',
   type_service : '',
   frais_envoie : '',
   frais_tva : '',
   montant_total : '',
   code_retrait : '',
   data_operation : '',
   date_heure_operation : '',
   status_retrait : '',
   numero_transfer:''
                   }}))
   window.location.reload();
  // navigate('/')
   
 }

  const idleTimer = useIdleTimer({
      promptTimeout : 10 * 1000,
      onPrompt : ()=>{
        if((props.isLogged ===true) || (props.abonne.infoAbonne.numero_expediteur != ""))
        {
          open()
        } 
        else
        {
          close()
        }  
      },
      timeout : 60 * 1000,
      onIdle : ()=>{
        if((props.isLogged ===true) || (props.abonne.infoAbonne.numero_expediteur != ""))
        {
          logout()
        }  
        else
        {
          close()
        }     
      },
      onActive : close,
     })



 return (
   <>
    <MyVerticallyCenteredModal close={close} logout = {logout} show={modalShow} onHide={() => setModalShow(false)} />
   </>

 )
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        You have been inactive for a while...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p className='text-dark'><b> You will be disconnected automatically, to continue press <span className='text-success'>"Stay"</span></b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
          <Button variant='danger' onClick={props.logout}>Take me out</Button>
          <Button variant='success' onClick={props.close}>stay</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SessionOutEnglish