import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Upload from "./Upload";
import "../stylesheet/upload.css";

const initialFormData = Object.freeze({
  fullname: "",
  password: "",
  info: "",
  email: "",
  image: "",
  type: ""
});

const SignupPage = () => {
  const [file, setFile] = useState("");
  const [formData, setFormData] = React.useState(initialFormData);

  const history = useHistory();

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error)
          return ;
        }
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: URL.createObjectURL(e.target.files[0])
    });

    // setFile(URL.createObjectURL(event.target.files[0]));
    // console.log(e.target.name);
  };

  return (
    <div className="signupbox">
      <h1 className="formtop">Create Account</h1>
      <div>
        <h2 className="formfield">New Username</h2>
        <input
          className="forminput"
          type="text"
          placeholder="Username"
          name="fullname"
          value={formData.fullname}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <h2 className="formfield">Add a Bio</h2>
        <input
          className="forminput"
          type="text"
          placeholder="Something about You!"
          name="info"
          value={formData.info}
          onChange={handleInputChange}
        />
      </div>
      <h2 className="formfield">Profile Picture</h2>
      <div className="profImage">
        <Upload file={formData.image} onchange={handleChange} />
      </div>
      <div>
        <h2 className="formfield">Enter Email</h2>
        <input
          className="forminput"
          type="email"
          placeholder="abc@dhwani.co.in"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <h2 className="formfield">Select Account Type</h2>
        <select
          className="seltype"
          value={formData.type}
          name="type"
          onClick={handleInputChange}
        >
          <option value="user">Enthusiast</option>
          <option value="artist">Artist</option>
        </select>
      </div>
      <div>
        <h2 className="formfield">New Password</h2>
        <input
          className="forminput"
          type="password"
          name="password"
          placeholder="Password..."
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div className="buttons">
        <button className="bt" onClick={handleSubmit}>
          Create Account
        </button>
        <Link to="/login">
          <button className="bt">Already have an Account?</button>
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
