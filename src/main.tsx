import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom'
import ScrollToTop from './utilities/ScrollToTop.tsx'
import { AppProvider } from './utilities/Context.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
    <Router>
      <ScrollToTop />
    <App />
    </Router>
    </AppProvider>
  </React.StrictMode>,
)
