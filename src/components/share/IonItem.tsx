import {
  IonItem as Item,
  IonCheckbox,
  IonLabel,
  IonNote,
  IonBadge,
} from "@ionic/react";

const IonItem: React.FC = () => {
  return (
    <Item>
      <IonCheckbox slot="start" />
      <IonLabel>
        <h1>Create Idea</h1>
        <IonNote>Run Idea by Brandy</IonNote>
      </IonLabel>
      <IonBadge color="success" slot="end">
        5 Days
      </IonBadge>
    </Item>
  );
};

export default IonItem;
