import React from 'react';
import ReactDOM from 'react-dom';

const render = (el) => {
  ReactDOM.render(<h1>Test3</h1>, el);
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_feed-dev-root')

  if (devRoot) {
    render(devRoot);
  }
}

export { render };