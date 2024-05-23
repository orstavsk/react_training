import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Store from './pages/Store';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import { selectIsUserLoggedIn } from './state/reducers/userReducer';
const App=()=>
  {
    const isLogged = useSelector(selectIsUserLoggedIn);

    return(
      <BrowserRouter>
      <div>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={ isLogged ? <Store /> : <Navigate to='/login'/>}/>
         
          </Routes>
      </div>
      </BrowserRouter>
    )
  }
  export default App;
