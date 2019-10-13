import React from 'react';
import styled from 'styled-components';

const StyledArrow = styled.button`
  height: 50px;
  width: 50px;
  font-size: 25px;
  background-color: #65848f;
  border: 1px solid white;
  border-radius: 10px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
`;

const StyledArrowContent = styled.p`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0;
  padding: 0;
  text-align: center;
  animation: arrow 3s linear infinite both;

  @keyframes arrow {
    0% {
      transform: translateY(-100px);
    }

    40% {
      transform: translateY(0);
    }

    60% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(100px);
    }
  }
`;

const Arrow = () => {
  const handleClick = () => {
    window.scrollTo(0, window.innerHeight);
  };

  return (
    <StyledArrow onClick={handleClick}>
      <StyledArrowContent>&#11167;</StyledArrowContent>
    </StyledArrow>
  );
};

export default Arrow;
