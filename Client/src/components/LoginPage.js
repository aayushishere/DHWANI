import React,{useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import {UserContext } from '../userContext'
import {TokenContext } from '../tokenContext'

const initialFormData = Object.freeze({
  fullname: "",
  password: "",
});

const LoginPage = () => {
  const [formData, setFormData] = React.useState(initialFormData);
  const [user,setUser] = useContext(UserContext);
  const [token,setToken] = useContext(TokenContext);
  const history = useHistory();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.error) {
          console.log(data.error)
          return;
        }
        
        await setUser(data.user); 
        await setToken(data.token); 
        console.log(token);
        await history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="loginbox">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input
        className="forminput"
        type="text"
        placeholder="Username"
        name="fullname"
        value={formData.username}
        onChange={handleInputChange}
      />

      <label for="password">Password</label>
      <input
        className="forminput"
        type="password"
        name="password"
        placeholder="Password..."
        value={formData.password}
        onChange={handleInputChange}
      />
      <div className="buttons">
        <button className="bt" onClick={handleSubmit}>
          Login
        </button>
        <Link to="/signup">
          <button className="bt">New User</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
