import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import DevHomepage from './components/development/DevHomepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/homepage" component={Homepage} />
          <Route path="/photography" component={Homepage} />
          <Route path="/development" component={DevHomepage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
