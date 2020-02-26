import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';
import LogIn from '../LogIn/index';
import AllFiles from '../AllFiles/index';
import Recents from '../Recents/index';
import Favorites from '../Favorites/index';
import Inspiration from '../Inspiration/index';
import AccountSettings from '../AccountSettings/index';
import AdminConsole from '../AdminConsole/index';
import Notes from '../Notes/index';
import Trash from '../Trash/index';
import ViewProfile from '../ViewProfile/index';
import TermsOfService from '../TermsOfService/index';
import MyDocuments from '../MyDocuments/index';
import FileUpload from '../FileUpload/index';
import Pricing from '../Pricing/index';
import WriteNote from '../WriteNote/index';
import InviteTeam from '../InviteTeam/index';
// import PageTracker from './PageTracker';


const Pages = () => (
  <Switch>
    <Route path="/all-files" component={AllFiles} {...window.Appcues.anonymous()} />
    <Route path="/recents" component={Recents} {...window.Appcues.page('/recent-files')} />
    <Route path="/favorites" component={Favorites} />
    <Route path="/inspiration" component={Inspiration} />
    <Route path="/account-settings" component={AccountSettings} />
    <Route path="/admin-console" component={AdminConsole} />
    <Route path="/notes" component={Notes} />
    <Route path="/trash" component={Trash} />
    <Route path="/view-profile" component={ViewProfile} />
    <Route path="/terms" component={TermsOfService} />
    <Route path="/my-documents" component={MyDocuments} />
    <Route path="/upload" component={FileUpload} />
    <Route path="/pricing" component={Pricing} />
    <Route path="/new-note" component={WriteNote} />
    <Route path="/invite-team" component={InviteTeam} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/" component={Pages} {...window.Appcues.page()} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} {...window.Appcues.anonymous()} {...window.Appcues.page('/home')} />
        <Route
          exact
          path="/log_in"
          component={LogIn}
          {...window.Appcues.anonymous()}
          {...window.analytics.identify()}
          {...window.analytics.page()}
          {...window.Appcues.page()}
        />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
