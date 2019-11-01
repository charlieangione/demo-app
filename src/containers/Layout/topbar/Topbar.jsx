import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';

//  Cabinet = '/public/img/cabi.net-appcues.svg';

class Topbar extends PureComponent {
  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func.isRequired,
    changeSidebarVisibility: PropTypes.func.isRequired,
  };

  render() {
    const { changeMobileSidebarVisibility, changeSidebarVisibility } = this.props;

    return (
      <div className="topbar">
        <div className="topbar__wrapper">
          <div className="topbar__left">
            <TopbarSidebarButton
              changeMobileSidebarVisibility={changeMobileSidebarVisibility}
              changeSidebarVisibility={changeSidebarVisibility}
            />
            <Link className="topbar__logo" to="/all-files" />
          </div>
          <div className="topbar__right">
            <Link
              className="btn btn-outline-success"
              to="/pricing"
              onClick={window.Appcues.track('Clicked upgrade button')}
            >
            Get more storage
            </Link>
            <TopbarProfile />
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
