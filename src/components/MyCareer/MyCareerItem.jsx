// MyCareerItem.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 40%;
  flex-direction: column;
  margin: 50px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  position: relative;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-height: 70vh; /*최대크기 설정*/
  overflow: hidden; /*오버 플로우는 숨김*/
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover; /**/
`;

const ProjectInfo = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  color: white;
`;

const CardContainerHovered = styled(CardContainer)`
  &:hover {
    transform: scale(1.05); /* 마우스를 올렸을 때 크기 확대 */
    ${ProjectInfo} {
      display: block;
    }
  }
`;

const ProjectName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 2px;
`;

const Year = styled.div`
  font-size: 14px;
  color: gray;
  
`;

const Description = styled.div`
  font-size: 13px;
  margin-bottom: 2px;
`;

function MyCareerItem({ project, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <CardContainerHovered
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ImageContainer>
        <Image src={project.image} alt={project.name} />
      </ImageContainer>
      <ProjectInfo>
        <ProjectName>{project.name}</ProjectName>
        <Description>{project.description}</Description>
        <Year>{project.year}</Year>
      </ProjectInfo>
    </CardContainerHovered>
  );
}

export default MyCareerItem;
