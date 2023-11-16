import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Layers/app/App.tsx';
import { Provider } from 'react-redux';
import { store } from './Layers/shared/lib/redux/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
