import React, { useState } from 'react';
import { IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
  IonItem, 
  IonButton, 
  IonDatetime, 
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonAlert, } from '@ionic/react';

  const BookPantry: React.FC = () => {
    const [showBookingAlert, SetBookingAlert] = useState(false);

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Book Pantry</IonTitle>
           
          </IonToolbar>
        </IonHeader>
        <IonContent>
  
            <IonGrid>
              <IonRow>
                <IonCol>
                  <h4>Maintain social distance </h4>
                  <p>
                    Book pantry slot here
                  </p>
                </IonCol>
              </IonRow>
           
              <IonItem>
              <IonLabel>Booking date</IonLabel>
              <IonDatetime value="1990-02-19" placeholder="Select Date"></IonDatetime>
            </IonItem>
  
            <IonItem>
              <IonLabel>Time</IonLabel>
              <IonSelect placeholder="Time slot">
                <IonSelectOption value="1">12-12.30PM</IonSelectOption>
                <IonSelectOption value="2">12.30- 1PM</IonSelectOption>
                <IonSelectOption value="3">1-1.30PM</IonSelectOption>
              </IonSelect>
            </IonItem>
                 
            <IonRow>
              <IonCol>
              </IonCol>
                <IonCol>         
                  <IonButton onClick={() => SetBookingAlert(true)} expand="block">Book Now </IonButton>
                </IonCol>
                <IonCol>
               </IonCol>      
            </IonRow>               
          </IonGrid>
        
         <IonAlert
          isOpen={showBookingAlert}
          onDidDismiss={() => SetBookingAlert(false)}
          cssClass='my-custom-class'
          header={'Booking Confirmed'}
         
          message={'Your token is 10. Please occupy seat in allotted time'}
          buttons={['OK']}
        />
      </IonContent>
      </IonPage>
    );
}

export default BookPantry;
