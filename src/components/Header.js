import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FaWifi } from "react-icons/fa";
import { RiRotateLockFill } from "react-icons/ri";
import { BsBatteryFull } from "react-icons/bs";

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px;

  span {
    font-weight: 600;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 15px;
    margin: 0 7px;
  }
`;

function Header() {
  const [timer, setTimer] = useState("");

  const newTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    setTimer(`${hours}:${minutes}`);
  };

  const startTimer = () => {
    setInterval(newTime, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <HeaderBox>
      <FlexBox>
        <p>No Service</p>
        <FaWifi fontSize={18} />
      </FlexBox>
      <span>{timer}</span>
      <FlexBox>
        <RiRotateLockFill />
        <p>100%</p>
        <BsBatteryFull fontSize={21} />
      </FlexBox>
    </HeaderBox>
  );
}

export default Header;
