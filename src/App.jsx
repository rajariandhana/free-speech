import './App.css'

import { Routes, Route } from 'react-router'

import Layout from './components/Layout'
import Home from './components/Home'

import environment from './config/environment'

function App() {

  if (!environment.API_URL || !environment.X_USERNAME) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className='bg-red-100 rounded-md shadow-md p-4 flex w-full border-red-500 border-2'>
          <p className="text-red-500 text-xl">Give me 1 minute I'm editing something.</p>

        </div>
      </div>
    )
  }
  
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
