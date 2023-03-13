import React,{useContext,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../App';

const Logout = () => {
    const {state, dispatch} = useContext(UserContext);

    const navigate = useNavigate();

    const logout = async () => {
      
        try {
          const response = await axios.get('http://localhost:4200/logout');

          const data = response.data;
          console.log(data);     
          localStorage.clear()
          dispatch({ type: 'LOGOUT' });
          navigate('/');
          } catch(error)  {
            console.log(error);
        }
      };

      useEffect(() => {
        logout();
      }, []);

  return (
    <div>Logout</div>
  )
}

export default Logout