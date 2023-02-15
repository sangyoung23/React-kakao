import React from "react";
import styled from "styled-components";

import { RiKakaoTalkFill } from "react-icons/ri";

const ChatsBox = styled.div`
  display: flex;
  flex-direction: column;

  padding: 5px 15px;

  height: 70vh;
`;

const ChatListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
`;

const KakaoLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  border-radius: 45%;

  background-color: #f1dc06;

  .logo {
    font-size: 28px;
  }
`;

const ChatContents = styled.div`
  span {
    font-size: 17px;
    font-weight: 600;
  }
  p {
    font-size: 15px;

    color: #cccccc;
  }
`;

const ChatTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    font-size: 14px;

    color: #cccccc;
  }
`;

const ChatCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  border-radius: 50%;

  background-color: #fd5400;
  span {
    font-size: 13px;
    font-weight: 700;
    color: white;
  }
`;

function ChatList() {
  return (
    <ChatsBox>
      <ChatListBox>
        <KakaoLogo>
          <RiKakaoTalkFill className="logo" />
        </KakaoLogo>
        <ChatContents>
          <span>KakaoTalk</span>
          <p>Please check My Kakao Account Info</p>
        </ChatContents>
        <ChatTime>
          <span>21:22</span>
          <ChatCount>
            <span>1</span>
          </ChatCount>
        </ChatTime>
      </ChatListBox>
    </ChatsBox>
  );
}

export default ChatList;
