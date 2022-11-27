import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import App from './App'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<App/>} />
    </Routes>
    
    </BrowserRouter>
   
  </React.StrictMode>,

)
