import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import {
  Header,
  Home
} from './App.js'


const root = ReactDOM.createRoot(
  document.getElementById('root')
)

root.render(
  <BrowserRouter basename='/'>
      <Header />
      <div className='limiting-container'>
          <Routes>
              <Route path='' element={<Home />} />
          </Routes>
      </div>
  </BrowserRouter>
)