import './App.css'

import { Routes, Route } from 'react-router'

import Layout from './components/Layout'
import Home from './components/Home'

import environment from './config/environment'

function App() {

  // if (!environment.ROOT_THREAD_ID || !environment.API_URL) {
  //   return (
  //     <div className="p-4">
  //       <p className="text-red-500">Still setting up</p>
  //     </div>
  //   )
  // }
  
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
