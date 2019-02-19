import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={DashboardPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
