import React from 'react';
import Login from './login.jsx';
import Logout from './logout.jsx';

const FormHeader = () => {
  return (
    <div className={'header'}>
      <Login />
      <Logout />
    </div>
  );
};

export default FormHeader;
