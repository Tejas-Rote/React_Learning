import React from "react";
import ReactDOM from 'react-dom';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import './components/App.css'
import App from "./components/App";
// import reducer from './reducers' 
import reducers from './reducers';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store  = createStore(reducers, applyMiddleware(thunk));

root.render( 
  <StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
  </StrictMode>
);
