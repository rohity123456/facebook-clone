import React from "react";
import "./css/Login.css";
import { Button } from "@material-ui/core";

import { useStateValue } from "../common/StateProvider";
import { auth, provider } from "../common/firebase";
import { actionTypes } from "../common/reducer";
function Login({ history }) {
  const [{ User }, dispatch] = useStateValue();
  const authenticateUser = () => {
    auth
      .signInWithPopup(provider)
      .then((User) => {
        dispatch({ User: User.user, type: actionTypes.SET_USER });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="Login">
      <div className="login__info">
        <img
          src="https://i.pinimg.com/originals/41/b0/ed/41b0edd10bd1fcca1833c2e651fcfdaa.png"
          alt=""
        />
        <h2>Sign In to Facebook</h2>
        <Button color="secondary" onClick={authenticateUser}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
