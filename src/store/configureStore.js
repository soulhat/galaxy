import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

const win = window;
const history = createHistory();
const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant').default());
}
middlewares.push(thunk);
middlewares.push(routerMiddleware(history));

const composeEnhancers =
  typeof win === 'object' && win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
