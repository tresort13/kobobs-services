import React , {useRef} from 'react';
import { useNavigate} from "react-router-dom";
import {useIdleTimer} from 'react-idle-timer';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";


function SessionOutLingala(props)
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
      window.location.reload();
     // navigate('/')
      
    }
    const idleTimer = useIdleTimer({
      promptTimeout : 10 * 1000,
      onPrompt : ()=>{
        if(props.isLogged ===true)
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
        if(props.isLogged ===true)
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
  <MyVerticallyCenteredModal close={close} logout = {logout} show={modalShow} onHide={() => setModalShow(false)} />
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
        Osaleli système te banda mwa ntango...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <p className='text-dark'><b> Okozala déconnecté automatiquement, pona ko continuer fina <span className='text-success'>"Tikala"</span></b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
          <Button variant='danger' onClick={props.logout}>Deconnecter ngai</Button>
          <Button variant='success' onClick={props.close}>Tikala</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SessionOutLingala