import React,{ useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from  'react-router-dom';
import {Navigate} from  'react-router-dom';
import  './pages/Assets.css';

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

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ClipLoader from "react-spinners/ClipLoader";
import {Link,useNavigate} from  'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import LoginBoxEnglish from './pages/LoginBoxEnglish';



const useState = React.useState

function App() {

  

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
    return localData ? JSON.parse(localData) : "english";
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
      code_abonne : '',
      numero_transfer :'**********'
      }};
    })
  
  

  useEffect(() => {
    window.localStorage.setItem("envoie", JSON.stringify(envoie))
  }, [envoie])

  const dataEnvoie = (donne)=>
  {
    setEnvoie({infoEnvoie :{
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
      code_abonne : '',
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
      data_operation : donne[0].data_operation,
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
      code_abonne : '',
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
      data_operation : donne.data_operation,
      date_heure_operation : donne.date_heure_operation,
      code_abonne : donne.code_abonne,
      status_retrait : donne.status_retrait,
      numero_transfer: donne.numero_transfer
      }})
  }



  const [abonne,setAbonne] = useState(()=>
  {
    const localData = localStorage.getItem('abonne');
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
    window.localStorage.setItem("abonne", JSON.stringify(abonne))
  }, [abonne])

  const dataAbonne = (donne)=>
  {
    setAbonne({infoAbonne : {
      nom_expediteur : donne[0].nom_expediteur,
      prenom_expediteur : donne[0].prenom_expediteur,
      adresse_expediteur : donne[0].adresse_expediteur,
      email_expediteur : donne[0].email_expediteur,
      numero_expediteur: donne[0].numero_expediteur,
      pays_expediteur : donne[0].pays_expediteur,
      code_abonne : donne[0].code_abonne
      }})
  }

  const dataEnvoieAbonne = (donne1,donne2)=>
  {
    setEnvoie({infoEnvoie :{
      nom_expediteur : donne1.infoAbonne.nom_expediteur,
      prenom_expediteur : donne1.infoAbonne.prenom_expediteur,
      adresse_expediteur : donne1.infoAbonne.adresse_expediteur,
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
      code_abonne : donne1.infoAbonne.code_abonne,
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
        
        <Route path="/"  element={language2 === "english" ? <HomeEnglish isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/> : language2 === "lingala" ? <Navigate to='/home_lingala' /> : <Navigate to='/home_french' />} >
        </Route>

        <Route path="/login_english"  element={<Login />} >
        </Route>

        <Route path="/form_envoie_client_english" element={<FormEnvoiClientEnglish   dataEnvoie={dataEnvoie} envoie={envoie} setTaux={setTaux}/>}>
        </Route>

        <Route path="/form_envoie_abonne_id_english" element={<FormEnvoiAbonneIdEnglish  dataAbonne={dataAbonne} />} >
        </Route>

        <Route path="/form_envoie_abonne_english" element={<FormEnvoiAbonneEnglish  abonne={abonne} envoie={envoie} dataEnvoieAbonne={dataEnvoieAbonne} setTaux={setTaux}/>} >
        </Route>

        <Route path="/form_retrait_info_english" element={<FormRetraitEnglish  dataEnvoie2={dataEnvoie2}/>} >
        </Route>

        <Route path="/form_code_abonne_english" element={<FormCodeAbonneEnglish />} >
        </Route>

        <Route path="/form_find_code_retrait_english" element={<FormFindCodeRetraitEnglish  />} >
        </Route>
        
        <Route path="/envoi_info_english" element={<EnvoiInfoEnglish  dataEnvoie3={dataEnvoie3} envoie={envoie} setEnvoie={setEnvoie} envoie3={envoie3}/>} >
        </Route>

        <Route path="/envoi_abonne_info_english" element={<EnvoieAbonneInfoEnglish   dataEnvoie3={dataEnvoie3} envoie={envoie} setEnvoie={setEnvoie} envoie3={envoie3}/>} >
        </Route>


        <Route path="/confirmation_envoie_info_english" element={<ConfirmationEnvoieInfoEnglish  envoie3={envoie3}/>} >
        </Route>

        <Route path="/retrait_info_english" element={<ConfirmationRetraitInfoEnglish  envoie2={envoie2}/>} >
        </Route>





        <Route path="/home_lingala"  element={language2 === "lingala" ? <HomeLingala isAdmin={isAdmin} isStaff={isStaff} language2={language2} setLanguage2={setLanguage2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/> : language2 === "english" ? <Navigate to='/' /> : <Navigate to='/home_french' />} >
        </Route>
       
        <Route path="/form_envoie_client" element={<FormEnvoiClient  dataEnvoie={dataEnvoie} envoie={envoie} setTaux={setTaux}/>}>
        </Route>

        <Route path="/form_envoie_abonne_id" element={<FormEnvoiAbonneId dataAbonne={dataAbonne} />} >
        </Route>

        <Route path="/form_envoie_abonne" element={<FormEnvoiAbonne  abonne={abonne} dataEnvoieAbonne={dataEnvoieAbonne} setTaux={setTaux} envoie={envoie}/>} >
        </Route>

        <Route path="/form_retrait_info" element={<FormRetrait  dataEnvoie2={dataEnvoie2}/>} >
        </Route>

        <Route path="/form_code_abonne_lingala" element={<FormCodeAbonneLingala />} >
        </Route>

        <Route path="/form_find_code_retrait_lingala" element={<FormFindCodeRetraitLingala  />} >
        </Route>

        
        <Route path="/envoi_info" element={<EnvoiInfo   dataEnvoie3={dataEnvoie3} envoie={envoie} setEnvoie={setEnvoie} envoie3={envoie3}/>} >
        </Route>

        <Route path="/envoi_abonne_info" element={<EnvoieAbonneInfo   dataEnvoie3={dataEnvoie3} envoie={envoie} setEnvoie={setEnvoie} envoie3={envoie3}/>} >
        </Route>


        <Route path="/confirmation_envoie_info" element={ <ConfirmationEnvoieInfo   envoie3={envoie3}/>} >
        </Route>

        <Route path="/retrait_info" element={ <ConfirmationRetraitInfo   envoie2={envoie2}/>} >
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

      </Routes >
    </BrowserRouter>
    
    </>
  );
}

/*function LoginBox(props)
{
  const [modalShow, setModalShow] = React.useState(true);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow4, setModalShow4] = React.useState(false);
  const [modalShow5, setModalShow5] = React.useState(false);
  const [modalShow6, setModalShow6] = React.useState(false);

  const openRegister = ()=>{
    setModalShow(false)
    setModalShow4(true)
  } 
    


   return (
     <>
   <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} setModalShow={setModalShow} setModalShow2={setModalShow2} setModalShow3={setModalShow3}  setUsername={props.setUsername} setIsadmin={props.setIsadmin} setIsStaff={props.setIsStaff} setIsLogged={props.setIsLogged} openRegister={openRegister} />
   <MyVerticallyCenteredModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
   <MyVerticallyCenteredModal3 show={modalShow3} onHide={() => setModalShow3(false)} />
   <MyVerticallyCenteredModal4 show={modalShow4} onHide={() => setModalShow4(false)} setModalShow2={setModalShow2} setModalShow4={setModalShow4} setModalShow5={setModalShow5} setModalShow6={setModalShow6}/>
   <MyVerticallyCenteredModal5 show={modalShow5} onHide={() => setModalShow5(false)} setModalShow={setModalShow} setModalShow5={setModalShow5}/>
   <MyVerticallyCenteredModal6 show={modalShow6} onHide={() => setModalShow6(false)} />
    </>
   );
}

function MyVerticallyCenteredModal(props) {

  const [state,setState] = useState({
    credentials :{
        username : '',
        password : ''
    }})

  const [visible,setVisible] = useState(false)

    

     //login implimentation
   //  const navigate = useNavigate()
    
     const connection = (e)=>
     {
       console.log(state.credentials)
        props.setModalShow2(true)
         fetch('https://kobobsapi.herokuapp.com/api/login/', {
             method: 'POST',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify(state.credentials)
           })
           .then( data => data.json())
           .then(
             data => {
              console.log(data) 
              props.setModalShow(false)
               props.setModalShow2(false)
               props.setModalShow3(false)
              console.log('you are connected') 
               
               if (data.username === state.credentials.username)
               {
 
                 props.setUsername(data.first_name)
                 props.setIsadmin(data.is_superuser)
                 props.setIsStaff(data.is_staff)
                 props.setIsLogged(true)
                 console.log(data.is_superuser)
                 setState({credentials:{username :data.username}})
                  
               //  navigate('/')
                 console.log('you are connected')
               } 
               else
               {
                props.setModalShow(true)
                props.setModalShow2(false)
                props.setModalShow3(true)
              //  navigate('/')
               }
               
               
               
             }
           )
           .catch( (error) =>
             {
              props.setModalShow2(false)
              props.setModalShow3(true)
               //setMessage("accès réfusé")
             //  navigate('/')
             } )
     }
 
     const inputChanged = (event)=>
     {
          const cred = state.credentials;
          cred[event.target.name] = event.target.value;
          setState({credentials:cred})
     }
 
    
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
    <Row className='justify-content-start'>
        <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email"  name="username"
        value ={state.credentials.username} onChange={inputChanged} autoFocus/>
        
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-start'>
       {visible===false ? <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Control type="password" placeholder="Password" name="password"
         value ={state.credentials.password} onChange={inputChanged} /> 
         </Form.Group>
        </Col> :
        <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Control type="text" placeholder="Password" name="password"
         value ={state.credentials.password} onChange={inputChanged} /> 
         </Form.Group>
        </Col>
        }



       { visible===false ? <Col xs={1} className='justify-content-start text-start' >
       <span onClick={()=>setVisible(true)}>
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-eye-slash-fill text-dark" viewBox="0 0 16 16">
        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
        </svg>
       </span>

        </Col> :
        <Col xs={1} className='justify-content-start text-start' >
        <span onClick={()=>setVisible(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
        </svg>
        </span>
 
         </Col>
        }
    </Row>
  
    <Row className='justify-content-start pb-3'>
        <Col  xs={6}>    
        <Link to="" style={{color:'white',textDecorationLine:'none'}}> 
        
        <Button variant="outline-warning" type="submit" onClick={e=>connection(e)}>
        <b>login</b>
        </Button>
        </Link>
        </Col>
    </Row>
</Form>
<a href='https://kobobsapi.herokuapp.com/api/reset_password/'  className='text-dark'><strong> Forgot Password ?</strong></a>
<p className='text-dark mt-3'>Don't have an account ? <span> <Link to='' onClick={()=>props.openRegister()}><strong> Sign Up</strong></Link> </span></p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>Close</Button>
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
          Please wait...
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
          Login failed
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-danger'><b>sorry password or email incorrect !! </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.onHide}>ok</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal4(props) {

  const [state,setState] = useState({
    registrationInfo :{
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        password : ''
    }})

  const [visible,setVisible] = useState(false)

    

     //login implimentation
    // const navigate = useNavigate()
    
     const registration = (e)=>
     {
       console.log(state.registrationInfo)
        props.setModalShow2(true)
         fetch('https://kobobsapi.herokuapp.com/api/register/', {
             method: 'POST',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify(state.registrationInfo)
           })
           .then( data => data.json())
           .then(
             data => {
               if(data.confirmMessage ==="registered")
               {
                console.log(data) 
                props.setModalShow2(false)
                 props.setModalShow4(false)
                 props.setModalShow5(true)
                console.log('you are registered sucessfully !!')   

               }
               else{
                props.setModalShow2(false)
                props.setModalShow6(true)
               }
              
             }
           )
           .catch( (error) =>
             {
              props.setModalShow2(false)
              props.setModalShow6(true)
               //setMessage("accès réfusé")
             //  navigate('/')
             } )
     }
 
     const inputChanged = (event)=>
     {
          const cred = state.registrationInfo;
          cred[event.target.name] = event.target.value;
          setState({registrationInfo:cred})
     }
 
    
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
    <Row className='justify-content-start'>
        <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Please enter your Email"  name="email"
        value ={state.registrationInfo.email} onChange={inputChanged} autoFocus/>
        
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-start'>
        <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Please enter your first name"  name="first_name"
        value ={state.registrationInfo.first_name} onChange={inputChanged} />    
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-start'>
        <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Please enter your last name"  name="last_name"
        value ={state.registrationInfo.last_name} onChange={inputChanged} />    
         </Form.Group>
        </Col>
    </Row>

    <Row className='justify-content-start'>
        <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Please enter your phone number"  name="phone"
        value ={state.registrationInfo.phone} onChange={inputChanged} />    
         </Form.Group>
        </Col>
    </Row>
  
    <Row className='justify-content-start'>
       {visible===false ? <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Control type="password" placeholder="Password" name="password"
         value ={state.registrationInfo.password} onChange={inputChanged} /> 
         </Form.Group>
        </Col> :
        <Col xs={7} >
        <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Control type="text" placeholder="Password" name="password"
         value ={state.registrationInfo.password} onChange={inputChanged} /> 
         </Form.Group>
        </Col>
        }



       { visible===false ? <Col xs={1} className='justify-content-start text-start' >
       <span onClick={()=>setVisible(true)}>
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-eye-slash-fill text-dark" viewBox="0 0 16 16">
        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
        </svg>
       </span>

        </Col> :
        <Col xs={1} className='justify-content-start text-start' >
        <span onClick={()=>setVisible(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
        </svg>
        </span>
 
         </Col>
        }
    </Row>
  
    <Row className='justify-content-start pb-3'>
        <Col  xs={6}>    
        <Link to="" style={{color:'white',textDecorationLine:'none'}}> 
        
        <Button variant="warning" type="submit" onClick={e=>registration(e)}>
        <b>sign up</b>
        </Button>
        </Link>
        </Col>
    </Row>
</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='warning' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal5(props) {

  const showLogin2 = ()=>{
    props.setModalShow5(false)
    props.setModalShow(true)
  }
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         you have registered successfully
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"  className="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
        <p className='text-success mt-3'><b>Thank you for joining us</b>   
        </p>
        <Link to=''><strong onClick={()=>showLogin2()}>Login</strong></Link>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.onHide}>close</Button>
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
          registration failed
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className='text-danger'><b>sorry something went wrong, please  fill all the required fields properly !! </b>   
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.onHide}>close</Button>
      </Modal.Footer>
    </Modal>
  );
}

*/

export default App;

