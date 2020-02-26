import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
// import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import renderCheckBoxField from '../../../shared/components/form/CheckBox';

function handleClick() {
  console.log(handleClick);
  (window.Appcues.track('Clicked Invite on Form'));
}

class TeamForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      showPassword: false,
    };
  }

  showPassword = (e) => {
    e.preventDefault();
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__form-group">
          <span className="form__form-group-label">Team Member Name</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              name="name"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Team Member Email</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <KeyVariantIcon />
            </div>
            <Field
              name="password"
              component="input"
              type={this.state.showPassword ? 'text' : 'password'}
              placeholder="teammate@email.com"
            />
          </div>
        </div>
        <Link
          className="btn btn-primary account__btn account__btn--small"
          to="/account-settings"
          onClick={handleClick}
        >
          Invite
        </Link>
      </form>
    );
  }
}

export default reduxForm({
  form: 'log_in_form',
})(TeamForm);
