//main.js
import '../scss/style.scss';
import React from 'react';
import {render} from 'react-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
render(<FirstPage/>, document.getElementById("first-page"));
render(<SecondPage/>, document.getElementById("second-page"));
