import React from 'react';
// import { Link } from 'react-router-dom';
// import FacebookIcon from 'mdi-react/FacebookIcon';
// import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import UploadForm from './components/UploadForm';

const FileUpload = () => (
  <div className="account">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="page-title">File Upload
          </h3>
        </div>
        <UploadForm onSubmit />
      </div>
    </div>
  </div>
);

export default FileUpload;
