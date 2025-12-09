import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router'

import { Overview } from './components/initial_screen/overview'
import { ManageAccount } from './components/initial_screen/manage_account'
import {Welcome} from './components/initial_screen/welcome'
import { Sidebar } from './components/sidebar'
import { Dashbaord } from './components/dashboard'
import { Template } from './components/template'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route index element={<Welcome/>}></Route>
        <Route path="/overview" element={<Overview/>}></Route>
        <Route path="/manage-account" element={<ManageAccount/>}></Route>
        <Route path="/dashboard" element={<Dashbaord/>}></Route>
        <Route path="/template" element={<Template/>}></Route>


      </Routes>
    </Router>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
