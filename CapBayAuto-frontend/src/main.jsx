import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Seller from "./Seller.jsx"
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/seller" element={<Seller/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
