import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ShippingProvider } from './context/ShippingContext.jsx'
import {data} from "../src/data/data.js"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShippingProvider data ={data}>
    <App />
    </ShippingProvider>
  </React.StrictMode>,
)
