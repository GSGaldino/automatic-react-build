import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';

import BANHomepage from "./pages/BANHomepage";
import BAFHomepage from "./pages/BAFHomepage";

import DATHomepage from './pages/DATHomepage';
import DATThankyouPage from './pages/DATThankyouPage';

import GALHomepage from './pages/GALHomepage';
import GALThankyouPage from './pages/GALThankyouPage';

import EMDThankyouPage from './pages/EMDThankyouPage';
import EMDHomepage from './pages/EMDHomepage';

import BAGHomepage from './pages/BAGHomepage';
import BAGThankyouPage from './pages/BAGThankyouPage';

import CBTHomepage from './pages/CBTHomepage';
import CBTThankyouPage from './pages/CBTThankyouPage';

import CIFHomepage from './pages/CIFHomepage';
import CIFThankyouPage from './pages/CIFThankyouPage';

import CPCHomepage from './pages/CPCHomepage';
import CPCThankyouPage from './pages/CPCThankyouPage';

import CURHomepage from './pages/CURHomepage';
import CURThankyouPage from './pages/CURThankyouPage';

import DPSHomepage from './pages/DPSHomepage';
import DPSThankyouPage from './pages/DPSThankyouPage';

import ECMHomepage from './pages/ECMHomepage';
import ECMThankyouPage from './pages/ECMThankyouPage';

import BDPHomepage from './pages/BDPHomepage';
import BDPThankyouPage from './pages/BDPThankyouPage';

import BDSHomepage from './pages/BDSHomepage';
import BDSThankyouPage from './pages/BDSThankyouPage';

import DSCHomepage from './pages/DSCHomepage';
import DSCThankyouPage from './pages/DSCThankyouPage';

import MLRHomepage from './pages/MLRHomepage';
import MLRThankyouPage from './pages/MLRThankyouPage';

import MICHomepage from './pages/MICHomepage';
import MICThankyouPage from './pages/MICThankyouPage';

import MYSHomepage from './pages/MYSHomepage';
import MYSThankyouPage from './pages/MYSThankyouPage';

import Page404 from './pages/Page404';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Homepage} />

        <Route path="/formacao-digital-agile-thinking" exact component={DATHomepage} />
        <Route path="/obrigado-formacao-digital-agile-thinking" exact component={DATThankyouPage} />

        <Route path="/formacao-gerente-agil" exact component={GALHomepage} />
        <Route path="/obrigado-formacao-gerente-agil" exact component={GALThankyouPage} />

        <Route path="/formacao-empreendedorismo-digital" exact component={EMDHomepage} />
        <Route path="/obrigado-formacao-empreendedorismo-digital" exact component={EMDThankyouPage} />
        
        <Route path="/formacao-business-agility" exact component={BAGHomepage} />
        <Route path="/obrigado-formacao-business-agility" exact component={BAGThankyouPage} />

        <Route path="/formacao-certificacao-cobit-5" exact component={CBTHomepage} />
        <Route path="/obrigado-formacao-certificacao-cobit-5" exact component={CBTThankyouPage} />

        <Route path="/formacao-certificacao-itil-foundation" exact component={CIFHomepage} />
        <Route path="/obrigado-formacao-certificacao-itil-foundation" exact component={CIFThankyouPage} />

        <Route path="/formacao-certificacao-pmp-capm-pmi" exact component={CPCHomepage} />
        <Route path="/obrigado-formacao-certificacao-pmp-capm-pmi" exact component={CPCThankyouPage} />

        <Route path="/formacao-curriculos" exact component={CURHomepage} />
        <Route path="/obrigado-formacao-curriculos" exact component={CURThankyouPage} />

        <Route path="/formacao-desenvolvimento-pessoal" exact component={DPSHomepage} />
        <Route path="/obrigado-formacao-desenvolvimento-pessoal" exact component={DPSThankyouPage} />

        <Route path="/formacao-e-commerce" exact component={ECMHomepage} />
        <Route path="/obrigado-formacao-e-commerce" exact component={ECMThankyouPage} />

        <Route path="/business-intelligence-data-warehouse-pentaho" exact component={BDPHomepage} />
        <Route path="/obrigado-business-intelligence-data-warehouse-pentaho" exact component={BDPThankyouPage} />

        <Route path="/business-intelligence-data-warehouse" exact component={BDSHomepage} />
        <Route path="/obrigado-business-intelligence-data-warehouse" exact component={BDSThankyouPage} />

        <Route path="/data-science" exact component={DSCHomepage} />
        <Route path="/obrigado-data-science" exact component={DSCThankyouPage} />

        <Route path="/machine-learning" exact component={MLRHomepage} />
        <Route path="/obrigado-machine-learning" exact component={MLRThankyouPage} />

        <Route path="/microsoft-sql-server-2017" exact component={MICHomepage} />
        <Route path="/obrigado-microsoft-sql-server-2017" exact component={MICThankyouPage} />

        <Route path="/oracle-mysql" exact component={MYSHomepage} />
        <Route path="/obrigado-oracle-mysql" exact component={MYSThankyouPage} />
        <Route path="/test-page2" exact component={BANHomepage} />

        <Route path="/test-page" exact component={BAFHomepage} />



        <Route path="/" component={Page404} />

      </Switch>
    </BrowserRouter>
  )
}
