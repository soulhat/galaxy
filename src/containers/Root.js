import React from 'react';
import { Helmet } from 'react-helmet';
import Protypes from 'prop-types';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import App from './App/App';

const history = createHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Helmet>
        <title>Galaxy</title>
      </Helmet>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={App} />
        </div>
      </ConnectedRouter>
    </div>
  </Provider>
);

Root.propTypes = {
  store: Protypes.object.isRequired
};

export default Root;
