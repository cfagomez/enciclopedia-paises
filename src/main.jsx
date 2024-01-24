import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BuscadorProvider from './context/BuscadorProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BuscadorProvider>
        <App />
    </BuscadorProvider>
  </React.StrictMode>,
)
