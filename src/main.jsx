import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/components.css';
import './assets/styles/app.css';
import './assets/styles/mobile.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
