import { useState,useEffect } from 'react'
import './App.css'
import Data from './countries.json'

import {Countries} from "./Countries"

function App() {   
  return (
    <div className="App">
      <Countries/>
    </div>
  )
}

export default App
