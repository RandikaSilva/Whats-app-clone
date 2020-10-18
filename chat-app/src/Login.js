import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionType.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://www.freepngimg.com/download/chat/13-2-chat-high-quality-png.png"
          alt="Whats App"
        />
        <div className="login_text">
          <h1>Sign in to Chat More</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          SIGN IN WITH GOOGLE
        </Button>
      </div>
    </div>
  );
}

export default Login;
