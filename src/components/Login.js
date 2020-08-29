import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { useHistory } from "react-router-dom";
function Login({ history }) {
  const [{ User }, dispatch] = useStateValue();
  const authenticateUser = () => {
    auth
      .signInWithPopup(provider)
      .then((User) => {
        sessionStorage.setItem("ME", JSON.stringify(User.user));
        dispatch({ User: User.user, type: actionTypes.SET_USER });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="Login">
      <div className="login__info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/597px-WhatsApp.svg.png"
          alt=""
        />
        <h2>Sign In to Whatsapp</h2>
        <Button color="secondary" onClick={authenticateUser}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
