import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomeScreen from './Screens/HomeScreen'
import './App.scss'
import RoutesPath from './enums/Routes'
import NotFound from './Screens/NotFound'
import LoginScreen from './Screens/LoginScreen'

const App = () => {
  const user = null
  return (
    <div className='app'>
      {
        !user
          ? <LoginScreen />
          : (
            <Routes>
              <Route path={RoutesPath.home} element={<HomeScreen />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          )
      }
    </div>
  )
}

export default App
