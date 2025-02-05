import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.module.css'
import "./App.module.css"
import App from './App.tsx'

// For dev
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// In shopify
const mountNode = document.getElementById("shopify-react-widget");
if (mountNode) {
  createRoot(mountNode).render(
  
  <StrictMode>
    <App/>
  </StrictMode>,);
}