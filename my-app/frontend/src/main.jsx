import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // Ensure the path to `app.jsx` is correct
import './index.css'; // Import your CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);