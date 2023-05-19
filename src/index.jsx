import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/screens/Home/Home';
import Layout from './components/layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
);

