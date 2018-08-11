import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './components/App';

ReactDom.render(
  <App content="Hello React!"/>,
  document.getElementById('app')
);
