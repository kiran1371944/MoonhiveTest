import React,{useState} from 'react';
import './login.css';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const history=useNavigate();
    const [user,setUser] = useState({names: "",email: "",cemail: ""});
    
    let name,value;
    const handleInputs = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value; 
        
        setUser({ ...user, [name]:value});
    
      };
      const postData = async (e) => {
        e.preventDefault();
      
        const { names,email,cemail} = user;
      
        try {
          const response = await axios.post('http://localhost:4200/signUp', {
            names,
            email,
            cemail
          });
      
          const data = response.data
          console.log(data);
          if(response.status === 409 || !data){
              alert("Invalid...");
              console.log("Invalid...require all the field");
          }
          else if(response.status === 422){
            alert("Passwords are not matching")
          }
          else{
            console.log("valid...");
            alert("valid...")
            history('/');
          }
        } catch (error) {
          console.error(error); // handle error here
        }
      };

  return (
    <div className="login-wrapper">
          <form action="" className="form">
              <img src="https://i.postimg.cc/zGMHN6Yn/avatar.png" alt="" />
              <h2>Register</h2>
              <div className="input-group">
                  <input type="text" name="names"  required onChange={handleInputs} value={user.names}/>
                  <label>Full name</label>
              </div>
              <div className="input-group">
                  <input type="email" name="email" required onChange={handleInputs} value={user.email}/>
                  <label>Email</label>
              </div>
              <div className="input-group">
                  <input type="email" name="cemail"  required onChange={handleInputs} value={user.cemail}/>
                  <label>Confirm email</label>
              </div>
              <input type="submit" value="Register" className="submit-btn" onClick={postData}/>
              <p>Already a User?<NavLink className="forgot-pw" to ="/">Login</NavLink></p> 
          </form>
      </div>
  )
}

export default Register