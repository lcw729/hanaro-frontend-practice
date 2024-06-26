import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx'
import './index.css';
import Sample from './components/Sample.tsx';
import App from './App.tsx';
import { CounterProvider } from './contexts/counter-context.tsx';
import { SessionProvider } from './contexts/session-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SessionProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </SessionProvider>
    <Sample />
  </React.StrictMode>,
);


