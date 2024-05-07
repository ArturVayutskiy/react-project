import React from 'react'
import ReactDOM from 'react-dom/client'
import Apps from './components/App'
import './index.css'
import App from './components/Library'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Apps />
    <App/>
  </React.StrictMode>,
)
