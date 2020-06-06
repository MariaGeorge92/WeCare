import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCol,
  IonGrid,
  IonButton,
  IonItem,
  IonImg,
  IonRow,
  IonCard,
  IonCardContent,

} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./FunZone.css";

import { starSharp } from "ionicons/icons";

const FunZone: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>It's all about fun</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

      <IonCard class="action-card">      
        <IonImg class="header-img"  src="/assets/quiz.png" />       
          <IonCardContent>
          So, now the much awaited next activity has ben started!!  
          </IonCardContent>
        <IonCardContent>
          Hurry up!!        
       </IonCardContent>
       <IonGrid>
        <IonRow>
          <IonCol>    </IonCol>
          <IonCol>
            <IonButton >Start Now</IonButton>
          </IonCol>
          <IonCol>    </IonCol>
        </IonRow>
      </IonGrid> 
      </ IonCard>
         


      <IonCard class="action-card">      
        <IonImg class="header-img"  src="/assets/survey.jpg" />       
          <IonCardContent>
          It's time to express your feelings
          </IonCardContent>
        <IonCardContent>
          Please complete it before 20/05/2020    
       </IonCardContent>
       <IonGrid>
        <IonRow>
          <IonCol>    </IonCol>
          <IonCol>
            <IonButton >Start Now</IonButton>
          </IonCol>
          <IonCol>    </IonCol>
        </IonRow>
      </IonGrid>
      </ IonCard>
          

      
      

      </IonContent>
    </IonPage>
  );
};

export default FunZone;
