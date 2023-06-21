import React,{ useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from  'react-router-dom';
import {Navigate} from  'react-router-dom';
import  './pages/Assets.css';
import useForceUpdate from 'use-force-update';

import HomeLingala from './pages/HomeLingala';
import EnvoiInfo from './pages/EnvoiInfo';
import ConfirmationEnvoieInfo from './pages/ConfirmationEnvoieInfo';
import ConfirmationRetraitInfo from './pages/ConfirmationRetraitInfo';
import FormEnvoiClient from './pages/FormEnvoiClient';
import FormEnvoiAbonneId from './pages/FormEnvoiAbonneId';
import FormEnvoiAbonne from './pages/FormEnvoiAbonne';
import EnvoieAbonneInfo from './pages/EnvoieAbonneInfo';
import FormRetrait from './pages/FormRetrait';
import FormCodeAbonneLingala from  './pages/FormCodeAbonneLingala';
import FormFindCodeRetraitLingala from './pages/FormFindCodeRetraitLingala';

import HomeEnglish from './pages/HomeEnglish';
import EnvoiInfoEnglish from './pages/EnvoiInfoEnglish';
import ConfirmationEnvoieInfoEnglish from './pages/ConfirmationEnvoieInfoEnglish';
import ConfirmationRetraitInfoEnglish from './pages/ConfirmationRetraitInfoEnglish';
import FormEnvoiClientEnglish from './pages/FormEnvoiClientEnglish';
import FormEnvoiAbonneIdEnglish from './pages/FormEnvoiAbonneIdEnglish';
import EnvoieAbonneInfoEnglish from './pages/EnvoieAbonneInfoEnglish';
import FormRetraitEnglish from './pages/FormRetraitEnglish';
import FormEnvoiAbonneEnglish from './pages/FormEnvoiAbonneEnglish'
import FormCodeAbonneEnglish from  './pages/FormCodeAbonneEnglish'
import FormFindCodeRetraitEnglish from './pages/FormFindCodeRetraitEnglish';
import Login from './pages/Login';



import HomeFrench from './pages/HomeFrench';
import EnvoiInfoFrench from './pages/EnvoiInfoFrench';
import ConfirmationEnvoieInfoFrench from './pages/ConfirmationEnvoieInfoFrench';
import ConfirmationRetraitInfoFrench from './pages/ConfirmationRetraitInfoFrench';
import FormEnvoiClientFrench from './pages/FormEnvoiClientFrench';
import FormEnvoiAbonneIdFrench from './pages/FormEnvoiAbonneIdFrench';
import FormEnvoiAbonneFrench from './pages/FormEnvoiAbonneFrench';
import EnvoieAbonneInfoFrench from './pages/EnvoieAbonneInfoFrench';
import FormRetraitFrench from './pages/FormRetraitFrench';
import FormCodeAbonneFrench from  './pages/FormCodeAbonneFrench'
import FormFindCodeRetraitFrench from './pages/FormFindCodeRetraitFrench';
import HomeManagement from './pages/HomeManagement';
import RetraitInfo from './pages/RetraitInfo';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ClipLoader from "react-spinners/ClipLoader";
import {Link,useNavigate} from  'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import LoginBoxEnglish from './pages/LoginBoxEnglish';
import MenuGestionOperationsRetrait from './pages/MenuGestionOperationsRetrait';
import FormRetraitOperation from './pages/FormRetraitOperation';
import ConfirmationRetraitInfoOperation from './pages/ConfirmationRetraitInfoOperation';
import AbonneFormNonValideInfo from './pages/AbonneFormNonValideInfo';



const useState = React.useState

function App() {

  
  const [forceUpdate, setForceUpdate] = useState(()=>
  {
    const localData = localStorage.getItem('forceUpdate');
    return localData ? JSON.parse(localData) : false;
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("forceUpdate", JSON.stringify(forceUpdate))
  }, [forceUpdate])
  const [language,setLanguage] = useState(()=>
  {
    const localData = localStorage.getItem('language');
    return localData ? JSON.parse(localData) : "english";
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("language", JSON.stringify(language))
  }, [language])

  const [language2,setLanguage2] = useState(()=>
  {
    const localData = localStorage.getItem('language2');
    return localData ? JSON.parse(localData) : "lingala";
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("language2", JSON.stringify(language2))
  }, [language2])

  const [modalShow, setModalShow] = useState(()=>
  {
    const localData = localStorage.getItem('modalShow');
    return localData ? JSON.parse(localData) : false;
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("modalShow", JSON.stringify(modalShow))
  }, [modalShow])

  const [modalShow4, setModalShow4] = useState(()=>
  {
    const localData = localStorage.getItem('modalShow');
    return localData ? JSON.parse(localData) : false;
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("modalShow4", JSON.stringify(modalShow4))
  }, [modalShow4])

  const [modalShowRetrait, setModalShowRetrait] = useState(()=>
  {
    const localData = localStorage.getItem('modalShowRetrait');
    return localData ? JSON.parse(localData) : false;
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("modalShowRetrait", JSON.stringify(modalShowRetrait))
  }, [modalShowRetrait])

  const [modalShowEnvoi, setModalShowEnvoi] = useState(()=>
  {
    const localData = localStorage.getItem('modalShowEnvoi');
    return localData ? JSON.parse(localData) : false;
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("modalShowEnvoi", JSON.stringify(modalShowEnvoi))
  }, [modalShowEnvoi])
  

  const [modalShowContact, setModalShowContact] = useState(()=>
  {
    const localData = localStorage.getItem('modalShowContact');
    return localData ? JSON.parse(localData) : false;
  });

  useEffect(() => {
    window.localStorage.setItem("modalShowContact", JSON.stringify(modalShowContact))
  }, [modalShowContact])

  const [modalShowPasswordChange, setModalShowPasswordChange] = useState(()=>
  {
    const localData = localStorage.getItem('modalShowPasswordChange');
    return localData ? JSON.parse(localData) : false;
  });

  useEffect(() => {
    window.localStorage.setItem("modalShowPasswordChange", JSON.stringify(modalShowPasswordChange))
  }, [modalShowPasswordChange])


  
  const [username,setUsername] = useState(()=>
  {
    const localData = localStorage.getItem('username');
    return localData ? JSON.parse(localData) : "";
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("username", JSON.stringify(username))
  }, [username])

  const [uniqueNumber,setUniqueNumber] = useState(()=>
  {
    const localData = localStorage.getItem('uniqueNumber');
    return localData ? JSON.parse(localData) : 0;
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("uniqueNumber", JSON.stringify(uniqueNumber ))
  }, [uniqueNumber])

  const [isAdmin,setIsadmin] = useState(()=>
  {
    const localData = localStorage.getItem('isAdmin');
    return localData ? JSON.parse(localData) : false;
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("isAdmin", JSON.stringify(isAdmin))
  }, [isAdmin])

  const [isStaff,setIsStaff] = useState(()=>
  {
    const localData = localStorage.getItem('isStaff');
    return localData ? JSON.parse(localData) : false;
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("isStaff", JSON.stringify(isStaff))
  }, [isStaff])

  const [isLogged,setIsLogged] = useState(()=>
  {
    const localData = localStorage.getItem('isLogged');
    return localData ? JSON.parse(localData) : false;
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("isLogged", JSON.stringify(isLogged))
  }, [isLogged])

  
  const [dateInfo,setDate] = useState(()=>
  {
    const localData = localStorage.getItem('dateInfo');
    return localData ? JSON.parse(localData) : "";
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("dateInfo", JSON.stringify(dateInfo))
  }, [dateInfo])

  const [moisInfo,setMois] = useState(()=>
  {
    const localData = localStorage.getItem('moisInfo');
    return localData ? JSON.parse(localData) : "";
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("moisInfo", JSON.stringify(moisInfo))
  }, [moisInfo])


  const [dailyRapport,setDailyRapport] = useState(()=>
  {
    const localData = localStorage.getItem('dailyRapport');
    return localData ? JSON.parse(localData) :[];
    })
  
  

  useEffect(() => {
    window.localStorage.setItem("dailyRapport", JSON.stringify(dailyRapport))
  }, [dailyRapport])

  const dataDailyRapport = (donne)=>
  {
    setDailyRapport(donne)
  }


  const [monthlyRapport,setMonthlyRapport] = useState(()=>
  {
    const localData = localStorage.getItem('monthlyRapport');
    return localData ? JSON.parse(localData) :[];
    })
  
  

  useEffect(() => {
    window.localStorage.setItem("monthlyRapport", JSON.stringify(monthlyRapport))
  }, [monthlyRapport])

  const dataMonthlyRapport = (donne)=>
  {
    setMonthlyRapport(donne)
  }


  const [detailEnvoieTotal,setDetailEnvoieTotal] = useState(()=>
  {
    const localData = localStorage.getItem('detailEnvoieTotal');
    return localData ? JSON.parse(localData) :[];
    })
  
  

  useEffect(() => {
    window.localStorage.setItem("detailEnvoieTotal", JSON.stringify(detailEnvoieTotal))
  }, [detailEnvoieTotal])

  const dataDetailEnvoieTotal = (donne)=>
  {
    setDetailEnvoieTotal(donne)
  }


  const [userInfo,setUserInfo] = useState(()=>
  {
    const localData = localStorage.getItem('userInfo');
    return localData ? JSON.parse(localData) :[];
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("userInfo", JSON.stringify(userInfo))
  }, [userInfo])

  const dataUserInfo = (donne)=>
  {
    setUserInfo(donne)
  }

  /*const [detailEnvoieValide,setDetailEnvoieValide] = useState(()=>
  {
    const localData = localStorage.getItem('detailEnvoieValide');
    return localData ? JSON.parse(localData) :[];
    })
  
  

  useEffect(() => {
    window.localStorage.setItem("detailEnvoieValide", JSON.stringify(detailEnvoieValide))
  }, [detailEnvoieValide])

  const dataDetailEnvoieValide = (donne)=>
  {
    setDetailEnvoieValide(donne)
  }
*/

  const [taux,setTaux] = useState(()=>
  {
    const localData = localStorage.getItem('taux');
    return localData ? JSON.parse(localData) : "";
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("taux", JSON.stringify(taux))
  }, [taux])

  const [codeRetraitStatus,setCodeRetraitStatus] = useState(0)


  const [envoie,setEnvoie] = useState(()=>
  {
    const localData = localStorage.getItem('envoie');
    return localData ? JSON.parse(localData) : {infoEnvoie :{
      agent_id:'',
      nom_expediteur : '',
      prenom_expediteur : '',
      adresse_expediteur : '',
      email_expediteur : '',
      numero_expediteur: '',
      pays_expediteur : 'UK',
      nom_beneficiaire : '',
      prenom_beneficiaire : '',
      pays_beneficiaire : 'RD Congo',
      montant_beneficiaire : '',
      montant_pour_payer :'',
      frais_envoie : '',
      frais_tva : '',
      type_service : 'Kozua na maboko (kozua na nzela ya agence)',
      numero_transfer :'**********',
      date_operation : '',
      date_heure_operation : '',
      month_year_operation :''
      }};
    })
  
  

  useEffect(() => {
    window.localStorage.setItem("envoie", JSON.stringify(envoie))
  }, [envoie])

  const dataEnvoie =  (donne)=>
  {
    setEnvoie({infoEnvoie :{
      agent_id : donne.agent_id,
      nom_expediteur : donne.nom_expediteur,
      prenom_expediteur : donne.prenom_expediteur,
      adresse_expediteur : donne.adresse_expediteur,
      email_expediteur : donne.email_expediteur,
      numero_expediteur: donne.numero_expediteur,
      pays_expediteur : donne.pays_expediteur,
      nom_beneficiaire : donne.nom_beneficiaire,
      prenom_beneficiaire : donne.prenom_beneficiaire,
      pays_beneficiaire : donne.pays_beneficiaire,
      montant_beneficiaire : donne.montant_beneficiaire,
      montant_pour_payer : (Number(donne.montant_beneficiaire).toFixed(2) * Number(taux).toFixed(2)) + ((Number(donne.montant_beneficiaire).toFixed(2) * Number(taux).toFixed(2)) * 5)/100 + ((Number(donne.montant_beneficiaire).toFixed(2) * Number(taux).toFixed(2)) * 1)/100,
      frais_envoie : ((Number(donne.montant_beneficiaire).toFixed(2) * Number(taux).toFixed(2)) * 5)/100,
      frais_tva : ((Number(donne.montant_beneficiaire).toFixed(2) * Number(taux).toFixed(2)) * 1)/100,
      type_service : donne.type_service,
      numero_transfer :donne.numero_transfer
      }})

  }


  const [envoie2,setEnvoie2] = useState(()=>
  {
    const localData = localStorage.getItem('envoie2');
    return localData ? JSON.parse(localData) : {infoEnvoie :{
      nom_expediteur : '',
      prenom_expediteur : '',
      adresse_expediteur : '',
      email_expediteur : '',
      numero_expediteur: '',
      pays_expediteur : 'UK',
      nom_beneficiaire : '',
      prenom_beneficiaire : '',
      pays_beneficiaire : 'RD Congo',
      montant_beneficiaire : '',
      type_service : 'Kozua na maboko (kozua na nzela ya agence)',
      frais_envoie : '',
      montant_total : '',
      code_retrait : '',
      data_operation : '',
      date_heure_operation : '',
      code_abonne : '',
      status_retrait : '',
      numero_transfer :'**********'
      }};
    })
  
  

  useEffect(() => {
    window.localStorage.setItem("envoie2", JSON.stringify(envoie2))
  }, [envoie2])

  const dataEnvoie2 = (donne)=>
  {
    setEnvoie2({infoEnvoie :{
      nom_expediteur : donne[0].nom_expediteur,
      prenom_expediteur : donne[0].prenom_expediteur,
      adresse_expediteur : donne[0].adresse_expediteur,
      email_expediteur : donne[0].email_expediteur,
      numero_expediteur: donne[0].numero_expediteur,
      pays_expediteur : donne[0].pays_expediteur,
      nom_beneficiaire : donne[0].nom_beneficiaire,
      prenom_beneficiaire : donne[0].prenom_beneficiaire,
      pays_beneficiaire : donne[0].pays_beneficiaire,
      montant_envoie_sans_frais : donne[0].montant_envoie_sans_frais,
      montant_beneficiaire : donne[0].montant_beneficiaire,
      type_service : donne[0].type_service,
      frais_envoie : donne[0].frais_envoie,
      frais_tva : donne[0].frais_tva,
      montant_total : donne[0].montant_total,
      code_retrait : donne[0].code_retrait,
      date_operation : donne[0].date_operation,
      date_heure_operation : donne[0].date_heure_operation,
      code_abonne : donne[0].code_abonne,
      status_retrait : donne[0].status_retrait,
      numero_transfer : donne[0].numero_transfer
      }})
  }

  const [envoie3,setEnvoie3] = useState(()=>
  {
    const localData = localStorage.getItem('envoie3');
    return localData ? JSON.parse(localData) : {infoEnvoie :{
      nom_expediteur : '',
      prenom_expediteur : '',
      adresse_expediteur : '',
      email_expediteur : '',
      numero_expediteur: '',
      pays_expediteur : 'UK',
      nom_beneficiaire : '',
      prenom_beneficiaire : '',
      pays_beneficiaire : 'RD Congo',
      montant_envoie_sans_frais : '',
      montant_beneficiaire : '',
      type_service : 'Kozua na maboko (kozua na nzela ya agence)',
      frais_envoie : '',
      frais_tva : '',
      montant_total : '',
      code_retrait : '',
      data_operation : '',
      date_heure_operation : '',
      status_retrait : '',
      numero_transfer:'**********'
      }};
    })
  
  

  useEffect(() => {
    window.localStorage.setItem("envoie3", JSON.stringify(envoie3))
  }, [envoie3])

  const dataEnvoie3 = (donne)=>
  {
    setEnvoie3({infoEnvoie :{
      nom_expediteur : donne.nom_expediteur,
      prenom_expediteur : donne.prenom_expediteur,
      adresse_expediteur : donne.adresse_expediteur,
      email_expediteur : donne.email_expediteur,
      numero_expediteur: donne.numero_expediteur,
      pays_expediteur : donne.pays_expediteur,
      nom_beneficiaire : donne.nom_beneficiaire,
      prenom_beneficiaire : donne.prenom_beneficiaire,
      pays_beneficiaire : donne.pays_beneficiaire,
      montant_beneficiaire : donne.montant_beneficiaire,
      type_service : donne.type_service,
      frais_envoie : donne.frais_envoie,
      montant_total : donne.montant_total,
      code_retrait : donne.code_retrait,
      date_operation : donne.date_operation,
      date_heure_operation : donne.date_heure_operation,
      status_retrait : donne.status_retrait,
      numero_transfer: donne.numero_transfer
      }})
  }



  const [abonne,setAbonne] = useState(()=>
  {
    const localData = localStorage.getItem('abonne');
    return localData ? JSON.parse(localData) : {infoAbonne :{
      agent_id:'',
      nom_expediteur : '',
      prenom_expediteur : '',
      email_expediteur : '',
      numero_expediteur: '',
      pays_expediteur : 'UK',
      }};
    })
  
  

  useEffect(() => {
    window.localStorage.setItem("abonne", JSON.stringify(abonne))
  }, [abonne])

  const dataAbonne = (donne)=>
  {
    setAbonne({infoAbonne : {
      agent_id : donne.user_id,
      nom_expediteur : donne.last_name,
      prenom_expediteur : donne.first_name,
      email_expediteur : donne.email,
      numero_expediteur: donne.phone,
      pays_expediteur:'UK'
      }})
  }

  const dataEnvoieAbonne =  (donne1,donne2)=>
  {
    console.log(taux)
    setEnvoie({infoEnvoie :{
      agent_id : donne1.infoAbonne.agent_id,
      nom_expediteur : donne1.infoAbonne.nom_expediteur,
      prenom_expediteur : donne1.infoAbonne.prenom_expediteur,
      email_expediteur : donne1.infoAbonne.email_expediteur,
      numero_expediteur: donne1.infoAbonne.numero_expediteur,
      pays_expediteur : donne1.infoAbonne.pays_expediteur,
      nom_beneficiaire : donne2.nom_beneficiaire,
      prenom_beneficiaire : donne2.prenom_beneficiaire,
      pays_beneficiaire : donne2.pays_beneficiaire,
      montant_beneficiaire : donne2.montant_beneficiaire,
      montant_pour_payer : (Number(donne2.montant_beneficiaire).toFixed(2) * Number(taux).toFixed(2)) + ((Number(donne2.montant_beneficiaire).toFixed(2) * Number(taux).toFixed(2)) * 5)/100 + ((Number(donne2.montant_beneficiaire).toFixed(2) * Number(taux).toFixed(2)) * 1)/100,
      frais_envoie : ((Number(donne2.montant_beneficiaire).toFixed(2) * Number(taux).toFixed(2)) * 5)/100,
      frais_tva : ((Number(donne2.montant_beneficiaire).toFixed(2) * Number(taux).toFixed(2)) * 1)/100,
      type_service : donne2.type_service,
      numero_transfer : donne2.numero_transfer
      }})

  }
 
  

  const [abonneInfo,setAbonneInfo] = useState(()=>
  {
    const localData = localStorage.getItem('abonneInfo');
    return localData ? JSON.parse(localData) : {infoAbonne :{
      nom_expediteur : '',
      prenom_expediteur : '',
      adresse_expediteur : '',
      email_expediteur : '',
      numero_expediteur: '',
      pays_expediteur : 'UK',
      code_abonne : ''
      }};
    })
  
  

  useEffect(() => {
    window.localStorage.setItem("abonneInfo", JSON.stringify(abonneInfo))
  }, [abonneInfo])

  const dataAbonneInfo = (donne)=>
  {
    setAbonneInfo({infoAbonne : {
      nom_expediteur : donne[0].nom_expediteur,
      prenom_expediteur : donne[0].prenom_expediteur,
      adresse_expediteur : donne[0].adresse_expediteur,
      email_expediteur : donne[0].email_expediteur,
      numero_expediteur: donne[0].numero_expediteur,
      pays_expediteur : donne[0].pays_expediteur,
      code_abonne : donne[0].code_abonne
      }})
  }



  const[temps,setTemps] = useState(()=>
    {
      const localData = localStorage.getItem('temps');
   return localData ? JSON.parse(localData) : "";})

   useEffect(() => {
    window.localStorage.setItem("temps", JSON.stringify(temps))
  }, [temps])


    
  
    
    
  
  return ( 
    <>
    <BrowserRouter>
      <Routes >
        
        <Route path="/"  element={language2 === "english" ? <HomeEnglish  modalShowEnvoi={modalShowEnvoi} setModalShowEnvoi={setModalShowEnvoi} dataAbonne={dataAbonne} envoie3={envoie3} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/> : language2 === "lingala" ? <Navigate to='/home_lingala' /> : <Navigate to='/home_french' />} >
        </Route>

        <Route path="/login_english"  element={<Login />} >
        </Route>

        <Route path="/form_envoie_client_english" element={<FormEnvoiClientEnglish   dataEnvoie={dataEnvoie} envoie3={envoie3} envoie={envoie} setTaux={setTaux}/>}>
        </Route>

        <Route path="/form_envoie_abonne_id_english" element={<FormEnvoiAbonneIdEnglish  dataAbonne={dataAbonne} envoie3={envoie3} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language} />} >
        </Route>

        <Route path="/form_envoie_abonne_english" element={<FormEnvoiAbonneEnglish  abonne={abonne} envoie={envoie} envoie3={envoie3} setEnvoie={setEnvoie} dataEnvoieAbonne={dataEnvoieAbonne} taux={taux} setTaux={setTaux} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/form_retrait_info_english" element={<FormRetraitEnglish  dataEnvoie2={dataEnvoie2} envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/form_code_abonne_english" element={<FormCodeAbonneEnglish />} >
        </Route>

        <Route path="/form_find_code_retrait_english" element={<FormFindCodeRetraitEnglish  />} >
        </Route>
        
        <Route path="/envoi_info_english" element={<EnvoiInfoEnglish  dataEnvoie3={dataEnvoie3}  envoie={envoie} setEnvoie={setEnvoie} envoie3={envoie3}/>} >
        </Route>

        <Route path="/envoi_abonne_info_english" element={<EnvoieAbonneInfoEnglish setForceUpdate={setForceUpdate} setEnvoie3={setEnvoie3}  dataEnvoie3={dataEnvoie3} envoie={envoie} setEnvoie={setEnvoie} envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>


        <Route path="/confirmation_envoie_info_english" element={<ConfirmationEnvoieInfoEnglish modalShowEnvoi={modalShowEnvoi} setModalShowEnvoi={setModalShowEnvoi} envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/retrait_info_english" element={<ConfirmationRetraitInfoEnglish  envoie2={envoie2} dataAbonne={dataAbonne} envoie3={envoie3} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>





        <Route path="/home_lingala"  element={language2 === "lingala" ? <HomeLingala isAdmin={isAdmin} envoie3={envoie3} isStaff={isStaff} language2={language2} setLanguage2={setLanguage2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/> : language2 === "english" ? <Navigate to='/' /> : <Navigate to='/home_french' />} >
        </Route>
       
        <Route path="/form_envoie_client" element={<FormEnvoiClient  dataEnvoie={dataEnvoie} envoie3={envoie3} envoie={envoie} setTaux={setTaux}/>}>
        </Route>

        <Route path="/form_envoie_abonne_id" element={<FormEnvoiAbonneId dataAbonne={dataAbonne} />} >
        </Route>

        <Route path="/form_envoie_abonne" element={<FormEnvoiAbonne  abonne={abonne} envoie3={envoie3} dataEnvoieAbonne={dataEnvoieAbonne} setTaux={setTaux} envoie={envoie}/>} >
        </Route>

        <Route path="/form_retrait_info" element={<FormRetrait  dataEnvoie2={dataEnvoie2} envoie3={envoie3}/>} >
        </Route>

        <Route path="/form_code_abonne_lingala" element={<FormCodeAbonneLingala />} >
        </Route>

        <Route path="/form_find_code_retrait_lingala" element={<FormFindCodeRetraitLingala  />} >
        </Route>

        
        <Route path="/envoi_info" element={<EnvoiInfo   dataEnvoie3={dataEnvoie3}  envoie={envoie} setEnvoie={setEnvoie} envoie3={envoie3}/>} >
        </Route>

        <Route path="/envoi_abonne_info" element={<EnvoieAbonneInfo   dataEnvoie3={dataEnvoie3}  envoie={envoie} setEnvoie={setEnvoie} envoie3={envoie3}/>} >
        </Route>


        <Route path="/confirmation_envoie_info" element={ <ConfirmationEnvoieInfo   envoie3={envoie3}/>} >
        </Route>

        <Route path="/retrait_info" element={ <ConfirmationRetraitInfo  envoie3={envoie3} envoie2={envoie2}/>} >
        </Route>




        <Route path="/home_french"  element={language2 === "french" ? <HomeFrench isAdmin={isAdmin} isStaff={isStaff} language2={language2} setLanguage2={setLanguage2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/> : language2 === "english" ? <Navigate to='/' /> : <Navigate to='/home_lingala' />} >
        </Route>
       
        <Route path="/form_envoie_client_french" element={<FormEnvoiClientFrench  dataEnvoie={dataEnvoie} envoie={envoie} setTaux={setTaux}/>}>
        </Route>

        <Route path="/form_envoie_abonne_id_french" element={<FormEnvoiAbonneIdFrench dataAbonne={dataAbonne} />} >
        </Route>

        <Route path="/form_envoie_abonne_french" element={<FormEnvoiAbonneFrench  abonne={abonne} dataEnvoieAbonne={dataEnvoieAbonne} setTaux={setTaux} envoie={envoie}/>} >
        </Route>

        <Route path="/form_retrait_info_french" element={<FormRetraitFrench  dataEnvoie2={dataEnvoie2}/>} >
        </Route>

        <Route path="/form_code_abonne_french" element={<FormCodeAbonneFrench />} >
        </Route>
        
        <Route path="/form_find_code_retrait_french" element={<FormFindCodeRetraitFrench />} >
        </Route>
        
        <Route path="/envoi_info_french" element={<EnvoiInfoFrench   dataEnvoie3={dataEnvoie3} envoie={envoie} setEnvoie={setEnvoie} envoie3={envoie3}/>} >
        </Route>

        <Route path="/envoi_abonne_info_french" element={<EnvoieAbonneInfoFrench   dataEnvoie3={dataEnvoie3} envoie={envoie} setEnvoie={setEnvoie} envoie3={envoie3}/>} >
        </Route>


        <Route path="/confirmation_envoie_info_french" element={ <ConfirmationEnvoieInfoFrench   envoie3={envoie3}/>} >
        </Route>

        <Route path="/retrait_info_french" element={ <ConfirmationRetraitInfoFrench   envoie2={envoie2}/>} >
        </Route>


        <Route path="/menu_management"  element={<HomeManagement dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language} modalShowRetrait={modalShowRetrait} setModalShowRetrait={setModalShowRetrait}/>} >
        </Route>

        <Route path="/menu_operation_retrait"  element={<MenuGestionOperationsRetrait dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/form_retrait_operation" element={username == "" ? <Navigate to='/' /> : <FormRetraitOperation username={username} dataEnvoie2={dataEnvoie2} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} language={language}/>}>
        </Route>

        <Route path="/form_retrait_operation" element={username == "" ? <Navigate to='/' /> : <FormRetraitOperation  dataEnvoie2={dataEnvoie2} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>}>
        </Route>
        
        <Route path="/retrait_info_operation" element={username == "" ? <Navigate to='/' /> : <RetraitInfo username={username} envoie2={envoie2} dataEnvoie2={dataEnvoie2} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>

        <Route path="/confirmation_retrait_info_operation" element={username == "" ? <Navigate to='/' /> : <ConfirmationRetraitInfoOperation username={username} envoie2={envoie2} dataEnvoie2={dataEnvoie2} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language} setModalShowRetrait={setModalShowRetrait}/>}>
        </Route>

        <Route path="/form_abonne_non_valide" element={username == "" ? <Navigate to='/' /> : <AbonneFormNonValideInfo dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}setCodeRetraitStatus={setCodeRetraitStatus} codeRetraitStatus={codeRetraitStatus}  envoie3={envoie3}/>}>
        </Route>

      </Routes >
    </BrowserRouter>
    
    </>
  );
}


export default App;

