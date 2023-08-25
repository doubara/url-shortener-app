import React, {createContext} from 'react';
// import { ReactDOM } from 'react-dom';
// import { ReactDOM } from 'react';
// import {createRoot} from 'react-dom/client';
import { createRoot } from 'react-dom/client';

import './index.css';
import './reset.css';
import App from './App';

// ReactDOM.render(<App/>, document.getElementById('root'));
const app = document.getElementById('root');
const root = createRoot(app);
root.render(<App tab='home'></App>)