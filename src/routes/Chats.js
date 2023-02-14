import React from "react";
import styled from "styled-components";

import {
  HiOutlineMagnifyingGlass,
  HiOutlineMusicalNote,
} from "react-icons/hi2";
import { BsChat } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";

import Header from "../components/Header";

const Chat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 25px;

  h1 {
    font-size: 28px;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 140px;

  font-size: 20px;
`;

function Chats() {
  return (
    <div>
      <Header />
      <Chat>
        <h1>Chats</h1>
        <IconBox>
          <HiOutlineMagnifyingGlass />
          <BsChat />
          <HiOutlineMusicalNote />
          <AiOutlineSetting />
        </IconBox>
      </Chat>
    </div>
  );
}

export default Chats;
