import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NotFoundPage } from './pages'
import './index.scss'

import { ConnectService, ConnectAuthResultPage } from './3rd'

import MyProvider from './store/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyProvider>
      <Router>
        <Routes>
          <Route path='/' element={<ConnectService />} />
          <Route path='/auth-result' element={<ConnectAuthResultPage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </MyProvider>
  </React.StrictMode>,
)
