import React from 'react';
import './App.css';
import {
  BrowserRouter as  Router, Route, Switch
} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import DetailPage from './components/pages/DetailPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route 
            exact path={'/'} 
            component={HomePage} 
          />
          <Route 
            exact path={'/detail/:id'} 
            component={DetailPage} 
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
