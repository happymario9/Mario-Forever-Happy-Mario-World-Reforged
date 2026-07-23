import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import '@unocss/reset/tailwind.css'
import 'nes.css/css/nes.min.css'
import './styles.css'
import App from './App'
import { I18nProvider } from './i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nProvider><HashRouter><App /></HashRouter></I18nProvider>
  </React.StrictMode>,
)
