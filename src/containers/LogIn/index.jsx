import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from 'mdi-react/FacebookIcon';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import LogInForm from './components/LogInForm';

const LogIn = () => (
  <div className="account">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="page-title">Welcome to Cabinet!
          </h3>
          <h4 className="account__subhead subhead">Sign in below to get started</h4>
        </div>
        <LogInForm onSubmit />
        <div className="account__or">
          <p>Or Easily Using</p>
        </div>
        <div className="account__social">
          <Link
            className="account__social-btn account__social-btn--facebook"
            to="/all-files"
          ><FacebookIcon />
          </Link>
          <Link
            className="account__social-btn account__social-btn--google"
            to="/all-files"
          ><GooglePlusIcon />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default LogIn;

// className="account__title">Welcome to
//             <span className="account__logo"> Easy
//               <span className="account__logo-accent">DEV</span>
//             </span>

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
