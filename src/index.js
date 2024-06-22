import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contextprovider from './counterslice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Contextprovider>
  
    <App />
    </Contextprovider>
   
);

