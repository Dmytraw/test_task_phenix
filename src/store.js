import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import {PCast} from 'phenix-web-sdk';
import rootReducer from "./reducers/index";

/////////////////// 
// DO NOT MODIFY
const pcast = new PCast();
const logger = pcast.getLogger();

logger.info('Front-end developer test bundled. [%s] [%s]', window.location, navigator.userAgent)

const loggingDecorator = reducer => (state, action = {}) => {
  const {type, ...actionProps} = action;
  const truncatedActionString = JSON.stringify(actionProps).substring(0, 100);

  logger.info('Front-end developer test action. [%s] [%s]', type || 'UNKNOWN', truncatedActionString)

  return reducer(state, action);
};
// REQUIRED FOR TEST
///////////////////

const store = createStore(
  loggingDecorator(rootReducer),
  applyMiddleware(thunk)
);

window.store = store;

export default store;
