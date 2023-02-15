import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import {
  HiOutlineMagnifyingGlass,
  HiOutlineMusicalNote,
} from "react-icons/hi2";
import {
  BsChat,
  BsPeopleFill,
  BsFillChatFill,
  BsThreeDots,
} from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";

import Header from "../components/Header";
import ChatList from "../components/ChatList";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Chat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 25px;

  .link-style {
    font-size: 14px;

    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
      color: black;
    }
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 140px;

  font-size: 20px;
`;

const ChatFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  flex: 1;

  border-top: 1px solid #ccc;

  background-color: #f9f9fa;
`;

const ChatPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  left: 140px;
  bottom: -40px;

  width: 15px;
  height: 15px;

  border-radius: 50%;

  background-color: #fd5400;
  span {
    font-size: 11px;
    font-weight: 700;
    color: white;
  }
`;

const DotPosition = styled.div`
  width: 7px;
  height: 7px;

  position: relative;
  left: 335px;
  bottom: -30px;

  border-radius: 50%;

  background-color: #fd5400;
`;

function Chats() {
  return (
    <Box>
      <Header />
      <Chat>
        <Link className="link-style" to={"/"}>
          <h1>Chats</h1>
        </Link>
        <IconBox>
          <HiOutlineMagnifyingGlass />
          <BsChat />
          <HiOutlineMusicalNote />
          <AiOutlineSetting />
        </IconBox>
      </Chat>
      <ChatList />
      <ChatPosition>
        <span>1</span>
      </ChatPosition>
      <DotPosition></DotPosition>
      <ChatFooter>
        <BsPeopleFill />
        <BsFillChatFill />
        <HiOutlineMagnifyingGlass />
        <BsThreeDots />
      </ChatFooter>
    </Box>
  );
}

export default Chats;
