import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  padding: 20px 50px 20px 20px;
`;

const ProfileImage = styled.img`
  max-width: 200px;
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

function AboutMeContainer({ aboutme }) {
  return (
    <Container>
      <ProfileImage src={aboutme.image} alt="My Photo" />
      <AboutMeTitle>About Me</AboutMeTitle>
      <AboutMeContent>
        <p>{aboutme.name}</p>
        <p>{aboutme.university}</p>
        <p>{aboutme.description}</p>
        <p>{aboutme.goal}</p>
      </AboutMeContent>
    </Container>
  );
}

export default AboutMeContainer;
