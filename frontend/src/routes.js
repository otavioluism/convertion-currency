import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Rotas Para a página HTML
import Logon from './pages/Logon';
import Convert from './pages/Convert';
import Create_currency from './pages/Create';
import Profile from './pages/Profile';
import Edit from './pages/Edit';

export default function Routes(){ 
  return(
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Logon} />
          <Route path="/convert" component={Convert} />
          <Route path="/create" component={Create_currency} />
          <Route path="/profile" component={Profile} /> 
          <Route path="/edit" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}