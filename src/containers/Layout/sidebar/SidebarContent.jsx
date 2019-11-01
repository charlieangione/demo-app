import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
// import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    // changeToDark: PropTypes.func.isRequired,
    // changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    this.props.onClick();
    // window.Appcues.track('Closed Sidebar');
  };

  render() {
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink title="All Files" route="/all-files" onClick={this.hideSidebar} />
          <SidebarLink title="Recents" route="/recents" onClick={this.hideSidebar} />
          <SidebarLink title="Favorites" route="/favorites" onClick={this.hideSidebar} />
          <SidebarLink title="Notes" route="/notes" onClick={this.hideSidebar} />
          <SidebarLink title="Trash" route="/trash" onClick={this.hideSidebar} />
          <SidebarLink title="Admin Console" route="/admin-console" onClick={this.hideSidebar} />
          <SidebarLink title="Inspiration" route="/inspiration" onClick={this.hideSidebar} />
        </ul>
      </div>
    );
  }
}

export default SidebarContent;

//  Removed from nav below
//  <SidebarLink title="Log out" icon="exit" route="/log_in" onClick={this.hideSidebar} />
//           <SidebarCategory title="My Files" icon="diamond">
//           </SidebarCategory>


// <ul className="sidebar__block">
//   <SidebarCategory title="Layout" icon="layers">
//     <button className="sidebar__link" onClick={this.props.changeToLight}>
//       <p className="sidebar__link-title">Light Theme</p>
//     </button>
//     <button className="sidebar__link" onClick={this.props.changeToDark}>
//       <p className="sidebar__link-title">Dark Theme</p>
//     </button>
//   </SidebarCategory>
// </ul>
