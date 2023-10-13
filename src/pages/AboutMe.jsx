import React from 'react';
import styled from 'styled-components';
import AboutMeContainer from 'components/AboutMe/AboutMeContainer';
import myImage from '../img/0.jpg';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가

const PageContainer = styled.div`
  display: flex;
  height: 100%;
`;


const ContentContainer = styled.div`
  flex: 3; 
`;


const aboutme = {
  name: '방현수, Hyunsoo Bang',
  university: 'Ewha Womans University',
  description: 'JUST TO DO IT',
  goal: 'Wanna Be a Fronted Engineer',
  image: myImage, // 이미지 경로
};

const WriteButton = styled.button`

  background-color: transparent;
  font-family: 'Noto Sans KR', cursive;
  color: #2ec999;
  border: none;
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 20px;
  position: absolute;
  top: 70px;
  right: 10px;
  transition: font-size 0.3s ease; /* 커서를 올렸을 때 글자 크기 변화 */
  outline: none;
  &:hover {
    font-size: 18px;
    color: #2ea999;
  }
`;

function AboutMe() {
  const navigate = useNavigate(); // useNavigate 추가
  const openWindow = () => {
    navigate('/about-me/writing-diary');
  }
  return (
    <PageContainer>
      <AboutMeContainer aboutme={aboutme} />

      <ContentContainer>
      <WriteButton onClick={openWindow}>일기쓰기</WriteButton>  
      </ContentContainer>
    </PageContainer>
  );
}

export default AboutMe;
