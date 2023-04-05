import './Login.css';
import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { AuthContext } from '../context';


const Login = () => {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  let contextValue = useContext(AuthContext);
  console.log(contextValue)

  const handleSubmit = (ev) => {
    ev.preventDefault();
   
    // API CALL
    let data = {
      username: username,
      password: password
    }
    // console.log(data);

    // Login API call
    axios.post('https://fakestoreapi.com/auth/login', data).then(res => {
      // console.log(res.data.token);
      
      if (res.data.token) {
        // Set the token to localstorage that is get from backend
        localStorage.setItem('token', res.data.token);
        // Set is login to true by using context
      contextValue.setIsLogin(true);
        
      }
    }).catch(ex => {
      console.log(ex.response.data);
      alert(ex.response.data || "Something went wrong!!");
    })
  };

  useEffect (()=>{
  if (contextValue.isLogin){
    navigate('/select', {
      replace: true
    })
  }  
  },[contextValue.isLogin])

    return ( 
      <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form className="login-form" onSubmit={(ev) => handleSubmit(ev)}>
          <input type="text" placeholder="username" onChange={(ev) => setUserName(ev.target.value)}
              value={username} />
          <input type="password" placeholder="password" onChange={(ev) => setPassword(ev.target.value)}
              value={password} />
          <button>login</button>
          <p className="message">Not registered? <Link to =''>Create an account</Link></p>
        </form>
      </div>
    </div>
    );
  }

export default Login;