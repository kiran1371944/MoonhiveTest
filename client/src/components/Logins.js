import React,{useContext,useState} from 'react';
import './login.css';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';

import {UserContext} from "../App"

function Logins() {

    const {state, dispatch} = useContext(UserContext);

    const history=useNavigate();

    const [names,setNames] = useState('');
    const [email,setEmail] = useState('');

    const login = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:4200/signin', {
            email,
            names
          });
               
          const data = response.data;

          localStorage.setItem('token',JSON.stringify(data.token))
          localStorage.setItem('names',JSON.stringify(data.names))

          console.log("login :",data);
            dispatch({type:"LOGIN",payload:true});
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
            console.log("Login successful");
            alert("Login succesful");
            history('/dashboard');

        } catch(error)  {
            alert("Invalid credentials");
            console.log(error);
        }
        setEmail("");
        setNames("");
       
      };
      
  return (
      <div className="login-wrapper">
          <form className="form">
              <img src="https://i.postimg.cc/zGMHN6Yn/avatar.png" alt="" />
              <h2>Login</h2>
              <div className="input-group">
                  <input type="text" name="loginnames"  required value={names} onChange={(e)=> setNames(e.target.value)}/>
                  <label>Full name</label>
              </div>
              <div className="input-group">
                  <input type="email" name="email" required  value={email} onChange={(e)=> setEmail(e.target.value)}/>
                  <label>Email</label>
              </div>
                  <input type="submit" value="Login" className="submit-btn" onClick={login}/>
                  <p>Not a User?<NavLink className="forgot-pw" to ="/Register"> Register</NavLink></p> 
          </form>
      </div>
  );
}

export default Logins