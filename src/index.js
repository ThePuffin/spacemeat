<<<<<<< HEAD
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
=======
import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('root'));
>>>>>>> db097a3ab2a5722163309b5c6ae572e88380c84e
