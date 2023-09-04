import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const FirstContainer = styled.div`
  background-color: #FF8181;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  flex-direction: column; /* 세로 중앙 정렬을 위해 추가 */
`;

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const blingbling = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;


const Greeting = styled.h1`
  font-size: 36px;
  font-family: 'Arimo', cursive;
  margin-top: 20px;
  
`;

const RainbowText = styled.span`
  &:nth-child(1) {
    color: skyblue; /* 첫 번째 글자 색상 */
    
  }

  &:nth-child(2) {
    color: yellow; /* 두 번째 글자 색상 */
  }

  &:nth-child(3) {
    color: orange; /* 세 번째 글자 색상 */
  }

  &:nth-child(4) {
    color: lightpink; /* 네 번째 글자 색상 */
  }

  &:nth-child(5) {
    color: lightgreen; /* 다섯 번째 글자 색상 */
  }

  &:nth-child(6) {
    color: tomato; /* 여섯 번째 글자 색상 */
    animation: ${blink} 2s infinite; 
  }

`;

const Clock = styled.div`
  font-size: 22px;
`;

const GreetingText = styled.p`
  font-size: 15px;
  
`;

const cat = 'ฅ^•ﻌ•^ฅ';
const CatText = styled.div`
   // animation: ${blingbling} 1.5s infinite;
    
`;

const Main = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greetingText, setGreetingText] = useState('₊˚⊹♡');

   useEffect(() => {
    const intervalId = setInterval(() => {
      const currentHour = currentTime.getHours();

      if (currentHour >= 6 && currentHour < 12) {
        setGreetingText('좋은 아침입니다! ^_^ ―୨୧⋆ ˚');
      } else if (currentHour >= 12 && currentHour < 17) {
        setGreetingText('즐거운 점심 보내세요 ㅎ.ㅎ ⋆˚✿˖°');
      } else if (currentHour >= 17 && currentHour < 22) {
        setGreetingText('하루 마무리 잘하세요 ૮ ˶ᵔ ᵕ ᵔ˶ ა');
      } else {
        setGreetingText('좋은 밤! -ㅂ- ⋆｡ﾟ☁︎｡⋆｡ ﾟ☾ ﾟ｡⋆');
      }

      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <FirstContainer>
        <Clock>{currentTime.toLocaleTimeString()}</Clock>
        <Greeting>
            print("Hello, <RainbowText>G</RainbowText><RainbowText>u</RainbowText><RainbowText>e</RainbowText><RainbowText>s</RainbowText><RainbowText>t</RainbowText><RainbowText>^_^</RainbowText>");
        </Greeting>
        <GreetingText> {cat} o O  ( {greetingText} )  
         </GreetingText>
        </FirstContainer>
    </>
  );
};

export default Main;
