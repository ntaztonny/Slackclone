import { Button } from "@material-ui/core";
//import { auth, provider } from "./app/firebase";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg"
          alt=""
        />
        <h1>Sign into Tonny's Slack-clone</h1>
        <p>You can use your gmail account</p>

        <Button type="submit" onClick={signIn}>
          <h2>Sign in with Google</h2>
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 30px;
    margin-bottom: 40px;
  }
  > button {
    margin-top: 50px;
    padding: 10px 100px;
    text-transform: inherit !important;
    color: #0000f5;
    border: 1px solid;
    font-weight: 300;
  }
`;
