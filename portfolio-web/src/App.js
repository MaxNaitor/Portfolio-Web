import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Header from './components/layout/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/homepage" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
