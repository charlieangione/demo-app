import React from 'react';
// import { Link } from 'react-router-dom';
// import FacebookIcon from 'mdi-react/FacebookIcon';
// import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import TeamForm from './components/TeamForm';

const FileUpload = () => (
  <div className="account">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="page-title">Invite your team
          </h3>
        </div>
        <TeamForm onSubmit />
      </div>
    </div>
  </div>
);

export default FileUpload;
