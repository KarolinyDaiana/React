// import { useState } from 'react'
import ToDoList from './Components/ToDoList'
import ThemeSwitcher from './Components/ThemeSwitcher'
import DeliveryStatus from './Components/DeliveryStatus'

import './App.css'

function App() {

  return (
      <div className='body'>
        <ThemeSwitcher/>
        <ToDoList/>
        <DeliveryStatus/>
      </div>
      
  )
}

export default App
