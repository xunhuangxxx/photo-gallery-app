import './App.css';
import React from 'react';
import { BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import Photo from './components/Photo';
import NotFound from './components/NotFound';
import apiKey from './config.js';
import Results from './components/Results';



function App() {
  const api = apiKey;
  
  return (
    <BrowserRouter>
      <div className="App">
        
        <SearchForm />
        <Nav className="App-link"/> 

        <NotFound />

        <Switch>
          <Route exact path="/" component={NotFound}/>
          <Route path="/:tags"  component={Results} />
          
          

        </Switch>
      
          
      </div>
   </BrowserRouter>  
  );
}

export default App;
