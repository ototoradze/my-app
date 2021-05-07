import React, { useState } from "react";
import "./styles.scss";
import "../../assets/stusan/styles/variables.scss";
import { ReactComponent as StusanLogo } from "../../assets/stusan/images/stusan-logo.svg";
import { ReactComponent as LoginTrembitLogo } from "../../assets/stusan/images/trembit-logo.svg";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import VideocamOffOutlinedIcon from "@material-ui/icons/VideocamOffOutlined";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import MicOffOutlinedIcon from "@material-ui/icons/MicOffOutlined";
import Janus from "../../assets/stusan/scripts/janus";

function Login() {
  const handleSubmit = () => {
    return null;
  };
  const [mic, setMic] = useState(false);
  const [cam, setCam] = useState(false);

  return (
    <div>
      {/* #videoPreview  */}
      <video className="video-preview"></video>
      <div className="login">
        <div className="login__main" role="main">
          <div className="login__logo">
            <StusanLogo />
          </div>

          <p className="login__intro">
            Web-based, Secure, and Free video conferencing for small groups.
            Delivered with the source code
          </p>
          <p>
            Send the video room link to your team and start chatting. It is a
            peer-to-peer WebRTC based video conferencing, end-to-end encrypted,
            no interim servers. No account required
          </p>
          <div className="login__meeting-start">Start a new meeting</div>

          <form onSubmit={() => handleSubmit()} className="login__form">
            <div className="input-text">
              <input
                type="text"
                className="input-text__field"
                placeholder=" "
              />
              <div className="input-text__placeholder">Room name</div>
            </div>

            <div className="input-text">
              <input
                type="text"
                className="input-text__field"
                placeholder=" "
              />
              <div className="input-text__placeholder">Your name</div>
            </div>

            <button type="submit" className="button button--create-room">
              Create Room{" "}
            </button>
          </form>

          {/* ---------------------------------------------------------------------------------------------- */}

          <div className="login__options">
            <div className="login__option">
              <div className="info" onClick={() => setMic(!mic)}>
                {mic ? (
                  <div className="icon">
                    <MicNoneOutlinedIcon />
                  </div>
                ) : (
                  <div className="iconMuted">
                    <MicOffOutlinedIcon />{" "}
                  </div>
                )}
                {mic ? <div>Mute</div> : <div>Unmute</div>}
              </div>
            </div>

            <div className="login__option">
              <div className="info" onClick={() => setCam(!cam)}>
                {cam ? (
                  <div className="icon">
                    <VideocamOutlinedIcon />
                  </div>
                ) : (
                  <div className="iconMuted">
                    <VideocamOffOutlinedIcon />
                  </div>
                )}
                {cam ? <div>Stop Cam</div> : <div>Start Cam</div>}
              </div>
            </div>

            <div className="login__option">
              <div className="info">
                <div className="icon">
                  <SettingsOutlinedIcon />
                </div>
                <div>Settings</div>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------------------------------- */}

          <p>
            TheVatra is a White Label WebRTC based platform and can be easily
            integrated into your business.
          </p>
          <p>More details here</p>
        </div>
        <footer className="login__footer">
          <a href="https://trembit.com/" target="_blank">
            <LoginTrembitLogo />
          </a>{" "}
          Support and development
        </footer>
      </div>
    </div>
  );
}

export default Login;
