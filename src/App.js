
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import { createContext, useReducer } from 'react';
import {initialState,reducer} from './reducer/UseReducer'

// step 1:ContextAPI :
 
export const UserContext=createContext();

const Routing=()=>{
  return (
    <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/about' element={<About/>}></Route>
    <Route exact path='/contact' element={<Contact/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
    <Route exact path='/signup' element={<Signup/>}></Route>
    <Route exact path='/logout' element={<Logout/>}></Route>
  </Routes>
  )
}

function App() {
 const [state, dispatch] = useReducer(reducer,initialState)
 
  return (

    
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <Router>
      <Navbar/>
       <Routing/>
      
    </Router>
    </UserContext.Provider>
     
    </>
  );
}

export default App;
