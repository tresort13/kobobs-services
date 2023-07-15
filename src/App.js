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
import HomeManagementFrench from './pages/HomeManagementFrench';
import RetraitInfoFrench from './pages/RetraitInfoFrench';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ClipLoader from "react-spinners/ClipLoader";
import {Link,useNavigate} from  'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import LoginBoxEnglish from './pages/LoginBoxEnglish';
import MenuGestionOperationsRetraitFrench from './pages/MenuGestionOperationsRetraitFrench';
import FormRetraitOperationFrench from './pages/FormRetraitOperationFrench';
import ConfirmationRetraitInfoOperationFrench from './pages/ConfirmationRetraitInfoOperationFrench';
import AbonneFormNonValideInfoFrench from './pages/AbonneFormNonValideInfoFrench';
import MenuGestionOperationsEnvoiFrench from './pages/MenuGestionOperationsEnvoiFrench';
import MenuRapportEnvoiFrench from './pages/MenuRapportEnvoiFrench';
import SelectDateFormEnvoiFrench from './pages/SelectDateFormEnvoiFrench';
import SelectMoisFormEnvoie from './pages/SelectMoisFormEnvoiFrench';
import DailyRapportInfoEnvoiFrench from './pages/DailyRapportInfoEnvoiFrench';
import DetailsEnvoisInfoFrench from './pages/DetailsEnvoisInfoFrench';
import MonthlyRapportInfoEnvoiFrench from './pages/MonthlyRapportInfoEnvoiFrench';
import MenuRapportRetraitFrench from './pages/MenuRapportRetraitFrench';
import SelectDateFormRetraitFrench from './pages/SelectDateFormRetraitFrench';
import SelectMoisFormRetraitFrench from './pages/SelectMoisFormRetraitFrench';
import SelectMoisFormEnvoiFrench from './pages/SelectMoisFormEnvoiFrench';
import DailyRapportInfoRetraitFrench from './pages/DailyRapportInfoRetraitFrench';
import MonthlyRapportInfoRetraitFrench from './pages/MonthlyRapportInfoRetraitFrench';
import DetailsRetraitsInfoFrench from './pages/DetailsRetraitsInfoFrench';
import MenuGestionAdminFrench from './pages/MenuGestionAdminFrench';
import MenuRapportRecettesFrench from './pages/MenuRapportRecettesFrench';
import MenuInfoAbonnesFrench from './pages/MenuInfoAbonnesFrench';
import SelectDateFormRecetteFrench from './pages/SelectDateFormRecetteFrench';
import DailyRecettesFrench from './pages/DailyRecettesFrench';
import MonthlyRecettesFrench from './pages/MonthlyRecettesFrench';
import SelectMoisFormRecetteFrench from './pages/SelectMoisFormRecetteFrench';
import DetailsAbonnesInfoFrench from './pages/DetailsAbonnesInfoFrench';
import MyProfilEnglish from './pages/MyProfilEnglish';
import MyProfilFrench from './pages/MyProfilFrench';
import MyProfilLingala from './pages/MyProfilLingala';
import HomeManagementLingala from './pages/HomeManagementLingala';
import HomeManagementEnglish from './pages/HomeManagementEnglish';
import DailyRapportInfoEnvoiLingala from './pages/DailyRapportInfoEnvoiLingala';
import DailyRapportInfoEnvoiEnglish from './pages/DailyRapportInfoEnvoiEnglish';
import DailyRapportInfoRetraitLingala from './pages/DailyRapportInfoRetraitLingala';
import DailyRapportInfoRetraitEnglish from './pages/DailyRapportInfoRetraitEnglish';
import MenuGestionOperationsRetraitEnglish from './pages/MenuGestionOperationsRetraitEnglish';
import MenuGestionOperationsRetraitLingala from './pages/MenuGestionOperationsRetraitLingala';
import MenuGestionOperationsEnvoiLingala from './pages/MenuGestionOperationsEnvoiLingala';
import MenuGestionOperationsEnvoiEnglish from './pages/MenuGestionOperationsEnvoiEnglish';
import MenuGestionAdminLingala from './pages/MenuGestionAdminLingala';
import MenuGestionAdminEnglish from './pages/MenuGestionAdminEnglish';
import MenuRapportEnvoiLingala from './pages/MenuRapportEnvoiLingala';
import MenuRapportEnvoiEnglish from './pages/MenuRapportEnvoiEnglish';
import MenuRapportRetraitLingala from './pages/MenuRapportRetraitLingala';
import MenuRapportRetraitEnglish from './pages/MenuRapportRetraitEnglish';
import MenuRapportRecettesLingala from './pages/MenuRapportRecettesLingala';
import MenuRapportRecettesEnglish from './pages/MenuRapportRecettesEnglish';
import MenuInfoAbonnesLingala from './pages/MenuInfoAbonnesLingala';
import MenuInfoAbonnesEnglish from './pages/MenuInfoAbonnesEnglish';
import FormRetraitOperationLingala from './pages/FormRetraitOperationLingala';
import FormRetraitOperationEnglish from './pages/FormRetraitOperationEnglish';
import RetraitInfoLingala from './pages/RetraitInfoLingala';
import RetraitInfoEnglish from './pages/RetraitInfoEnglish';
import ConfirmationRetraitInfoOperationLingala from './pages/ConfirmationRetraitInfoOperationLingala.js';
import ConfirmationRetraitInfoOperationEnglish from './pages/ConfirmationRetraitInfoOperationEnglish';
import AbonneFormNonValideInfoLingala from './pages/AbonneFormNonValideInfoLingala';
import AbonneFormNonValideInfoEnglish from './pages/AbonneFormNonValideInfoEnglish';
import SelectDateFormEnvoiLingala from './pages/SelectDateFormEnvoiLingala';
import SelectDateFormEnvoiEnglish from './pages/SelectDateFormEnvoiEnglish';
import SelectMoisFormEnvoiLingala from './pages/SelectMoisFormEnvoiLingala';
import SelectMoisFormEnvoiEnglish from './pages/SelectMoisFormEnvoiEnglish';
import SelectDateFormRetraitLingala from './pages/SelectDateFormRetraitLingala';
import SelectDateFormRetraitEnglish from './pages/SelectDateFormRetraitEnglish';
import SelectMoisFormRetraitLingala from './pages/SelectMoisFormRetraitLingala';
import SelectMoisFormRetraitEnglish from './pages/SelectMoisFormRetraitEnglish';
import SelectDateFormRecetteLingala from './pages/SelectDateFormRecetteLingala';
import SelectDateFormRecetteEnglish from './pages/SelectDateFormRecetteEnglish';
import SelectMoisFormRecetteLingala from './pages/SelectMoisFormRecetteLingala';
import SelectMoisFormRecetteEnglish from './pages/SelectMoisFormRecetteEnglish';
import MonthlyRapportInfoEnvoiLingala from './pages/MonthlyRapportInfoEnvoiLingala';
import MonthlyRapportInfoEnvoiEnglish from './pages/MonthlyRapportInfoEnvoiEnglish';
import MonthlyRapportInfoRetraitLingala from './pages/MonthlyRapportInfoRetraitLingala';
import MonthlyRapportInfoRetraitEnglish from './pages/MonthlyRapportInfoRetraitEnglish';
import DailyRecettesLingala from './pages/DailyRecettesLingala';
import DailyRecettesEnglish from './pages/DailyRecettesEnglish';
import MonthlyRecettesLingala from './pages/MonthlyRecettesLingala';
import MonthlyRecettesEnglish from './pages/MonthlyRecettesEnglish';
import DetailsEnvoisInfoLingala from './pages/DetailsEnvoisInfoLingala';
import DetailsEnvoisInfoEnglish from './pages/DetailsEnvoisInfoEnglish';
import DetailsAbonnesInfoLingala from './pages/DetailsAbonnesInfoLingala';
import DetailsAbonnesInfoEnglish from './pages/DetailsAbonnesInfoEnglish';
import DetailsRetraitsInfoLingala from './pages/DetailsRetraitsInfoLingala';
import DetailsRetraitsInfoEnglish from './pages/DetailsRetraitsInfoEnglish';
import TableDailyRapportEnglish from './pages/TableDailyRapportEnglish';
import TableMonthlyRapportEnglish from './pages/TableMonthlyRapportEnglish';
import TableDailyRapportFrench from './pages/TableDailyRapportFrench';
import TableDailyRapportLingala from './pages/TableDailyRapportLingala';
import TableMonthlyRapportFrench from './pages/TableMonthlyRapportFrench';
import TableMonthlyRapportLingala from './pages/TableMonthlyRapportLingala';
import TableValidationEnglish from './pages/TableValidationEnglish';
import TableValidationFrench from './pages/TableValidationFrench';
import TableValidationLingala from './pages/TableValidationLingala';
import TableAbonnesLingala from './pages/TableAbonnesLingala';
import TableAbonnesEnglish from './pages/TableAbonnesEnglish';
import TableAbonnesFrench from './pages/TableAbonnesFrench';
import TableHistoricEnglish from './pages/TableHistoricEnglish';
import TableHistoricFrench from './pages/TableHistoricFrench';
import TableHistoricLingala from './pages/TableHistoricLingala';




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

  const [saveAbonne,setSaveAbonne] = useState(()=>
  {
    const localData = localStorage.getItem('saveAbonne');
    return localData ? JSON.parse(localData) : "";
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("saveAbonne", JSON.stringify(saveAbonne))
  }, [saveAbonne])

  const [message,setMessage] = useState(()=>
  {
    const localData = localStorage.getItem('message');
    return localData ? JSON.parse(localData) : "";
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("message", JSON.stringify(message))
  }, [message])


  const [dateHistoric,setDateHistoric] = useState(()=>
  {
    const localData = localStorage.getItem('dateHistoric');
    return localData ? JSON.parse(localData) : "";
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("dateHistoric", JSON.stringify(dateHistoric))
  }, [dateHistoric])

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

  const [clientForm, setClientForm] = useState(()=>
  {
    const localData = localStorage.getItem('clientForm');
    return localData ? JSON.parse(localData) : false;
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("clientForm", JSON.stringify(clientForm))
  }, [clientForm])

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

  const [detailHistoric,setDetailHistoric] = useState(()=>
  {
    const localData = localStorage.getItem('detailHistoric');
    return localData ? JSON.parse(localData) :[];
    })
  

  useEffect(() => {
    window.localStorage.setItem("detailHistoric", JSON.stringify(detailHistoric))
  }, [detailHistoric])

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

  const [detailEnvoieTotalTableau,setDetailEnvoieTotalTableau] = useState(()=>
  {
    const localData = localStorage.getItem('detailEnvoieTotalTableau');
    return localData ? JSON.parse(localData) :[];
    })
  

  useEffect(() => {
    window.localStorage.setItem("detailEnvoieTotalTableau", JSON.stringify(detailEnvoieTotalTableau))
  }, [detailEnvoieTotalTableau])

  const dataDetailEnvoieTotalTableau = (donne)=>
  {
    setDetailEnvoieTotalTableau(donne)
  }

  const [dataValidation,setDataValidation] = useState(()=>
  {
    const localData = localStorage.getItem('dataValidation');
    return localData ? JSON.parse(localData) :[];
    })
  

  useEffect(() => {
    window.localStorage.setItem("dataValidation", JSON.stringify(dataValidation))
  }, [dataValidation])



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

  const [abonneInfo2,setAbonneInfo2] = useState(()=>
  {
    const localData = localStorage.getItem('abonneInfo');
    return localData ? JSON.parse(localData) :[];
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("abonneInfo2", JSON.stringify(abonneInfo2))
  }, [abonneInfo2])

  const dataAbonneInfo2 = (donne)=>
  {
    setAbonneInfo2(donne)
  }

  const [abonneInfoDetail,setAbonneInfoDetail] = useState(()=>
  {
    const localData = localStorage.getItem('abonneInfoDetail');
    return localData ? JSON.parse(localData) :[];
  });
  
  
  useEffect(() => {
    window.localStorage.setItem("abonneInfoDetail", JSON.stringify(abonneInfoDetail))
  }, [abonneInfoDetail])

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
        
        <Route path="/"  element={language2 === "english" ? <HomeEnglish setDataValidation={setDataValidation}  modalShowEnvoi={modalShowEnvoi} setModalShowEnvoi={setModalShowEnvoi} dataAbonne={dataAbonne} envoie3={envoie3} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/> : language2 === "lingala" ? <Navigate to='/home_lingala' /> : <Navigate to='/home_french' />} >
        </Route>

        <Route path="/login_english"  element={<Login />} >
        </Route>

        <Route path="/form_envoie_client_english" element={<FormEnvoiClientEnglish abonne={abonne} envoie={envoie} envoie3={envoie3} setEnvoie={setEnvoie} dataEnvoieAbonne={dataEnvoieAbonne} taux={taux} setTaux={setTaux} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/form_envoie_abonne_id_english" element={<FormEnvoiAbonneIdEnglish dataAbonne={dataAbonne} setAbonne={setAbonne} abonne={abonne}  modalShowEnvoi={modalShowEnvoi} setModalShowEnvoi={setModalShowEnvoi}  envoie3={envoie3} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language} />} >
        </Route>

        <Route path="/form_envoie_abonne_english" element={<FormEnvoiAbonneEnglish  abonne={abonne} envoie={envoie} envoie3={envoie3} setEnvoie={setEnvoie} dataEnvoieAbonne={dataEnvoieAbonne} taux={taux} setTaux={setTaux} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/form_retrait_info_english" element={<FormRetraitEnglish  dataEnvoie2={dataEnvoie2} envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/form_code_abonne_english" element={<FormCodeAbonneEnglish />} >
        </Route>

        <Route path="/form_find_code_retrait_english" element={<FormFindCodeRetraitEnglish  />} >
        </Route>
        
        <Route path="/envoi_info_english" element={<EnvoiInfoEnglish setClientForm={setClientForm} setSaveAbonne={setSaveAbonne}  setForceUpdate={setForceUpdate} setEnvoie3={setEnvoie3}  dataEnvoie3={dataEnvoie3} envoie={envoie} setEnvoie={setEnvoie} envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/envoi_abonne_info_english" element={<EnvoieAbonneInfoEnglish  setForceUpdate={setForceUpdate} setEnvoie3={setEnvoie3}  dataEnvoie3={dataEnvoie3} envoie={envoie} setEnvoie={setEnvoie} envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/confirmation_envoie_info_english" element={<ConfirmationEnvoieInfoEnglish clientForm={clientForm} setClientForm={setClientForm} saveAbonne={saveAbonne} setSaveAbonne={setSaveAbonne}  modalShowEnvoi={modalShowEnvoi} setModalShowEnvoi={setModalShowEnvoi} envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/retrait_info_english" element={<ConfirmationRetraitInfoEnglish abonne={abonne} envoie2={envoie2} dataAbonne={dataAbonne} envoie3={envoie3} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>





        <Route path="/home_lingala"  element={language2 === "lingala" ? <HomeLingala setDataValidation={setDataValidation} modalShowEnvoi={modalShowEnvoi} setModalShowEnvoi={setModalShowEnvoi} dataAbonne={dataAbonne} envoie3={envoie3} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/> : language2 === "english" ? <Navigate to='/' /> : <Navigate to='/home_french' />} >
        </Route>
       
        <Route path="/form_envoie_client" element={<FormEnvoiClient  abonne={abonne} envoie={envoie} envoie3={envoie3} setEnvoie={setEnvoie} dataEnvoieAbonne={dataEnvoieAbonne} taux={taux} setTaux={setTaux} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>}>
        </Route>

        <Route path="/form_envoie_abonne_id" element={<FormEnvoiAbonneId dataAbonne={dataAbonne} setAbonne={setAbonne} abonne={abonne}  modalShowEnvoi={modalShowEnvoi} setModalShowEnvoi={setModalShowEnvoi}  envoie3={envoie3} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language} />} >
        </Route>

        <Route path="/form_envoie_abonne" element={<FormEnvoiAbonne  abonne={abonne} envoie={envoie} envoie3={envoie3} setEnvoie={setEnvoie} dataEnvoieAbonne={dataEnvoieAbonne} taux={taux} setTaux={setTaux} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/form_retrait_info" element={<FormRetrait  dataEnvoie2={dataEnvoie2} envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/form_code_abonne_lingala" element={<FormCodeAbonneLingala />} >
        </Route>

        <Route path="/form_find_code_retrait_lingala" element={<FormFindCodeRetraitLingala  />} >
        </Route>

        
        <Route path="/envoi_info" element={<EnvoiInfo   setClientForm={setClientForm} setSaveAbonne={setSaveAbonne}  setForceUpdate={setForceUpdate} setEnvoie3={setEnvoie3}  dataEnvoie3={dataEnvoie3} envoie={envoie} setEnvoie={setEnvoie} envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/envoi_abonne_info" element={<EnvoieAbonneInfo   setForceUpdate={setForceUpdate} setEnvoie3={setEnvoie3}  dataEnvoie3={dataEnvoie3} envoie={envoie} setEnvoie={setEnvoie} envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>


        <Route path="/confirmation_envoie_info" element={ <ConfirmationEnvoieInfo   clientForm={clientForm} setClientForm={setClientForm} saveAbonne={saveAbonne} setSaveAbonne={setSaveAbonne}  modalShowEnvoi={modalShowEnvoi} setModalShowEnvoi={setModalShowEnvoi} envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/retrait_info" element={ <ConfirmationRetraitInfo  abonne={abonne} envoie2={envoie2} dataAbonne={dataAbonne} envoie3={envoie3} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>





        <Route path="/home_french"  element={language2 === "french" ? <HomeFrench setDataValidation={setDataValidation} modalShowEnvoi={modalShowEnvoi} setModalShowEnvoi={setModalShowEnvoi} dataAbonne={dataAbonne} envoie3={envoie3} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/> : language2 === "english" ? <Navigate to='/' /> : <Navigate to='/home_lingala' />} >
        </Route>
       
        <Route path="/form_envoie_client_french" element={<FormEnvoiClientFrench  abonne={abonne} envoie={envoie} envoie3={envoie3} setEnvoie={setEnvoie} dataEnvoieAbonne={dataEnvoieAbonne} taux={taux} setTaux={setTaux} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>}>
        </Route>

        <Route path="/form_envoie_abonne_id_french" element={<FormEnvoiAbonneIdFrench dataAbonne={dataAbonne} setAbonne={setAbonne} abonne={abonne}  modalShowEnvoi={modalShowEnvoi} setModalShowEnvoi={setModalShowEnvoi}  envoie3={envoie3} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/form_envoie_abonne_french" element={<FormEnvoiAbonneFrench  abonne={abonne} envoie={envoie} envoie3={envoie3} setEnvoie={setEnvoie} dataEnvoieAbonne={dataEnvoieAbonne} taux={taux} setTaux={setTaux} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/form_retrait_info_french" element={<FormRetraitFrench  dataEnvoie2={dataEnvoie2} envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/form_code_abonne_french" element={<FormCodeAbonneFrench />} >
        </Route>
        
        <Route path="/form_find_code_retrait_french" element={<FormFindCodeRetraitFrench />} >
        </Route>
        
        <Route path="/envoi_info_french" element={<EnvoiInfoFrench   setClientForm={setClientForm} setSaveAbonne={setSaveAbonne}  setForceUpdate={setForceUpdate} setEnvoie3={setEnvoie3}  dataEnvoie3={dataEnvoie3} envoie={envoie} setEnvoie={setEnvoie} envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/envoi_abonne_info_french" element={<EnvoieAbonneInfoFrench   setEnvoie3={setEnvoie3}  dataEnvoie3={dataEnvoie3} envoie={envoie} setEnvoie={setEnvoie} envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>


        <Route path="/confirmation_envoie_info_french" element={ <ConfirmationEnvoieInfoFrench   clientForm={clientForm} setClientForm={setClientForm} saveAbonne={saveAbonne} setSaveAbonne={setSaveAbonne}  modalShowEnvoi={modalShowEnvoi} setModalShowEnvoi={setModalShowEnvoi} envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

        <Route path="/retrait_info_french" element={ <ConfirmationRetraitInfoFrench   abonne={abonne} envoie2={envoie2} dataAbonne={dataAbonne} envoie3={envoie3} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>




        <Route path="/menu_management_french"  element={<HomeManagementFrench envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language} modalShowRetrait={modalShowRetrait} setModalShowRetrait={setModalShowRetrait} setModalShowEnvoi={setModalShowEnvoi} modalShowEnvoi={modalShowEnvoi}/>} >
        </Route>
        <Route path="/menu_management_lingala"  element={<HomeManagementLingala envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language} modalShowRetrait={modalShowRetrait} setModalShowRetrait={setModalShowRetrait} setModalShowEnvoi={setModalShowEnvoi} modalShowEnvoi={modalShowEnvoi}/>} >
        </Route>
        <Route path="/menu_management_english"  element={<HomeManagementEnglish envoie3={envoie3} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language} modalShowRetrait={modalShowRetrait} setModalShowRetrait={setModalShowRetrait} setModalShowEnvoi={setModalShowEnvoi} modalShowEnvoi={modalShowEnvoi}/>} >
        </Route>


        <Route path="/menu_operation_retrait_french"  element={<MenuGestionOperationsRetraitFrench dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>
        <Route path="/menu_operation_retrait_lingala"  element={<MenuGestionOperationsRetraitLingala dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>
        <Route path="/menu_operation_retrait_english"  element={<MenuGestionOperationsRetraitEnglish dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>

       


        <Route path="/menu_operation_envoi_french"  element={<MenuGestionOperationsEnvoiFrench dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>
        <Route path="/menu_operation_envoi_lingala"  element={<MenuGestionOperationsEnvoiLingala dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>
        <Route path="/menu_operation_envoi_english"  element={<MenuGestionOperationsEnvoiEnglish dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>
      


        <Route path="/menu_gestion_french"  element={<MenuGestionAdminFrench dataAbonneInfo2={dataAbonneInfo2} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>
        <Route path="/menu_gestion_lingala"  element={<MenuGestionAdminLingala dataAbonneInfo2={dataAbonneInfo2} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>
        <Route path="/menu_gestion_english"  element={<MenuGestionAdminEnglish dataAbonneInfo2={dataAbonneInfo2} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>


        <Route path="/menu_rapport_envoi_french"  element={<MenuRapportEnvoiFrench dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>
        <Route path="/menu_rapport_envoi_lingala"  element={<MenuRapportEnvoiLingala dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>
        <Route path="/menu_rapport_envoi_english"  element={<MenuRapportEnvoiEnglish dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>
       


        <Route path="/menu_rapport_retrait_french"  element={<MenuRapportRetraitFrench dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>
        <Route path="/menu_rapport_retrait_lingala"  element={<MenuRapportRetraitLingala dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>
        <Route path="/menu_rapport_retrait_english"  element={<MenuRapportRetraitEnglish dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>



        <Route path="/menu_rapport_recette_french"  element={<MenuRapportRecettesFrench dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>
        <Route path="/menu_rapport_recette_lingala"  element={<MenuRapportRecettesLingala dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>
        <Route path="/menu_rapport_recette_english"  element={<MenuRapportRecettesEnglish dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}/>} >
        </Route>


       
        <Route path="/menu_info_abonne_french" element={username == "" ? <Navigate to='/' /> : <MenuInfoAbonnesFrench username={username} abonneInfo2={abonneInfo2} dailyRapport={dailyRapport} setAbonneInfo2={setAbonneInfo2} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/menu_info_abonne_lingala" element={username == "" ? <Navigate to='/' /> : <MenuInfoAbonnesLingala username={username} abonneInfo2={abonneInfo2} dailyRapport={dailyRapport} setAbonneInfo2={setAbonneInfo2} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/menu_info_abonne_english" element={username == "" ? <Navigate to='/' /> : <MenuInfoAbonnesEnglish username={username} abonneInfo2={abonneInfo2} dailyRapport={dailyRapport} setAbonneInfo2={setAbonneInfo2} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
      

       
        <Route path="/form_retrait_operation_french" element={username == "" ? <Navigate to='/' /> : <FormRetraitOperationFrench username={username} dataEnvoie2={dataEnvoie2} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} language={language}/>}>
        </Route>
        <Route path="/form_retrait_operation_lingala" element={username == "" ? <Navigate to='/' /> : <FormRetraitOperationLingala username={username} dataEnvoie2={dataEnvoie2} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} language={language}/>}>
        </Route>
        <Route path="/form_retrait_operation_english" element={username == "" ? <Navigate to='/' /> : <FormRetraitOperationEnglish username={username} dataEnvoie2={dataEnvoie2} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} language={language}/>}>
        </Route>

        
        <Route path="/retrait_info_operation_french" element={username == "" ? <Navigate to='/' /> : <RetraitInfoFrench username={username} envoie2={envoie2} dataEnvoie2={dataEnvoie2} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/retrait_info_operation_lingala" element={username == "" ? <Navigate to='/' /> : <RetraitInfoLingala username={username} envoie2={envoie2} dataEnvoie2={dataEnvoie2} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/retrait_info_operation_english" element={username == "" ? <Navigate to='/' /> : <RetraitInfoEnglish username={username} envoie2={envoie2} dataEnvoie2={dataEnvoie2} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>



        <Route path="/confirmation_retrait_info_operation_french" element={username == "" ? <Navigate to='/' /> : <ConfirmationRetraitInfoOperationFrench abonne={abonne} username={username} envoie2={envoie2} dataEnvoie2={dataEnvoie2} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language} setModalShowRetrait={setModalShowRetrait}/>}>
        </Route>
        <Route path="/confirmation_retrait_info_operation_lingala" element={username == "" ? <Navigate to='/' /> : <ConfirmationRetraitInfoOperationLingala abonne={abonne} username={username} envoie2={envoie2} dataEnvoie2={dataEnvoie2} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language} setModalShowRetrait={setModalShowRetrait}/>}>
        </Route>
        <Route path="/confirmation_retrait_info_operation_english" element={username == "" ? <Navigate to='/' /> : <ConfirmationRetraitInfoOperationEnglish abonne={abonne} username={username} envoie2={envoie2} dataEnvoie2={dataEnvoie2} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language} setModalShowRetrait={setModalShowRetrait}/>}>
        </Route>



        <Route path="/form_abonne_non_valide_french" element={username == "" ? <Navigate to='/' /> : <AbonneFormNonValideInfoFrench dataValidation={dataValidation} abonne={abonne} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}setCodeRetraitStatus={setCodeRetraitStatus} codeRetraitStatus={codeRetraitStatus}  envoie3={envoie3}/>}>
        </Route>
        <Route path="/form_abonne_non_valide_lingala" element={username == "" ? <Navigate to='/' /> : <AbonneFormNonValideInfoLingala dataValidation={dataValidation} abonne={abonne} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}setCodeRetraitStatus={setCodeRetraitStatus} codeRetraitStatus={codeRetraitStatus}  envoie3={envoie3}/>}>
        </Route>
        <Route path="/form_abonne_non_valide_english" element={username == "" ? <Navigate to='/' /> : <AbonneFormNonValideInfoEnglish dataValidation={dataValidation} abonne={abonne} dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}setCodeRetraitStatus={setCodeRetraitStatus} codeRetraitStatus={codeRetraitStatus}  envoie3={envoie3}/>}>
        </Route>


        <Route path="/select_date_form_envoi_french" element={username == "" ? <Navigate to='/' /> : <SelectDateFormEnvoiFrench dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}  dataDailyRapport={dataDailyRapport} setDate={setDate} setDailyRapport={setDailyRapport}/>}>
        </Route>
        <Route path="/select_date_form_envoi_lingala" element={username == "" ? <Navigate to='/' /> : <SelectDateFormEnvoiLingala dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}  dataDailyRapport={dataDailyRapport} setDate={setDate} setDailyRapport={setDailyRapport}/>}>
        </Route>
        <Route path="/select_date_form_envoi_english" element={username == "" ? <Navigate to='/' /> : <SelectDateFormEnvoiEnglish dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}  dataDailyRapport={dataDailyRapport} setDate={setDate} setDailyRapport={setDailyRapport}/>}>
        </Route>
        



        <Route path="/select_mois_form_envoi_french" element={username == "" ? <Navigate to='/' /> : <SelectMoisFormEnvoiFrench username={username} dataMonthlyRapport={dataMonthlyRapport} setMois={setMois} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/select_mois_form_envoi_lingala" element={username == "" ? <Navigate to='/' /> : <SelectMoisFormEnvoiLingala username={username} dataMonthlyRapport={dataMonthlyRapport} setMois={setMois} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/select_mois_form_envoi_english" element={username == "" ? <Navigate to='/' /> : <SelectMoisFormEnvoiEnglish username={username} dataMonthlyRapport={dataMonthlyRapport} setMois={setMois} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>



        <Route path="/select_date_form_retrait_french" element={username == "" ? <Navigate to='/' /> : <SelectDateFormRetraitFrench dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}  dataDailyRapport={dataDailyRapport} setDate={setDate} setDailyRapport={setDailyRapport}/>}>
        </Route>
        <Route path="/select_date_form_retrait_lingala" element={username == "" ? <Navigate to='/' /> : <SelectDateFormRetraitLingala dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}  dataDailyRapport={dataDailyRapport} setDate={setDate} setDailyRapport={setDailyRapport}/>}>
        </Route>
        <Route path="/select_date_form_retrait_english" element={username == "" ? <Navigate to='/' /> : <SelectDateFormRetraitEnglish dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}  dataDailyRapport={dataDailyRapport} setDate={setDate} setDailyRapport={setDailyRapport}/>}>
        </Route>



        <Route path="/select_mois_form_retrait_french" element={username == "" ? <Navigate to='/' /> : <SelectMoisFormRetraitFrench username={username} dataMonthlyRapport={dataMonthlyRapport} setMois={setMois} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/select_mois_form_retrait_lingala" element={username == "" ? <Navigate to='/' /> : <SelectMoisFormRetraitLingala username={username} dataMonthlyRapport={dataMonthlyRapport} setMois={setMois} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/select_mois_form_retrait_english" element={username == "" ? <Navigate to='/' /> : <SelectMoisFormRetraitEnglish username={username} dataMonthlyRapport={dataMonthlyRapport} setMois={setMois} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>



        <Route path="/select_date_rapport_recette" element={username == "" ? <Navigate to='/' /> : <SelectDateFormRecetteFrench dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}  dataDailyRapport={dataDailyRapport} setDate={setDate} setDailyRapport={setDailyRapport}/>}>
        </Route>
        <Route path="/select_date_rapport_recette_lingala" element={username == "" ? <Navigate to='/' /> : <SelectDateFormRecetteLingala dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}  dataDailyRapport={dataDailyRapport} setDate={setDate} setDailyRapport={setDailyRapport}/>}>
        </Route>
        <Route path="/select_date_rapport_recette_english" element={username == "" ? <Navigate to='/' /> : <SelectDateFormRecetteEnglish dataAbonne={dataAbonne} isAdmin={isAdmin} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername} setIsadmin={setIsadmin} setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} username={username} language={language}  dataDailyRapport={dataDailyRapport} setDate={setDate} setDailyRapport={setDailyRapport}/>}>
        </Route>



        <Route path="/select_mois_rapport_recette" element={username == "" ? <Navigate to='/' /> : <SelectMoisFormRecetteFrench username={username} dataMonthlyRapport={dataMonthlyRapport} setMois={setMois} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/select_mois_rapport_recette_lingala" element={username == "" ? <Navigate to='/' /> : <SelectMoisFormRecetteLingala username={username} dataMonthlyRapport={dataMonthlyRapport} setMois={setMois} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/select_mois_rapport_recette_english" element={username == "" ? <Navigate to='/' /> : <SelectMoisFormRecetteEnglish username={username} dataMonthlyRapport={dataMonthlyRapport} setMois={setMois} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>



        <Route path="/daily_rapport_envoi_french" element={username == "" ? <Navigate to='/' /> : <DailyRapportInfoEnvoiFrench username={username} dailyRapport={dailyRapport} dataDetailEnvoieTotalTableau={dataDetailEnvoieTotalTableau} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/daily_rapport_envoi_lingala" element={username == "" ? <Navigate to='/' /> : <DailyRapportInfoEnvoiLingala username={username} dailyRapport={dailyRapport} dataDetailEnvoieTotalTableau={dataDetailEnvoieTotalTableau} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/daily_rapport_envoi_english" element={username == "" ? <Navigate to='/' /> : <DailyRapportInfoEnvoiEnglish username={username} dailyRapport={dailyRapport} dataDetailEnvoieTotalTableau={dataDetailEnvoieTotalTableau} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
       



        <Route path="/monthly_rapport_envoi_french" element={username == "" ? <Navigate to='/' /> : <MonthlyRapportInfoEnvoiFrench username={username} monthlyRapport={monthlyRapport} dataDetailEnvoieTotalTableau={dataDetailEnvoieTotalTableau} dataDetailEnvoieTotal={dataDetailEnvoieTotal} moisInfo={moisInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/monthly_rapport_envoi_lingala" element={username == "" ? <Navigate to='/' /> : <MonthlyRapportInfoEnvoiLingala username={username} monthlyRapport={monthlyRapport} dataDetailEnvoieTotalTableau={dataDetailEnvoieTotalTableau} dataDetailEnvoieTotal={dataDetailEnvoieTotal} moisInfo={moisInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/monthly_rapport_envoi_english" element={username == "" ? <Navigate to='/' /> : <MonthlyRapportInfoEnvoiEnglish username={username} monthlyRapport={monthlyRapport} dataDetailEnvoieTotalTableau={dataDetailEnvoieTotalTableau} dataDetailEnvoieTotal={dataDetailEnvoieTotal} moisInfo={moisInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
       


        <Route path="/daily_rapport_retrait_french" element={username == "" ? <Navigate to='/' /> : <DailyRapportInfoRetraitFrench username={username} dataDetailEnvoieTotalTableau={dataDetailEnvoieTotalTableau} dailyRapport={dailyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/daily_rapport_retrait_lingala" element={username == "" ? <Navigate to='/' /> : <DailyRapportInfoRetraitLingala username={username} dataDetailEnvoieTotalTableau={dataDetailEnvoieTotalTableau} dailyRapport={dailyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/daily_rapport_retrait_english" element={username == "" ? <Navigate to='/' /> : <DailyRapportInfoRetraitEnglish username={username} dataDetailEnvoieTotalTableau={dataDetailEnvoieTotalTableau} dailyRapport={dailyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>



        <Route path="/monthly_rapport_retrait_french" element={username == "" ? <Navigate to='/' /> : <MonthlyRapportInfoRetraitFrench username={username} monthlyRapport={monthlyRapport} dataDetailEnvoieTotalTableau={dataDetailEnvoieTotalTableau} dataDetailEnvoieTotal={dataDetailEnvoieTotal} moisInfo={moisInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/monthly_rapport_retrait_lingala" element={username == "" ? <Navigate to='/' /> : <MonthlyRapportInfoRetraitLingala username={username} monthlyRapport={monthlyRapport} dataDetailEnvoieTotalTableau={dataDetailEnvoieTotalTableau} dataDetailEnvoieTotal={dataDetailEnvoieTotal} moisInfo={moisInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/monthly_rapport_retrait_english" element={username == "" ? <Navigate to='/' /> : <MonthlyRapportInfoRetraitEnglish username={username} monthlyRapport={monthlyRapport} dataDetailEnvoieTotalTableau={dataDetailEnvoieTotalTableau} dataDetailEnvoieTotal={dataDetailEnvoieTotal} moisInfo={moisInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>



        <Route path="/daily_rapport_recette_french" element={username == "" ? <Navigate to='/' /> : <DailyRecettesFrench username={username} abonneInfoDetail={abonneInfoDetail}  dailyRapport={dailyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/daily_rapport_recette_lingala" element={username == "" ? <Navigate to='/' /> : <DailyRecettesLingala username={username} abonneInfoDetail={abonneInfoDetail}  dailyRapport={dailyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/daily_rapport_recette_english" element={username == "" ? <Navigate to='/' /> : <DailyRecettesEnglish username={username} abonneInfoDetail={abonneInfoDetail}  dailyRapport={dailyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>



        <Route path="/monthly_rapport_recette_french" element={username == "" ? <Navigate to='/' /> : <MonthlyRecettesFrench username={username} monthlyRapport={monthlyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} moisInfo={moisInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/monthly_rapport_recette_lingala" element={username == "" ? <Navigate to='/' /> : <MonthlyRecettesLingala username={username} monthlyRapport={monthlyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} moisInfo={moisInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/monthly_rapport_recette_english" element={username == "" ? <Navigate to='/' /> : <MonthlyRecettesEnglish username={username} monthlyRapport={monthlyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} moisInfo={moisInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne} isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>

        

        <Route path="/details_envois_info_french" element={username == "" ? <Navigate to='/' /> : <DetailsEnvoisInfoFrench username={username} detailEnvoieTotal={detailEnvoieTotal} setIsadmin={setIsadmin} isAdmin={isAdmin} isStaff={isStaff} dataAbonne={dataAbonne}  language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} language={language}/>}>
        </Route>
        <Route path="/details_envois_info_lingala" element={username == "" ? <Navigate to='/' /> : <DetailsEnvoisInfoLingala username={username} detailEnvoieTotal={detailEnvoieTotal} setIsadmin={setIsadmin} isAdmin={isAdmin} isStaff={isStaff} dataAbonne={dataAbonne}  language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} language={language}/>}>
        </Route>
        <Route path="/details_envois_info_english" element={username == "" ? <Navigate to='/' /> : <DetailsEnvoisInfoEnglish username={username} detailEnvoieTotal={detailEnvoieTotal} setIsadmin={setIsadmin} isAdmin={isAdmin} isStaff={isStaff} dataAbonne={dataAbonne}  language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} language={language}/>}>
        </Route>



        <Route path="/details_retraits_info_french" element={username == "" ? <Navigate to='/' /> : <DetailsRetraitsInfoFrench message={message} username={username} detailEnvoieTotal={detailEnvoieTotal} setIsadmin={setIsadmin} isAdmin={isAdmin} isStaff={isStaff} dataAbonne={dataAbonne}  language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} language={language}/>}>
        </Route>
        <Route path="/details_retraits_info_lingala" element={username == "" ? <Navigate to='/' /> : <DetailsRetraitsInfoLingala message={message} username={username} detailEnvoieTotal={detailEnvoieTotal} setIsadmin={setIsadmin} isAdmin={isAdmin} isStaff={isStaff} dataAbonne={dataAbonne}  language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} language={language}/>}>
        </Route>
        <Route path="/details_retraits_info_english" element={username == "" ? <Navigate to='/' /> : <DetailsRetraitsInfoEnglish message={message} username={username} detailEnvoieTotal={detailEnvoieTotal} setIsadmin={setIsadmin} isAdmin={isAdmin} isStaff={isStaff} dataAbonne={dataAbonne}  language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged} language={language}/>}>
        </Route>

        <Route path="/table_abonnes_lingala" element={username == "" ? <Navigate to='/' /> : <TableAbonnesLingala username={username} setAbonneInfoDetail={setAbonneInfoDetail}  abonneInfo2={abonneInfo2} detailEnvoieTotal={detailEnvoieTotal} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/table_abonnes_english" element={username == "" ? <Navigate to='/' /> : <TableAbonnesEnglish username={username} setAbonneInfoDetail={setAbonneInfoDetail}  abonneInfo2={abonneInfo2} detailEnvoieTotal={detailEnvoieTotal} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/table_abonnes_french" element={username == "" ? <Navigate to='/' /> : <TableAbonnesFrench username={username} setAbonneInfoDetail={setAbonneInfoDetail}  abonneInfo2={abonneInfo2} detailEnvoieTotal={detailEnvoieTotal} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>


        <Route path="/details_abonnes_info_french" element={username == "" ? <Navigate to='/' /> : <DetailsAbonnesInfoFrench username={username} abonneInfoDetail={abonneInfoDetail} detailEnvoieTotal={detailEnvoieTotal} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/details_abonnes_info_lingala" element={username == "" ? <Navigate to='/' /> : <DetailsAbonnesInfoLingala username={username} abonneInfoDetail={abonneInfoDetail} detailEnvoieTotal={detailEnvoieTotal} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/details_abonnes_info_english" element={username == "" ? <Navigate to='/' /> : <DetailsAbonnesInfoEnglish username={username} abonneInfoDetail={abonneInfoDetail} detailEnvoieTotal={detailEnvoieTotal} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
    


        <Route path="/my_profil_english" element={username == "" ? <Navigate to='/' /> : <MyProfilEnglish setDateHistoric={setDateHistoric} setMessage={setMessage} setDetailHistoric={setDetailHistoric} username={username} abonne={abonne} abonneInfo2={abonneInfo2} dailyRapport={dailyRapport} setAbonneInfo2={setAbonneInfo2} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} isStaff={isStaff} dataAbonne={dataAbonne}  language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/my_profil_lingala" element={username == "" ? <Navigate to='/' /> : <MyProfilLingala setDateHistoric={setDateHistoric} setMessage={setMessage} setDetailHistoric={setDetailHistoric} username={username} abonne={abonne} abonneInfo2={abonneInfo2} dailyRapport={dailyRapport} setAbonneInfo2={setAbonneInfo2} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} isStaff={isStaff} dataAbonne={dataAbonne}  language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/my_profil_french" element={username == "" ? <Navigate to='/' /> : <MyProfilFrench setDateHistoric={setDateHistoric} setMessage={setMessage} setDetailHistoric={setDetailHistoric} username={username} abonne={abonne} abonneInfo2={abonneInfo2} dailyRapport={dailyRapport} setAbonneInfo2={setAbonneInfo2} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} isStaff={isStaff} dataAbonne={dataAbonne}  language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>

        <Route path="/details_historic_info_english" element={username == "" ? <Navigate to='/' /> : <TableHistoricEnglish  dateHistoric={dateHistoric} detailHistoric={detailHistoric} message={message} setDetailHistoric={setDetailHistoric} username={username} abonne={abonne} abonneInfo2={abonneInfo2} dailyRapport={dailyRapport} setAbonneInfo2={setAbonneInfo2} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} isStaff={isStaff} dataAbonne={dataAbonne}  language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/details_historic_info_french" element={username == "" ? <Navigate to='/' /> : <TableHistoricFrench  dateHistoric={dateHistoric} detailHistoric={detailHistoric} message={message} setDetailHistoric={setDetailHistoric} username={username} abonne={abonne} abonneInfo2={abonneInfo2} dailyRapport={dailyRapport} setAbonneInfo2={setAbonneInfo2} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} isStaff={isStaff} dataAbonne={dataAbonne}  language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/details_historic_info_lingala" element={username == "" ? <Navigate to='/' /> : <TableHistoricLingala  dateHistoric={dateHistoric} detailHistoric={detailHistoric} message={message} setDetailHistoric={setDetailHistoric} username={username} abonne={abonne} abonneInfo2={abonneInfo2} dailyRapport={dailyRapport} setAbonneInfo2={setAbonneInfo2} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} isStaff={isStaff} dataAbonne={dataAbonne}  language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>


        <Route path="/table_daily_rapport_english" element={username == "" ? <Navigate to='/' /> : <TableDailyRapportEnglish username={username} detailEnvoieTotal={detailEnvoieTotal} detailEnvoieTotalTableau={detailEnvoieTotalTableau}  dailyRapport={dailyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/table_daily_rapport_french" element={username == "" ? <Navigate to='/' /> : <TableDailyRapportFrench username={username} detailEnvoieTotal={detailEnvoieTotal} detailEnvoieTotalTableau={detailEnvoieTotalTableau}  dailyRapport={dailyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/table_daily_rapport_lingala" element={username == "" ? <Navigate to='/' /> : <TableDailyRapportLingala username={username} detailEnvoieTotal={detailEnvoieTotal} detailEnvoieTotalTableau={detailEnvoieTotalTableau}  dailyRapport={dailyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>


        <Route path="/table_monthly_rapport_english" element={username == "" ? <Navigate to='/' /> : <TableMonthlyRapportEnglish username={username} moisInfo={moisInfo} detailEnvoieTotal={detailEnvoieTotal} detailEnvoieTotalTableau={detailEnvoieTotalTableau}  dailyRapport={dailyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/table_monthly_rapport_french" element={username == "" ? <Navigate to='/' /> : <TableMonthlyRapportFrench username={username} moisInfo={moisInfo} detailEnvoieTotal={detailEnvoieTotal} detailEnvoieTotalTableau={detailEnvoieTotalTableau}  dailyRapport={dailyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/table_monthly_rapport_lingala" element={username == "" ? <Navigate to='/' /> : <TableMonthlyRapportLingala username={username} moisInfo={moisInfo} detailEnvoieTotal={detailEnvoieTotal} detailEnvoieTotalTableau={detailEnvoieTotalTableau}  dailyRapport={dailyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>

        <Route path="/table_validation_english" element={username == "" ? <Navigate to='/' /> : <TableValidationEnglish username={username} setDataValidation={setDataValidation} dataValidation={dataValidation} detailEnvoieTotal={detailEnvoieTotal} detailEnvoieTotalTableau={detailEnvoieTotalTableau}  dailyRapport={dailyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/table_validation_french" element={username == "" ? <Navigate to='/' /> : <TableValidationFrench username={username} setDataValidation={setDataValidation} dataValidation={dataValidation} detailEnvoieTotal={detailEnvoieTotal} detailEnvoieTotalTableau={detailEnvoieTotalTableau}  dailyRapport={dailyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
        <Route path="/table_validation_lingala" element={username == "" ? <Navigate to='/' /> : <TableValidationLingala username={username} setDataValidation={setDataValidation} dataValidation={dataValidation} detailEnvoieTotal={detailEnvoieTotal} detailEnvoieTotalTableau={detailEnvoieTotalTableau}  dailyRapport={dailyRapport} dataDetailEnvoieTotal={dataDetailEnvoieTotal} dateInfo={dateInfo} setIsadmin={setIsadmin} isAdmin={isAdmin} dataAbonne={dataAbonne}  isStaff={isStaff} language2={language2} modalShowPasswordChange={modalShowPasswordChange} setModalShowPasswordChange={setModalShowPasswordChange} modalShowContact={modalShowContact} setModalShowContact={setModalShowContact} modalShow={modalShow} modalShow4={modalShow4} setModalShow={setModalShow} setModalShow4={setModalShow4} setLanguage={setLanguage} setLanguage2={setLanguage2} uniqueNumber={uniqueNumber} setUniqueNumber={setUniqueNumber} setUsername={setUsername}  setIsStaff={setIsStaff} setIsLogged={setIsLogged} isLogged={isLogged}  language={language}/>}>
        </Route>
       

      </Routes >
    </BrowserRouter>
    
    </>
  );
}


export default App;

