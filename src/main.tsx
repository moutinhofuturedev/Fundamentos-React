// Responsável por inicializar a aplicação

import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './page/Home'

import '../src/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)

// O JSX  nada mais é do que a sintax que o React usa para construir as interfaces de forma declarativa
// => no React, tudo é javascript