import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import Header from "../components/Header";

const WelcomeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 220px;

  h4 {
    font-size: 19px;

    margin-bottom: 20px;
  }

  P {
    font-size: 15px;
    font-weight: 600;

    text-align: center;

    color: #ccc;
  }
`;

const LoginInput = styled.div`
  display: grid;
  grid-gap: 10px;

  margin-bottom: 20px;

  input {
    font-size: 15px;

    padding: 15px 5px;

    border: none;
    border-bottom: 1px solid #ccc;
  }
`;

const LoginBox = styled.div`
  display: grid;
  grid-gap: 15px;

  p {
    font-size: 14px;

    text-align: center;
  }
`;

const Button = styled.button`
  font-size: 14px;

  width: 100%;

  padding: 15px;

  border: none;
  border-radius: 8px;
`;

function Home() {
  return (
    <>
      <Header />
      <WelcomeBox>
        <h4>Welcome to KakaoTalk</h4>
        <p>
          if you have a Kakao Acount,
          <br />
          log in with your email or phone number.
        </p>
      </WelcomeBox>
      <LoginInput>
        <input placeholder="Email or phone number" />
        <input placeholder="Password" />
      </LoginInput>
      <LoginBox>
        <Link to={"/chats"}>
          <Button>Log in</Button>
        </Link>
        <Button>Sign Up</Button>
        <p>Find Kakao Account or Password</p>
      </LoginBox>
    </>
  );
}

export default Home;
