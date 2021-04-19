import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/homepage" component={Homepage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
