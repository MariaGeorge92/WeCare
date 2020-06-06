import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Home from './pages/Home';

import BookPantry from './pages/BookPantry';
import FunZone from './pages/FunZone';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import {
  homeOutline,
  calendarOutline,
  gameControllerOutline,
  personCircleOutline,
  peopleOutline,
} from "ionicons/icons";
import Profile from './pages/Profile';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/Home" component={Home} exact={true} />
        
          <Route path="/BookPantry" component={BookPantry} />
          <Route path="/FunZone" component={FunZone} />
          <Route path="/Profile" component={Profile} />
          <Route path="/" render={() => <Redirect to="/Home" />} exact={true} />

        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
         
          <IonTabButton tab="BookPantry" href="/BookPantry">
            <IonIcon icon={peopleOutline} />
            <IonLabel>BookPantry</IonLabel>
          </IonTabButton>

          <IonTabButton tab="FunZone" href="/FunZone">
            <IonIcon icon={gameControllerOutline} />
            <IonLabel>FunZone</IonLabel>
          </IonTabButton>
          
          <IonTabButton tab="Profile" href="/Profile">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
