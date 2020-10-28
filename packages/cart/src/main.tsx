import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory, History } from 'history';
import App from './App';

const mount = async (el: Element, rootHistory: History) => {
  ReactDOM.render(<App history={rootHistory} />, el);
};

const unmount = (el: Element) => {
  ReactDOM.unmountComponentAtNode(el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_feed-dev-root');

  if (devRoot) {
    mount(devRoot, createBrowserHistory());
  }
}

export { mount, unmount };
