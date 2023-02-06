import {createStore, applyMiddleware} from 'redux';
import {compose} from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { rootReducer } from '../redux/reducers';

let composeEnhancer = compose;

const store = createStore(
  //creates an instance of store to be used globally
  rootReducer, // pass in the combined reducers
  composeEnhancer(applyMiddleware(reduxThunk, logger)), // use the middleware for async actions
);

export default store;