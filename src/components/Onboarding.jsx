import React from 'react';
import styled, { keyframes } from 'styled-components';

const OnboardingWrapper = styled.div`
  font-family: 'Noto Sans KR', cursive; 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #f06, #9f6);
  background-size: 200% 200%;
  animation: ${props => props.visible ? cloudAnimation : 'none'} 10s linear infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  opacity: ${props => props.visible ? '1' : '0'};
  transition: left 2s ease-in-out;
`;

const cloudAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
`;

const OnboardingText = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const OnboardingDescription = styled.p`
  font-size: 16px;
`;

const ExploreButton = styled.button`
  font-family: 'Noto Sans KR', cursive; 
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 50px;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  }
`;

function Onboarding({ visible, handleExplore }) {
  return (
    <OnboardingWrapper visible={visible}>
      <OnboardingText>Welcome to Soobang House ♥</OnboardingText>
      <OnboardingDescription>Soobang님의 홈에 방명록을 남겨보세요!</OnboardingDescription>
      <ExploreButton onClick={handleExplore}>구경하기</ExploreButton>
    </OnboardingWrapper>
  );
}

export default Onboarding;
