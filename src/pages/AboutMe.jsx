import React from 'react';
import styled from 'styled-components';
import myImage from '../img/0.jpg';

const PageContainer = styled.div`
  display: flex;
  height: 100%;
`;

const AboutMeContainer = styled.div`
  flex: 1; 
  //text-align: left;
  padding: 20px 50px 20px 20px;
`;

const ContentContainer = styled.div`
  flex: 3; 
`;

const ProfileImage = styled.img`
  max-width: 200px;
  left: -;
  border-radius: 0%;
  margin: 20px 0px 20px 20px;
  display: block;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
`;
const AboutMeTitle = styled.h2`
  font-family: 'Noto Sans KR', cursive;
  font-size: 20px;
  margin: 0px 0px 0px 20px;

`;
const AboutMeContent = styled.div`
  font-family: 'Noto Sans KR', cursive;
  font-size: 14px;
  font-style: italic;
  line-height: 1.2;
  max-width: 600px;
  margin: 0px 0px 0px 20px;
`;

function AboutMe() {
  return (
    <PageContainer>
      <AboutMeContainer>
        <ProfileImage src={myImage} alt="My Photo" />
        <AboutMeTitle>About Me</AboutMeTitle>
        <AboutMeContent>
          <p>방현수, Hyunsoo Bang</p>
          <p>Ewha Womans University</p>
          <p>JUST TO DO IT</p>
          <p>Wanna Be a Fronted Engineer</p>
        </AboutMeContent>
      </AboutMeContainer>
      <ContentContainer>{/* 오른쪽에 들어갈 내용 */}</ContentContainer>
    </PageContainer>
  );
}

export default AboutMe;
