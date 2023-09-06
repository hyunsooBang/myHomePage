import React, { useState } from 'react';
import styled from 'styled-components';
import MyCareerItem from 'components/MyCareer/MyCareerItem';

import coopgoimg from '../img/coopgo.jpg';
import moeumimg from '../img/moeum.png';
import ewhachainimg from '../img/ewhachain.png';
import soobang from '../img/soobang.jpg';
import image0 from '../img/0.jpg';


const TitleText = styled.h2`

  color: #2ed899;
  font-size: 36px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 30px;
`; 

const PageContainer = styled.div`
  text-align: center;
  font-family: 'Noto Sans KR', cursive;

`;
  

const Subtitle = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #4293f5;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Noto Sans KR', cursive; 
  transition: font-size 0.2s ease; /* 커서를 올렸을 때 글자 크기 변화 */
  outline: none; /* 클릭 포커스 효과 제거 */
  z-index: 2;

  &:hover {
    background-color: #3271e8;
  }
  `;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  max-width: 80%;
  max-height: 70vh;
  overflow-y: auto; /*수직으로 오버플로우때 스크롤*/
  position: relative;
`;

  const ModalImageContainer = styled.div`
    width: 100%;
    //max-height: 90vh; /* 이미지 최대크기 설정 */
    overflow: hidden; /* Hide overflowing image content */
  `;

  const ModalImage = styled.img`
    width: 100%;
    height: 10%;
  `;

  const ModalProjectInfo = styled.div`
    margin-top: 20px;
  `;

  const ModalProjectName = styled.h3`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
  `;

  const ModalProjectDetails = styled.div`
    margin-bottom: 10px;
  `;
  const ModalDescription = styled.p`
    font-size: 18px;
  `;

  const ModalLinkButton = styled.a`
    display: flex;
    justify-content: center;
    font-weight: bold;
  
    background-color: #4293f5;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    text-align: center;
    border-radius: 5px;
    margin-top: 20px;

    &:hover {
      background-color: #3271e8;
    }
  `;

  const MyCareerItemContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column; /* 가로로 정렬 */
  `;

const projects = [
  {
    id: 1,
    name: "Soobang's Home",
    year: '2023 - ',
    description: '나만의 홈페이지 만들기',
    details: 'ReactJS와 Firebase를 이용해 자신을 소개하는 페이지를 제작하고'
      + '페이지 방문객들이 자유롭게 방문록 벽돌을 쌓을 수 있는 Guest Book 기능을 구현했다',
      contribution: '100%',
      image: soobang,
      link: "https://github.com/hyunsooBang/myHomePage",
  },
  {
    id: 2,
    name: 'EWHA -CHAIN',
    year: '2023 - ',
    description: '이화여자대학교 블록체인 학회',
    details: '이화여자대학교의 블록체인 학회 "이화체인"에 11기 신입부원으로 들어와' +
    '현재는 12기 교육부 임원진을 맡아 활동하고 있다.',
    contribution: '20%',
    image: ewhachainimg,
    link: "https://ewhachain.netlify.app/"
  },
  {
    id: 3,
    name: 'Coop-Go',
    year: '2022 - 2023',
    description: 'AI 객체인식을 통한 매점 자동 앱 결제 서비스',
    details: 'Flutter와 Firebase를 이용해 UI디자인부터 App 전체 개발을 맡았당',
    contribution: '100%',
    image: coopgoimg,
    link: "https://github.com/KSB-graduation-proj/APP"
  },
  {
    id: 4,
    name: 'Liffic',
    year: '2021',
    description: '할 일 비율에 따라 신호등 색이 바뀌는 TO-DO 앱 서비스',
    details: 'React Native와 Firebase를 이용해 만듬',
    contribution: '20%',
    image: image0,
    link: "https://github.com/osw-ToDo/Fix_firebase"
  },
  {
    id: 5,
    name: 'Moeum',
    year: '2021',
    description: '서울시 5개구 모범음식점 리뷰작성 웹 서비스',
    details: 'html, css, js 및 mysql, php, apache 이용해 만듬',
    contribution: '35%',
    image: moeumimg,
    link: "https://github.com/hyunsooBang/nice_restaurant"
  },
];

function MyCareer() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleMouseEnter = (project) => {
    setSelectedProject(project);
  };

  const handleMouseLeave = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <PageContainer> 
        <TitleText>My Career</TitleText>
        <Subtitle>Soobang의 활동 이력을 소개합니다.</Subtitle>
      </PageContainer>
      <MyCareerItemContainer>
        {projects.map((project) => (
          <MyCareerItem
            key={project.id}
            project={project}
            onClick={() => openModal(project)}
            onMouseEnter={() => handleMouseEnter(project)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </MyCareerItemContainer>
      {showModal && (
        <ModalOverlay>
          <ModalContent>
          <ModalCloseButton onClick={closeModal}>닫기</ModalCloseButton>
          <ModalImageContainer>
              <ModalImage src={selectedProject.image} alt={selectedProject.name} />
            </ModalImageContainer>
             <ModalProjectInfo>
              <ModalProjectName>{selectedProject.name}</ModalProjectName>
              <ModalProjectDetails>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{fontSize:"18px", color:"#343a40", fontWeight: "600"}}>{selectedProject.description}</div>
                <div style={{ fontSize: "14px", color: "gray" }}>{selectedProject.year}</div>
                </div>  
                <div style={{color: "#495057", paddingTop: "10px", paddingBottom: "10px"}}>{selectedProject.details}</div>
                <div>기여도: <b style={{color: "#2eb899"}}>{selectedProject.contribution}</b></div>
              </ModalProjectDetails>
              <ModalLinkButton href={selectedProject.link} target="_blank">
                보러 가기
              </ModalLinkButton>
            </ModalProjectInfo>
            
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
}

export default MyCareer;
