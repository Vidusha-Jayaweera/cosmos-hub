import React from "react";
import { Link } from "react-router-dom";
import "./styles/VideoStyles.css";

import spaceVideo from "../assets/space.mp4";
import { useAuth0 } from "@auth0/auth0-react";

const Video = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Explore the Cosmos</h1>
        <p>Discover the wonders of the universe with Cosmos Hub</p>
        <div>
          {/* <Link to="/login" className="btn">
            Login
          </Link> */}
          {!isAuthenticated && (
            <button onClick={() => loginWithRedirect()} className="btn">
              Login
            </button>
          )}

          {!isAuthenticated && (
            <button onClick={() => loginWithRedirect()} className="btn btn-light">
              Signup
            </button>
          )}

         {/*  <Link to="/signup" className="btn btn-light">
            Signup
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Video;
