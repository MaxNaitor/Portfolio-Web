import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import DevHomepage from './components/development/DevHomepage';
import PhHomepage from './components/photography/PhHomepage';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { init } from 'emailjs-com';
init("user_OuiiPTBmuFQviQVgy1BlE");

var firebaseConfig = {
  apiKey: "AIzaSyDoRSWWGgCDpOgfdYYR_D31C_Y55kFuad0",
  authDomain: "portfolio-web-a36cf.firebaseapp.com",
  projectId: "portfolio-web-a36cf",
  storageBucket: "portfolio-web-a36cf.appspot.com",
  messagingSenderId: "100048278984",
  appId: "1:100048278984:web:cdbe752227070d68759cfd"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <Router basename={window.location.pathname || ''}>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/homepage" component={Homepage} />
          <Route path="/photography" component={PhHomepage} />
          <Route path="/development" component={DevHomepage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
