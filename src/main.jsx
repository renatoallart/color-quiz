import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ColorsProvider } from './context/ColorsProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorsProvider>
      <App />
    </ColorsProvider>
  </React.StrictMode>
)
