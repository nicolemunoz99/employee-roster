import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/';

const store = createStore(rootReducer, composeWithDevTools(
  // applyMiddleware(...middleware)
  // other store enhancers if any
));

export default store;

// import { createStore, applyMiddleware } from 'redux';

// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));