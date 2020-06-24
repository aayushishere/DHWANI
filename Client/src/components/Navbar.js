import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Headset } from "@material-ui/icons";
import { UserContext } from "../userContext";
import { TokenContext } from "../tokenContext";

const toggleSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  const midSection = document.querySelector(".midSection");
  sidebar.classList.toggle("sidebar-active");
  midSection.classList.toggle("section-active");
};

const toggleProfile = () => {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.toggle("dropdown-active");
};






const Hamburger = ({ user }) => {
  if (user)
    return (
      <div
        className="hamburger"
        onClick={() => {
          toggleSidebar(user);
        }}
      >
        <div className="rect slideDown" />
        <div className="rect slideLeft" />
        <div className="rect slideUp" />
      </div>
    );

  return <></>;
};

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const [token, setToken] = useContext(TokenContext);

  const handleLogout = ()=> {
    setUser(null);
    setToken(null);
  }

  const User = ({ user }) => {
    console.log(user);
    console.log(token)
    if (user)
      return (
        <div className="profile" onClick={toggleProfile}>
          <img src={user.image} alt="user" />
          <h5>{user.fullname}</h5>
          <div className="dropdown">
            <Link to="/profile/:id">
              <li>Profile</li>
            </Link>
              <li onClick={handleLogout}>Logout</li>
          </div>
        </div>
      );
  
    return <></>;
  };

  return (
    <>
      <div className="navbar navbar-active">
        <Hamburger user={user} />
        <div className="left item">
          <Link to="/">
            <div className="brand">
              <div className="logo">
                <Headset style={{ height: "40px", width: "40px" }} />
              </div>
              <h5>hwani</h5>
            </div>
          </Link>
        </div>

        <div className="center item">
          {/* <input type="text" placeholder="Search..." /> */}
        </div>

        <div className="right item">
          <User user={user} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
