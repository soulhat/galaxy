import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

let store = configureStore();

render(<Root store={store} />, document.getElementById('root'));

registerServiceWorker();
