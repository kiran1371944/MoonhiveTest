import { createContext,useReducer } from "react";
import { Routes,Route } from 'react-router-dom';  
import Logins from './components/Logins';
import Register from './components/Register';
import Nabar from "./components/Nabar";
import Footer from "./components/Footer";
import Dashboard from "./components/Data/Dashboard";
import Courses from "./components/Data/Courses";
import Discussions from "./components/Data/Discussions";
import Logout from "./components/Data/Logout";

import { initialState,reducer } from "./reducer/UseReducer"

export const UserContext = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
  <>
  <UserContext.Provider value={{state,dispatch}}>
     <Nabar/>
    <Routes>
      <Route path='/' element={<Logins/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/discussions' element={<Discussions/>}/>
      <Route path='/Logout' element={<Logout/>}/>
    </Routes>
     <Footer/>
  </UserContext.Provider>
  </>
  );
}

export default App;
