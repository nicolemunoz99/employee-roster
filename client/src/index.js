import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './js/components/App.jsx';
import store from "./js/store/";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);