import Login from './components/Login';
import Signup from './components/Signup';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
function App() {
 return( 
  
  <Routes>
    <Route path='*' element={<Login/> }/>,  
    <Route path='signup' element={<Signup/>} />
  </Routes >
  
);
}

export default App
