import React from 'react';

const FormHeader = () => {
  
  return (
    <header className='header'>
      <div className="header_wrapper">
        <div className="title">React App</div>
        <nav className="nav">
          <ul className="nav_wrapper">
            <li className="nav_item">
                <span>login</span>
            </li>
            <li className="nav_item">
                <span>logout</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default FormHeader;
