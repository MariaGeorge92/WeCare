import React from 'react';
import { IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle,
   IonToolbar,
   IonItem,
   IonImg,
   IonBadge,
   IonCol,
   IonText,
   IonLabel,
   IonList,
   IonThumbnail,
   IonButton 
  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';

import {
  chatboxOutline,
} from "ionicons/icons";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

      <IonCol class="ion-padding-top">
          <div></div>
        </IonCol>
        <IonImg className="rewards-img" src="assets/Wallet.jpg" />
        <IonItem>
          <IonBadge color="success"></IonBadge>
          <IonBadge slot="start"></IonBadge>
          <IonLabel ></IonLabel>
          <IonText slot="start"   color="secondary" >
          
          <h4 > Your points</h4></IonText>
          <IonBadge color="success" slot="end" >22 </IonBadge>
        </IonItem>

          <IonList >
          <IonItem>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="/assets/person.png" />
            </IonThumbnail>
            <IonLabel>Sara Joseph</IonLabel>
          </IonItem>
          <IonItem>
            <IonThumbnail slot="start">
              <img src="/assets/email.png" />
            </IonThumbnail>
            <IonLabel>
              <h3>sarajoseph@gmail.com</h3>
              <p></p>
              </IonLabel>
            </IonItem>
            <IonItem>
            <IonThumbnail slot="start" >
              <img src="/assets/company.png" />
            </IonThumbnail>
            <IonLabel>
              <h3>Department</h3>
              <p>Organization</p>
              </IonLabel>
            </IonItem>
           
        </IonList>
        <section>
           <IonButton expand="block" shape="round">Log out</IonButton>
        </section>
          
        </IonContent>
    </IonPage>
  );
};

export default Profile;
