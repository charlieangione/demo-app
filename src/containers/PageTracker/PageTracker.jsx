import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";


class PageTracker extends React.Component {

componentDidUpdate(prevProps) {
	const { location: { pathname } } = this.props;
	const previousLocation = prevProps.location.pathname;

	if (pathname !== previousLocation) {
	  window.Appcues.page();
	}

}

	render() {
		return null;
	}
}


export default withRouter(PageTracker);