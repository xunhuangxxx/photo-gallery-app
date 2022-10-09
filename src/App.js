import './App.css';
import React from 'react';
import { BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

import SearchForm from './components/SearchForm';

import Photo from './components/Photo';
import NotFound from './components/NotFound';
import apiKey from './config.js';
import Results from './components/Results';
import Home from './components/Home';



function App() {
  const api = apiKey;
  
  return (
    <BrowserRouter>
      <div>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/:tags" component={Results} /> 
          
        </Switch>
      
          
      </div>
   </BrowserRouter>  
  );
}

export default App;
