
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/layout/App.jsx'
import './index.css'
import "./components/firebase/firebase.js"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
