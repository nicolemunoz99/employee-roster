import React from 'react';

import xDate from 'xdate';
window.xdate = xDate

import { render } from 'react-dom';
import { Provider } from "react-redux";
import store from './js/store/';

import AppWrapper from './js/components/AppWrapper.jsx';

render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>,
  document.getElementById('app')
);