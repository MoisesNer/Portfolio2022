import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import { ProjectProvider } from './context'

ReactDOM.render(
  <ProjectProvider>
    <Router>
      <App />
    </Router>
  </ProjectProvider>,

  document.getElementById('root')
);

reportWebVitals();
