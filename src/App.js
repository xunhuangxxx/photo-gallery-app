import './App.css';
import React from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom';

import SearchForm from './components/SearchForm';
import Photo from './components/Photo';
import NotFound from './components/NotFound';
import apiKey from './config.js';
import Results from './components/Results';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';



function App() {
  const api = apiKey;
  
  return (
    <BrowserRouter>
      <div>

        <Switch>
          <Route exact path="/" render={() => <Redirect to="/search/cats"/>}/>
          <Route path="/search/:tags" component={Results} /> 
          <Route component={ErrorPage} />
          
        </Switch>
      
          
      </div>
   </BrowserRouter>  
  );
}

export default App;
