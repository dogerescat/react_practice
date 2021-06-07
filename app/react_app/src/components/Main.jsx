import React from 'react';
import FormHeader from './Header.jsx';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Main() {
  return (
    <BrowserRouter>
      <FormHeader />
      <Switch>
        <Route path="/" exact children={<RegisterForm />} />
        <Route path="/login" children={<LoginForm />} />
      </Switch>
    </BrowserRouter>
  );
}
export default Main;
