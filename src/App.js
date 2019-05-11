import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Upload, Result } from './pages';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
      <Route exact path="/" component={Upload}/>
      <Route path="/result" component={Result}/>
      </div>
    </Router>
  );
}

export default App;
