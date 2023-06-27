import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './pages/App'
import Projetos from './pages/Projetos'
import Sobre from './pages/Sobre'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={App}/>
        <Route path='/projetos' Component={Projetos}/>
        <Route path='/sobre' Component={Sobre}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
