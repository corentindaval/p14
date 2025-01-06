import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import { store } from './app/store';
import Registre from "./pages/registre"
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
          <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/registre" element={<Registre />} />
            </Routes>
           </Router>
        </Provider>
  </StrictMode>,
)
