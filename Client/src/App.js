import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./stylesheet/styles.css";
import "./stylesheet/sidebar.css";
import "./stylesheet/playlist.css";
import "./stylesheet/playlistpage.css";
import "./stylesheet/songpage.css";
import "./stylesheet/navbar.css";
import "./stylesheet/profilepage.css";
import "./stylesheet/search.css";
import "./stylesheet/loginpage.css";
import "./stylesheet/signuppage.css";
import "./stylesheet/moderatorpage.css";
import AddSong from "./components/AddSong";
import ModeratorPage from "./components/ModeratorPage";
import Home from "./components/home";
import "./stylesheet/addsong.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import PlaylistPage from "./components/PlaylistPage";
import SongPage from "./components/SongPage";
import ProfilePage from "./components/ProfilePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import { UserProvider, UserContext } from "./userContext";
import { SongProvider } from "./songContext";
import { TokenProvider } from "./tokenContext";

const renderPlaylistPage = ({ match }) => {
  const id = match.params.id;
  return <PlaylistPage id={id} />;
};
const renderSongPage = ({ match }) => {
  const id = match.params.id;
  return <SongPage id={id} />;
};

const RenderUser = () => {
  const [user, setUser] = useContext(UserContext);
  if (user)
    return (
      <>
        <Route path="/" component={Sidebar} />
        <div className="midSection">
          <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/playlist/:id" component={renderPlaylistPage} />
            <Route path="/profile/:id" component={ProfilePage} />
            <Route path="/song/:id" component={renderSongPage} />
          </Switch>
        </div>
      </>
    );

  return <Redirect to="/login" />;
};

const RenderAuth = () => {
  const [user, setUser] = useContext(UserContext);
  if (!user)
    return (
      <>
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Redirect to="/login" />
      </>
    );

  return <Redirect to="/" />;
};


const App = () => {
  return (
    <UserProvider>
      <TokenProvider>
      <SongProvider>
        <BrowserRouter>
          <Route path="/" component={Navbar} />
          <div className="section">
            <RenderAuth />
            <RenderUser />
          </div>
        </BrowserRouter>
      </SongProvider>
      </TokenProvider>
    </UserProvider>
  );
};

export default App;
