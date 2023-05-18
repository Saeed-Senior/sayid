import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { register } from 'swiper/element/bundle';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './i18n'

register();

const defaultState: {} = {};

const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    
    default:
      return state;
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <Suspense fallback=''>
    <App />
    </Suspense>
  </Provider>
  </React.StrictMode>
);

