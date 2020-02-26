import React, { PureComponent } from 'react';
// import { Route, Link } from 'react-router-dom';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';
// import TopBarUpgradeButton from './TopBarUpgradeButton';

const Charlie = `${process.env.PUBLIC_URL}/img/charlie.png`;

export default class TopbarProfile extends PureComponent {
  constructor() {
    super();
    this.state = {
      collapse: false,
    };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    return (
      <div className="topbar__profile">
        <button className="topbar__avatar" onClick={this.toggle}>
          <img className="topbar__avatar-img" src={Charlie} alt="avatar" />
          <p className="topbar__avatar-name">Charlie Angione</p>
          <DownIcon className="topbar__icon" />
        </button>
        {this.state.collapse && <button className="topbar__back" onClick={this.toggle} />}
        <Collapse isOpen={this.state.collapse} className="topbar__menu-wrap">
          <div className="topbar__menu">
            <TopbarMenuLink
              title="Account Settings"
              icon="list"
              path="/account-settings"
              onClick={this.state.collapse}
            />
            <TopbarMenuLink title="View Profile" icon="inbox" path="view-profile" />
            <TopbarMenuLink title="Terms of Service" icon="diamond" path="/terms" />
            <div className="topbar__menu-divider" />
            <TopbarMenuLink title="Log Out" icon="exit" path="/" />
          </div>
        </Collapse>
      </div>
    );
  }
}
