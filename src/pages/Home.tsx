import React from 'react';
import { IonContent, 
  IonHeader,
  IonLabel, 
  IonPage, 
  IonAvatar,
  IonItem,
  IonImg, 
  IonTitle,  
  IonRow,  
  IonCol,  
  IonCardContent,
  IonToolbar,
  IonCardHeader,
  IonCard,
  IonCardSubtitle ,
  IonCardTitle, 
  IonGrid, 
  IonButton, 
  IonText
} from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle> Quote of the day</IonCardSubtitle>
            <IonCardTitle>Dream</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            “Dream is not that which you see while sleeping it is something that does not let you sleep.”
          </IonCardContent>
          <IonCardContent>
            ― A P J Abdul Kalam
          </IonCardContent>
        </IonCard>  

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Upcoming Events</IonCardTitle>
            <IonCardSubtitle></IonCardSubtitle>
            <IonImg class="header-img" src="/assets/musicday.jpg" />
          </IonCardHeader>
        </IonCard>  


       
        
       <IonCard class="action-card">
       
          <IonImg class="header-img"  src="/assets/environment.jpg" />
      
          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/pic2.png" />
            </IonAvatar>
            <IonLabel>
              <h3>Celebration</h3>
              <h2>Environment day</h2>
            </IonLabel>
          </IonItem>
          <IonCardContent>
          Think about Environment: Help its balance to be maintain

          Plant a tree today, Save future.
          John
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonButton size="small">Like</IonButton>
                </IonCol>
                <IonCol>
                  <IonText>John Thomas</IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>

          <IonImg class="header-img"  src="/assets/birthday.jpg" />      
          <IonItem>
            <IonAvatar slot="start">
              <img src="/assets/pic3.png" />
            </IonAvatar>
            <IonLabel>
              <h3>Celebration</h3>
              <h2>Happy Birthday</h2>
            </IonLabel>
          </IonItem>         
          <IonCardContent>
        
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonButton size="small">Like</IonButton>
                </IonCol>
                <IonCol>
                  <IonText>Sony Thomas</IonText>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>

        </IonCard> 
                
      </IonContent>
    </IonPage>
  );
};

export default Home;
