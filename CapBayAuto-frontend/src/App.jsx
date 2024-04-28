import { useState } from 'react'
import Navbar from './component/NavBarMain.jsx'
import Card from './component/vroomCard.jsx'
import Form from './component/Form.jsx'
import './App.css'

function App() {

  return (
    <div className="row justify-content-md-center">
      <Navbar/>
      <Card/>
      <Form/>
    </div>
  )
}

export default App
