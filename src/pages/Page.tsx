import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <div id="nome">Primeiro Projeto com Ionic</div>
      <div>PROJETO IONIC- HELLO WORD</div>
      <div id="componente">  <div id="componente"> Orientador: Genilson Martins</div>
      <div id="aluno"> Aluno: Walney de Negreiros Gomes </div></div>
    
    </IonPage>
  );
};

export default Page;
