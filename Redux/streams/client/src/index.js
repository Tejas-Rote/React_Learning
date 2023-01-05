import React from "react";
import ReactDOM from 'react-dom';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import {Provider} from "react-redux";
// import {createStore} from 'redux';

import './components/App.css'
import App from "./components/App";
// import reducer from './reducers' 

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  {/* <Provider store={createStore(reducer)}> */}
  <App />
  {/* </Provider> */}
  </StrictMode>
);

 
